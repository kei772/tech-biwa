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

// セクション表示状態を保持
function preserveSectionVisibility() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        if (section.classList.contains('visible')) {
            section.removeAttribute('data-animate');
        } else {
            section.setAttribute('data-animate', 'true');
        }
    });
}

// 初期化
initializeTheme();

// スクロールイベントリスナー
function handleScroll() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8 && rect.bottom > 0) {
            section.classList.add('visible');
            section.removeAttribute('data-animate');
        }
    });
}

// 初期表示時にセクションを表示
window.addEventListener('load', () => {
    handleScroll();
    preserveSectionVisibility();
});

// スクロール時にセクション表示を更新
window.addEventListener('scroll', handleScroll);

// テーマ切り替え時にセクション表示状態を保持
themeButton?.addEventListener('click', () => {
    setTimeout(() => {
        preserveSectionVisibility();
        handleScroll();
    }, 100);
});
