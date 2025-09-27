// Windows software data with complete details
const apps = [
    {
        id: 2,
        name: "Discord",
        developer: "Discord Inc.",
        tagline: "Voice, Video & Text Chat",
        icon: "../img/discord.webp",
        rating: 4.5,
        category: "social",
        trending: true,
        new: false,
        version: "1.0.9015",
        size: "85MB",
        windowsVersion: "8.1+",
        lastUpdated: "Dec 15, 2024",
        description: `<h3>🚀 Features</h3><p>Discord is a free voice, video, and text chat app for gamers and communities. Connect with friends and communities worldwide.</p><h3>✨ What's New</h3><ul><li>Enhanced voice quality</li><li>Improved screen sharing</li><li>Better server management</li></ul>`,
        downloads: [
            { type: "64-bit", size: "85MB", url: "https://www.mediafire.com/file/dc123/discord-v1.0.9015-x64.exe/file" }
        ],
        oldVersions: [
            { version: "1.0.9014", downloads: [{ type: "64-bit", size: "83MB", url: "https://www.mediafire.com/file/dc456/discord-v1.0.9014-x64.exe/file" }] }
        ]
    },
    {
        id: 3,
        name: "Steam",
        developer: "Valve Corporation",
        tagline: "Ultimate Gaming Platform",
        icon: "../img/steam.webp",
        rating: 4.2,
        category: "games",
        trending: true,
        new: false,
        version: "1.0.0.91",
        size: "2.5MB",
        windowsVersion: "10+",
        lastUpdated: "Dec 12, 2024",
        description: `<h3>🎮 Gaming Platform</h3><p>Steam is the ultimate destination for playing, discussing, and creating games. Access thousands of games and connect with millions of players.</p><h3>🆕 Latest Updates</h3><ul><li>New Steam Deck compatibility</li><li>Enhanced library interface</li><li>Improved download speeds</li></ul>`,
        downloads: [
            { type: "64-bit", size: "2.5MB", url: "https://cdn.akamai.steamstatic.com/client/installer/SteamSetup.exe" },
            { type: "32-bit", size: "2.3MB", url: "https://cdn.akamai.steamstatic.com/client/installer/SteamSetup.exe" }
        ],
        oldVersions: [
            { version: "3.5.16", downloads: [{ type: "64-bit", size: "2.4MB", url: "https://www.mediafire.com/file/stold123/steam-v3.5.16-x64.exe/file" }] }
        ]
    },
    {
        id: 4,
        name: "Google Chrome",
        developer: "Google LLC",
        tagline: "Fast & Secure Browser",
        icon: "../img/chrome.webp",
        rating: 4.3,
        category: "tools",
        trending: false,
        new: false,
        version: "129.0.6668.71",
        size: "95MB",
        windowsVersion: "10+",
        lastUpdated: "Dec 14, 2024",
        description: `<h3>🌐 Web Browser</h3><p>Google Chrome is a fast, secure, and free web browser built for the modern web. Browse with confidence and speed.</p><h3>🌟 Key Features</h3><ul><li>Fast browsing and search</li><li>Built-in security features</li><li>Sync across all devices</li></ul>`,
        downloads: [
            { type: "64-bit", size: "95MB", url: "https://dl.google.com/chrome/install/ChromeStandaloneSetup64.exe" },
            { type: "32-bit", size: "90MB", url: "https://dl.google.com/chrome/install/ChromeStandaloneSetup.exe" }
        ],
        oldVersions: []
    },
    {
        id: 5,
        name: "VLC Media Player",
        developer: "VideoLAN",
        tagline: "Universal Media Player",
        icon: "../img/vlc.webp",
        rating: 4.1,
        category: "entertainment",
        trending: false,
        new: false,
        version: "3.0.21",
        size: "40MB",
        windowsVersion: "7+",
        lastUpdated: "Dec 13, 2024",
        description: `<h3>🎬 Media Player</h3><p>VLC is a free and open source cross-platform multimedia player and framework that plays most multimedia files.</p><h3>🔒 Features</h3><ul><li>Plays all media formats</li><li>No codec packs needed</li><li>Completely free</li></ul>`,
        downloads: [
            { type: "64-bit", size: "40MB", url: "https://download.videolan.org/vlc/3.0.21/win64/vlc-3.0.21-win64.exe" },
            { type: "32-bit", size: "38MB", url: "https://download.videolan.org/vlc/3.0.21/win32/vlc-3.0.21-win32.exe" }
        ],
        oldVersions: []
    },
    {
        id: 6,
        name: "Spotify",
        developer: "Spotify AB",
        tagline: "Music & Podcasts",
        icon: "../img/spotify.webp",
        rating: 4.6,
        category: "entertainment",
        trending: false,
        new: false,
        version: "1.2.38.1447.g1a4c1e2c",
        size: "85MB",
        windowsVersion: "10+",
        lastUpdated: "Dec 11, 2024",
        description: `<h3>🎵 Music Streaming</h3><p>Spotify gives you instant access to millions of songs and podcasts. Listen to your favorite music and discover new tracks.</p><h3>🎧 Premium Features</h3><ul><li>Ad-free music streaming</li><li>Offline downloads</li><li>High-quality audio</li></ul>`,
        downloads: [
            { type: "64-bit", size: "85MB", url: "https://download.scdn.co/SpotifySetup.exe" }
        ],
        oldVersions: []
    },
    {
        id: 7,
        name: "Visual Studio Code",
        developer: "Microsoft Corporation",
        tagline: "Code Editor Redefined",
        icon: "../img/vs_code.webp",
        rating: 4.7,
        category: "tools",
        trending: false,
        new: true,
        version: "1.95.1",
        size: "95MB",
        windowsVersion: "10+",
        lastUpdated: "Dec 17, 2024",
        description: `<h3>💻 Code Editor</h3><p>Visual Studio Code is a lightweight but powerful source code editor. It comes with built-in support for JavaScript, TypeScript and Node.js.</p><h3>🔧 Features</h3><ul><li>IntelliSense code completion</li><li>Built-in Git integration</li><li>Extensive extension marketplace</li></ul>`,
        downloads: [
            { type: "64-bit", size: "95MB", url: "https://update.code.visualstudio.com/latest/win32-x64-user/stable" }
        ],
        oldVersions: []
    },
    {
        id: 8,
        name: "OBS Studio",
        developer: "OBS Project",
        tagline: "Live Streaming & Recording",
        icon: "../img/obs_studio.webp",
        rating: 4.5,
        category: "entertainment",
        trending: false,
        new: false,
        version: "30.2.3",
        size: "120MB",
        windowsVersion: "10+",
        lastUpdated: "Dec 10, 2024",
        description: `<h3>🎥 Streaming Software</h3><p>OBS Studio is free and open source software for video recording and live streaming. Create professional productions with powerful features.</p><h3>📱 Features</h3><ul><li>High performance real time capture</li><li>Unlimited scenes and sources</li><li>Intuitive audio mixer</li></ul>`,
        downloads: [
            { type: "64-bit", size: "120MB", url: "https://cdn-fastly.obsproject.com/downloads/OBS-Studio-30.2.3-Windows.zip" },
            { type: "32-bit", size: "120MB", url: "https://github.com/obsproject/obs-studio/releases/download/27.2.4/OBS-Studio-27.2.4-Full-Installer-x86.exe" }
        ],
        oldVersions: []
    }
];

