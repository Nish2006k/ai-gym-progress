@echo off
echo Installing AI Gym Progress Visualizer...
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Node.js is not installed. Please install Node.js from https://nodejs.org/
    echo After installing Node.js, run this script again.
    pause
    exit /b 1
)

echo Node.js is installed. Installing dependencies...
echo.

REM Install dependencies
npm install

if %errorlevel% neq 0 (
    echo Failed to install dependencies. Please check your internet connection and try again.
    pause
    exit /b 1
)

echo.
echo Dependencies installed successfully!
echo.
echo Next steps:
echo 1. Copy env.example to .env
echo 2. Add your OpenAI API key to .env
echo 3. Run: npm run dev
echo.
echo Opening the project folder...
start .
pause
