// Rendering Functions - Don't edit unless you know what you're doing!

function renderEducation() {
    const container = document.querySelector('.education-list');
    if (!container) return;
    
    // Combine education and affiliations data (if affiliationsData exists)
    const allItems = [...educationData, ...(typeof affiliationsData !== 'undefined' ? affiliationsData : [])];
    
    container.innerHTML = allItems.map(item => {
        // Determine if logo is image or emoji
        const isImage = item.logoType === 'image' || (item.logo && (item.logo.startsWith('http') || item.logo.startsWith('images/') || item.logo.includes('.')));
        const fallbackEmoji = item.logo && !isImage ? item.logo : '🎓';
        
        const logoHTML = isImage 
            ? `<img src="${item.logo}" alt="${item.institution || item.organization} logo" class="education-logo-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />`
            : '';
        const emojiHTML = `<div class="education-logo-emoji" style="${isImage ? 'display:none;' : ''}">${fallbackEmoji}</div>`;
        
        const name = item.institution || item.organization;
        const role = item.degree || item.role;
        const description = item.description || '';
        const advisor = item.advisor || '';
        const advisorLink = item.advisorLink || '';
        
        const advisorHTML = advisor && advisorLink 
            ? `<div class="education-advisor">Advisor: <a href="${advisorLink}" target="_blank" class="advisor-link">${advisor}</a></div>`
            : advisor 
            ? `<div class="education-advisor">Advisor: ${advisor}</div>`
            : '';
        
        return `
        <div class="education-item">
            <div class="education-logo-container">
                ${logoHTML}
                ${emojiHTML}
            </div>
            <div class="education-content">
                <div class="education-header">
                    <div class="education-header-left">
                        <div class="education-name">${name}</div>
                        <div class="education-role">${role}</div>
                        ${advisorHTML}
                    </div>
                    <div class="education-date">${item.date}</div>
                </div>
                ${description ? `
                <div class="education-description">
                    <span class="description-arrow">↳</span>
                    <span class="description-text">${description}</span>
                </div>
                ` : ''}
            </div>
        </div>
        `;
    }).join('');
}

function renderExperiences() {
    const container = document.querySelector('.experience-list');
    if (!container) return;
    
    container.innerHTML = experiencesData.map(exp => {
        // Determine if logo is image or emoji
        const isImage = exp.logoType === 'image' || (exp.logo && (exp.logo.startsWith('http') || exp.logo.startsWith('images/') || exp.logo.includes('.')));
        const fallbackEmoji = exp.logo && !isImage ? exp.logo : '🏢';
        
        const logoHTML = isImage 
            ? `<img src="${exp.logo}" alt="${exp.company} logo" class="experience-logo-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />`
            : '';
        const emojiHTML = `<div class="experience-logo-emoji" style="${isImage ? 'display:none;' : ''}">${fallbackEmoji}</div>`;
        
        return `
        <div class="experience-item">
            <div class="experience-logo-container">
                ${logoHTML}
                ${emojiHTML}
            </div>
            <div class="experience-content">
                <div class="experience-header">
                    <div class="experience-header-left">
                        <div class="experience-company">${exp.company}</div>
                        <div class="experience-role">${exp.role}</div>
                    </div>
                    <div class="experience-date">${exp.date}</div>
                </div>
                <div class="experience-description">
                    <span class="description-arrow">↳</span>
                    <span class="description-text">${exp.description}</span>
                </div>
            </div>
        </div>
        `;
    }).join('');
}