let currentFilter = 'all';
let searchQuery = '';

// DOM Elements
const appsGrid = document.getElementById('appsGrid');
const searchInput = document.getElementById('searchInput');
const filterBtns = document.querySelectorAll('.filter-btn');

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    renderApps();
    setupEventListeners();
});

function setupEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', function() {
        searchQuery = this.value.toLowerCase();
        renderApps();
    });

    // Filter buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentFilter = this.dataset.filter;
            renderApps();
        });
    });
}

function renderApps() {
    const filteredApps = apps.filter(app => {
        const matchesSearch = app.name.toLowerCase().includes(searchQuery) || 
                            app.developer.toLowerCase().includes(searchQuery);
        
        const matchesFilter = currentFilter === 'all' || 
                            app.category === currentFilter ||
                            (currentFilter === 'trending' && app.trending) ||
                            (currentFilter === 'new' && app.new);
        
        return matchesSearch && matchesFilter;
    });

    appsGrid.innerHTML = filteredApps.map(app => createAppCard(app)).join('');
    
    // Add click listeners to app cards
    document.querySelectorAll('.app-card').forEach(card => {
        card.addEventListener('click', function() {
            const appId = this.dataset.appId;
            const app = apps.find(a => a.id == appId);
            const appData = encodeURIComponent(JSON.stringify(app));
            window.location.href = `app_exe.html?data=${appData}`;
        });
    });
}

function createAppCard(app) {
    const stars = generateStars(app.rating);
    const appData = encodeURIComponent(JSON.stringify(app));
    
    return `
        <div class="app-card" data-app-id="${app.id}">
            <div class="app-card-header">
                <div class="app-card-icon">
                    <img src="${app.icon}" alt="${app.name}">
                </div>
                <div class="app-card-info">
                    <h3>${app.name}</h3>
                    <p class="developer">${app.developer}</p>
                </div>
            </div>
            <p class="app-card-tagline">${app.tagline}</p>
            <div class="app-card-footer">
                <div class="app-rating">
                    <div class="stars">${stars}</div>
                    <span>${app.rating}</span>
                </div>
                <button class="download-btn-small" onclick="event.stopPropagation(); window.location.href='app_exe.html?data=${appData}'">
                    Details
                </button>
            </div>
        </div>
    `;
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}
