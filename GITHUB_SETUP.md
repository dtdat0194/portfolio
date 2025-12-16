# GitHub Setup Instructions

Your portfolio is ready to be pushed to GitHub! Follow these steps:

## Option 1: GitHub Pages with Custom Repository Name (Recommended)

1. **Create a new repository on GitHub:**
   - Go to https://github.com/new
   - Repository name: `portfolio` (or any name you prefer)
   - Make it **Public** (required for free GitHub Pages)
   - **Don't** initialize with README, .gitignore, or license
   - Click "Create repository"

2. **Connect and push your code:**
   ```bash
   git remote add origin https://github.com/dtdat0194/portfolio.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under "Source", select **Deploy from a branch**
   - Branch: `main` / Folder: `/ (root)`
   - Click **Save**
   - Your site will be available at: `https://dtdat0194.github.io/portfolio/`

## Option 2: GitHub Pages with User Site (dtdat0194.github.io)

If you want your site at `https://dtdat0194.github.io` (without `/portfolio`):

1. **Create a repository named exactly:** `dtdat0194.github.io`
   - Go to https://github.com/new
   - Repository name: `dtdat0194.github.io`
   - Make it **Public**
   - **Don't** initialize with README, .gitignore, or license
   - Click "Create repository"

2. **Connect and push your code:**
   ```bash
   git remote add origin https://github.com/dtdat0194/dtdat0194.github.io.git
   git branch -M main
   git push -u origin main
   ```

3. **GitHub Pages will be automatically enabled!**
   - Your site will be live at: `https://dtdat0194.github.io`
   - It may take a few minutes to deploy

## After Pushing

- Wait 1-2 minutes for GitHub Pages to build
- Check the **Actions** tab in your repository to see the deployment status
- Visit your site URL to verify it's working

## Updating Your Site

Whenever you make changes:
```bash
git add .
git commit -m "Your commit message"
git push
```

Changes will be live in 1-2 minutes!
