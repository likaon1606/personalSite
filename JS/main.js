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

// TYPEWRITER
// let text = document.getElementById('typewriter');
// let str = text.innerHTML;

// text.innerHTML = '';

// let speed = 40;
// let i = 0;

// //efect typewriter
// function typeWriter() {
//     if ( i < str.length ) {
//         text.innerHTML += str.charAt(i);
//         i++;
//         setTimeout( typeWriter, speed );
//     }
// }

// setTimeout( typeWriter, speed );

//--------------------------POP UP WINDOWS-----------------------------------------------------------

function open () {
     document.getElementById('window').style.display='block';
}
function close () {
    document.getElementById('window').style.display='none';
}

//-------------------------FORM SEND DATA ---------------------------------------------------------------

const $form = document.querySelector('#form')

$form.addEventListener('submit', handleSubmit)

function handleSubmit (event) {
    event.preventDefault() // do not recharge
    const form = new FormData(this)
    console.log(form.get('name'))
}