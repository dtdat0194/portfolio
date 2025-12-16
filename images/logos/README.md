# Company Logos

Place your company logo images in this folder.

## Supported Formats
- PNG (recommended - supports transparency)
- SVG (best for scalability)
- JPG/JPEG

## Naming Convention
Name your logo files to match the company name (lowercase, use hyphens for spaces):
- `xenera.png` or `xenera.svg`
- `umiacs.png` or `umiacs.svg`
- `smart-imaging.png` or `smart-imaging.svg`

## How to Add Logos

1. **Get the logo files** from the company website or brand assets
2. **Save them** in this folder (`images/logos/`)
3. **Update** `data/experiences.js` with the filename:
   ```javascript
   {
       logo: "images/logos/xenera.png",
       logoType: "image",
       // ... rest of experience
   }
   ```

## Logo Size Recommendations
- **Width**: 32px (will be scaled automatically)
- **Format**: PNG with transparent background (best)
- **Aspect Ratio**: Square or close to square works best

## Using External URLs
You can also use external URLs:
```javascript
{
    logo: "https://example.com/logo.png",
    logoType: "image",
    // ... rest of experience
}
```

## Fallback to Emoji
If a logo image fails to load, it will automatically fall back to the emoji specified in the data file.

