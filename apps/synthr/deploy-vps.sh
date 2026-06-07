#!/bin/bash
# Synthr Deploy Script - One Command Deploy
# Run this on your VPS via SSH

set -e

echo "=== Deploying Synthr ==="

# Extract the uploaded tar file
sudo rm -rf /var/www/synthr/*
sudo tar -xzvf /tmp/synthr-dist.tar.gz -C /var/www/synthr/

# Set permissions
sudo chown -R www-data:www-data /var/www/synthr
sudo chmod -R 755 /var/www/synthr

# Reload Nginx
sudo nginx -t && sudo systemctl reload nginx

echo "✅ DEPLOYED!"
echo "Site: https://synthr.online"
echo "Mobile: https://synthr.online/mobile-post.html"
