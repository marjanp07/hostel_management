#!/bin/bash

# Get project name from command line
project_name="$1"

# Clone project files from GitHub
echo "Cloning project files from GitHub..."
git clone https://github.com/itz-me-nvs/Angular-Starter-Template "$project_name"

# Move into project directory
cd "$project_name"

# Remove any existing git repository
rm -rf .git

# Initialize new git repository
echo "Initializing new git repository..."
git init

# Add all files to git repository
# echo "Adding all files to git repository..."
git add .

# Commit initial changes
echo "Committing initial changes..."
git commit -m "Angular project initialized"

# Success message
echo "New project '$project_name' created and initialized with git repository!"

