#!/bin/bash

# Update system packages
echo "Updating system packages..."
sudo yum update -y

# Install Node.js and npm if not already installed
if ! command -v node &> /dev/null; then
    echo "Installing Node.js and npm..."
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
    export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
    nvm install 18
    nvm use 18
fi

# Install PM2 globally for process management
echo "Installing PM2..."
npm install -g pm2

# Create app directory if it doesn't exist
APP_DIR="/home/ec2-user/app"
if [ ! -d "$APP_DIR" ]; then
    echo "Creating app directory..."
    mkdir -p $APP_DIR
fi

# Navigate to app directory
cd $APP_DIR

# Clone the repository (replace with your repository URL)
echo "Cloning repository..."
git clone https://github.com/vatsaal1106/new_website.git .

# Clean npm cache and remove existing node_modules
echo "Cleaning npm cache and removing existing node_modules..."
rm -rf node_modules
rm -rf package-lock.json
npm cache clean --force

# Install dependencies with legacy peer deps flag
echo "Installing dependencies..."
npm install --legacy-peer-deps

# Build the application
echo "Building the application..."
npm run build

# Stop any existing PM2 processes
echo "Stopping existing processes..."
pm2 stop all || true
pm2 delete all || true

# Start the application with PM2
echo "Starting the application..."
pm2 start npm --name "next-app" -- start

# Save PM2 process list
pm2 save

# Set PM2 to start on system boot
pm2 startup | tail -n 1 > /tmp/pm2_startup.sh
chmod +x /tmp/pm2_startup.sh
sudo /tmp/pm2_startup.sh

echo "Deployment completed successfully!" 