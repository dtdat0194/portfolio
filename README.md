# Personal Portfolio Website

A modern, clean portfolio website inspired by [gharbi.me](http://gharbi.me/) with smooth animations and a beautiful UI.

## Features

- ✨ Smooth fade-in animations on scroll
- 🎨 Clean, modern design
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast and lightweight
- 🎯 Easy to customize
- 🌊 Smooth hover effects and transitions

## Structure

The website includes the following sections:

1. **Header** - Your name and social media links
2. **Experiences** - Work experience with company logos, roles, and dates
3. **Research** - Research papers and publications
4. **Things I Made** - Project showcase with cards
5. **Apps** - Applications you've built
6. **Open Source** - Open source repositories
7. **Fun Projects** - Side projects and fun experiments

## Getting Started

1. Open `index.html` in your web browser
2. Edit the HTML file to add your information
3. Customize colors and styling in `styles.css` if needed
4. Add your own animations or interactions in `script.js`

## How to Add Your Content

### 1. Update Header
```html
<h1 class="name">Your Name</h1>
<div class="social-links">
    <a href="your-github-url" class="social-link">GitHub</a>
    <span class="separator">/</span>
    <a href="your-linkedin-url" class="social-link">LinkedIn</a>
    <!-- Add more links as needed -->
</div>
```

### 2. Add Experiences
```html
<div class="experience-item">
    <div class="experience-logo">🏢</div> <!-- Replace with emoji or image -->
    <div class="experience-content">
        <div class="experience-company">Company Name</div>
        <div class="experience-role">Role Title · Technologies</div>
        <div class="experience-date">2023 - Present</div>
    </div>
</div>
```

### 3. Add Research Papers
```html
<div class="research-item">
    <div class="research-title">Paper Title</div>
    <div class="research-venue">Conference/Journal Year</div>
    <div class="research-links">
        <a href="paper-url" class="research-link">Paper</a>
    </div>
</div>
```

### 4. Add Projects
```html
<div class="project-card">
    <div class="project-date">Dec 13, 2025</div>
    <div class="project-description">Project description...</div>
    <div class="project-tags">
        <span class="tag">React</span>
        <span class="tag">TypeScript</span>
    </div>
</div>
```

### 5. Add Apps
```html
<div class="app-item">
    <div class="app-name">App Name</div>
    <div class="app-status">Waitlist</div> <!-- or "Link" -->
    <div class="app-description">App description...</div>
    <div class="app-tech">React, Next.js</div>
    <a href="app-url" class="app-link">Link</a>
</div>
```

### 6. Add Open Source Repos
```html
<div class="open-source-item">
    <div class="repo-name">repository-name</div>
    <div class="repo-stars">★ 130</div>
    <div class="repo-description">Repository description...</div>
    <div class="repo-tech">React Native, TypeScript</div>
    <a href="github-url" class="repo-link">GitHub</a>
</div>
```

### 7. Add Fun Projects
```html
<div class="fun-project-item">
    <div class="fun-project-name">Project Name</div>
    <div class="fun-project-description">Project description...</div>
    <div class="fun-project-tech">Technologies</div>
    <a href="project-url" class="fun-project-link">Link</a>
</div>
```

## Customization

### Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --bg-color: #ffffff;
    --text-color: #1a1a1a;
    --text-secondary: #666666;
    --link-color: #0066cc;
    /* ... */
}
```

### Fonts
The website uses Inter font by default. To change it, update the font import in `index.html` and the `font-family` in `styles.css`.

### Animations
Animation timing and effects can be customized in `styles.css` and `script.js`.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

You can deploy this website to:
- **GitHub Pages** - Free hosting for static sites
- **Netlify** - Drag and drop deployment
- **Vercel** - Fast deployment with GitHub integration
- **Any static hosting service**

## Tips

1. Use emojis for company logos in the experience section (or replace with actual images)
2. Keep project descriptions concise and engaging
3. Add relevant tags to help categorize your projects
4. Update links regularly to keep them current
5. Test on mobile devices to ensure responsiveness

## License

Feel free to use this template for your personal portfolio!

