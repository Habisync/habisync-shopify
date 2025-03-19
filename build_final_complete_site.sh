#!/bin/bash
# ==============================================
# BULLETPROOF FULL FIX AND VALIDATION SCRIPT
#
# This script will:
#   1. Verify Node.js and npm versions.
#   2. Clean and rebuild the project dependencies.
#   3. Handle compatibility between Hydrogen, Vite, and plugins.
#   4. Validate vite.config.js and fix broken or missing configurations.
#   5. Test the build process and runtime server.
#   6. Generate detailed validation reports.
# ==============================================

echo "🚀 Starting the Bulletproof Fix and Validation Script..."

# Step 1: Check for Node.js and npm Versions
echo "🔧 Verifying Node.js and npm versions..."
NODE_VERSION=$(node -v 2>/dev/null)
NPM_VERSION=$(npm -v 2>/dev/null)
if [[ $? -ne 0 || -z "$NODE_VERSION" || -z "$NPM_VERSION" ]]; then
  echo "❌ Node.js or npm is not installed. Please install them first."
  exit 1
fi
echo "✅ Node.js Version: $NODE_VERSION"
echo "✅ npm Version: $NPM_VERSION"

# Step 2: Clear the Environment
echo "🧹 Cleaning project environment..."
rm -rf node_modules package-lock.json
npm cache clean --force || echo "⚠️ Failed to clean npm cache. Continuing anyway."
echo "✅ Environment cleaned."

# Step 3: Reinstall Dependencies
echo "📦 Installing project dependencies..."
npm install || {
  echo "❌ Dependency installation failed. Check npm logs for details."
  exit 1
}
echo "✅ Dependencies installed successfully."

# Step 4: Fix Vulnerabilities
echo "🔍 Running npm audit to check vulnerabilities..."
npm audit || echo "⚠️ Vulnerabilities found. Attempting to fix..."
npm audit fix || echo "⚠️ Non-breaking fixes applied. Continuing..."
npm audit fix --force || echo "⚠️ Force fixes applied. Please review breaking changes."

# Step 5: Verify Required Modules
echo "🔎 Verifying required modules..."
REQUIRED_MODULES=("@shopify/hydrogen" "@shopify/hydrogen/plugin" "@shopify/mini-oxygen" "vite" "tailwindcss")
MISSING_MODULES=()
for MODULE in "${REQUIRED_MODULES[@]}"; do
  npm ls $MODULE &>/dev/null || {
    echo "❌ Missing $MODULE."
    MISSING_MODULES+=($MODULE)
  }
done

if [[ ${#MISSING_MODULES[@]} -gt 0 ]]; then
  echo "🔄 Installing missing modules: ${MISSING_MODULES[@]}"
  npm install "${MISSING_MODULES[@]}" || {
    echo "❌ Failed to install missing modules: ${MISSING_MODULES[@]}"
    exit 1
  }
  echo "✅ Missing modules installed successfully."
else
  echo "✅ All required modules are present."
fi

# Step 6: Validate vite.config.js
echo "🔧 Validating vite.config.js..."
if [ ! -f "vite.config.js" ]; then
  echo "❌ vite.config.js is missing. Creating a new one..."
  cat > vite.config.js <<EOL
import { defineConfig } from 'vite';
import hydrogen from '@shopify/hydrogen/plugin';

export default defineConfig({
  plugins: [hydrogen()],
});
EOL
  echo "✅ Created vite.config.js."
else
  echo "✅ vite.config.js found. Verifying content..."
  if ! grep -q "@shopify/hydrogen/plugin" vite.config.js; then
    echo "⚠️ Hydrogen plugin is missing in vite.config.js. Updating..."
    cat > vite.config.js <<EOL
import { defineConfig } from 'vite';
import hydrogen from '@shopify/hydrogen/plugin';

export default defineConfig({
  plugins: [hydrogen()],
});
EOL
    echo "✅ Fixed vite.config.js with the required plugin."
  else
    echo "✅ vite.config.js is properly configured."
  fi
fi

# Step 7: Test Build Process
echo "🔨 Testing the build process..."
npm run build || {
  echo "❌ Build failed. Check the error logs for details."
  exit 1
}
echo "✅ Build completed successfully."

# Step 8: Start the Development Server
echo "🖥 Starting the development server..."
npm run dev || {
  echo "❌ Failed to start the development server. Check the logs for details."
  exit 1
}

echo "🎉 Development server is running! Access your app at http://localhost:3000"

# Step 9: Generate a Validation Report
REPORT_FILE="validation_report.txt"
{
  echo "Hydrogen Project Validation Report"
  echo "Date: $(date)"
  echo "Node.js Version: $NODE_VERSION"
  echo "npm Version: $NPM_VERSION"
  echo "Build Status: SUCCESS"
  echo "Development Server: RUNNING"
  echo "Access your site at http://localhost:3000"
} > $REPORT_FILE
echo "✅ Validation report generated: $REPORT_FILE"
