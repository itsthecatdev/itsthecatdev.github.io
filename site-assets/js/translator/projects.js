// Code by SHXCAT
// Version 21-11-24/19-46
const params = new URLSearchParams(window.location.search);
if (params.get('lang') === 'de') {
    document.addEventListener('DOMContentLoaded', () => {
        const heading = document.querySelector('.home-content h1');
        if (heading) {
            heading.textContent = 'Meine Projekte';
        }
        const heading2 = document.querySelector('#CHANGELANG');
        if (heading2) {
            heading2.textContent = 'EN';
            heading2.href = '../projects/?lang=en';
        }
    });
}
if (params.get('lang') === 'en') {
    document.addEventListener('DOMContentLoaded', () => {
        const heading = document.querySelector('#CHANGELANG');
        if (heading) {
            heading.textContent = 'DE';
            heading.href = '../projects/?lang=de';
        }
    });
}