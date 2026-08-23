#!/bin/bash
# Image Optimization Script
# Converts all images to WebP and compresses them
# Usage: bash scripts/optimize-images.sh

echo "🖼️  Atwima Bank Image Optimization Script"
echo "=========================================="
echo ""

# Check if ImageMagick is installed
if ! command -v mogrify &> /dev/null; then
    echo "❌ ImageMagick not found!"
    echo "Install it:"
    echo "  Mac: brew install imagemagick"
    echo "  Ubuntu: sudo apt-get install imagemagick"
    echo "  Windows: https://imagemagick.org/script/download.php#windows"
    exit 1
fi

if ! command -v cwebp &> /dev/null; then
    echo "❌ cwebp not found!"
    echo "Install it:"
    echo "  Mac: brew install webp"
    echo "  Ubuntu: sudo apt-get install webp"
    exit 1
fi

DIRS=("public/pics" "public/forms" "public/news")
TOTAL_BEFORE=0
TOTAL_AFTER=0

for dir in "${DIRS[@]}"; do
    if [ ! -d "$dir" ]; then
        echo "⏭️  Skipping $dir (not found)"
        continue
    fi
    
    echo "📁 Processing $dir..."
    
    # Count before
    BEFORE=$(du -sh "$dir" | awk '{print $1}')
    
    # Compress images (strip metadata, reduce quality to 85%)
    for file in "$dir"/*.{jpg,jpeg,png}; do
        if [ -f "$file" ]; then
            echo "  📷 Compressing $(basename "$file")..."
            mogrify -strip -quality 85 "$file" 2>/dev/null
        fi
    done
    
    # Convert to WebP
    for file in "$dir"/*.{jpg,jpeg,png}; do
        if [ -f "$file" ]; then
            webp_file="${file%.*}.webp"
            echo "  🔄 Converting $(basename "$file") to WebP..."
            cwebp -q 85 "$file" -o "$webp_file" 2>/dev/null
        fi
    done
    
    # Count after
    AFTER=$(du -sh "$dir" | awk '{print $1}')
    echo "  ✅ $dir complete: $BEFORE → $AFTER"
    echo ""
done

echo "✨ Image optimization complete!"
echo ""
echo "📊 Next steps:"
echo "  1. Test the site: npm run dev"
echo "  2. Check file sizes: ls -lh public/pics/"
echo "  3. Deploy to Vercel/Netlify for automatic CDN optimization"
echo ""
echo "🚀 For fastest load times, deploy with:"
echo "  npm i -g vercel && vercel deploy --prod"
