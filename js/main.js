const $contenedor = document.querySelector('#contenedor');
const $botonMenu = document.querySelector('#boton-menu');
let elementos = document.querySelectorAll('.menu-lateral a span');

$botonMenu.addEventListener('click', () => {
    $contenedor.classList.toggle('active');
    
    if ($contenedor.className !== 'contenedor active') {
        elementos.forEach(function (elemento) {
            elemento.style.display = 'none';
        });
    } else {
        elementos.forEach(function (elemento) {
            elemento.style.display = 'inline';
        });
    }
});

const comprobarAncho = () => { //funcion de tipo flecha
    if(window.innerWidth <= 768){
        $contenedor.classList.remove('active');
        elementos.forEach(function (elemento) {
            elemento.style.display = 'none';
        });
    }
    else{
        $contenedor.classList.add('active');
        elementos.forEach(function (elemento) {
            elemento.style.display = 'inline';
        });
    }
}

comprobarAncho();


window.addEventListener('resize', () =>{
    comprobarAncho();
});