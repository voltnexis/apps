// Sample app data with complete details
const apps = [
    {
        id: 1,
        name: "ServeTracko by VoltNexis",
        developer: "VoltNexis PVT LMTD",
        tagline: "Simple. Reliable. Fast.",
        icon: "../img/instagram.webp",
        rating: 4.5,
        category: "social",
        trending: true,
        new: true,
        version: "2.2.0",
        size: "13MB",
        lastUpdated: "Aug 29, 2025",
        description: `<h3>🚀 Features</h3><p>Serve Tracker is a FREE Service Tool available for Android and other smartphones. ServeTrack uses your phone's Internet connection to Note and recall customers and orders.</p><h3>✨ What's New</h3><ul><li>High Storage</li><li>Improved noting features</li><li>Better file sharing capabilities</li></ul>`,
        downloadUrl: "https://ameeennn.github.io/servetracko",
        apkObb: false,
        oldVersions: [
            { version: "2.1.0", size: "12MB", url: "https://www.mediafire.com/file/def456/servetracko-v2.1.0.apk/file" },
            { version: "2.0.0", size: "11MB", url: "https://www.mediafire.com/file/ghi789/servetracko-v2.0.0.apk/file" }
        ]
    },
    {
        id: 4,
        name: "WhatsApp Messenger",
        developer: "WhatsApp LLC",
        tagline: "Simple. Reliable. Secure.",
        icon: "../img/whatsapp.webp",
        rating: 4.5,
        category: "social",
        trending: true,
        new: false,
        version: "2.23.24.76",
        size: "65MB",
        lastUpdated: "Dec 15, 2024",
        description: `<h3>🚀 Features</h3><p>WhatsApp Messenger is a FREE messaging app available for Android and other smartphones. WhatsApp uses your phone's Internet connection to message and call friends and family.</p><h3>✨ What's New</h3><ul><li>Enhanced security with end-to-end encryption</li><li>Improved group chat features</li><li>Better file sharing capabilities</li></ul>`,
        downloadUrl: "https://www.mediafire.com/file/wa123/whatsapp-messenger-v2.23.24.76.apk/file",
        apkObb: true,
        oldVersions: [
            { version: "2.23.20.76", size: "63MB", url: "https://www.mediafire.com/file/wa456/whatsapp-v2.23.20.76.apk/file" }
        ]
    },
    {
        id: 2,
        name: "PUBG Mobile",
        developer: "PUBG Corporation",
        tagline: "Battle Royale Experience",
        icon: "../img/pubg.webp",
        rating: 4.2,
        category: "games",
        trending: true,
        new: false,
        version: "2.9.0",
        size: "1.2GB",
        lastUpdated: "Dec 12, 2024",
        description: `<h3>🎮 Game Features</h3><p>PUBG MOBILE delivers the most intense free-to-play multiplayer action on mobile. Drop in, gear up, and compete.</p><h3>🆕 Latest Updates</h3><ul><li>New Sanhok 2.0 map</li><li>Enhanced graphics and performance</li><li>New weapons and vehicles</li></ul>`,
        downloadUrl: "https://www.mediafire.com/file/xyz123/pubg-mobile-v2.9.0.apk/file",
        obbUrl: "https://www.mediafire.com/file/obb456/pubg-mobile-v2.9.0.obb/file",
        apkObb: true,
        oldVersions: [
            { version: "2.8.0", size: "1.1GB", url: "https://www.mediafire.com/file/old123/pubg-mobile-v2.8.0.apk/file", obbUrl: "https://www.mediafire.com/file/oldobb123/pubg-mobile-v2.8.0.obb/file" }
        ]
    },
    {
        id: 3,
        name: "Instagram",
        developer: "Instagram",
        tagline: "Photo & Video Sharing",
        icon: "../img/instagram.webp",
        rating: 4.3,
        category: "social",
        trending: false,
        new: false,
        version: "307.0.0.34.111",
        size: "45MB",
        lastUpdated: "Dec 14, 2024",
        description: `<h3>📸 Share Your Story</h3><p>Instagram is a simple way to capture and share the world's moments. Follow your friends and family to see what they're up to.</p><h3>🌟 Key Features</h3><ul><li>Stories that disappear after 24 hours</li><li>Reels for short, entertaining videos</li><li>Direct messaging with friends</li></ul>`,
        downloadUrl: "https://www.mediafire.com/file/zlkrcu4hrxoj7yh/com-instagram-android-396.0.0.46.242-VoltNexis.apk/file",
        apkObb: false,
        oldVersions: []
    },
    {
        id: 5,
        name: "Chrome Browser",
        developer: "Google LLC",
        tagline: "Fast & Secure Browser",
        icon: "../img/chrome.webp",
        rating: 4.1,
        category: "tools",
        trending: false,
        new: false,
        version: "119.0.6045.193",
        size: "95MB",
        lastUpdated: "Dec 13, 2024",
        description: `<h3>🌐 Browse the Web</h3><p>Google Chrome is a fast, easy to use, and secure web browser. Designed for Android.</p><h3>🔒 Security Features</h3><ul><li>Safe Browsing protection</li><li>Automatic security updates</li><li>Built-in password manager</li></ul>`,
        downloadUrl: "https://www.mediafire.com/file/ch123/chrome-v119.0.6045.193.apk/file",
        apkObb: false,
        oldVersions: []
    },
    {
        id: 6,
        name: "Spotify Music",
        developer: "Spotify AB",
        tagline: "Music & Podcasts",
        icon: "../img/spotify.webp",
        rating: 4.6,
        category: "entertainment",
        trending: false,
        new: false,
        version: "8.8.96.488",
        size: "85MB",
        lastUpdated: "Dec 11, 2024",
        description: `<h3>🎵 Music Streaming</h3><p>Spotify gives you instant access to millions of songs and podcasts. Listen to your favorite music and discover new tracks.</p><h3>🎧 Premium Features</h3><ul><li>Ad-free music streaming</li><li>Offline downloads</li><li>High-quality audio</li></ul>`,
        downloadUrl: "https://www.mediafire.com/file/sp123/spotify-v8.8.96.488.apk/file",
        apkObb: false,
        oldVersions: []
    },
    {
        id: 7,
        name: "Telegram",
        developer: "Telegram FZ-LLC",
        tagline: "Cloud-Based Messaging",
        icon: "../img/telegram.webp",
        rating: 4.7,
        category: "social",
        trending: false,
        new: true,
        version: "10.2.5",
        size: "55MB",
        lastUpdated: "Dec 17, 2024",
        description: `<h3>💬 Secure Messaging</h3><p>Telegram is a messaging app with a focus on speed and security. It's super-fast, simple and free.</p><h3>🔐 Privacy Features</h3><ul><li>Secret chats with end-to-end encryption</li><li>Self-destructing messages</li><li>No ads or subscription fees</li></ul>`,
        downloadUrl: "https://www.mediafire.com/file/tg123/telegram-v10.2.5.apk/file",
        apkObb: false,
        oldVersions: []
    },
    {
        id: 8,
        name: "VLC Media Player",
        developer: "VideoLAN",
        tagline: "Universal Media Player",
        icon: "../img/vlc.webp",
        rating: 4.5,
        category: "tools",
        trending: false,
        new: false,
        version: "3.5.4",
        size: "40MB",
        lastUpdated: "Dec 10, 2024",
        description: `<h3>🎬 Media Player</h3><p>VLC media player is a free and open source cross-platform multimedia player that plays most multimedia files.</p><h3>📱 Features</h3><ul><li>Plays all video and audio formats</li><li>Network streaming support</li><li>Subtitle support</li></ul>`,
        downloadUrl: "https://www.mediafire.com/file/vlc123/vlc-v3.5.4.apk/file",
        apkObb: false,
        oldVersions: []
    },
    {
        id: 9,
        name: "ChatGPT",
        developer: "OpenAI",
        tagline: "AI Chat Assistant",
        icon: "../img/chatgpt.webp",
        rating: 4.8,
        category: "tools",
        trending: true,
        new: false,
        version: "1.0.0",
        size: "25MB",
        lastUpdated: "Sep 10, 2025",
        description: `<h3>🤖 AI Assistant</h3><p>ChatGPT helps you with conversations, coding, and creative writing.</p><h3>📱 Features</h3><ul><li>AI-powered chat</li><li>Code and text generation</li><li>Cross-platform support</li></ul>`,
        downloadUrl: "https://www.mediafire.com/file/chatgpt/chatgpt.apk/file",
        apkObb: false,
        oldVersions: []
    },
    {
        id: 10,
        name: "EUT Wallet",
        developer: "EUT Team",
        tagline: "Digital Wallet",
        icon: "../img/eutwallet.webp",
        rating: 4.2,
        category: "finance",
        trending: false,
        new: false,
        version: "2.3.1",
        size: "18MB",
        lastUpdated: "Aug 20, 2025",
        description: `<h3>💳 Wallet App</h3><p>EUT Wallet helps manage your digital money securely.</p><h3>📱 Features</h3><ul><li>Send & receive funds</li><li>Transaction history</li><li>Secure encryption</li></ul>`,
        downloadUrl: "https://www.mediafire.com/file/eutwallet/eutwallet.apk/file",
        apkObb: false,
        oldVersions: []
    },
    {
        id: 11,
        name: "Google Family",
        developer: "Google LLC",
        tagline: "Family Safety & Sharing",
        icon: "../img/googlefamily.webp",
        rating: 4.6,
        category: "tools",
        trending: false,
        new: false,
        version: "6.1.2",
        size: "30MB",
        lastUpdated: "Jul 18, 2025",
        description: `<h3>👨‍👩‍👧 Family Management</h3><p>Google Family helps you manage kids' accounts, apps, and screen time.</p><h3>📱 Features</h3><ul><li>Parental controls</li><li>Location tracking</li><li>Screen time limits</li></ul>`,
        downloadUrl: "https://www.mediafire.com/file/googlefamily/googlefamily.apk/file",
        apkObb: false,
        oldVersions: []
    },
    {
        id: 12,
        name: "GTA 3",
        developer: "Rockstar Games",
        tagline: "Classic Open World",
        icon: "../img/gta3.webp",
        rating: 4.7,
        category: "games",
        trending: true,
        new: false,
        version: "1.8",
        size: "700MB",
        lastUpdated: "Jun 12, 2025",
        description: `<h3>🚗 Open World Action</h3><p>GTA 3 brings the revolutionary open-world experience to mobile.</p><h3>🎮 Features</h3><ul><li>Story missions</li><li>Open-world freedom</li><li>HD graphics</li></ul>`,
        downloadUrl: "https://www.mediafire.com/file/gta3/gta3.apk/file",
        apkObb: true,
        oldVersions: []
    },
    {
        id: 13,
        name: "GTA 4",
        developer: "Rockstar Games",
        tagline: "Liberty City Stories",
        icon: "../img/gta4.webp",
        rating: 4.8,
        category: "games",
        trending: true,
        new: false,
        version: "2.0",
        size: "1.5GB",
        lastUpdated: "May 8, 2025",
        description: `<h3>🏙️ Next-Gen Open World</h3><p>Experience Liberty City with HD graphics and action-packed missions.</p><h3>🎮 Features</h3><ul><li>Massive open world</li><li>Realistic physics</li><li>Epic storyline</li></ul>`,
        downloadUrl: "https://www.mediafire.com/file/gta4/gta4.apk/file",
        apkObb: true,
        oldVersions: []
    },
    {
        id: 14,
        name: "GTA Chinatown Wars",
        developer: "Rockstar Games",
        tagline: "Handheld GTA Adventure",
        icon: "../img/gtactw.webp",
        rating: 4.3,
        category: "games",
        trending: false,
        new: false,
        version: "1.2",
        size: "900MB",
        lastUpdated: "Apr 20, 2025",
        description: `<h3>🕹️ Handheld Open World</h3><p>A unique top-down GTA with action, missions, and crime-filled gameplay.</p><h3>🎮 Features</h3><ul><li>Top-down GTA style</li><li>Story missions</li><li>Fun mini-games</li></ul>`,
        downloadUrl: "https://www.mediafire.com/file/gtactw/gtactw.apk/file",
        apkObb: true,
        oldVersions: []
    },
    {
        id: 15,
        name: "HappyMod",
        developer: "HappyMod Team",
        tagline: "Mod APK Store",
        icon: "../img/happymod.webp",
        rating: 4.1,
        category: "tools",
        trending: true,
        new: false,
        version: "3.1.5",
        size: "10MB",
        lastUpdated: "Sep 1, 2025",
        description: `<h3>📥 Mod APKs</h3><p>HappyMod provides modded versions of popular apps and games.</p><h3>📱 Features</h3><ul><li>Thousands of mods</li><li>Fast downloads</li><li>User community</li></ul>`,
        downloadUrl: "https://www.mediafire.com/file/happymod/happymod.apk/file",
        apkObb: false,
        oldVersions: []
    },
    {
        id: 16,
        name: "Helper",
        developer: "Helper Devs",
        tagline: "Utility Tool",
        icon: "../img/helper.webp",
        rating: 3.9,
        category: "tools",
        trending: false,
        new: false,
        version: "1.4",
        size: "12MB",
        lastUpdated: "Aug 10, 2025",
        description: `<h3>🔧 Utility App</h3><p>Helper is a small tool app that assists with daily tasks.</p><h3>📱 Features</h3><ul><li>Quick tools</li><li>Easy interface</li><li>Lightweight</li></ul>`,
        downloadUrl: "https://www.mediafire.com/file/helper/helper.apk/file",
        apkObb: false,
        oldVersions: []
    },
    {
        id: 17,
        name: "Instagram Lite",
        developer: "Meta",
        tagline: "Lightweight Instagram",
        icon: "../img/instagram_lite.webp",
        rating: 4.5,
        category: "social",
        trending: true,
        new: false,
        version: "389.0.0.12",
        size: "2MB",
        lastUpdated: "Sep 15, 2025",
        description: `<h3>📷 Social Media</h3><p>Instagram Lite is the fast, lightweight version of Instagram.</p><h3>📱 Features</h3><ul><li>Photos & reels</li><li>Stories support</li><li>DMs and likes</li></ul>`,
        downloadUrl: "https://www.mediafire.com/file/instagramlite/instagram_lite.apk/file",
        apkObb: false,
        oldVersions: []
    },
    {
        id: 18,
        name: "Pydroid",
        developer: "IIEC",
        tagline: "Python IDE for Android",
        icon: "../img/pydroid.webp",
        rating: 4.7,
        category: "education",
        trending: true,
        new: false,
        version: "6.2",
        size: "60MB",
        lastUpdated: "Jul 28, 2025",
        description: `<h3>🐍 Python IDE</h3><p>Pydroid lets you code and run Python on your Android device.</p><h3>📱 Features</h3><ul><li>Offline Python compiler</li><li>Library manager (pip)</li><li>Easy UI for beginners</li></ul>`,
        downloadUrl: "https://www.mediafire.com/file/pydroid/pydroid.apk/file",
        apkObb: false,
        oldVersions: []
    },
    {
        id: 19,
        name: "Uptodown",
        developer: "Uptodown Inc.",
        tagline: "APK Store",
        icon: "../img/uptodown.webp",
        rating: 4.4,
        category: "tools",
        trending: true,
        new: false,
        version: "5.9",
        size: "20MB",
        lastUpdated: "Aug 25, 2025",
        description: `<h3>📥 APK Store</h3><p>Uptodown is a safe app store with thousands of APKs.</p><h3>📱 Features</h3><ul><li>Wide app selection</li><li>Older versions</li><li>Free downloads</li></ul>`,
        downloadUrl: "https://www.mediafire.com/file/uptodown/uptodown.apk/file",
        apkObb: false,
        oldVersions: []
    },
    {
        id: 20,
        name: "WhatsApp Business",
        developer: "Meta",
        tagline: "Business Messaging App",
        icon: "../img/whatsapp-business.webp",
        rating: 4.9,
        category: "social",
        trending: true,
        new: false,
        version: "2.25.14",
        size: "35MB",
        lastUpdated: "Sep 12, 2025",
        description: `<h3>💬 Messaging</h3><p>WhatsApp lets you chat, call, and share files worldwide.</p><h3>📱 Features</h3><ul><li>Free messaging</li><li>Voice & video calls</li><li>Secure encryption</li></ul>`,
        downloadUrl: "https://www.mediafire.com/file/whatsapp/whatsapp.apk/file",
        apkObb: false,
        oldVersions: []
    },
    {
        id: 21,
        name: "ZArchiver",
        developer: "ZDevs",
        tagline: "Archive Manager",
        icon: "../img/zarchiver.webp",
        rating: 4.6,
        category: "tools",
        trending: false,
        new: false,
        version: "1.0.9",
        size: "7MB",
        lastUpdated: "Aug 30, 2025",
        description: `<h3>📂 File Manager</h3><p>ZArchiver helps you manage and extract compressed files.</p><h3>📱 Features</h3><ul><li>ZIP, RAR, 7Z support</li><li>Password protection</li><li>Simple UI</li></ul>`,
        downloadUrl: "https://www.mediafire.com/file/zarchiver/zarchiver.apk/file",
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
            window.location.href = `app.html?data=${appData}`;
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
                <button class="download-btn-small" onclick="event.stopPropagation(); window.location.href='app.html?data=${appData}'">
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

