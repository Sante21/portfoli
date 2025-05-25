
// Exercici Proba 1
function ejP1() {
    let canvasP1 = document.getElementById('canvasP1');
    let ctxP1 = canvasP1.getContext('2d');

    ctxP1.beginPath();
    ctxP1.moveTo(canvasP1.width / 2 + 20, canvasP1.width / 2);
    ctxP1.arc(canvasP1.width / 2, canvasP1.width / 2, 20, 0, 2 * Math.PI)
    ctxP1.strokeStyle = 'orange';
    ctxP1.lineWidth = 2;
    ctxP1.stroke();

    ctxP1.beginPath();
    ctxP1.moveTo(canvasP1.width / 2 - 100, canvasP1.width / 2);
    ctxP1.arc(canvasP1.width / 2, canvasP1.width / 2, 100, 1 * Math.PI, 0.5 * Math.PI)
    ctxP1.strokeStyle = 'black';
    ctxP1.stroke();

    ctxP1.moveTo(canvasP1.width / 2, canvasP1.width / 2 + 65);
    ctxP1.arc(canvasP1.width / 2, canvasP1.width / 2, 65, 0.5 * Math.PI, 1 * Math.PI)
    ctxP1.stroke();
}

ejP1();


// Exercici Proba 2
function ejP2() {
    let canvasP2 = document.getElementById('canvasP2');
    let ctxP2 = canvasP2.getContext('2d');

    ctxP2.beginPath();
    ctxP2.moveTo(30, 125);
    // ctxP2.quadraticCurveTo(125, 40, 200, 90);
    ctxP2.bezierCurveTo(65, 10, 175, 165, 240, 90);
    ctxP2.stroke();
}
ejP2();




// Exercici 1
function ej1() {
    let canvas1 = document.getElementById('canvas1');
    let ctx1 = canvas1.getContext('2d');

    ctx1.beginPath();
    ctx1.moveTo(canvas1.width / 2 - 100, canvas1.width / 2);
    ctx1.arc(canvas1.width / 2, canvas1.width / 2, 100, 1 * Math.PI, 0.5 * Math.PI);
    ctx1.lineTo(canvas1.width / 2, canvas1.width / 2 + 65);
    ctx1.strokeStyle = 'black';
    ctx1.fillStyle = 'black';
    ctx1.stroke();

    ctx1.moveTo(canvas1.width / 2, canvas1.width / 2 + 65);
    ctx1.arc(canvas1.width / 2, canvas1.width / 2, 65, 0.5 * Math.PI, 1 * Math.PI);
    ctx1.lineTo(canvas1.width / 2 - 100, canvas1.width / 2);
    ctx1.fill();
    ctx1.stroke();

    ctx1.beginPath();
    ctx1.moveTo(canvas1.width / 2 + 20, canvas1.width / 2);
    ctx1.arc(canvas1.width / 2, canvas1.width / 2, 20, 0, 2 * Math.PI)
    ctx1.strokeStyle = 'red';
    ctx1.fillStyle = 'red';
    ctx1.lineWidth = 2;
    ctx1.fill();
    ctx1.stroke();
}

ej1();


// Exercici 2
function ej2() {
    let canvas2 = document.getElementById('canvas2');
    let ctx2 = canvas2.getContext('2d');

    ctx2.beginPath();
    ctx2.moveTo(30, 30);

    ctx2.lineTo(250, 30);
    ctx2.arc(250, 40, 10, 1.5 * Math.PI, 2 * Math.PI);
    ctx2.lineTo(260, 240);
    ctx2.arc(250, 250, 10, 0 * Math.PI, 0.5 * Math.PI);
    ctx2.lineTo(30, 260);
    ctx2.arc(30, 250, 10, 0.5 * Math.PI, 1 * Math.PI);
    ctx2.lineTo(20, 40);
    ctx2.arc(30, 40, 10, 1 * Math.PI, 1.5 * Math.PI);

    ctx2.stroke();
}
ej2();


// Exercici 3
function ej3() {
    let canvas3 = document.getElementById('canvas3');
    let ctx3 = canvas3.getContext('2d');

    ctx3.beginPath();
    ctx3.moveTo(30, 250);

    ctx3.lineTo(30, 100);
    ctx3.arc(100, 100, 70, 1 * Math.PI, 1.5 * Math.PI);
    ctx3.lineTo(250, 30);
    ctx3.lineTo(250, 180);
    ctx3.arc(180, 180, 70, 0 * Math.PI, 0.5 * Math.PI);
    ctx3.closePath()
    ctx3.fill();

    // ctx2.quadraticCurveTo(125, 40, 200, 90);
    // ctx2.bezierCurveTo(65, 10, 175, 165, 240, 90);
    ctx3.stroke();
}
ej3();


