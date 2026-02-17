import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, '../src/assets/images/about');
const outputDir = inputDir; // Overwrite or save next to original? Let's save as .webp

const imagesToOptimize = [
    { name: 'DSC_3820.jpg', width: 1920, quality: 80 }, // Hero
    { name: 'DSC_6352.JPG', width: 1200, quality: 80 }, // Team 1
    { name: 'DSC_6615.jpg', width: 1200, quality: 80 }, // Team 2
];

async function optimize() {
    for (const img of imagesToOptimize) {
        const inputPath = path.join(inputDir, img.name);
        const outputPath = path.join(outputDir, img.name.replace(/\.[^/.]+$/, "") + ".webp");

        try {
            if (fs.existsSync(inputPath)) {
                await sharp(inputPath)
                    .resize({ width: img.width, withoutEnlargement: true })
                    .webp({ quality: img.quality })
                    .toFile(outputPath);

                console.log(`Optimized: ${img.name} -> ${path.basename(outputPath)}`);
            } else {
                console.warn(`File not found: ${img.name}`);
            }
        } catch (error) {
            console.error(`Error optimizing ${img.name}:`, error);
        }
    }
}

optimize();
