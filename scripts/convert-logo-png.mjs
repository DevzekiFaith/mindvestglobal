import fs from "fs";
import path from "path";
import sharp from "sharp";

async function generatePngLogo() {
  const svgPath = path.join(process.cwd(), "public", "images", "mindvest-logo.svg");
  const pngPath = path.join(process.cwd(), "public", "images", "mindvest-logo.png");

  const svgBuffer = fs.readFileSync(svgPath);

  // Render SVG to crisp high-res 800px width PNG with transparent background
  await sharp(svgBuffer, { density: 300 })
    .resize(800)
    .png({ quality: 100 })
    .toFile(pngPath);

  console.log("Successfully created:", pngPath);
}

generatePngLogo().catch(console.error);
