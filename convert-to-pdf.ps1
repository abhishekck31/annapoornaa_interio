# PowerShell script to convert HTML to PDF using Microsoft Edge in headless mode
$htmlPath = "d:\ac-ipl\public\company-brochure.html"
$pdfPath = "d:\ac-ipl\public\company-brochure.pdf"

# Get the absolute file path with proper URI format
$htmlUri = "file:///" + $htmlPath.Replace("\", "/")

# Use Edge in headless mode to print to PDF
& "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" --headless --disable-gpu --print-to-pdf="$pdfPath" "$htmlUri"

Write-Host "PDF has been created at: $pdfPath"
