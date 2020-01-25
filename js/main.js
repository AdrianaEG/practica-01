const $contenedor = document.querySelector('#contenedor');

const $botonMenu = document.querySelector('#boton-menu');

$botonMenu.addEventListener('click', () => {
    $contenedor.classList.toggle('active');
    let elementos = document.querySelectorAll('.menu-lateral a span');
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
