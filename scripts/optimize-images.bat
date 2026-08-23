@echo off
REM Image Optimization Script for Windows
REM Converts all images to WebP and compresses them
REM Make sure ImageMagick is installed first

echo.
echo 🖼️  Atwima Bank Image Optimization Script (Windows)
echo ================================================
echo.

REM Check if magick is available
where magick >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ ImageMagick not found!
    echo Download from: https://imagemagick.org/script/download.php#windows
    pause
    exit /b 1
)

REM Process image directories
setlocal enabledelayedexpansion
set "DIRS=public\pics public\forms public\news"

for %%D in (%DIRS%) do (
    if not exist "%%D\" (
        echo ⏭️  Skipping %%D (not found)
        goto :continue
    )
    
    echo 📁 Processing %%D...
    
    REM Compress JPG/PNG
    for %%F in ("%%D\*.jpg" "%%D\*.jpeg" "%%D\*.png") do (
        if exist "%%F" (
            echo   📷 Compressing %%~nxF...
            magick mogrify -strip -quality 85 "%%F"
        )
    )
    
    REM Convert to WebP
    for %%F in ("%%D\*.jpg" "%%D\*.jpeg" "%%D\*.png") do (
        if exist "%%F" (
            echo   🔄 Converting %%~nxF to WebP...
            magick "%%F" -quality 85 "%%~dpnF.webp"
        )
    )
    
    echo   ✅ %%D complete
    echo.
    
    :continue
)

echo ✨ Image optimization complete!
echo.
echo 📊 Next steps:
echo   1. Test the site: npm run dev
echo   2. Check file sizes in Windows Explorer
echo   3. Deploy to Vercel/Netlify for CDN optimization
echo.
echo 🚀 For fastest load times, deploy with Vercel:
echo   npm i -g vercel
echo   vercel deploy --prod
echo.
pause
