// https://github.com/ausi/respimagelint/issues/31
window.addEventListener('resize', function () {
    document.querySelectorAll('img[srcset]').forEach(img => img.src += '');
});

// Tilt effect
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if (!prefersReducedMotion || !prefersReducedMotion.matches) {
    VanillaTilt.init(document.querySelectorAll('.project-card'), {
        glare: true,
        'max-glare': .5,
        gyroscope: false,
    });
}

// Language selector
const languageSelect = document.querySelector('.language-select');
languageSelect.addEventListener('change', () => {
    window.location = `/${languageSelect.value}`;
});
