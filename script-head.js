let temaInicial;
const temaGuardado = localStorage.getItem('theme');

if (temaGuardado === null) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    temaInicial = prefersDark ? 'dark' : 'light';
} else {
    temaInicial = temaGuardado;
}

document.documentElement.setAttribute('data-bs-theme', temaInicial);

// Detecta el modo del sistema operativo
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Función para actualizar el favicon según el modo del navegador
function actualizarFaviconPorPreferencia(oscuro) {
    const favicon = document.querySelector('link[rel="shortcut icon"]');
    if (favicon) {
        favicon.href = oscuro ? '/img/faviconWhite.png' : '/img/faviconBlack.png';
    }
}

actualizarFaviconPorPreferencia(prefersDarkScheme.matches);

prefersDarkScheme.addEventListener('change', (e) => {
    actualizarFaviconPorPreferencia(e.matches);
});