// Exercici 4
function ej4() {
    let canvas4 = document.getElementById('canvas4');
    let ctx4 = canvas4.getContext('2d');

    ctx4.beginPath();
    ctx4.moveTo(canvas4.width, canvas4.height / 2);
    ctx4.lineTo(0, canvas4.height / 2);
    ctx4.lineTo(0, 75);
    ctx4.quadraticCurveTo(150, 10, 200, 100);
    ctx4.quadraticCurveTo(240, 55, 255, 85);
    ctx4.quadraticCurveTo(320, 70, 350, 110);
    ctx4.quadraticCurveTo(410, 65, 420, 110);
    ctx4.quadraticCurveTo(445, 5, canvas4.width, 125);

    ctx4.fillStyle = "#cfcafc"
    ctx4.fill()

    // ctx2.bezierCurveTo(65, 10, 175, 165, 240, 90);
}
ej4();


// Exercici 5
function ej5() {
    let canvas5 = document.getElementById('canvas5');
    let ctx5 = canvas5.getContext('2d');


    ctx5.beginPath();
    ctx5.moveTo(350, canvas5.height / 2);
    ctx5.lineTo(100, canvas5.height / 2);
    ctx5.quadraticCurveTo(150, 5, 280, 20);
    ctx5.quadraticCurveTo(218, 280, 350, 80);
    ctx5.closePath();
    ctx5.fillStyle = "rgb(245, 248, 211)";
    ctx5.fill();


    ctx5.beginPath();
    ctx5.moveTo(350, canvas5.height / 2);
    ctx5.lineTo(0, canvas5.height / 2);
    ctx5.lineTo(0, 145);
    ctx5.quadraticCurveTo(150, 10, 250, 75);
    ctx5.quadraticCurveTo(225, 105, 260, 135);
    ctx5.quadraticCurveTo(320, 75, 350, 165);
    ctx5.closePath()
    ctx5.fillStyle = "rgba(50, 255, 50, 0.2)"
    ctx5.fill()
}
ej5();

// Exercici 6
function ej6() {
    let canvas6 = document.getElementById('canvas6');
    let ctx6 = canvas6.getContext('2d');

    let x = 220;
    let y = 25;

    moving();

    canvas6.addEventListener("mousemove", (e) => {
        if (e.buttons & 1) {
            x = e.offsetX;
            y = e.offsetY;
            moving();
        }
    });

    function moving() {
        ctx6.clearRect(0, 0, canvas6.width, canvas6.height);
        ctx6.beginPath();
        ctx6.moveTo(30, canvas6.height / 2);
        ctx6.arc(30, 250, 5, 0 * Math.PI, 2 * Math.PI);
        ctx6.fillStyle = "rgb(137, 0, 126)";
        ctx6.fill();

        ctx6.beginPath();
        ctx6.moveTo(470, 235);
        ctx6.arc(470, 235, 5, 0 * Math.PI, 2 * Math.PI);
        ctx6.fillStyle = "rgb(0, 127, 29)";
        ctx6.fill();

        ctx6.beginPath();
        ctx6.moveTo(30, canvas6.height / 2);
        ctx6.lineTo(x, y);
        ctx6.moveTo(470, 235);
        ctx6.lineTo(x, y);
        ctx6.strokeStyle = "blue";
        ctx6.stroke();

        ctx6.beginPath();
        ctx6.moveTo(x, y);
        ctx6.arc(x, y, 5, 0 * Math.PI, 2 * Math.PI);
        ctx6.fill();

        ctx6.beginPath();
        ctx6.moveTo(30, canvas6.height / 2);
        ctx6.quadraticCurveTo(x, y, 470, 235);
        ctx6.strokeStyle = "black";
        ctx6.stroke();
    }
}

ej6();


