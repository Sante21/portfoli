let count = 0;
let red = document.getElementById("red");
let green = document.getElementById("green");
let yellow = document.getElementById("yellow");
let blue = document.getElementById("blue");

function changeColorRed() {
    red.style.backgroundColor = 'rgb(255, 143, 143)';
    setTimeout(() => {
        red.style.backgroundColor = 'red';
    }, 1000);
}

function changeColorGreen() {
    green.style.backgroundColor = 'rgb(139, 228, 139)';
    setTimeout(() => {
        green.style.backgroundColor = 'green';
    }, 1000);
}

function changeColorYellow() {
    yellow.style.backgroundColor = 'rgb(255, 255, 142)';
    setTimeout(() => {
        yellow.style.backgroundColor = 'yellow';
    }, 1000);
}

function changeColorBlue() {
    blue.style.backgroundColor = 'rgb(123, 123, 255)';
    setTimeout(() => {
        blue.style.backgroundColor = 'blue';
    }, 1000);

    // if (elementBlue.style.backgroundColor == 'blue') {
    //     elementBlue.style.backgroundColor = 'rgb(123, 123, 255)';
    // } else {
    //     elementBlue.style.backgroundColor = 'blue';
    // }
    // if (count < 5) {
    //     setTimeout(changeColorBlue, 1500);
    //     // count++;
    // }
}

let secuencia = [];
let colores = ['red', 'green', 'yellow', 'blue'];

// for (let i = 0; i < 4; i++) {
//     empezarJuego();    
// }

empezarJuego()

function empezarJuego() {
    let posicionRandom = Math.floor(Math.random() * colores.length);
    let color = colores[posicionRandom];

    secuencia.push(color);

    if (color == "red") {
        setTimeout(changeColorRed, 1000);
    } else if (color == "green") {
        setTimeout(changeColorGreen, 1000);
    } else if (color == "yellow") {
        setTimeout(changeColorYellow, 1000);
    } else if (color == "blue") {
        setTimeout(changeColorBlue, 1000);
    }

    // for (let i = 0; i < secuencia.length; i++) {
    //     empezarJuego();
    // }
}
document.write(secuencia);

function validacion() {
    // if (secuencia[0] == "red") {
    //     document.write("correcto rojo");
    // } else if (secuencia[0] == "green") {
    //     document.write("correcto verde");
    // } else if (secuencia[0] == "yellow") {
    //     document.write("correcto amarillo");
    // } else if (secuencia[0] == "blue") {
    //     document.write("correcto azul");
    // }
}