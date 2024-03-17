// Add parallax scrolling effect
window.addEventListener('scroll', function() {
    const parallax = document.querySelectorAll('.parallax');
    let scrollPosition = window.pageYOffset;

    parallax.forEach(function(element) {
        element.style.backgroundPositionY = (scrollPosition - element.offsetTop) * 0.7 + 'px';
    });
});