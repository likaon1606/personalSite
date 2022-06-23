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

//-----------------------------CAROUSEL------------------------------------------------
const imgUrl = [
    // "https://picsum.photos/id/237/600/300",
    // "https://picsum.photos/id/200/600/300",
    // "https://picsum.photos/id/500/600/300",
    // "https://picsum.photos/id/700/600/300",
    // "https://picsum.photos/id/213/600/300",
    "assets/gifs/img/1.jpg", "assets/gifs/img/2.jpg"
]

let indiceImgActual = 0
const btnRetroceder = document.getElementById( "retroceder" ) 
const btnAvanzar = document.getElementById( "avanzar" )
const img = document.getElementById( "img-carrusel" )

document.addEventListener( "DOMContentLoaded", (e) => cargarImagen(e) )
btnAvanzar.addEventListener( "click", (e) => mostrarSiguiente(e) )
btnRetroceder.addEventListener( "click", (e) => mostrarAnterior(e) )

function cargarImagen() {
    //background-image -> backgroundImage
    img.style.backgroundImage = `url(${imgUrl[indiceImgActual]})`
}

function mostrarSiguiente(e){
    if( indiceImgActual >= (imgUrl.length - 1) ){
        indiceImgActual = 0
    }else{
        indiceImgActual++
    }

    cargarImagen()
    e.stopPropagation()
}

function mostrarAnterior(e) {
    if( indiceImgActual <= 0 ){
        indiceImgActual = imgUrl.length - 1
    }else{
        indiceImgActual--
    }

    cargarImagen()

    e.stopPropagation()
}