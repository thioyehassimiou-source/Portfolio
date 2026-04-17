import sharp from 'sharp';
import path from 'path';

async function removeGreen(inputFile, outputFile) {
  try {
    const { data, info } = await sharp(inputFile)
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });

    const { width, height, channels } = info;
    const outputBuffer = Buffer.alloc(width * height * 4);

    for (let i = 0; i < data.length; i += channels) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];

      // Improved Chroma key logic
      // Targeting Lime Green #00FF00
      // We look for pixels where green is the dominant component and r/b are low
      const isGreen = g > 150 && g > r * 1.3 && g > b * 1.3;

      const offset = (i / channels) * 4;
      outputBuffer[offset] = r;
      outputBuffer[offset + 1] = g;
      outputBuffer[offset + 2] = b;
      
      // If green, set alpha to 0. Otherwise set to original alpha (255)
      outputBuffer[offset + 3] = isGreen ? 0 : 255;
    }

    await sharp(outputBuffer, {
      raw: { width, height, channels: 4 }
    })
    .webp({ quality: 90, lossless: true })
    .toFile(outputFile);

    console.log(`Successfully created transparent image: ${outputFile}`);
  } catch (err) {
    console.error('Error during image processing:', err);
  }
}

const input = process.argv[2];
const output = process.argv[3];

if (!input || !output) {
  console.log('Usage: node remove_green.js <input> <output>');
} else {
  removeGreen(input, output);
}
