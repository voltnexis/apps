// Sample app data with complete details
const apps = [
    {
        id: 1,
        name: "ServeTracko by VoltNexis",
        developer: "VoltNexis PVT LMTD",
        tagline: "Simple. Reliable. Fast.",
        icon: "../img/servetracko.webp",
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
        version: "2.24.19.17",
        size: "96MB",
        lastUpdated: "Dec 15, 2024",
        description: `<h3>🚀 Features</h3><p>WhatsApp Messenger is a FREE messaging app available for Android and other smartphones. WhatsApp uses your phone's Internet connection to message and call friends and family.</p><h3>✨ What's New</h3><ul><li>Enhanced security with end-to-end encryption</li><li>Improved group chat features</li><li>Better file sharing capabilities</li></ul>`,
        downloadUrl: "https://www.mediafire.com/file/xgct9xpchdlqyfg/whatsapp-messenger-2-24-19-17.apk/file",
        apkObb: false,
        oldVersions: [
            { version: "2.24.12.79", size: "56MB", url: "https://www.mediafire.com/file/t1umgjzc384x4dy/whatsapp-messenger-2-24-12-79.apk/file" }
        ]
    },
    {
        id: 2,
        name: "PUBG Mobile",
        developer: "PUBG Corporation",
        tagline: "Battle Royale Experience",
        icon: "../img/pubg_mobile.webp",
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
        version: "396.0.0.46.242",
        size: "86MB",
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
        version: "3.8.8.0",
        size: "48MB",
        lastUpdated: "Sep 10, 2025",
        description: `<h3>🤖 AI Assistant</h3><p>ChatGPT helps you with conversations, coding, and creative writing.</p><h3>📱 Features</h3><ul><li>AI-powered chat</li><li>Code and text generation</li><li>Cross-platform support</li></ul>`,
        downloadUrl: "https://www.mediafire.com/file/lqrh3jc5n4db37k/ChatGPT_v3.8.8.0.apk/file",
        apkObb: false,
        oldVersions: []
    },
    {
        id: 11,
        name: "Google Family",
        developer: "Google LLC",
        tagline: "Family Safety & Sharing",
        icon: "../img/google-family.webp",
        rating: 4.6,
        category: "tools",
        trending: false,
        new: false,
        version: "2.30.0",
        size: "52MB",
        lastUpdated: "Jul 18, 2025",
        description: `<h3>👨‍👩‍👧 Family Management</h3><p>Google Family helps you manage kids' accounts, apps, and screen time.</p><h3>📱 Features</h3><ul><li>Parental controls</li><li>Location tracking</li><li>Screen time limits</li></ul>`,
        downloadUrl: "https://www.mediafire.com/file/ujd4oolcj4sqspc/google-family-link-2-30-0.VoltNexis.apk/file",
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
        size: "12MB+655MB",
        lastUpdated: "Jun 12, 2025",
        description: `<h3>🚗 Open World Action</h3><p>GTA 3 brings the revolutionary open-world experience to mobile.</p><h3>🎮 Features</h3><ul><li>Story missions</li><li>Open-world freedom</li><li>HD graphics</li></ul>`,
        downloadUrl: "https://www.mediafire.com/file/84rffifixkrjae5/GTA_3_v1.8_APKGW.VoltNexis.apk/file",
        obbUrl: "https://www.mediafire.com/file/wkae6wtgy3nkqkk/com.rockstar.gta3.zip/file",
        apkObb: true,
        oldVersions: []
    },
    {
        id: 13,
        name: "GTA 4",
        developer: ".....",
        tagline: "Liberty City Stories",
        icon: "../img/gta4.webp",
        rating: 4.8,
        category: "games",
        trending: true,
        new: false,
        version: "1.0",
        size: "229MB",
        lastUpdated: "May 8, 2025",
        description: `<h3>🏙️ Next-Gen Open World</h3><p>Experience Liberty City with HD graphics and action-packed missions.</p><h3>🎮 Features</h3><ul><li>Massive open world</li><li>Realistic physics</li><li>Epic storyline</li></ul>`,
        downloadUrl: "https://www.mediafire.com/file/fe2zd89oi6oibb7/GTA_4_Mobile_Edition_1_1.0.apk/file",
        apkObb: false,
        oldVersions: []
    },
    {
        id: 14,
        name: "GTA Chinatown Wars",
        developer: "Rockstar Games",
        tagline: "Handheld GTA Adventure",
        icon: "../img/gta-ctw.webp",
        rating: 4.3,
        category: "games",
        trending: false,
        new: false,
        version: "4.4.221",
        size: "913MB",
        lastUpdated: "Apr 20, 2025",
        description: `<h3>🕹️ Handheld Open World</h3><p>A unique top-down GTA with action, missions, and crime-filled gameplay.</p><h3>🎮 Features</h3><ul><li>Top-down GTA style</li><li>Story missions</li><li>Fun mini-games</li></ul>`,
        downloadUrl: "https://www.mediafire.com/file/oy7512ufnhpxmcs/com.rockstargames.gtactw_4.4.221-VoltNexis.apk/file",
        apkObb: false,
        oldVersions: []
    },
    {
        id: 15,
        name: "HappyMod",
        developer: "HappyMod Team",
        tagline: "Mod APK Store",
        icon: "../img/happy-mod.webp",
        rating: 4.1,
        category: "tools",
        trending: true,
        new: false,
        version: "3.1.6",
        size: "18MB",
        lastUpdated: "Sep 1, 2025",
        description: `<h3>📥 Mod APKs</h3><p>HappyMod provides modded versions of popular apps and games.</p><h3>📱 Features</h3><ul><li>Thousands of mods</li><li>Fast downloads</li><li>User community</li></ul>`,
        downloadUrl: "https://www.mediafire.com/file/zf4f0z9gua5kkom/HappyMod-Download-3-1-6.apk/file",
        apkObb: false,
        oldVersions: []
    },
    {
        id: 17,
        name: "Instagram Lite",
        developer: "Meta",
        tagline: "Lightweight Instagram",
        icon: "../img/insta-lite.webp",
        rating: 4.5,
        category: "social",
        trending: true,
        new: false,
        version: "411.0.0.10.112",
        size: "2MB",
        lastUpdated: "Sep 15, 2025",
        description: `<h3>📷 Social Media</h3><p>Instagram Lite is the fast, lightweight version of Instagram.</p><h3>📱 Features</h3><ul><li>Photos & reels</li><li>Stories support</li><li>DMs and likes</li></ul>`,
        downloadUrl: "https://www.mediafire.com/file/xfcbh7uw4fp6o9e/instagram-lite-411-0-0-10-112.apk/file",
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
        downloadUrl: "https://www.mediafire.com/file/svnk87uhehinw0t/PyDroid.apk/file",
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
        size: "17MB",
        lastUpdated: "Aug 25, 2025",
        description: `<h3>📥 APK Store</h3><p>Uptodown is a safe app store with thousands of APKs.</p><h3>📱 Features</h3><ul><li>Wide app selection</li><li>Older versions</li><li>Free downloads</li></ul>`,
        downloadUrl: "https://www.mediafire.com/file/c0045tl34e2a243/UPTODOWN_APP-STORE.apk/file",
        apkObb: false,
        oldVersions: []
    },
    {
        id: 20,
        name: "WhatsApp Business",
        developer: "Meta",
        tagline: "Business Messaging App",
        icon: "../img/whatsapp_business.webp",
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
        size: "5MB",
        lastUpdated: "Aug 30, 2025",
        description: `<h3>📂 File Manager</h3><p>ZArchiver helps you manage and extract compressed files.</p><h3>📱 Features</h3><ul><li>ZIP, RAR, 7Z support</li><li>Password protection</li><li>Simple UI</li></ul>`,
        downloadUrl: "https://www.mediafire.com/file/t70vm57n2bk4yap/Zarchiver.apk/file",
        apkObb: false,
        oldVersions: []
    },
    {
        id: 22,
        name: "1 2 3 4 Player Games",
        developer: "Better World Games",
        tagline: "Fun Multiplayer Games, XAPK",
        icon: "../img/1234player.webp",
        rating: 4.6,
        category: "games",
        trending: true,
        new: false,
        version: "2.18.3",
        size: "65MB",
        lastUpdated: "Sep 5, 2025",
        description: `<h3>🎮 Multiplayer Fun</h3><p>Play mini-games with 1, 2, 3, or 4 players on the same device.</p><h3>📱 Features</h3><ul><li>Variety of fun mini-games</li><li>Single-player & multiplayer modes</li><li>Easy controls</li></ul>`,
        downloadUrl: "https://www.mediafire.com/file/eiym613tv3fygbk/1_2_3_4_Player_Games_v2.18.3_APKPure.VoltNexis.xapk/file",
        apkObb: false,
        oldVersions: []
    },
    {
        id: 23,
        name: "Eduport Learning App",
        developer: "VoltNexis",
        tagline: "Smart Learning Platform, XAPK",
        icon: "../img/eduport.webp",
        rating: 4.4,
        category: "education",
        trending: false,
        new: true,
        version: "8.0.4",
        size: "120MB",
        lastUpdated: "Sep 16, 2025",
        description: `<h3>📘 Learning App</h3><p>Eduport provides courses, tutorials, and learning resources for students.</p><h3>📱 Features</h3><ul><li>Interactive lessons</li><li>Quizzes & assignments</li><li>Offline content access</li></ul>`,
        downloadUrl: "https://www.mediafire.com/file/19aa1lzdyy4q2e3/Eduport_Learning_App_8.0.4.voltnexis.zip/file",
        apkObb: false,
        oldVersions: []
    },
    {
        id: 10,
        name: "EUT Wallet",
        developer: "EUT Team",
        tagline: "Digital Wallet",
        icon: "../img/eut-wallet.webp",
        rating: 4.2,
        category: "finance",
        trending: false,
        new: false,
        version: "2.3.1",
        size: "18MB",
        lastUpdated: "Aug 20, 2025",
        description: `<h3>💳 Wallet App</h3><p>EUT Wallet helps manage your digital money securely.</p><h3>📱 Features</h3><ul><li>Send & receive funds</li><li>Transaction history</li><li>Secure encryption</li></ul>`,
        downloadUrl: "https://www.mediafire.com/file/58qj1z6r3xs9le9/Eutwallet.apk/file",
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
        name: "Appstore",
        developer: "Voltnexis Pvt Ltd",
        tagline: "Official App Store",
        icon: "../img/appstore.webp",
        rating: 4.2,
        category: "tools",
        trending: false,
        new: false,
        version: "1.1",
        size: "501KB",
        lastUpdated: "Sep 2025",
        description: `<h3>🛒 App Store</h3><p>Browse and download any apps.</p><h3>✨ Features</h3><ul><li>Simple UI</li><li>Fast downloads</li><li>Secure apps</li></ul>`,
        downloadUrl: "../files/appstore-v1.1-voltnexis.apk",
        apkObb: false,
        oldVersions: []
    },
    {
        id: 18,
        name: "Codexaura AI",
        developer: "Voltnexis Pvt Ltd",
        tagline: "Smart AI Assistant",
        icon: "../img/codexaura.webp",
        rating: 4.5,
        category: "productivity",
        trending: true,
        new: false,
        version: "1.0",
        size: "183KB",
        lastUpdated: "Sep 2025",
        description: `<h3>🤖 Codexaura AI</h3><p>Your intelligent AI companion.</p><h3>✨ Features</h3><ul><li>Quick answers</li><li>Smart writing</li><li>AI chat</li></ul>`,
        downloadUrl: "../files/codexaura-ai-v1.0-voltnexis.apk",
        apkObb: false,
        oldVersions: []
    },
    {
        id: 19,
        name: "Eshop",
        developer: "Voltnexis Pvt Ltd",
        tagline: "Online Shopping",
        icon: "../img/eshop.webp",
        rating: 4.0,
        category: "shopping",
        trending: false,
        new: false,
        version: "1.0",
        size: "414KB",
        lastUpdated: "Sep 2025",
        description: `<h3>🛍️ Eshop</h3><p>Buy your favorite products online.</p><h3>✨ Features</h3><ul><li>Wide categories</li><li>Secure payments</li><li>Fast delivery</li></ul>`,
        downloadUrl: "../files/eshop-v1-voltnexis.apk",
        apkObb: false,
        oldVersions: []
    },
    {
        id: 20,
        name: "Fixmitra (Providers Hub)",
        developer: "Voltnexis Pvt Ltd",
        tagline: "Service Provider Hub",
        icon: "../img/fixmitra-provider.webp",
        rating: 4.1,
        category: "business",
        trending: false,
        new: false,
        version: "1.0",
        size: "350KB",
        lastUpdated: "Sep 2025",
        description: `<h3>🔧 Fixmitra Providers Hub</h3><p>Connect and manage service providers.</p><h3>✨ Features</h3><ul><li>Provider management</li><li>Job tracking</li><li>Fast support</li></ul>`,
        downloadUrl: "../files/fixmitra-(providers-hub)-voltnexis.apk",
        apkObb: false,
        oldVersions: []
    },
    {
        id: 21,
        name: "Fixmitra",
        developer: "Voltnexis Pvt Ltd",
        tagline: "Repair & Service App",
        icon: "../img/fixmitra.webp",
        rating: 4.4,
        category: "utilities",
        trending: true,
        new: false,
        version: "1.1",
        size: "840KB",
        lastUpdated: "Sep 2025",
        description: `<h3>🛠️ Fixmitra</h3><p>Get your services and repairs done easily.</p><h3>✨ Features</h3><ul><li>Book services</li><li>Track orders</li><li>Trusted providers</li></ul>`,
        downloadUrl: "../files/fixmitra-v1.1-voltnexis.apk",
        apkObb: false,
        oldVersions: []
    },
    {
        id: 22,
        name: "PC Builds",
        developer: "Voltnexis Pvt Ltd",
        tagline: "Custom PC Builder",
        icon: "../img/pcbuilds.webp",
        rating: 4.7,
        category: "tools",
        trending: true,
        new: false,
        version: "1.1",
        size: "1.37MB",
        lastUpdated: "Sep 2025",
        description: `<h3>💻 PC Builds</h3><p>Plan and configure your dream PC.</p><h3>✨ Features</h3><ul><li>Custom PC builder</li><li>Component database</li><li>Performance estimator</li></ul>`,
        downloadUrl: "../files/pcbuilds-v1.1-voltnexis.apk",
        apkObb: false,
        oldVersions: []
    },
    {
        id: 23,
        name: "Qoutes",
        developer: "Voltnexis Pvt Ltd",
        tagline: "Daily Inspiration",
        icon: "../img/qoutes.webp",
        rating: 3.8,
        category: "lifestyle",
        trending: false,
        new: false,
        version: "1.0",
        size: "350KB",
        lastUpdated: "Sep 2025",
        description: `<h3>💬 Quotes</h3><p>Get motivational quotes every day.</p><h3>✨ Features</h3><ul><li>Daily updates</li><li>Beautiful UI</li><li>Share easily</li></ul>`,
        downloadUrl: "../files/qoutes-voltnexis.apk",
        apkObb: false,
        oldVersions: []
    },
    {
        id: 24,
        name: "VN Wallpapers",
        developer: "Voltnexis Pvt Ltd",
        tagline: "Wallpapers App",
        icon: "../img/wallpapers.webp",
        rating: 4.0,
        category: "personalization",
        trending: false,
        new: false,
        version: "1.0",
        size: "342KB",
        lastUpdated: "Sep 2025",
        description: `<h3>🖼️ VN Wallpapers</h3><p>Customize your device with beautiful wallpapers.</p><h3>✨ Features</h3><ul><li>HD wallpapers</li><li>Categories</li><li>One-tap set</li></ul>`,
        downloadUrl: "../files/vn-wallpapers.apk",
        apkObb: false,
        oldVersions: []
    },
    {
        id: 25,
        name: "Voltnexis",
        developer: "Voltnexis Pvt Ltd",
        tagline: "Main App",
        icon: "../img/voltnexis.webp",
        rating: 4.6,
        category: "tools",
        trending: true,
        new: false,
        version: "1.9",
        size: "950KB",
        lastUpdated: "Sep 2025",
        description: `<h3>⚡ Voltnexis</h3><p>The main Voltnexis utility app.</p><h3>✨ Features</h3><ul><li>All-in-one tools</li><li>Simple interface</li><li>Fast and reliable</li></ul>`,
        downloadUrl: "../files/voltnexis-v1.9.apk",
        apkObb: false,
        oldVersions: []
    },
    {
        id: 26,
        name: "Voltnexis Timer",
        developer: "Voltnexis Pvt Ltd",
        tagline: "Time Management",
        icon: "../img/timer.webp",
        rating: 3.9,
        category: "productivity",
        trending: false,
        new: false,
        version: "1.0",
        size: "357KB",
        lastUpdated: "Sep 2025",
        description: `<h3>⏲️ Voltnexis Timer</h3><p>Manage your time effectively.</p><h3>✨ Features</h3><ul><li>Custom timers</li><li>Reminders</li><li>Lightweight</li></ul>`,
        downloadUrl: "../files/voltnexis-timer.apk",
        apkObb: false,
        oldVersions: []
    },
    {
        id: 27,
        name: "Wandermatch",
        developer: "Voltnexis Pvt Ltd",
        tagline: "Travel & Meet",
        icon: "../img/wandermatch.webp",
        rating: 4.3,
        category: "lifestyle",
        trending: true,
        new: false,
        version: "5.8.3",
        size: "470KB",
        lastUpdated: "Sep 2025",
        description: `<h3>🌍 Wandermatch</h3><p>Find travel partners and explore new places.</p><h3>✨ Features</h3><ul><li>Travel matching</li><li>Profile system</li><li>Secure messaging</li></ul>`,
        downloadUrl: "../files/wandermatch-v5.8.3-voltnexis.apk",
        apkObb: false,
        oldVersions: []
    },
    {
        id: 28,
        name: "Webcreator",
        developer: "Voltnexis Pvt Ltd",
        tagline: "Website Builder",
        icon: "../img/webcreator.webp",
        rating: 4.4,
        category: "tools",
        trending: true,
        new: false,
        version: "1.0",
        size: "458KB",
        lastUpdated: "Sep 2025",
        description: `<h3>🌐 Webcreator</h3><p>Create your own websites easily.</p><h3>✨ Features</h3><ul><li>Drag & drop builder</li><li>Responsive design</li><li>Fast exports</li></ul>`,
        downloadUrl: "../files/webcreator-voltnexis.apk",
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

