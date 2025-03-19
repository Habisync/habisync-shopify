#!/bin/bash

# Fix script for Shopify Hydrogen Project
# Purpose: Resolve dependency issues, uncommitted changes, and deployment errors

echo "🛠️ Starting the fix script for Shopify Hydrogen project..."

# Step 1: Check Node.js Version
echo "🔍 Checking Node.js version..."
NODE_VERSION=$(node -v)
REQUIRED_VERSION="18"
if [[ "$NODE_VERSION" < "v$REQUIRED_VERSION" ]]; then
  echo "❌ Node.js version $NODE_VERSION is outdated. Please install Node.js $REQUIRED_VERSION or later."
  exit 1
else
  echo "✅ Node.js version is $NODE_VERSION"
fi

# Step 2: Clear node_modules and package-lock.json
echo "🧹 Cleaning node_modules and package-lock.json..."
rm -rf node_modules package-lock.json

# Step 3: Reinstall dependencies
echo "🔄 Reinstalling dependencies..."
npm install
if [ $? -ne 0 ]; then
  echo "❌ Failed to install dependencies. Please check your package.json for issues."
  exit 1
else
  echo "✅ Dependencies installed successfully."
fi

# Step 4: Install Missing Modules
echo "📦 Installing missing dependencies..."
npm install @shopify/mini-oxygen @shopify/hydrogen @remix-run/dev vite-tsconfig-paths @tailwindcss/vite
if [ $? -ne 0 ]; then
  echo "❌ Failed to install specific modules. Please investigate further."
  exit 1
else
  echo "✅ Missing modules installed."
fi

# Step 5: Lint and Validate vite.config.js
echo "🔧 Checking vite.config.js for issues..."
CONFIG_FILE="./vite.config.js"
if [ ! -f "$CONFIG_FILE" ]; then
  echo "❌ vite.config.js not found. Ensure this file exists and is configured correctly."
  exit 1
fi

# Step 6: Test Environment Variables
echo "🔍 Checking for environment variables..."
if [ ! -f ".env" ]; then
  echo "⚠️ WARNING: .env file not found. Ensure API keys and sensitive details are configured correctly."
else
  echo "✅ .env file found."
fi

# Step 7: Handle uncommitted Git changes
echo "🛠️ Checking for uncommitted changes..."
if [ -n "$(git status --porcelain)" ]; then
  echo "⚠️ Uncommitted changes detected. Staging and committing them..."
  git add .
  git commit -m "Fix uncommitted changes before deployment"
else
  echo "✅ No uncommitted changes detected."
fi

# Step 8: Run npm audit and fix vulnerabilities
echo "🛡️ Checking for vulnerabilities..."
npm audit
npm audit fix --force
echo "✅ Vulnerabilities addressed."

# Step 9: Build and Test Project
echo "🔨 Building and testing the project..."
npm run build
if [ $? -ne 0 ]; then
  echo "❌ Build failed. Please debug the errors in your codebase."
  exit 1
fi

npm run dev
if [ $? -ne 0 ]; then
  echo "❌ Development server failed to start. Please check for issues in your configuration."
  exit 1
else
  echo "✅ Development server running successfully."
fi

# Step 10: Authenticate Shopify CLI
echo "🔑 Authenticating with Shopify CLI..."
shopify hydrogen dev
if [ $? -ne 0 ]; then
  echo "❌ Shopify CLI authentication failed. Ensure you’ve logged in with the verification code provided."
  exit 1
else
  echo "✅ Shopify CLI authentication successful."
fi

# Step 11: Deploy Project
echo "🚀 Deploying the Shopify Hydrogen project..."
shopify hydrogen deploy
if [ $? -ne 0 ]; then
  echo "❌ Deployment failed. Use the --force flag if necessary."
  exit 1
else
  echo "✅ Deployment successful! Your project is live."
fi

echo "🎉 Fix script completed successfully!"
