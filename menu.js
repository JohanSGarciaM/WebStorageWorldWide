
// aparición del titulo 1 segundo despues de que se cargue la página
document.addEventListener("DOMContentLoaded", function() {
    // Una vez que se carga la página
    const texto = document.getElementsByClassName('titulo');
    setTimeout(function() {
        texto.style.animationPlayState = 'running'; // Inicia la animación después de 1 segundo
    }, 1000);
});

// animación de la flecha para que salte cada 
setInterval(function() {
    const label = document.getElementsByClassName('icon-down-open');
    label.classList.toggle('label-animado'); // Alternar la clase para iniciar la animación
}, 3000);

