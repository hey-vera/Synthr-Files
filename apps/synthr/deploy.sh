#!/bin/bash
# Synthr Deploy Script - Purge and Deploy
# Run this on your VPS via SSH

set -e

echo "=== Purging old synthr ==="
sudo systemctl stop nginx 2>/dev/null || true
sudo rm -f /etc/nginx/sites-available/synthr
sudo rm -f /etc/nginx/sites-enabled/synthr
sudo rm -rf /var/www/synthr
sudo rm -rf /var/cache/nginx/*
echo "Old synthr purged."

echo "=== Creating fresh directory ==="
sudo mkdir -p /var/www/synthr
sudo chown -R $USER:$USER /var/www/synthr

echo "=== Installing Nginx ==="
sudo apt update
sudo apt install nginx -y

echo "=== Nginx ready. Now upload your files to /var/www/synthr/ ==="
echo "Then run: sudo cp /var/www/synthr/nginx.conf /etc/nginx/sites-available/synthr"
echo "Then run: sudo ln -s /etc/nginx/sites-available/synthr /etc/nginx/sites-enabled/synthr"
echo "Then run: sudo rm -f /etc/nginx/sites-enabled/default"
echo "Then run: sudo chown -R www-data:www-data /var/www/synthr"
echo "Then run: sudo chmod -R 755 /var/www/synthr"
echo "Then run: sudo nginx -t && sudo systemctl reload nginx && sudo systemctl enable nginx"
