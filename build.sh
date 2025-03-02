#!/bin/bash

# Clean up previous builds
echo "Cleaning up previous builds..."
rm -rf .next

# Install dependencies
echo "Installing dependencies..."
npm ci

# Build the application
echo "Building the application..."
npm run build

# Test the build locally
echo "Starting the application in production mode..."
echo "You can test your build at http://localhost:3000"
npm run start 