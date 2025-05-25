
document.addEventListener('DOMContentLoaded', () => {
    const checkbox = document.getElementById('flexSwitchCheckChecked');
    const temaActual = document.documentElement.getAttribute('data-bs-theme');
    if (checkbox) {
        checkbox.checked = (temaActual === 'dark')
    };

    checkbox?.addEventListener('change', function () {
        const nuevoTema = this.checked ? 'dark' : 'light';
        document.documentElement.setAttribute('data-bs-theme', nuevoTema);
        localStorage.setItem('theme', nuevoTema);
    });
});



