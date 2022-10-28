// https://github.com/ausi/respimagelint/issues/31
window.addEventListener('resize', function () {
    document.querySelectorAll('img[srcset]').forEach(img => img.src += '');
});

// Tilt effect
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if ((!prefersReducedMotion || !prefersReducedMotion.matches) && typeof VanillaTilt !== 'undefined') {
    VanillaTilt.init(document.querySelectorAll('.project-card'), {
        glare: true,
        'max-glare': .5,
        gyroscope: false,
    });
}

// Language selector
const languageSelect = document.querySelector('.language-select');
languageSelect.addEventListener('change', () => {
    const currLocation = window.location.pathname.substring(1, window.location.pathname.length);
    if (currLocation.includes('/')) {
        const path = currLocation.substring(currLocation.indexOf('/'), currLocation.length);
        window.location = `/${languageSelect.value}${path}`;
    } else {
        window.location = `/${languageSelect.value}`;
    }
});
