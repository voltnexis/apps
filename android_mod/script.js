// Sample MOD APK data
const modApps = [
    {
        id: 11,
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
        id: 12,
        name: "Spotify Premium MOD",
        developer: "Spotify AB (Modified)",
        tagline: "Premium Music Streaming Unlocked",
        icon: "../img/spotify.webp",
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
        id: 13,
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
    },
  {
    id: 1,
    name: "Bus Simulator Indonesia MOD",
    developer: "Maleo (Modified)",
    tagline: "Drive with Unlimited Fuel & Custom Skins",
    icon: "https://via.placeholder.com/60",
    rating: 4.6,
    category: "simulation",
    trending: true,
    new: false,
    version: "4.4",
    size: "503MB",
    lastUpdated: "Aug 21, 2024",
    description: `<h3>🚌 MOD Features</h3><ul><li>Unlimited money</li><li>Custom livery support</li><li>No fuel consumption</li><li>Unlocked all cities</li></ul>`,
    downloadUrl: "https://www.mediafire.com/file/krsxaeqm183dt92/bus-simulator-indonesia_v4.4.VoltNexis.apk/file",
    apkObb: false,
    oldVersions: []
  },
  {
    id: 2,
    name: "Car Parking Multiplayer MOD",
    developer: "Olzhass (Modified)",
    tagline: "Open World Parking & Racing",
    icon: "https://via.placeholder.com/60",
    rating: 4.5,
    category: "simulation",
    trending: true,
    new: false,
    version: "4.9.3.3",
    size: "1.48GB",
    lastUpdated: "Jul 30, 2024",
    description: `<h3>🚗 MOD Features</h3><ul><li>Unlimited money</li><li>Unlocked cars</li><li>Free shopping</li><li>Teleport anywhere</li></ul>`,
    downloadUrl: "https://www.mediafire.com/file/znz0vm10ifw5ehn/car_parking_multiplayer-v4.9.3.3_carsparkingmultiplayer.com.voltnexis.apk/file",
    apkObb: false,
    oldVersions: [
        { version: "4.9.2", size: "1.42GB", url: "https://www.mediafire.com/file/lys7l46yzep125j/car-parking-multiplayer-_v4.9.2-apkgw-com.voltnexis.apk/file" }
    ]
  },
  {
    id: 3,
    name: "GTA III CLEO MOD APK+SCRIPTS",
    developer: "Rockstar Games (Modified)",
    tagline: "Liberty City Unleashed",
    icon: "https://via.placeholder.com/60",
    rating: 4.3,
    category: "action",
    trending: false,
    new: false,
    version: "1.8",
    size: "6KB",
    lastUpdated: "Jun 12, 2024",
    description: `<h3>🔫 MOD Features</h3><ul><li>Unlimited ammo</li><li>All missions unlocked</li><li>Custom skins</li><li>Script injector enabled</li></ul>`,
    downloadUrl: "https://www.mediafire.com/file/idtbp20elydi2tt/GTA_3_APK%252BSCRIPTS.zip/file",
    apkObb: true,
    oldVersions: []
  },
  {
    id: 4,
    name: "GTA San Andreas CLEO MOD APK+SCRIPTS",
    developer: "Rockstar Games (Modified)",
    tagline: "CJ’s World, Reimagined",
    icon: "https://via.placeholder.com/60",
    rating: 4.7,
    category: "action",
    trending: true,
    new: false,
    version: "2.10",
    size: "15MB",
    lastUpdated: "May 25, 2024",
    description: `<h3>🏙️ MOD Features</h3><ul><li>Unlimited health</li><li>Cheat menu enabled</li><li>HD graphics patch</li><li>Script mods included</li></ul>`,
    downloadUrl: "https://www.mediafire.com/file/7qjpwtlirwsyr4a/GTA_SA_APK%252BSCRIPTS.zip/file",
    apkObb: true,
    oldVersions: []
  },
  {
    id: 5,
    name: "GTA Vice City CLEO MOD APK+SCRIPTS",
    developer: "Rockstar Games (Modified)",
    tagline: "Retro Crime Paradise",
    icon: "https://via.placeholder.com/60",
    rating: 4.4,
    category: "action",
    trending: false,
    new: false,
    version: "1.12",
    size: "6MB",
    lastUpdated: "Apr 18, 2024",
    description: `<h3>🌴 MOD Features</h3><ul><li>Unlimited money</li><li>All weapons unlocked</li><li>Custom vehicles</li><li>Script injector included</li></ul>`,
    downloadUrl: "https://www.mediafire.com/file/gw1oxe7ienp36he/GTA_VC_APK%252BSCRIPT.zip/file",
    apkObb: true,
    oldVersions: []
  },
  {
    id: 6,
    name: "HappyMod",
    developer: "HappyMod Team",
    tagline: "MOD APK Hub",
    icon: "https://via.placeholder.com/60",
    rating: 4.2,
    category: "tools",
    trending: true,
    new: false,
    version: "3.1.0",
    size: "16MB",
    lastUpdated: "Sep 1, 2024",
    description: `<h3>📦 Features</h3><ul><li>Access thousands of modded apps</li><li>Fast download speeds</li><li>User ratings and feedback</li></ul>`,
    downloadUrl: "https://www.mediafire.com/file/58h4gvpijh0eh9p/HappyMod-Pro-3-1-0.apk/file",
    apkObb: false,
    oldVersions: []
  },
  {
    id: 7,
    name: "Hill Climb Racing MOD",
    developer: "Fingersoft (Modified)",
    tagline: "Gravity-Defying Fun",
    icon: "https://via.placeholder.com/60",
    rating: 4.3,
    category: "racing",
    trending: false,
    new: false,
    version: "1.66.0",
    size: "100MB",
    lastUpdated: "Aug 10, 2024",
    description: `<h3>🏁 MOD Features</h3><ul><li>Unlimited coins</li><li>All vehicles unlocked</li><li>No fuel limit</li></ul>`,
    downloadUrl: "https://www.mediafire.com/file/8nlqgzlgd7qxvns/hill-climb-racing_v1.66.0-an1.voltnexis.apk/file",
    apkObb: false,
    oldVersions: []
  },
  {
    id: 8,
    name: "MadOut2 BigCityOnline MOD",
    developer: "MadOut Games (Modified)",
    tagline: "Open World Chaos",
    icon: "https://via.placeholder.com/60",
    rating: 4.1,
    category: "action",
    trending: true,
    new: false,
    version: "17.0.3",
    size: "1.22GB",
    lastUpdated: "Jul 5, 2024",
    description: `<h3>🚓 MOD Features</h3><ul><li>Unlimited money</li><li>All vehicles unlocked</li><li>Offline mode enabled</li></ul>`,
    downloadUrl: "https://www.mediafire.com/file/1palcz04r9rb7lr/MadOut2-v17.03.getmodsapk.voltnexis.apk/file",
    apkObb: false,
    oldVersions: [
        { version: "16.10", size: "1.17GB", url: "https://www.mediafire.com/file/j99l8vs92180aqv/MadOut2-v16.10-an1.VoltNexis.apk/file" }
    ]
  },
  {
    id: 9,
    name: "Moto Rider GO MOD",
    developer: "T-Bull (Modified)",
    tagline: "Ride Fast, Ride Free",
    icon: "https://via.placeholder.com/60",
    rating: 4.2,
    category: "racing",
    trending: false,
    new: false,
    version: "1.93.0",
    size: "88MB",
    lastUpdated: "Jun 8, 2024",
    description: `<h3>🏍️ MOD Features</h3><ul><li>Unlimited coins</li><li>Unlocked bikes</li><li>No traffic collisions</li></ul>`,
    downloadUrl: "https://www.mediafire.com/file/m37tq4gzc2nyl9f/moto-rider-go_1.93.0-an1.VoltNexis.apk/file",
    apkObb: false,
    oldVersions: []
  },
  {
    id: 10,
    name: "Moto X3M MOD",
    developer: "Ace Viral (Modified)",
    tagline: "Extreme Bike Stunts",
    icon: "https://via.placeholder.com/60",
    rating: 4.0,
    category: "arcade",
    trending: false,
    new: false,
    version: "1.21.1",
    size: "42MB",
    lastUpdated: "May 3, 2024",
    description: `<h3>🛵 MOD Features</h3><ul><li>All levels unlocked</li><li>No ads</li><li>Unlimited lives</li></ul>`,
    downloadUrl: "https://www.mediafire.com/file/qj41s80dt4s4epq/moto-x3m-v1-20-1.VoltNexis.apk/file",
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
