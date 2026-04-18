#!/bin/sh
#
# Setup script for Biome accessibility linting
# Run this script to configure git hooks for accessibility linting
#

echo "🔧 Setting up Biome accessibility linting..."

# Configure git to use the .githooks directory
git config core.hooksPath .githooks

if [ $? -eq 0 ]; then
    echo "✅ Git hooks configured successfully!"
    echo "   Pre-commit hook will now run Biome accessibility checks."
else
    echo "❌ Failed to configure git hooks."
    exit 1
fi
