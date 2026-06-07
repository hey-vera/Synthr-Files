# Synthr Deployment Guide

## VPS Deployment (Ubuntu 24.04 + Nginx)

### 1. Upload the `dist/` folder to your VPS

From your local machine (Windows), use one of these methods:

**Option A: SCP (if you have OpenSSH/SCP installed)**
```bash
scp -r dist/* user@your-vps-ip:/var/www/synthr/
```

**Option B: Tar + SCP**
```bash
cd synthr
tar -czvf synthr-dist.tar.gz dist/
scp synthr-dist.tar.gz user@your-vps-ip:/tmp/
ssh user@your-vps-ip "sudo mkdir -p /var/www/synthr && sudo tar -xzvf /tmp/synthr-dist.tar.gz -C /var/www/synthr --strip-components=1 && sudo rm /tmp/synthr-dist.tar.gz"
```

**Option C: FTP / FileZilla**
Upload the contents of the `dist/` folder to `/var/www/synthr/` on your VPS.

### 2. Install Nginx on Ubuntu 24.04

```bash
sudo apt update
sudo apt install nginx -y
sudo systemctl enable nginx
sudo systemctl start nginx
```

### 3. Configure Nginx

Copy the included `nginx.conf` to your server:

```bash
sudo cp /var/www/synthr/nginx.conf /etc/nginx/sites-available/synthr
sudo ln -s /etc/nginx/sites-available/synthr /etc/nginx/sites-enabled/synthr
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl reload nginx
```

### 4. Set proper permissions

```bash
sudo chown -R www-data:www-data /var/www/synthr
sudo chmod -R 755 /var/www/synthr
```

### 5. Point your domain to the VPS

Set your domain's A record to your VPS IP address.

### 6. (Optional) SSL with Let's Encrypt

```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d synthr.online -d www.synthr.online
sudo systemctl enable certbot
```

### 7. Rebuild & Redeploy (After updates)

When you make changes locally:
```bash
cd synthr
npm run build
# Then re-upload the dist/ folder
```

---

## Local Development

```bash
cd synthr
npm install
npm run dev
```

Open `http://localhost:3000`

## Project Structure

- `app/` — Next.js pages
- `data/tools.json` — Tool data (add more tools here)
- `lib/components/` — React components
- `lib/utils.ts` — Search & filter logic
- `types/tool.ts` — TypeScript types
- `dist/` — Static export (upload this to your VPS)
