
// إضافة تأثيرات عند التمرير
window.addEventListener('scroll', () => {
    const header = document.querySelector('.main-nav');
    header.classList.toggle('scrolled', window.scrollY > 50);
});
