window.onload = function () {
    ScrollReveal({ reset: true });

    animaDireita();
    animaEsquerda();
    animaAparecer();
}

function animaDireita() {
    ScrollReveal().reveal('.animaDireita', {
        origin: 'right',
        duration: 1500,
        distance: '100px',
        easing: 'ease-in'
    });
}

function animaEsquerda() {
    ScrollReveal().reveal('.animaEsquerda', {
        origin: 'left',
        duration: 1500,
        distance: '100px',
        easing: 'ease-in'
    });
}

function animaAparecer() {
    ScrollReveal().reveal('.animaAparecer', {
        duration: 1500,
        easing: 'ease-in'
    });
}