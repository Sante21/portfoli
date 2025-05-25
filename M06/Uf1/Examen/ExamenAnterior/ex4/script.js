
let puntos = 0;

function startGame() {
    // setTimeout(function () {
    //     mostrarTopo();
    // }, "30000");
    mostrarTopo();
}

function mostrarTopo() {
    let id;
    let rand = Math.floor(Math.random() * 6) + 1;
    id = 'forat-' + rand;
    let element = document.getElementById(id);
    element.className = 'forat talp';
    setTimeout(function () {
        element.className = 'forat';
        mostrarTopo();
    }, 800);
}

function checkForat(id) {
    let element = document.getElementById(id);
    if (element.className == 'forat talp') {
        puntos++;
        let puntuacion = document.getElementById('puntuacio');
        puntuacion.innerHTML = `${puntos}`;
    }
}
