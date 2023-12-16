const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = './resources/img';
const outputDir = './resources/output';

fs.readdirSync(inputDir).forEach(file => {
  const inputPath = path.join(inputDir, file);
  const outputFileName = file.replace(/\.(png|jpg|jpeg)$/, '.webp');
  const outputPath = path.join(outputDir, outputFileName);

  sharp(inputPath)
    .webp({ quality: 20 })
    .toFile(outputPath, (err, info) => {
      if (err) {
        console.error(`Error al processar arxiu ${file}: ${err}`);
      } else {
        console.log(`Imatge optimizada correctament: ${file} -> ${outputFileName}`);
      }
    });
});