// Exercici 7
function ej7() {
    let canvas7 = document.getElementById('canvas7');
    let ctx7 = canvas7.getContext('2d');

    let x1 = 150;
    let y1 = 20;

    let x2 = 335;
    let y2 = 370;

    moving();

    canvas7.addEventListener("mousemove", (e) => {
        if (e.buttons == 1) {
            x1 = e.offsetX;
            y1 = e.offsetY;
            moving();
        }

        if (e.buttons == 2) {
            x2 = e.offsetX;
            y2 = e.offsetY;
            moving();
        }
    });

    function moving() {
        ctx7.clearRect(0, 0, canvas7.width, canvas7.height);

        ctx7.beginPath();
        ctx7.moveTo(30, canvas7.height / 2);
        ctx7.arc(30, 250, 5, 0 * Math.PI, 2 * Math.PI);
        ctx7.fillStyle = "rgb(137, 0, 126)";
        ctx7.fill();

        ctx7.beginPath();
        ctx7.arc(470, 235, 5, 0 * Math.PI, 2 * Math.PI);
        ctx7.fillStyle = "rgb(131, 131, 129)";
        ctx7.fill();

        ctx7.beginPath();
        ctx7.moveTo(30, canvas7.height / 2);
        ctx7.lineTo(x1, y1);
        ctx7.moveTo(470, 235);
        ctx7.lineTo(x2, y2);
        ctx7.strokeStyle = "blue";
        ctx7.stroke();

        ctx7.beginPath();
        ctx7.moveTo(x1, y1);
        ctx7.arc(x1, y1, 5, 0 * Math.PI, 2 * Math.PI);
        ctx7.fillStyle = "rgb(0, 127, 31)";
        ctx7.fill();

        ctx7.beginPath();
        ctx7.moveTo(x2, y2);
        ctx7.arc(x2, y2, 5, 0 * Math.PI, 2 * Math.PI);
        ctx7.fillStyle = "rgb(255, 41, 35)";
        ctx7.fill();

        ctx7.beginPath();
        ctx7.moveTo(30, canvas7.height / 2);
        ctx7.bezierCurveTo(x1, y1, x2, y2, 470, 235);
        ctx7.strokeStyle = "black";
        ctx7.stroke();
    }
}
ej7();


// Exercici 8
function ej8() {
    let canvas8 = document.getElementById('canvas8');
    let ctx8 = canvas8.getContext('2d');

    ctx8.beginPath();
    ctx8.moveTo(50, 100);
    ctx8.bezierCurveTo(120, 250, 190, 20, 300, 150);
    ctx8.stroke();

    let img = new Image();
    img.src = "Images/img/veggito/veggito.gif";

    img.onload = () => {
        ctx8.drawImage(img, 20, 20, 40, 40, 20, 20)
    }

}
ej8();


// Exercici 9
// function ej9() {
//     let canvas9 = document.getElementById('canvas9');
//     let ctx9 = canvas9.getContext('2d');

//     let width = canvas9.width;
//     let height = canvas9.height;

//     function getRcolor() {
//         return Math.floor(Math.random() * 256);
//     }

//     for (let i = 0; i <= (width / 10) * 4; i++) {
//         ctx9.strokeStyle = `rgb(${getRcolor()}, ${getRcolor()}, ${getRcolor()})`;
//         // Abajo Izquierda a Arriba Derecha
//         ctx9.beginPath();
//         ctx9.moveTo(10 * i, height);
//         ctx9.lineTo(width, height - 10 * i);
//         ctx9.closePath();
//         ctx9.stroke();

//         ctx9.strokeStyle = `rgb(${getRcolor()}, ${getRcolor()}, ${getRcolor()})`;
//         // Abajo Derecha a Arriba Izquierda
//         ctx9.beginPath();
//         ctx9.moveTo(width - 10 * i, height);
//         ctx9.lineTo(0, height - 10 * i);
//         ctx9.closePath();
//         ctx9.stroke();

//         ctx9.strokeStyle = `rgb(${getRcolor()}, ${getRcolor()}, ${getRcolor()})`;
//         // Arriba Derecha a Abajo Izquierda
//         ctx9.beginPath();
//         ctx9.moveTo(10 * i, 0);
//         ctx9.lineTo(0, height - 10 * i);
//         ctx9.closePath();
//         ctx9.stroke();

//         ctx9.strokeStyle = `rgb(${getRcolor()}, ${getRcolor()}, ${getRcolor()})`;
//         // Arriba Izquierda a Abajo Derecha
//         ctx9.beginPath();
//         ctx9.moveTo(width - 10 * i, 0);
//         ctx9.lineTo(width, height - 10 * i);
//         ctx9.closePath();
//         ctx9.stroke();
//     }
// }
// ej9();
