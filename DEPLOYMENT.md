# Deployment Guide

This guide walks you through deploying your portfolio to GitHub Pages with a custom domain.

## Prerequisites

- GitHub account
- Git installed on your computer
- Your custom domain registered

## Step 1: Push to GitHub

If you haven't already pushed your portfolio to GitHub:

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Portfolio website"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/yourusername/portfolio.git
git branch -M main
git push -u origin main
```

## Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings**
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select your `main` branch
5. Click **Save**
6. Your site will be published at `https://yourusername.github.io/portfolio`

## Step 3: Configure Custom Domain

### Create CNAME File

Create a file named `CNAME` in the root of your repository (no file extension):

```
yourdomain.com
```

Commit and push this file:

```bash
git add CNAME
git commit -m "Add custom domain"
git push
```

### Configure DNS Settings

Log into your domain registrar (GoDaddy, Namecheap, Google Domains, etc.) and update DNS settings:

#### Option A: Using A Records (Recommended)

Add the following **A Records**:

| Type | Host | Value           |
|------|------|-----------------|
| A    | @    | 185.199.108.153 |
| A    | @    | 185.199.109.153 |
| A    | @    | 185.199.110.153 |
| A    | @    | 185.199.111.153 |

And add a **CNAME Record** for www:

| Type  | Host | Value                    |
|-------|------|--------------------------|
| CNAME | www  | yourusername.github.io   |

#### Option B: Using CNAME Only

If you prefer using only CNAME:

| Type  | Host | Value                    |
|-------|------|--------------------------|
| CNAME | www  | yourusername.github.io   |

Then set up a redirect from `@` (root domain) to `www.yourdomain.com` in your registrar's settings.

### Enable HTTPS

1. Go back to your repository Settings → Pages
2. Check **Enforce HTTPS** (wait a few minutes for DNS to propagate first)
3. GitHub will automatically provision an SSL certificate

## Step 4: Verify Deployment

Wait 10-30 minutes for DNS propagation, then visit:
- `http://yourdomain.com`
- `https://yourdomain.com`
- `https://www.yourdomain.com`

All should redirect to your portfolio with HTTPS enabled.

## Troubleshooting

### DNS Not Propagating
- DNS changes can take up to 48 hours (usually much faster)
- Check DNS propagation: [whatsmydns.net](https://www.whatsmydns.net/)

### HTTPS Certificate Issues
- Wait at least 24 hours after DNS propagation
- Disable and re-enable HTTPS in GitHub Pages settings
- Ensure CNAME file contains only your domain (no http:// or trailing slash)

### Images Not Loading
- Check that image paths are correct (case-sensitive)
- Use relative paths: `/images/photo.jpg` instead of absolute paths
- Ensure images are committed and pushed to GitHub

### Changes Not Appearing
- GitHub Pages can take 1-10 minutes to rebuild after pushing
- Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)
- Clear browser cache

## Updating Your Site

After making changes to your portfolio:

```bash
git add .
git commit -m "Update portfolio"
git push
```

GitHub Pages will automatically rebuild and deploy your site within a few minutes.

## Alternative: Netlify Deployment

If you prefer Netlify instead:

1. Sign up at [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub and select your repository
4. Build settings:
   - Build command: (leave empty)
   - Publish directory: `/`
5. Click "Deploy site"
6. Add custom domain in Site Settings → Domain Management
7. Follow Netlify's DNS instructions

## Cost Breakdown

- **GitHub Pages**: Free forever
- **Domain**: $10-15/year (varies by registrar and TLD)
- **Total**: ~$10-15/year

## Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Pages Custom Domain Guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [Netlify Documentation](https://docs.netlify.com/)
