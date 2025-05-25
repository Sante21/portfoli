let temaInicial;
const temaGuardado = localStorage.getItem('theme');

if (temaGuardado === null) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    temaInicial = prefersDark ? 'dark' : 'light';
} else {
    temaInicial = temaGuardado;
}

document.documentElement.setAttribute('data-bs-theme', temaInicial);

function updateFavicon() {
    const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const favicon = document.getElementById('favicon');
    favicon.href = darkMode ? '/img/faviconBlack.png' : '/img/faviconWhite.png';
}

updateFavicon();

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateFavicon);

