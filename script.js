// Yahan aap apne sare YouTube videos ke links aur details add kar sakte hain
const youtubeLinks = [
    {
        title: "Python Programming Full Course",
        category: "Programming",
        url: "https://www.youtube.com/watch?v=v001"
    },
    {
        title: "Class 11 Maths - Complex Numbers",
        category: "Mathematics",
        url: "https://www.youtube.com/watch?v=v002"
    },
    {
        title: "HTML & CSS Crash Course",
        category: "Web Development",
        url: "https://www.youtube.com/watch?v=v003"
    }
];

// Website par links load karne ka function
function loadLinks() {
    const container = document.getElementById('links-container');
    container.innerHTML = '';

    youtubeLinks.forEach(item => {
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

// Page load hone par execution
document.addEventListener('DOMContentLoaded', loadLinks);
