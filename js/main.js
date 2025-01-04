// テーマ切り替え機能
const themeToggle = document.querySelector('.theme-toggle');
const themeButton = document.querySelector('.theme-button');
const htmlElement = document.documentElement;

// 現在のテーマを取得
function getCurrentTheme() {
    return htmlElement.getAttribute('data-theme') || 'light';
}

// テーマを適用
function applyTheme(theme) {
    htmlElement.setAttribute('data-theme', theme);
}

// テーマ切り替え
function toggleTheme() {
    const currentTheme = getCurrentTheme();
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
}

// 初期テーマ設定
function initializeTheme() {
    applyTheme('light');
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

// モバイルメニュー初期化
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });

        // モバイルメニュー内のリンクをクリックした時にメニューを閉じる
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        });
    }
}

// 初期化
initializeTheme();
initMobileMenu();

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

// テーマ切り替え時の処理
themeButton?.addEventListener('click', () => {
    setTimeout(() => {
        preserveSectionVisibility();
        handleScroll();
    }, 100);
});

// システムのカラーモード変更を監視
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
        applyTheme(e.matches ? 'dark' : 'light');
    }
});
