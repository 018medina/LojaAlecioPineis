$(document).ready(function() {
    // Seleciona todos os cards
    const cards = document.querySelectorAll('.cardT');

    cards.forEach(function(card) {
    // Dentro de cada card, seleciona a descrição
    const description = card.querySelector('.descricaoAreas');

    // Evento para mostrar a descrição quando o mouse passar por cima do card
    card.addEventListener('mouseover', function() {
        description.style.display = 'flex'; // Torna a descrição visível
    });

    // Evento para esconder a descrição quando o mouse sair do card
    card.addEventListener('mouseout', function() {
        description.style.display = 'none'; // Torna a descrição invisível
    });
    });
});


var btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event){
    if(event.type === 'touchstart') event.preventDefault();
    var nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

function auxToggleMenu(){    
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

function exibeDescricao(){
    const description = document.querySelector('.descricaoAreas');
    description.style.display = 'block';
}

function ocultaDescricao(){
    const description = document.querySelector('.descricaoAreas');
    description.style.display = 'none';
}