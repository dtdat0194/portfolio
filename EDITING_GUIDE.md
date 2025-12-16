# Editing Guide

This website is now modular! Each section has its own data file that you can easily edit.

## File Structure

```
dtdat/
├── index.html          # Main HTML structure (don't edit unless adding new sections)
├── styles.css          # All styling (edit to change appearance)
├── script.js           # Animation and interaction logic
├── render.js           # Rendering functions (don't edit unless you know what you're doing)
├── data/
│   ├── config.js       # Site name and social links
│   ├── experiences.js  # Work experiences
│   ├── research.js     # Research papers
│   ├── projects.js     # Things I Made projects
│   ├── apps.js         # Applications
│   ├── achievements.js # Achievements
│   └── funProjects.js  # Fun projects
└── EDITING_GUIDE.md    # This file
```

## How to Edit Content

### 1. Edit Experiences (`data/experiences.js`)

```javascript
const experiencesData = [
    {
        logo: "🤖",  // Emoji or icon
        company: "Company Name",
        role: "Job Title · Technologies",
        date: "Start Date – End Date",
        description: "One sentence description that appears on hover."
    },
    // Add more experiences by copying the object above
];
```

### 2. Edit Research (`data/research.js`)

```javascript
const researchData = [
    {
        title: "Paper Title",
        venue: "Conference/Journal Year",
        links: [
            { text: "Paper", url: "https://..." },
            { text: "Code", url: "https://..." }  // Add more links if needed
        ]
    },
];
```

### 3. Edit Projects (`data/projects.js`)

```javascript
const projectsData = [
    {
        date: "Fall 2025",
        description: "Project description...",
        tags: ["Tag1", "Tag2", "Tag3"]
    },
];
```

### 4. Edit Apps (`data/apps.js`)

```javascript
const appsData = [
    {
        name: "App Name",
        status: "Status",  // e.g., "Production", "Waitlist", "Link"
        description: "App description...",
        tech: "Technologies used",
        link: "https://..."
    },
];
```

### 5. Edit Achievements (`data/achievements.js`)

```javascript
const achievementsData = [
    {
        title: "Achievement Title",
        description: "Achievement description..."
    },
];
```

### 6. Edit Fun Projects (`data/funProjects.js`)

```javascript
const funProjectsData = [
    {
        name: "Project Name",
        description: "Project description...",
        tech: "Technologies",
        link: "https://..."
    },
];
```

### 7. Edit Site Config (`data/config.js`)

```javascript
const siteConfig = {
    name: "Your Name",
    socialLinks: [
        { text: "GitHub", url: "https://github.com/...", target: "_blank" },
        { text: "Email", url: "mailto:..." },
        { text: "LinkedIn", url: "https://linkedin.com/..." }
    ]
};
```

## Tips

1. **Always use quotes** around text in JavaScript
2. **Add commas** between items in arrays (except the last one)
3. **Save the file** and **refresh your browser** to see changes
4. **No build step needed** - just edit and refresh!

## Adding New Items

To add a new experience, project, etc., just copy an existing object in the array and modify it. Make sure to:
- Keep the same structure (same property names)
- Add a comma after each item except the last one
- Use proper JavaScript syntax

## Example: Adding a New Experience

```javascript
const experiencesData = [
    {
        logo: "🤖",
        company: "Xenera AI",
        role: "Machine Learning Engineer Intern · FastAPI, LangChain, LLaMA-3, Pinecone, MongoDB",
        date: "Aug 2025 – Oct 2025",
        description: "Built an end-to-end RAG pipeline..."
    },
    {
        logo: "🏢",  // NEW EXPERIENCE
        company: "New Company",
        role: "New Role · Tech Stack",
        date: "Jan 2024 – Dec 2024",
        description: "New description..."
    }  // No comma after the last item!
];
```

## Need Help?

- Check the existing data files for examples
- Make sure your JavaScript syntax is correct (quotes, commas, brackets)
- Refresh your browser after making changes
- Check browser console (F12) for any errors

