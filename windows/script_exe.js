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
    },
{
        id: 9,
        name: "Notepad++",
        developer: "Don Ho",
        tagline: "Advanced Text Editor",
        icon: "../img/notepadpp.webp",
        rating: 4.6,
        category: "tools",
        trending: false,
        new: false,
        version: "8.6.5",
        size: "12MB",
        windowsVersion: "7+",
        lastUpdated: "Dec 09, 2024",
        description: `<h3>📝 Text Editor</h3><p>Notepad++ is a free source code editor and Notepad replacement that supports several languages.</p><h3>🔧 Features</h3><ul><li>Syntax highlighting</li><li>Tab-based editing</li><li>Plugin support</li></ul>`,
        downloads: [
            { type: "64-bit", size: "12MB", url: "https://github.com/notepad-plus-plus/notepad-plus-plus/releases/download/v8.6.5/npp.8.6.5.Installer.x64.exe" },
            { type: "32-bit", size: "9MB", url: "https://github.com/notepad-plus-plus/notepad-plus-plus/releases/download/v8.6.5/npp.8.6.5.Installer.exe" }
        ],
        oldVersions: []
    },
    {
        id: 10,
        name: "WinRAR",
        developer: "RARLAB",
        tagline: "File Compression Utility",
        icon: "../img/winrar.webp",
        rating: 4.4,
        category: "tools",
        trending: false,
        new: false,
        version: "6.24",
        size: "6MB",
        windowsVersion: "7+",
        lastUpdated: "Nov 30, 2024",
        description: `<h3>📦 File Archiver</h3><p>WinRAR is a powerful archive manager that can backup data and reduce file size.</p><h3>🔧 Features</h3><ul><li>Create and unpack RAR/ZIP files</li><li>Strong AES-256 encryption</li><li>Free trial available</li></ul>`,
        downloads: [
            { type: "64-bit", size: "6MB", url: "https://www.rarlab.com/rar/winrar-x64-624.exe" },
            { type: "32-bit", size: "5MB", url: "https://www.rarlab.com/rar/wrar624.exe" }
        ],
        oldVersions: []
    },
    {
        id: 11,
        name: "7-Zip",
        developer: "Igor Pavlov",
        tagline: "Open-Source Archiver",
        icon: "../img/7zip.webp",
        rating: 4.3,
        category: "tools",
        trending: false,
        new: false,
        version: "24.07",
        size: "2MB",
        windowsVersion: "7+",
        lastUpdated: "Dec 08, 2024",
        description: `<h3>🗜 Archiver</h3><p>7-Zip is a free and open-source file archiver with a high compression ratio.</p><h3>🔧 Features</h3><ul><li>Supports 7z, ZIP, RAR, TAR, and more</li><li>Strong AES-256 encryption</li><li>Completely free</li></ul>`,
        downloads: [
            { type: "64-bit", size: "2MB", url: "https://www.7-zip.org/a/7z2407-x64.exe" },
            { type: "32-bit", size: "1.5MB", url: "https://www.7-zip.org/a/7z2407.exe" }
        ],
        oldVersions: []
    },
    {
        id: 12,
        name: "Blender",
        developer: "Blender Foundation",
        tagline: "3D Creation Suite",
        icon: "../img/blender.webp",
        rating: 4.7,
        category: "design",
        trending: false,
        new: false,
        version: "4.2.0",
        size: "250MB",
        windowsVersion: "10+",
        lastUpdated: "Dec 05, 2024",
        description: `<h3>🎨 3D Creation</h3><p>Blender is the free and open-source 3D creation suite. It supports modeling, rigging, animation, simulation, rendering, and more.</p><h3>🔧 Features</h3><ul><li>Advanced 3D modeling</li><li>Cycles & Eevee render engines</li><li>Python scripting</li></ul>`,
        downloads: [
            { type: "64-bit", size: "250MB", url: "https://download.blender.org/release/Blender4.2/blender-4.2.0-windows-x64.msi" }
        ],
        oldVersions: []
    },
    {
        id: 13,
        name: "GIMP",
        developer: "GIMP Team",
        tagline: "Open-Source Image Editor",
        icon: "../img/gimp.webp",
        rating: 4.4,
        category: "design",
        trending: false,
        new: false,
        version: "2.10.38",
        size: "250MB",
        windowsVersion: "7+",
        lastUpdated: "Nov 25, 2024",
        description: `<h3>🖼 Image Editor</h3><p>GIMP is a free and open-source image editor for tasks such as photo retouching and image composition.</p><h3>🔧 Features</h3><ul><li>Customizable interface</li><li>Advanced image manipulation</li><li>Plugin support</li></ul>`,
        downloads: [
            { type: "64-bit", size: "250MB", url: "https://download.gimp.org/gimp/v2.10/windows/gimp-2.10.38-setup.exe" }
        ],
        oldVersions: []
    },
    {
        id: 14,
        name: "Microsoft Teams",
        developer: "Microsoft Corporation",
        tagline: "Workplace Collaboration",
        icon: "../img/teams.webp",
        rating: 4.2,
        category: "communication",
        trending: true,
        new: false,
        version: "1.7.00.9764",
        size: "115MB",
        windowsVersion: "10+",
        lastUpdated: "Dec 18, 2024",
        description: `<h3>💼 Collaboration</h3><p>Teams brings together chat, video conferencing, file sharing, and collaboration into one platform for businesses and schools.</p><h3>✨ Key Features</h3><ul><li>Seamless video calls</li><li>Integration with Office 365</li><li>Team chat & file sharing</li></ul>`,
        downloads: [
            { type: "64-bit", size: "115MB", url: "https://go.microsoft.com/fwlink/p/?LinkID=869426&clcid=0x409&culture=en-us&country=US" }
        ],
        oldVersions: []
    },
    {
        id: 15,
        name: "Zoom",
        developer: "Zoom Video Communications",
        tagline: "Video Conferencing Made Easy",
        icon: "../img/zoom.webp",
        rating: 4.3,
        category: "communication",
        trending: false,
        new: false,
        version: "6.1.0",
        size: "92MB",
        windowsVersion: "7+",
        lastUpdated: "Dec 07, 2024",
        description: `<h3>🎥 Video Meetings</h3><p>Zoom is a reliable video conferencing platform with screen sharing, chat, and webinar features.</p><h3>🔧 Features</h3><ul><li>HD video & audio</li><li>Breakout rooms</li><li>Meeting recordings</li></ul>`,
        downloads: [
            { type: "64-bit", size: "92MB", url: "https://zoom.us/client/latest/ZoomInstallerFull.exe" }
        ],
        oldVersions: []
    },
    {
        id: 16,
        name: "FileZilla",
        developer: "Tim Kosse",
        tagline: "Free FTP Client",
        icon: "../img/filezilla.webp",
        rating: 4.0,
        category: "tools",
        trending: false,
        new: false,
        version: "3.67.0",
        size: "12MB",
        windowsVersion: "7+",
        lastUpdated: "Dec 01, 2024",
        description: `<h3>📂 FTP Client</h3><p>FileZilla is a free FTP solution for transferring files across the internet with support for FTP, SFTP, and FTPS.</p><h3>🔧 Features</h3><ul><li>Drag & drop transfers</li><li>Large file support</li><li>Site manager</li></ul>`,
        downloads: [
            { type: "64-bit", size: "12MB", url: "https://download.filezilla-project.org/client/FileZilla_3.67.0_win64-setup.exe" },
            { type: "32-bit", size: "11MB", url: "https://download.filezilla-project.org/client/FileZilla_3.67.0_win32-setup.exe" }
        ],
        oldVersions: []
    },
    {
        id: 17,
        name: "CCleaner",
        developer: "Piriform",
        tagline: "System Cleaning Tool",
        icon: "../img/ccleaner.webp",
        rating: 4.1,
        category: "utilities",
        trending: false,
        new: false,
        version: "6.22",
        size: "55MB",
        windowsVersion: "7+",
        lastUpdated: "Nov 20, 2024",
        description: `<h3>🧹 PC Cleaner</h3><p>CCleaner optimizes your PC by removing junk files, freeing up space, and improving performance.</p><h3>🔧 Features</h3><ul><li>Registry cleaner</li><li>Startup optimization</li><li>Privacy protection</li></ul>`,
        downloads: [
            { type: "64-bit", size: "55MB", url: "https://download.ccleaner.com/ccsetup622.exe" }
        ],
        oldVersions: []
    },
    {
        id: 18,
        name: "Malwarebytes",
        developer: "Malwarebytes Inc.",
        tagline: "Anti-Malware Protection",
        icon: "../img/malwarebytes.webp",
        rating: 4.5,
        category: "security",
        trending: true,
        new: false,
        version: "5.1.2",
        size: "95MB",
        windowsVersion: "7+",
        lastUpdated: "Dec 02, 2024",
        description: `<h3>🛡 Security</h3><p>Malwarebytes protects your PC from malware, ransomware, and advanced online threats.</p><h3>🔧 Features</h3><ul><li>Real-time protection</li><li>Ransomware defense</li><li>Lightweight scanning</li></ul>`,
        downloads: [
            { type: "64-bit", size: "95MB", url: "https://data-cdn.mbamupdates.com/web/mb5-setup-consumer/MBSetup.exe" }
        ],
        oldVersions: []
    },
    {
        id: 19,
        name: "Avast Free Antivirus",
        developer: "Avast Software",
        tagline: "Free Antivirus & Security",
        icon: "../img/avast.webp",
        rating: 4.2,
        category: "security",
        trending: false,
        new: false,
        version: "24.2.6103",
        size: "70MB",
        windowsVersion: "7+",
        lastUpdated: "Nov 28, 2024",
        description: `<h3>🛡 Antivirus</h3><p>Avast offers essential free protection against viruses, malware, and other online threats.</p><h3>🔧 Features</h3><ul><li>Real-time threat detection</li><li>Wi-Fi network security</li><li>Password manager</li></ul>`,
        downloads: [
            { type: "64-bit", size: "70MB", url: "https://files.avast.com/iavs9x/avast_free_antivirus_setup_offline.exe" }
        ],
        oldVersions: []
    },
    {
        id: 20,
        name: "Adobe Acrobat Reader DC",
        developer: "Adobe Inc.",
        tagline: "PDF Reader",
        icon: "../img/adobe_reader.webp",
        rating: 4.3,
        category: "productivity",
        trending: true,
        new: false,
        version: "2025.001.1000",
        size: "180MB",
        windowsVersion: "7+",
        lastUpdated: "Dec 16, 2024",
        description: `<h3>📑 PDF Reader</h3><p>Adobe Reader is the most popular software to view, print, and annotate PDF files.</p><h3>🔧 Features</h3><ul><li>Fill & sign forms</li><li>Sticky notes & comments</li><li>Cloud integration</li></ul>`,
        downloads: [
            { type: "64-bit", size: "180MB", url: "https://ardownload2.adobe.com/pub/adobe/reader/win/AcrobatDC/2400120598/AcroRdrDCx642500011000_MUI.exe" }
        ],
        oldVersions: []
    },
    {
    id: 21,
    name: "7-Zip",
    developer: "Igor Pavlov",
    tagline: "Powerful File Archiver",
    icon: "../img/7zip.webp",
    rating: 4.7,
    category: "utilities",
    trending: false,
    new: false,
    version: "24.08 (latest)",
    size: "2MB",
    windowsVersion: "7+",
    lastUpdated: "2024",
    description: `<h3>📦 7-Zip</h3><p>7-Zip is a free and open-source file archiver with a high compression ratio.</p><h3>✨ Features</h3><ul><li>7z, ZIP, RAR, TAR support</li><li>Strong AES-256 encryption</li><li>Extremely lightweight</li></ul>`,
    downloads: [
      { type: "Installer (x64)", size: "≈2MB", directLink: "https://www.7-zip.org/a/7z2408-x64.exe" }
    ],
    oldVersions: []
  },
  {
    id: 23,
    name: "OBS Studio",
    developer: "OBS Project",
    tagline: "Live Streaming & Recording",
    icon: "../img/obs.webp",
    rating: 4.6,
    category: "multimedia",
    trending: true,
    new: false,
    version: "30.1.2",
    size: "120MB",
    windowsVersion: "10+",
    lastUpdated: "2025",
    description: `<h3>📡 OBS Studio</h3><p>OBS Studio is free and open source software for video recording and live streaming.</p><h3>✨ Features</h3><ul><li>Unlimited scenes</li><li>Real-time video/audio mixing</li><li>Powerful plugin support</li></ul>`,
    downloads: [
      { type: "Installer (EXE)", size: "≈120MB", directLink: "https://cdn-fastly.obsproject.com/downloads/OBS-Studio-30.1.2-Full-Installer-x64.exe" }
    ],
    oldVersions: []
  },
  {
    id: 24,
    name: "Notepad++",
    developer: "Don Ho",
    tagline: "Advanced Text Editor",
    icon: "../img/notepadpp.webp",
    rating: 4.5,
    category: "development",
    trending: false,
    new: false,
    version: "8.6.9",
    size: "5MB",
    windowsVersion: "7+",
    lastUpdated: "2025",
    description: `<h3>📝 Notepad++</h3><p>Notepad++ is a free source code editor and Notepad replacement that supports several programming languages.</p><h3>🔧 Features</h3><ul><li>Syntax highlighting</li><li>Multi-document tab interface</li><li>Plugin ecosystem</li></ul>`,
    downloads: [
      { type: "Installer (EXE)", size: "≈5MB", directLink: "https://github.com/notepad-plus-plus/notepad-plus-plus/releases/download/v8.6.9/npp.8.6.9.Installer.x64.exe" }
    ],
    oldVersions: []
  },
  {
    id: 25,
    name: "LibreOffice",
    developer: "The Document Foundation",
    tagline: "Free Office Suite",
    icon: "../img/libreoffice.webp",
    rating: 4.3,
    category: "productivity",
    trending: false,
    new: false,
    version: "24.2.3",
    size: "330MB",
    windowsVersion: "7+",
    lastUpdated: "2025",
    description: `<h3>📑 LibreOffice</h3><p>LibreOffice is a powerful open source office suite, successor to OpenOffice, with clean interface and feature-rich tools.</p><h3>🔧 Features</h3><ul><li>Writer, Calc, Impress</li><li>MS Office file compatibility</li><li>Free and open-source</li></ul>`,
    downloads: [
      { type: "Installer (MSI)", size: "≈330MB", directLink: "https://download.documentfoundation.org/libreoffice/stable/24.2.3/win/x86_64/LibreOffice_24.2.3_Win_x86-64.msi" }
    ],
    oldVersions: []
  },
{
    id: 26,
    name: "Mozilla Firefox",
    developer: "Mozilla Foundation",
    tagline: "Fast, Private & Secure Browser",
    icon: "../img/firefox.webp",
    rating: 4.4,
    category: "tools",
    trending: true,
    new: false,
    version: "131.0",
    size: "90MB",
    windowsVersion: "7+",
    lastUpdated: "2025",
    description: `<h3>🌐 Firefox</h3><p>Firefox is a fast, open-source web browser focused on privacy and customization.</p><h3>✨ Features</h3><ul><li>Enhanced Tracking Protection</li><li>Customizable extensions</li><li>Sync across devices</li></ul>`,
    downloads: [
      { type: "64-bit", size: "≈90MB", url: "https://download.mozilla.org/?product=firefox-latest&os=win64&lang=en-US" },
      { type: "32-bit", size: "≈80MB", url: "https://download.mozilla.org/?product=firefox-latest&os=win&lang=en-US" }
    ],
    oldVersions: []
},
{
    id: 27,
    name: "Tor Browser",
    developer: "The Tor Project",
    tagline: "Browse Privately",
    icon: "../img/tor.webp",
    rating: 4.2,
    category: "privacy",
    trending: false,
    new: false,
    version: "13.0.15",
    size: "95MB",
    windowsVersion: "7+",
    lastUpdated: "2025",
    description: `<h3>🕵️ Tor Browser</h3><p>Tor Browser lets you browse the internet anonymously and bypass censorship.</p><h3>✨ Features</h3><ul><li>Blocks trackers</li><li>Multi-layered encryption</li><li>Access .onion sites</li></ul>`,
    downloads: [
      { type: "64-bit", size: "≈95MB", url: "https://www.torproject.org/dist/torbrowser/13.0.15/tor-browser-windows-x86_64-portable-13.0.15.exe" }
    ],
    oldVersions: []
},
{
    id: 28,
    name: "Audacity",
    developer: "Audacity Team",
    tagline: "Free Audio Editor",
    icon: "../img/audacity.webp",
    rating: 4.5,
    category: "multimedia",
    trending: false,
    new: false,
    version: "3.6.4",
    size: "30MB",
    windowsVersion: "7+",
    lastUpdated: "2025",
    description: `<h3>🎶 Audacity</h3><p>Audacity is a free, open-source, cross-platform audio software for multi-track recording and editing.</p><h3>✨ Features</h3><ul><li>Record live audio</li><li>Cut, copy, splice sounds</li><li>Supports plugins</li></ul>`,
    downloads: [
      { type: "64-bit", size: "≈30MB", url: "https://github.com/audacity/audacity/releases/download/Audacity-3.6.4/audacity-win-3.6.4-x64.exe" }
    ],
    oldVersions: []
},
{
    id: 29,
    name: "Krita",
    developer: "Krita Foundation",
    tagline: "Digital Painting Software",
    icon: "../img/krita.webp",
    rating: 4.6,
    category: "design",
    trending: false,
    new: false,
    version: "5.2.6",
    size: "150MB",
    windowsVersion: "8.1+",
    lastUpdated: "2025",
    description: `<h3>🎨 Krita</h3><p>Krita is a professional FREE and open-source painting program made by artists.</p><h3>✨ Features</h3><ul><li>Brush stabilizers</li><li>HDR painting</li><li>Animation support</li></ul>`,
    downloads: [
      { type: "64-bit", size: "≈150MB", url: "https://download.kde.org/stable/krita/5.2.6/krita-5.2.6-x64-setup.exe" }
    ],
    oldVersions: []
},
{
    id: 30,
    name: "HandBrake",
    developer: "HandBrake Team",
    tagline: "Open-Source Video Transcoder",
    icon: "../img/handbrake.webp",
    rating: 4.4,
    category: "multimedia",
    trending: false,
    new: false,
    version: "1.8.2",
    size: "20MB",
    windowsVersion: "10+",
    lastUpdated: "2025",
    description: `<h3>🎥 HandBrake</h3><p>HandBrake is a free and open-source tool for converting videos from nearly any format.</p><h3>✨ Features</h3><ul><li>Convert to MP4/MKV</li><li>Device presets</li><li>Batch encoding</li></ul>`,
    downloads: [
      { type: "64-bit", size: "≈20MB", url: "https://github.com/HandBrake/HandBrake/releases/download/1.8.2/HandBrake-1.8.2-x86_64-Win_GUI.exe" }
    ],
    oldVersions: []
},
{
    id: 31,
    name: "Telegram Desktop",
    developer: "Telegram FZ-LLC",
    tagline: "Fast & Secure Messaging",
    icon: "../img/telegram.webp",
    rating: 4.5,
    category: "social",
    trending: true,
    new: false,
    version: "5.2.3",
    size: "65MB",
    windowsVersion: "7+",
    lastUpdated: "2025",
    description: `<h3>💬 Telegram</h3><p>Telegram Desktop is a fast, secure, and cloud-based messaging app with sync across devices.</p><h3>✨ Features</h3><ul><li>Cloud chat history</li><li>End-to-end encrypted secret chats</li><li>Large file sharing up to 2GB</li></ul>`,
    downloads: [
      { type: "64-bit", size: "≈65MB", url: "https://updates.tdesktop.com/tsetup-x64.exe" },
      { type: "32-bit", size: "≈60MB", url: "https://updates.tdesktop.com/tsetup-x86.exe" }
    ],
    oldVersions: []
},
{
    id: 32,
    name: "Python",
    developer: "Python Software Foundation",
    tagline: "Programming Language",
    icon: "../img/python.webp",
    rating: 4.7,
    category: "development",
    trending: false,
    new: false,
    version: "3.12.6",
    size: "28MB",
    windowsVersion: "8+",
    lastUpdated: "2025",
    description: `<h3>🐍 Python</h3><p>Python is a versatile programming language used in web, AI, data science, and more.</p><h3>✨ Features</h3><ul><li>Easy syntax</li><li>Extensive libraries</li><li>Cross-platform</li></ul>`,
    downloads: [
      { type: "64-bit", size: "≈28MB", url: "https://www.python.org/ftp/python/3.12.6/python-3.12.6-amd64.exe" },
      { type: "32-bit", size: "≈25MB", url: "https://www.python.org/ftp/python/3.12.6/python-3.12.6.exe" }
    ],
    oldVersions: []
},
{
    id: 33,
    name: "Git for Windows",
    developer: "Git SCM",
    tagline: "Version Control System",
    icon: "../img/git.webp",
    rating: 4.6,
    category: "development",
    trending: false,
    new: false,
    version: "2.47.0",
    size: "54MB",
    windowsVersion: "7+",
    lastUpdated: "2025",
    description: `<h3>🔧 Git</h3><p>Git is a distributed version control system that helps track changes in code projects.</p><h3>✨ Features</h3><ul><li>Branching and merging</li><li>Distributed development</li><li>Git Bash included</li></ul>`,
    downloads: [
      { type: "64-bit", size: "≈54MB", url: "https://github.com/git-for-windows/git/releases/download/v2.47.0.windows.1/Git-2.47.0-64-bit.exe" },
      { type: "32-bit", size: "≈48MB", url: "https://github.com/git-for-windows/git/releases/download/v2.47.0.windows.1/Git-2.47.0-32-bit.exe" }
    ],
    oldVersions: []
},
{
    id: 34,
    name: "Node.js",
    developer: "OpenJS Foundation",
    tagline: "JavaScript Runtime",
    icon: "../img/nodejs.webp",
    rating: 4.5,
    category: "development",
    trending: false,
    new: false,
    version: "22.11.0",
    size: "35MB",
    windowsVersion: "10+",
    lastUpdated: "2025",
    description: `<h3>⚡ Node.js</h3><p>Node.js is a JavaScript runtime built on Chrome's V8 engine, ideal for scalable apps.</p><h3>✨ Features</h3><ul><li>Asynchronous I/O</li><li>Cross-platform</li><li>NPM ecosystem</li></ul>`,
    downloads: [
      { type: "64-bit MSI", size: "≈35MB", url: "https://nodejs.org/dist/v22.11.0/node-v22.11.0-x64.msi" },
      { type: "32-bit MSI", size: "≈30MB", url: "https://nodejs.org/dist/v22.11.0/node-v22.11.0-x86.msi" }
    ],
    oldVersions: []
},
{
    id: 35,
    name: "Java JDK",
    developer: "Oracle Corporation",
    tagline: "Java Development Kit",
    icon: "../img/java.webp",
    rating: 4.4,
    category: "development",
    trending: false,
    new: false,
    version: "23.0.1",
    size: "160MB",
    windowsVersion: "10+",
    lastUpdated: "2025",
    description: `<h3>☕ Java JDK</h3><p>The Java Development Kit provides tools to develop, compile, and run Java applications.</p><h3>✨ Features</h3><ul><li>javac compiler</li><li>Java Runtime Environment</li><li>Developer tools</li></ul>`,
    downloads: [
      { type: "64-bit MSI", size: "≈160MB", url: "https://download.oracle.com/java/23/latest/jdk-23_windows-x64_bin.msi" }
    ],
    oldVersions: []
},
{
    id: 36,
    name: "TeamViewer",
    developer: "TeamViewer GmbH",
    tagline: "Remote Access & Support",
    icon: "../img/teamviewer.webp",
    rating: 4.5,
    category: "utilities",
    trending: false,
    new: false,
    version: "16.1.6",
    size: "35MB",
    windowsVersion: "7+",
    lastUpdated: "2025",
    description: `<h3>🔑 Remote Access</h3><p>TeamViewer allows remote control, desktop sharing, online meetings, and file transfer between computers.</p><h3>✨ Features</h3><ul><li>Remote desktop access</li><li>File transfer</li><li>Multi-platform support</li></ul>`,
    downloads: [
        { type: "64-bit EXE", size: "≈35MB", url: "https://download.teamviewer.com/download/TeamViewer_Setup_x64.exe" },
        { type: "32-bit EXE", size: "≈33MB", url: "https://download.teamviewer.com/download/TeamViewer_Setup.exe" }
    ],
    oldVersions: []
},
{
    id: 37,
    name: "Postman",
    developer: "Postman Inc.",
    tagline: "API Development & Testing",
    icon: "../img/postman.webp",
    rating: 4.6,
    category: "development",
    trending: true,
    new: false,
    version: "10.15.5",
    size: "160MB",
    windowsVersion: "10+",
    lastUpdated: "2025",
    description: `<h3>🛠 API Tool</h3><p>Postman simplifies API development by providing a powerful GUI for testing, debugging, and sharing APIs.</p><h3>✨ Features</h3><ul><li>API requests builder</li><li>Automated testing</li><li>Collaboration tools</li></ul>`,
    downloads: [
        { type: "64-bit EXE", size: "≈160MB", url: "https://dl.pstmn.io/download/latest/win64" }
    ],
    oldVersions: []
},
{
    id: 38,
    name: "Docker Desktop",
    developer: "Docker Inc.",
    tagline: "Containerization Platform",
    icon: "../img/docker.webp",
    rating: 4.7,
    category: "development",
    trending: true,
    new: false,
    version: "24.1.0",
    size: "500MB",
    windowsVersion: "10+",
    lastUpdated: "2025",
    description: `<h3>🐳 Docker</h3><p>Docker Desktop enables developers to build, share, and run containerized applications seamlessly on Windows.</p><h3>✨ Features</h3><ul><li>Container management</li><li>Kubernetes integration</li><li>Cross-platform images</li></ul>`,
    downloads: [
        { type: "Installer (EXE)", size: "≈500MB", url: "https://desktop.docker.com/win/main/amd64/Docker%20Desktop%20Installer.exe" }
    ],
    oldVersions: []
},
{
    id: 39,
    name: "Android Studio",
    developer: "Google LLC",
    tagline: "Android App Development IDE",
    icon: "../img/android_studio.webp",
    rating: 4.5,
    category: "development",
    trending: false,
    new: false,
    version: "2025.1.1",
    size: "1.2GB",
    windowsVersion: "10+",
    lastUpdated: "2025",
    description: `<h3>📱 Android IDE</h3><p>Android Studio is the official IDE for Android app development, featuring code editing, debugging, and testing tools.</p><h3>✨ Features</h3><ul><li>Code editor & debugger</li><li>Emulator for testing</li><li>Integrated Gradle build system</li></ul>`,
    downloads: [
        { type: "Installer (EXE)", size: "≈1.2GB", url: "https://redirector.gvt1.com/edgedl/android/studio/install/2025.1.1.0/android-studio-2025.1.1.0-windows.exe" }
    ],
    oldVersions: []
},
{
    id: 40,
    name: "WinSCP",
    developer: "Martin Prikryl",
    tagline: "SFTP, FTP & SCP Client",
    icon: "../img/winscp.webp",
    rating: 4.6,
    category: "utilities",
    trending: false,
    new: false,
    version: "6.0.1",
    size: "10MB",
    windowsVersion: "7+",
    lastUpdated: "2025",
    description: `<h3>📂 File Transfer</h3><p>WinSCP is a free SFTP, SCP, and FTP client for secure file transfers between local and remote systems.</p><h3>✨ Features</h3><ul><li>Graphical file manager</li><li>Integrated text editor</li><li>Scriptable transfers</li></ul>`,
    downloads: [
        { type: "Installer (EXE)", size: "≈10MB", url: "https://winscp.net/download/WinSCP-6.0.1-Setup.exe" }
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
