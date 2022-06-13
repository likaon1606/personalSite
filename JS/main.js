// BUTTON DARK MODE
const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
});

// ANIMATION BARS MENU
document.querySelector('.barsMenu').addEventListener('click', animateBars);

let line1 = document.querySelector('.line1BMenu');
let line2 = document.querySelector('.line2BMenu');
let line3 = document.querySelector('.line3BMenu');

function animateBars(){
    line1.classList.toggle('activeline1BMenu');
    line2.classList.toggle('activeline2BMenu');
    line3.classList.toggle('activeline3BMenu');
}

// ASIDE
const $openClose = document.getElementById('barsMenu');
    $aside = document.getElementById('aside');

$openClose.addEventListener('click', () => {
    aside.classList.toggle('desplegar')
});