const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG'];
const INPUT_DIR = 'public';
const OUTPUT_DIR = 'public/optimized';

async function optimizeImage(inputPath, outputPath) {
  const ext = path.extname(inputPath).toLowerCase();
  
  // Determine output format and quality
  let outputFormat = 'jpeg';
  let quality = 85;
  
  if (ext === '.png') {
    outputFormat = 'png';
    quality = 90; // PNG supports transparency, higher quality
  }
  
  try {
    await sharp(inputPath)
      .resize(800, 800, { 
        fit: 'inside',
        withoutEnlargement: true 
      })
      .jpeg({ quality, progressive: true })
      .png({ quality, progressive: true })
      .toFile(outputPath);
    
    const stats = await fs.stat(inputPath);
    const optimizedStats = await fs.stat(outputPath);
    const savings = Math.round((1 - optimizedStats.size / stats.size) * 100);
    
    console.log(`✅ ${path.basename(inputPath)}: ${(stats.size / 1024).toFixed(1)}KB → ${(optimizedStats.size / 1024).toFixed(1)}KB (${savings}% reduction)`);
    
    return savings;
  } catch (error) {
    console.error(`❌ Error optimizing ${inputPath}:`, error.message);
    return 0;
  }
}

async function getImageFiles(dir) {
  const files = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      const subFiles = await getImageFiles(fullPath);
      files.push(...subFiles);
    } else if (IMAGE_EXTENSIONS.includes(path.extname(entry.name))) {
      files.push(fullPath);
    }
  }
  
  return files;
}

async function optimizeImages() {
  console.log('🚀 Starting image optimization...\n');
  
  // Create output directory
  try {
    await fs.mkdir(OUTPUT_DIR, { recursive: true });
  } catch (error) {
    // Directory might already exist
  }
  
  // Get all image files
  const imageFiles = await getImageFiles(INPUT_DIR);
  
  console.log(`Found ${imageFiles.length} images to optimize:\n`);
  
  let totalSavings = 0;
  let optimizedCount = 0;
  
  for (const imagePath of imageFiles) {
    const relativePath = path.relative(INPUT_DIR, imagePath);
    const outputPath = path.join(OUTPUT_DIR, relativePath);
    
    // Create output directory if needed
    const outputDir = path.dirname(outputPath);
    await fs.mkdir(outputDir, { recursive: true });
    
    const savings = await optimizeImage(imagePath, outputPath);
    totalSavings += savings;
    if (savings > 0) optimizedCount++;
  }
  
  console.log(`\n📊 Optimization Summary:`);
  console.log(`   • ${optimizedCount}/${imageFiles.length} images optimized`);
  console.log(`   • Average size reduction: ${Math.round(totalSavings / Math.max(optimizedCount, 1))}%`);
  console.log(`   • Optimized images saved to: ${OUTPUT_DIR}`);
  console.log(`\n💡 Next.js will automatically optimize images when you use the Image component.`);
}

optimizeImages().catch(console.error);

module.exports = { optimizeImages };
