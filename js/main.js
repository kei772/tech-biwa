// テーマ切り替え機能
const themeToggle = document.querySelector('.theme-toggle');
const themeButton = document.querySelector('.theme-button');
const htmlElement = document.documentElement;

// 現在のテーマを取得
function getCurrentTheme() {
    return localStorage.getItem('theme') ||
           (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
}

// テーマを適用
function applyTheme(theme) {
    htmlElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

// テーマ切り替え
function toggleTheme() {
    const currentTheme = getCurrentTheme();
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
}

// 初期テーマ設定
function initializeTheme() {
    const theme = getCurrentTheme();
    applyTheme(theme);
}

// イベントリスナー設定
if (themeButton) {
    themeButton.addEventListener('click', toggleTheme);
}

// 初期化
initializeTheme();