function renderResearch() {
    const container = document.querySelector('.research-list');
    if (!container) return;
    
    container.innerHTML = researchData.map((research, index) => {
        const videoHTML = research.video 
            ? `<div class="research-media"><video class="research-video" muted loop playsinline preload="auto" data-video-index="${index}"><source src="${research.video}" type="video/mp4">Your browser does not support the video tag.</video></div>`
            : '';
        const imageHTML = research.image 
            ? `<div class="research-media"><img src="${research.image}" alt="${research.title}" class="research-image" /></div>`
            : '';
        
        return `
        <div class="research-item">
            <div class="research-content-wrapper">
                ${videoHTML || imageHTML ? (videoHTML || imageHTML) : ''}
                <div class="research-header">
                    <div class="research-header-left">
                        <div class="research-title">${research.title}</div>
                        <div class="research-venue">${research.venue}</div>
                    </div>
                    <div class="research-links">
                        ${research.links.map(link => 
                            `<a href="${link.url}" class="research-link">${link.text}</a>`
                        ).join('')}
                    </div>
                </div>
            </div>
        </div>
        `;
    }).join('');
    
    // Setup video autoplay with time range (0:10 to 0:15)
    setTimeout(() => {
        const videos = container.querySelectorAll('.research-video');
        videos.forEach(video => {
            video.currentTime = 10; // Start at 10 seconds
            video.play().catch(e => console.log('Autoplay prevented:', e));
            
            video.addEventListener('timeupdate', function() {
                if (this.currentTime >= 15) {
                    this.currentTime = 10; // Loop back to 10 seconds
                }
            });
        });
    }, 100);
}

function renderApps() {
    const container = document.querySelector('.app-list');
    if (!container) return;
    
    container.innerHTML = projectsData.map((app, index) => {
        const videoHTML = app.video 
            ? `<div class="app-media"><video class="app-video" muted loop playsinline preload="auto" data-video-index="${index}"><source src="${app.video}" type="video/mp4">Your browser does not support the video tag.</video></div>`
            : '';
        const imageHTML = app.image 
            ? `<div class="app-media"><img src="${app.image}" alt="${app.name}" class="app-image" /></div>`
            : '';
        
        return `
        <div class="app-item">
            <div class="app-content-wrapper">
                ${videoHTML || imageHTML ? (videoHTML || imageHTML) : ''}
                <div class="app-content">
                    <div class="app-name">${app.name}</div>
                    <div class="app-status">${app.status}</div>
                    <div class="app-description">${app.description}</div>
                    <div class="app-tech">${app.tech}</div>
                    <a href="${app.link}" class="app-link">Link</a>
                </div>
            </div>
        </div>
        `;
    }).join('');
    
    // Setup video autoplay with time range (0:10 to 0:15) for projects
    setTimeout(() => {
        const videos = container.querySelectorAll('.app-video');
        videos.forEach(video => {
            video.currentTime = 10; // Start at 10 seconds
            video.play().catch(e => console.log('Autoplay prevented:', e));
            
            video.addEventListener('timeupdate', function() {
                if (this.currentTime >= 15) {
                    this.currentTime = 10; // Loop back to 10 seconds
                }
            });
        });
    }, 100);
}

function renderAchievements() {
    const container = document.querySelector('.achievement-list');
    if (!container) return;
    
    if (!achievementsData || achievementsData.length === 0) {
        console.warn('No achievements data found');
        return;
    }
    
    container.innerHTML = achievementsData.map((achievement, index) => `
        <div class="achievement-item" data-index="${index}">
            <div class="achievement-title">${achievement.title || ''}</div>
            <div class="achievement-description">${achievement.description || ''}</div>
        </div>
    `).join('');
    
    // Ensure all items are visible after a short delay
    setTimeout(() => {
        const items = container.querySelectorAll('.achievement-item');
        items.forEach(item => {
            item.classList.add('animated');
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        });
    }, 100);
}

function renderHeader() {
    const nameEl = document.querySelector('.name');
    const socialLinksEl = document.querySelector('.social-links');
    
    if (nameEl) nameEl.textContent = siteConfig.name;
    
    if (socialLinksEl) {
        const linksHTML = siteConfig.socialLinks.map((link, index) => {
            const separator = index < siteConfig.socialLinks.length - 1 ? '<span class="separator">/</span>' : '';
            const target = link.target ? `target="${link.target}"` : '';
            return `<a href="${link.url}" class="social-link" ${target}>${link.text}</a>${separator}`;
        }).join('');
        socialLinksEl.innerHTML = linksHTML;
    }
}

// Initialize all sections when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    renderHeader();
    renderEducation();
    renderExperiences();
    renderResearch();
    renderApps();
    renderAchievements();
});

