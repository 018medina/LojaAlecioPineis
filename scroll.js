$(document).ready(function () {

    ScrollReveal({ reset: true });

    animaDireita();
    animaEsquerda();
    animaAparecer();
});

function animaDireita() {
    ScrollReveal().reveal('.animaDireita', {
        origin: 'right',
        duration: 2000,
        distance: '100px'
    })
}

function animaEsquerda() {
    ScrollReveal().reveal('.animaEsquerda', {
        origin: 'left',
        duration: 2000,
        distance: '100px'
    })
}

function animaAparecer() {
    ScrollReveal().reveal('.animaAparecer', {
        duration: 1000, // Tempo da animação
        opacity: 0, // Garante transição de opacidade
        easing: 'ease-in-out' // Suaviza a transição
    })
}