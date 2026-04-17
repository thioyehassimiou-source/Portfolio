const sharp = require('sharp');

async function removeGreen(inputFile, outputFile) {
  try {
    const { data, info } = await sharp(inputFile)
      .raw()
      .toBuffer({ resolveWithObject: true });

    const { width, height, channels } = info;
    const outputBuffer = Buffer.alloc(width * height * 4);

    for (let i = 0; i < data.length; i += channels) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];

      // Chroma key logic: if pixel is "very green"
      // Bright lime green is [0, 255, 0]
      // We allow some tolerance
      const isGreen = g > 150 && g > r * 1.5 && g > b * 1.5;

      const offset = (i / channels) * 4;
      outputBuffer[offset] = r;
      outputBuffer[offset + 1] = g;
      outputBuffer[offset + 2] = b;
      outputBuffer[offset + 3] = isGreen ? 0 : 255;
    }

    await sharp(outputBuffer, {
      raw: {
        width,
        height,
        channels: 4
      }
    })
    .webp({ quality: 90 })
    .toFile(outputFile);

    console.log('Success: Transparent WebP created at', outputFile);
  } catch (err) {
    console.error('Error:', err);
  }
}

const input = process.argv[2];
const output = process.argv[3];
removeGreen(input, output);
