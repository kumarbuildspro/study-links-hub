const youtubeLinks = [
    {
    title: "21 AI Tools That Will Make You Rich Before 2026",
    category: "AI / Technology",
    url: "https://youtu.be/jG9aLEawV7Y?si=2mq8dF4Aj5WtZ4T2"
    },
    {
    title: "AI Complete OneShot Course | Learn AI & Deep Learning from Scratch",
    category: "AI / Technology",
    url: "https://youtu.be/bZxAKA69xqg?si=_IE7mHgot-j0CXtc"
    },
    {
        title: "How to Become Dangerously Self Educated (Complete Plan)",
        category: "Self Improvement / Education",
        url: "https://youtu.be/s24ZVyURGBc?si=Qtp7D6BPGlzn45R-"
    }
];

// URL ko validate karne ka function
function isValidURL(string) {
    try {
        const url = new URL(string);
        return url.protocol === "http:" || url.protocol === "https:";
    } catch (_) {
        return false;  
    }
}

function loadLinks() {
    const container = document.getElementById('links-container');
    if (!container) return;
    
    container.innerHTML = '';

    youtubeLinks.forEach(item => {
        // Agar URL galat ya kharab hoga toh ye video skip ho jayega
        if (!item.url || !isValidURL(item.url)) {
            console.warn(`Skipped invalid link: ${item.title}`);
            return; 
        }

        const card = document.createElement('div');
        card.className = 'card';

        card.innerHTML = `
            <div class="card-info">
                <h3>${item.title}</h3>
                <p>Category: ${item.category}</p>
            </div>
            <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="btn-watch">
                Watch Video
            </a>
        `;

        container.appendChild(card);
    });
}

// Page load hone par links load karein aur Theme button bind karein
document.addEventListener('DOMContentLoaded', () => {
    loadLinks();

    const themeToggleBtn = document.getElementById('theme-toggle');
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            
            if (document.body.classList.contains('dark-mode')) {
                themeToggleBtn.textContent = '☀️';
            } else {
                themeToggleBtn.textContent = '🌙';
            }
        });
    }
});
