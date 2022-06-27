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
let text = document.getElementById('typewriter');
let str = text.innerHTML;

text.innerHTML = '';

let speed = 7;
let i = 0;

//efect typewriter
function typeWriter() {
    if ( i < str.length ) {
        text.innerHTML += str.charAt(i);
        i++;
        setTimeout( typeWriter, speed );
    }
}

setTimeout( typeWriter, speed );

//--------------------------POP UP WINDOWS-----------------------------------------------------------

function open () {
     document.getElementById('window').style.display='block';
}
function close () {
    document.getElementById('window').style.display='none';
}

//-----------------------------CAROUSEL------------------------------------------------
const imgUrl = [
    "assets/gifs/img/1.jpg", 
    "assets/gifs/img/2.jpg",
    "assets/gifs/img/P1.jpg",
    "assets/gifs/img/P2.jpg",
    "assets/gifs/img/C1.jpg",   
    "assets/gifs/img/C2.jpg",
    "assets/gifs/img/F1.jpg",
    "assets/gifs/img/F2.jpg",
]

let actualIndex = 0
const btnLeft = document.getElementById( "left" ) 
const btnRight = document.getElementById( "right" )
const img = document.getElementById( "img-carousel" )

document.addEventListener( "DOMContentLoaded", (e) => uploadImage(e) )
btnRight.addEventListener( "click", (e) => next(e) )
btnLeft.addEventListener( "click", (e) => previus(e) )

function uploadImage() {
    //background-image -> backgroundImage
    img.style.backgroundImage = `url(${imgUrl[actualIndex]})`
}

function next(e){
    if( actualIndex >= (imgUrl.length - 1) ){
        actualIndex = 0
    }else{
        actualIndex++
    }

    uploadImage()
    e.stopPropagation()
}

function previus(e) {
    if( actualIndex <= 0 ){
        actualIndex = imgUrl.length - 1
    }else{
        actualIndex--
    }

    uploadImage()

    e.stopPropagation()
}