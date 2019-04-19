ScrollReveal().reveal('.slideshow-container',{ delay: 500 });

ScrollReveal().reveal('.container-center', {
    distance: '0px',
    opacity: 0.2
});

// ScrollReveal().reveal('.span', { easing: 'ease-in' });
ScrollReveal({ distance: '60px' });
ScrollReveal().reveal('.title', { origin: 'top' });
ScrollReveal().reveal('.move', { origin: 'bottom' },);

ScrollReveal().reveal('.fa-user-plus', { origin: 'left' });

const bouncyBtn = document.querySelector('.fa-grin-alt');
bouncyBtn.addEventListener('mouseover', function(event){
    TweenLite.to("#bouncy", 2.5, { ease: RoughEase.ease.config({ template:  Power0.easeNone, strength: 1, points: 20, taper: "none", randomize: true, clamp: false}), y: 250 });});
