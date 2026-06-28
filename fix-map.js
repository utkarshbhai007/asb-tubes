const { createWorker } = require('tesseract.js');
const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');
const path = require('path');

async function fixMap() {
  console.log('Loading worker...');
  const worker = await createWorker('eng');
  
  const imagePath = path.join(__dirname, 'public', 'images', 'global-map.png');
  
  console.log('Recognizing text in image...');
  const ret = await worker.recognize(imagePath);
  
  console.log('Loading image into canvas...');
  const img = await loadImage(imagePath);
  const canvas = createCanvas(img.width, img.height);
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);
  
  // Find words CHIINA and DUBI
  const wordsToFix = ['CHIINA', 'DUBI'];
  let fixedCount = 0;
  console.log('Keys of ret.data:', Object.keys(ret.data));
  if (!ret.data.words) {
    console.log('Words array is undefined. Full text recognized:', ret.data.text);
    return;
  }
  
  ret.data.words.forEach(word => {
    const text = word.text.toUpperCase().replace(/[^A-Z]/g, '');
    if (wordsToFix.includes(text) || text === 'CHIINA' || text === 'DUBI') {
      console.log('Found:', word.text, 'at', word.bbox);
      
      // Paint over with white background
      ctx.fillStyle = '#ffffff'; 
      // Expand bbox slightly to fully cover the word
      const padding = 2;
      ctx.fillRect(word.bbox.x0 - padding, word.bbox.y0 - padding, word.bbox.x1 - word.bbox.x0 + padding * 2, word.bbox.y1 - word.bbox.y0 + padding * 2);
      
      // Draw new text
      ctx.fillStyle = '#1a365d'; // Dark blue typical for maps
      
      // Calculate font size based on bounding box height
      const fontSize = Math.floor((word.bbox.y1 - word.bbox.y0) * 0.9);
      ctx.font = `bold ${fontSize}px sans-serif`; 
      
      const newText = text === 'CHIINA' ? 'CHINA' : 'DUBAI';
      // Center the text vertically
      ctx.textBaseline = 'bottom';
      ctx.fillText(newText, word.bbox.x0, word.bbox.y1);
      fixedCount++;
    }
  });
  
  if (fixedCount > 0) {
    console.log(`Saving image with ${fixedCount} fixes...`);
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync(imagePath, buffer);
    console.log('Image saved successfully.');
  } else {
    console.log('No typos found to fix.');
  }
  
  await worker.terminate();
}

fixMap().catch(console.error);
