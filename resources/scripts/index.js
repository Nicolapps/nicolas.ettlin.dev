// https://github.com/ausi/respimagelint/issues/31
window.addEventListener('resize', function () {
    document.querySelectorAll('img[srcset]').forEach(img => img.src += '');
});
