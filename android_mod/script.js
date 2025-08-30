// Sample MOD APK data
const modApps = [
    {
        id: 1,
        name: "WhatsApp Plus MOD",
        developer: "WhatsApp Inc. (Modified)",
        tagline: "Enhanced WhatsApp with Premium Features",
        icon: "https://via.placeholder.com/60",
        rating: 4.5,
        category: "social",
        trending: true,
        new: true,
        version: "2.23.25.84",
        size: "65MB",
        lastUpdated: "Dec 18, 2024",
        description: `<h3>🚀 MOD Features</h3><p>WhatsApp Plus MOD with premium features unlocked. Enhanced privacy options and customization features.</p><h3>✨ What's Unlocked</h3><ul><li>Premium themes and customization</li><li>Enhanced privacy controls</li><li>Anti-ban protection</li><li>Dual WhatsApp support</li></ul>`,
        downloadUrl: "https://www.mediafire.com/file/wa123mod/whatsapp-plus-mod-v2.23.25.84.apk/file",
        apkObb: false,
        oldVersions: [
            { version: "2.23.20.84", size: "63MB", url: "https://www.mediafire.com/file/wa456mod/whatsapp-plus-mod-v2.23.20.84.apk/file" },
            { version: "2.23.15.84", size: "62MB", url: "https://www.mediafire.com/file/wa789mod/whatsapp-plus-mod-v2.23.15.84.apk/file" }
        ]
    },
    {
        id: 2,
        name: "Spotify Premium MOD",
        developer: "Spotify AB (Modified)",
        tagline: "Premium Music Streaming Unlocked",
        icon: "https://via.placeholder.com/60",
        rating: 4.6,
        category: "entertainment",
        trending: true,
        new: false,
        version: "8.8.52.345",
        size: "45MB",
        lastUpdated: "Dec 15, 2024",
        description: `<h3>🎵 Premium Features</h3><p>Spotify Premium MOD with all premium features unlocked. Enjoy unlimited music streaming without ads.</p><h3>🎧 Unlocked Features</h3><ul><li>Unlimited skips and replays</li><li>Ad-free music streaming</li><li>High quality audio (320kbps)</li><li>Offline downloads enabled</li></ul>`,
        downloadUrl: "https://www.mediafire.com/file/sp123mod/spotify-premium-mod-v8.8.52.345.apk/file",
        apkObb: false,
        oldVersions: [
            { version: "8.8.50.345", size: "44MB", url: "https://www.mediafire.com/file/sp456mod/spotify-premium-mod-v8.8.50.345.apk/file" }
        ]
    },
    {
        id: 3,
        name: "Instagram Plus MOD",
        developer: "Instagram Inc. (Modified)",
        tagline: "Enhanced Instagram Experience",
        icon: "https://via.placeholder.com/60",
        rating: 4.4,
        category: "social",
        trending: false,
        new: true,
        version: "307.0.0.34.111",
        size: "48MB",
        lastUpdated: "Dec 17, 2024",
        description: `<h3>📸 Enhanced Features</h3><p>Instagram Plus MOD with additional features for better social media experience.</p><h3>🌟 MOD Features</h3><ul><li>Download photos and videos</li><li>View stories anonymously</li><li>Disable read receipts</li><li>Zoom profile pictures</li></ul>`,
        downloadUrl: "https://www.mediafire.com/file/ig123mod/instagram-plus-mod-v307.0.0.34.111.apk/file",
        apkObb: false,
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
    const filteredApps = modApps.filter(app => {
        const matchesSearch = app.name.toLowerCase().includes(searchQuery) || 
                            app.developer.toLowerCase().includes(searchQuery);
        
        const matchesFilter = currentFilter === 'all' || 
                            (currentFilter === 'premium' && app.trending) ||
                            (currentFilter === 'adfree' && app.category === 'social') ||
                            (currentFilter === 'unlimited' && app.category === 'entertainment');
        
        return matchesSearch && matchesFilter;
    });

    appsGrid.innerHTML = '';
    
    filteredApps.forEach(app => {
        const card = document.createElement('div');
        card.className = 'app-card';
        card.onclick = () => {
            const appData = encodeURIComponent(JSON.stringify(app));
            window.location.href = `app-detail.html?data=${appData}`;
        };
        
        const tags = [];
        if (app.trending) tags.push('trending');
        if (app.new) tags.push('new');
        tags.push('premium', 'mod');
        
        card.innerHTML = `
            <img src="${app.icon}" alt="${app.name}" class="app-icon">
            <div class="app-name">${app.name}</div>
            <div class="app-meta">
                ${tags.map(tag => `<span class="meta-tag">${tag}</span>`).join('')}
            </div>
            <div style="font-size: 14px; color: #ccc;">
                v${app.version} • ${app.size}
            </div>
        `;
        appsGrid.appendChild(card);
    });
}