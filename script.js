const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const logo = document.getElementById('logo');

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    if (themeIcon) {
        themeIcon.textContent = theme === 'dark' ? 'light_mode' : 'dark_mode';
    }

    if (logo) {
        logo.src = theme === 'dark' ? './assets/logo-dark.svg' : './assets/logo.svg';
    }
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });
}

const savedTheme = localStorage.getItem('theme') || 'light';
applyTheme(savedTheme);
