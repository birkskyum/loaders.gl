// loaders.gl
// SPDX-License-Identifier: MIT
// Copyright (c) vis.gl contributors

import type {Loader, LoaderWithParser} from '@loaders.gl/loader-utils';
import type {GeoJSON, GeoJSONTable, TableBatch} from '@loaders.gl/schema';
import type {JSONLoaderOptions} from './json-loader';
import {geojsonToBinary} from '@loaders.gl/gis';
// import {parseJSONSync} from './lib/parsers/parse-json';
import {parseJSONInBatches} from './lib/parsers/parse-json-in-batches';

// __VERSION__ is injected by babel-plugin-version-inline
// @ts-ignore TS2304: Cannot find name '__VERSION__'.
const VERSION = typeof __VERSION__ !== 'undefined' ? __VERSION__ : 'latest';

export type GeoJSONLoaderOptions = JSONLoaderOptions & {
  geojson?: {
    shape?: 'object-row-table';
  };
  gis?: {
    format?: 'geojson' | 'binary';
  };
};

/**
 * GeoJSON loader
 */
export const GeoJSONWorkerLoader: Loader<GeoJSON, TableBatch, GeoJSONLoaderOptions> = {
  name: 'GeoJSON',
  id: 'geojson',
  module: 'geojson',
  version: VERSION,
  worker: true,
  extensions: ['geojson'],
  mimeTypes: ['application/geo+json'],
  category: 'geometry',
  text: true,
  options: {
    geojson: {
      shape: 'object-row-table'
    },
    json: {
      shape: 'object-row-table',
      jsonpaths: ['$', '$.features']
    },
    gis: {
      format: 'geojson'
    }
  }
};

export const GeoJSONLoader: LoaderWithParser<GeoJSON, TableBatch, GeoJSONLoaderOptions> = {
  ...GeoJSONWorkerLoader,
  // @ts-expect-error
  parse,
  // @ts-expect-error
  parseTextSync,
  parseInBatches
};

async function parse(arrayBuffer: ArrayBuffer, options?: GeoJSONLoaderOptions) {
  return parseTextSync(new TextDecoder().decode(arrayBuffer), options);
}

function parseTextSync(text: string, options?: GeoJSONLoaderOptions) {
  // Apps can call the parse method directly, we so apply default options here
  options = {...GeoJSONLoader.options, ...options};
  options.geojson = {...GeoJSONLoader.options.geojson, ...options.geojson};
  options.gis = options.gis || {};

  let geojson;
  try {
    geojson = JSON.parse(text);
  } catch {
    geojson = {};
  }

  const table: GeoJSONTable = {
    shape: 'geojson-table',
    // TODO - deduce schema from geojson
    // TODO check that parsed data is of type FeatureCollection
    type: 'FeatureCollection',
    features: geojson?.features || []
  };

  switch (options.gis.format) {
    case 'binary':
      return geojsonToBinary(table.features);
    default:
      return table;
  }
}

function parseInBatches(asyncIterator, options): AsyncIterable<TableBatch> {
  // Apps can call the parse method directly, we so apply default options here
  options = {...GeoJSONLoader.options, ...options};
  options.json = {...GeoJSONLoader.options.geojson, ...options.geojson};

  const geojsonIterator = parseJSONInBatches(asyncIterator, options);

  switch (options.gis.format) {
    case 'binary':
      return makeBinaryGeometryIterator(geojsonIterator);
    default:
      return geojsonIterator as AsyncIterable<TableBatch>;
  }
}

async function* makeBinaryGeometryIterator(geojsonIterator) {
  for await (const batch of geojsonIterator) {
    batch.data = geojsonToBinary(batch.data);
    yield batch;
  }
}
