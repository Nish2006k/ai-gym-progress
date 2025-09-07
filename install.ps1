Write-Host "Installing AI Gym Progress Visualizer..." -ForegroundColor Cyan
Write-Host ""

# Check if Node.js is installed
try {
    $nodeVersion = node --version
    Write-Host "Node.js is installed: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "Node.js is not installed. Please install Node.js from https://nodejs.org/" -ForegroundColor Red
    Write-Host "After installing Node.js, run this script again." -ForegroundColor Yellow
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host "Installing dependencies..." -ForegroundColor Yellow
Write-Host ""

# Install dependencies
npm install

if ($LASTEXITCODE -ne 0) {
    Write-Host "Failed to install dependencies. Please check your internet connection and try again." -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host ""
Write-Host "Dependencies installed successfully!" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. Copy env.example to .env" -ForegroundColor White
Write-Host "2. Add your OpenAI API key to .env" -ForegroundColor White
Write-Host "3. Run: npm run dev" -ForegroundColor White
Write-Host ""
Write-Host "Opening the project folder..." -ForegroundColor Yellow
Start-Process "."

Read-Host "Press Enter to exit"
