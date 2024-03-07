export const IMAGES_DATA = [
  {
    formatName: 'Standard Image Formats',
    description:
      'Non-texture image formats. Compact on disk, but need to be fully decompressed into GPU texture memory, and mipmaps need to be generated by client.',
    codeSample: 'load(url, ImageLoader)',
    images: [
      {format: 'JPG', src: 'shannon.jpg'},
      {format: 'GIF', src: 'shannon.gif'},
      {format: 'PNG', src: 'shannon.png'},
      {format: 'BMP', src: 'shannon.bmp'},
      {format: 'WEBP', src: 'shannon.webp'},
      {format: 'AVIF', src: 'shannon.avif'}
    ]
  },
  {
    formatName: 'Basis Universal',
    description: 'Supercompressed GPU Texture Codec',
    link: 'https://github.com/BinomialLLC/basis_universal',
    codeSample: 'load(url, BasisLoader)',
    images: [
      {format: 'BASIS', src: 'alpha3.basis'},
      {format: 'BASIS', src: 'kodim01.basis'},
      {format: 'BASIS', src: 'kodim18.basis'},
      {format: 'BASIS', src: 'kodim20_1024x1024.basis'},
      {format: 'BASIS', src: 'kodim20.basis'}
    ]
  },
  {
    formatName: 'KTX',
    codeSample: 'load(url, CompressedTextureLoader)',
    images: [
      {format: 'DXT1', src: 'shannon-dxt1.ktx2'},
      {format: 'DXT3', src: 'shannon-dxt3.ktx2'},
      {format: 'DXT5', src: 'shannon-dxt5.ktx2'}
    ]
  },
  {
    formatName: 'KTX2',
    codeSample: 'load(url, CompressedTextureLoader)',
    images: [
      {format: 'KTX2', src: 'kodim23.ktx2', useBasis: true}
    ]
  },
  {
    formatName: 'DDS: S3 Texture Compression (WEBGL_compressed_texture_s3tc)',
    description: 'S3 (aka DXTn, DXTC, or BCn).',
    availability: 'Common on desktop GPUs. DXT5 is usually the preferred version',
    link: 'https://en.wikipedia.org/wiki/S3_Texture_Compression',
    codeSample: 'load(url, CompressedTextureLoader)',
    images: [
      {format: 'DXT5', src: 'shannon-dxt5.dds'},
      {format: 'DXT3', src: 'shannon-dxt3.dds'},
      {format: 'DXT1', src: 'shannon-dxt1.dds'}
    ]
  },
  {
    formatName: 'PVR: PowerVR Texture Compression (WEBGL_compressed_texture_pvrtc)',
    description: 'Lossy, fixed-rate GPU texture compression format',
    availability: 'iPhone, iPad and mobile devices with PowerVR chipsets.',
    link: 'https://en.wikipedia.org/wiki/PVRTC',
    codeSample: 'load(url, CompressedTextureLoader)',
    images: [
      {
        format: 'PVRTC (2BPP RGB)',
        src: 'shannon-pvrtc-2bpp-rgb.pvr'
      },
      {
        format: 'PVRTC (2BPP RGBA)',
        src: 'shannon-pvrtc-2bpp-rgba.pvr'
      },
      {
        format: 'PVRTC (4BPP RGB)',
        src: 'shannon-pvrtc-4bpp-rgb.pvr'
      },
      {
        format: 'PVRTC (2BPP RGBA)',
        src: 'shannon-pvrtc-4bpp-rgba.pvr'
      }
    ]
  },
  {
    formatName: 'PVR: ATC (WEBGL_compressed_texture_atc)',
    codeSample: 'load(url, CompressedTextureLoader)',
    images: [
      {format: 'ATC (RGB)', src: 'shannon-atc-rgb.dds'},
      {
        format: 'ATC (RGBA, Explicit)',
        src: 'shannon-atc-rgba-explicit.dds'
      },
      {
        format: 'ATC (RGBA, Interpolated)',
        src: 'shannon-atc-rgba-interpolated.dds'
      }
    ]
  },
  {
    formatName: 'PVR: ASTC (WEBGL_compressed_texture_astc)',
    images: [
      {
        format: 'ASTC 4x4',
        src: 'shannon-astc-4x4.pvr'
      },
      {
        format: 'ASTC 5x4',
        src: 'shannon-astc-5x4.pvr'
      },
      {
        format: 'ASTC 5x5',
        src: 'shannon-astc-5x5.pvr'
      },
      {
        format: 'ASTC 6x5',
        src: 'shannon-astc-6x5.pvr'
      },
      {
        format: 'ASTC 6x6',
        src: 'shannon-astc-6x6.pvr'
      },
      {
        format: 'ASTC 8x5',
        src: 'shannon-astc-8x5.pvr'
      },
      {
        format: 'ASTC 8x6',
        src: 'shannon-astc-8x6.pvr'
      },
      {
        format: 'ASTC 8x8',
        src: 'shannon-astc-8x8.pvr'
      },
      {
        format: 'ASTC 10x5',
        src: 'shannon-astc-10x5.pvr'
      },
      {
        format: 'ASTC 10x6',
        src: 'shannon-astc-10x6.pvr'
      },
      {
        format: 'ASTC 10x8',
        src: 'shannon-astc-10x8.pvr'
      },
      {
        format: 'ASTC 10x10',
        src: 'shannon-astc-10x10.pvr'
      },
      {
        format: 'ASTC 12x10',
        src: 'shannon-astc-12x10.pvr'
      },
      {
        format: 'ASTC 12x12',
        src: 'shannon-astc-12x12.pvr'
      }
    ]
  },
  {
    formatName: 'PVR: ASTC (sRGB) (WEBGL_compressed_texture_astc)',
    images: [
      {
        format: 'ASTC (sRGB) 4x4',
        src: 'shannon-astc-srgb-4x4.pvr'
      },
      {
        format: 'ASTC (sRGB) 5x4',
        src: 'shannon-astc-srgb-5x4.pvr'
      },
      {
        format: 'ASTC (sRGB) 5x5',
        src: 'shannon-astc-srgb-5x5.pvr'
      },
      {
        format: 'ASTC (sRGB) 6x5',
        src: 'shannon-astc-srgb-6x5.pvr'
      },
      {
        format: 'ASTC (sRGB) 6x6',
        src: 'shannon-astc-srgb-6x6.pvr'
      },
      {
        format: 'ASTC (sRGB) 8x5',
        src: 'shannon-astc-srgb-8x5.pvr'
      },
      {
        format: 'ASTC (sRGB) 8x6',
        src: 'shannon-astc-srgb-8x6.pvr'
      },
      {
        format: 'ASTC (sRGB) 8x8',
        src: 'shannon-astc-srgb-8x8.pvr'
      },
      {
        format: 'ASTC (sRGB) 10x5',
        src: 'shannon-astc-srgb-10x5.pvr'
      },
      {
        format: 'ASTC (sRGB) 10x6',
        src: 'shannon-astc-srgb-10x6.pvr'
      },
      {
        format: 'ASTC (sRGB) 10x8',
        src: 'shannon-astc-srgb-10x8.pvr'
      },
      {
        format: 'ASTC (sRGB) 10x10',
        src: 'shannon-astc-srgb-10x10.pvr'
      },
      {
        format: 'ASTC (sRGB) 12x10',
        src: 'shannon-astc-srgb-12x10.pvr'
      },
      {
        format: 'ASTC (sRGB) 12x12',
        src: 'shannon-astc-srgb-12x12.pvr'
      }
    ]
  },
  {
    formatName: 'PVR: ETC1 (WEBGL_compressed_texture_etc1)',
    images: [{format: 'ETC1', src: 'shannon-etc1.pvr'}]
  },
  {
    formatName: 'Crunch',
    description: 'Advanced DXTn texture compression library.',
    link: 'https://github.com/BinomialLLC/crunch',
    codeSample: 'load(url, CrunchLoader)',
    images: [
      {format: 'DXT1 (Crunch)', src: 'shannon-dxt1.crn'},
      {format: 'DXT5 (Crunch)', src: 'shannon-dxt5.crn'}
    ]
  }
];
