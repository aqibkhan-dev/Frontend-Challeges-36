const menuBtn = document.querySelector('.btn-menu');

menuBtn.addEventListener('click', () => {
    const isExpanded = JSON.parse(menuBtn.attributes('aria-expanded'));
    menuBtn.setAttribute('aria-expanded', !isExpanded);
});