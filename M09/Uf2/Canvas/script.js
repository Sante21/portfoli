document.addEventListener("DOMContentLoaded", () => {

    function randColor() {
        return Math.floor(Math.random() * 256);
    }

    let canvas1 = document.getElementById('canvas1');
    let ctx1 = canvas1.getContext('2d');

    ctx1.fillStyle = '#000000';
    ctx1.fillRect(0, 0, 175, 100);

    ctx1.fillStyle = '#ff0000';
    ctx1.fillRect(4, 4, 100, 75);

    ctx1.fillStyle = '#0000ff';
    ctx1.fillRect(105, 125, 125, 75);

    // Exercici 2
    let canvas2 = document.getElementById('canvas2');
    let ctx2 = canvas2.getContext('2d');

    ctx2.fillStyle = '#745df8';
    ctx2.fillRect(4, 4, 50, 50);

    ctx2.fillStyle = '#faff679f';
    ctx2.fillRect(35, 35, 50, 50);

    // Exercici 3
    let canvas3 = document.getElementById('canvas3');
    let ctx3 = canvas3.getContext('2d');

    let espacio = 10;
    let position = 0;
    ctx3.fillStyle = '#00ebfd';
    for (let r = 0; r < 11; r++) {
        ctx3.fillRect(position, position, 5, 5);
        position = position + espacio;
    }

    let positionX = 100;
    let positionY = 0;
    ctx3.strokeStyle = '#b5adfb';
    for (let r = 0; r < 11; r++) {
        ctx3.strokeRect(positionX, positionY, 5, 5);
        positionX -= espacio;
        positionY += espacio;
    }

    // Exercici 4
    let canvas4 = document.getElementById('canvas4');
    let ctx4 = canvas4.getContext('2d');

    let position4 = 0;
    ctx4.fillStyle = 'red';
    for (let r = 0; r < 11; r++) {
        ctx4.fillRect(position4, position4, 5, 5);
        position4 = position4 + espacio;
    }

    let positionX4 = 100;
    let positionY4 = 0;
    ctx4.strokeStyle = '#ffce9f';
    for (let r = 0; r < 11; r++) {
        ctx4.strokeRect(positionX4, positionY4, 5, 5);
        positionX4 -= espacio;
        positionY4 += espacio;
    }

    let borrado = document.getElementById('borrado');

    borrado.addEventListener('click', () => {
        ctx4.clearRect(39, 39, 27, 27);
    })


    // Exercici 5
    let canvas5 = document.getElementById('canvas5');
    let ctx5 = canvas5.getContext('2d');

    for (let r = 0; r < canvas5.width; r = r + 10) {
        for (let c = 0; c < canvas5.height; c = c + 10) {
            ctx5.fillStyle = `rgb(${randColor()}, ${randColor()}, ${randColor()})`;
            ctx5.fillRect(r, c, 10, 10);
        }
    }

    // Exercici 6
    let canvas6 = document.getElementById('canvas6');
    let ctx6 = canvas6.getContext('2d');

    let color;

    for (let r = 0; r < canvas6.width; r = r + 10) {
        for (let c = 0; c < canvas6.height; c = c + 10) {
            color = Math.floor(Math.random() * 256);
            ctx6.fillStyle = `rgb(${color}, ${color}, ${color})`;
            ctx6.fillRect(r, c, 10, 10);
        }
    }

    // Exercici 7
    let canvas7 = document.getElementById('canvas7');
    let ctx7 = canvas7.getContext('2d');

    for (let r = 0; r < canvas7.width / 10; r++) {
        ctx7.fillStyle = `rgb(${randColor()}, ${randColor()}, ${randColor()})`;
        for (let c = 0; c < canvas7.height / 10; c++) {
            ctx7.fillRect(r * 10, c * 10, 10, 10);
        }
    }

    // Exercici 8
    let canvas8 = document.getElementById('canvas8');
    let ctx8 = canvas8.getContext('2d');

    setInterval(() => {
        for (let r = 0; r < canvas8.width / 20; r++) {
            for (let c = 0; c < canvas8.height / 20; c++) {
                ctx8.strokeStyle = `rgb(${randColor()}, ${randColor()}, ${randColor()})`;
                ctx8.lineWidth = 4;
                ctx8.strokeRect(r * 20 + 4, c * 20 + 4, 20 - 8, 20 - 8);
            }
        }
    }, "1000");



    // Exercici 9
    let canvas9 = document.getElementById('canvas9');
    let ctx9 = canvas9.getContext('2d');

    setInterval(() => {
        for (let r = 0; r < canvas9.width / 5; r++) {
            for (let c = 0; c < canvas9.height / 5; c++) {
                color = Math.floor(Math.random() * 256);
                ctx9.fillStyle = `rgb(${color}, ${color}, ${color})`;
                ctx9.fillRect(r * 5, c * 5, 5, 5);
            }
        }
    }, "1000");

    // Exercici 10
    let canvas10 = document.getElementById('canvas10');
    let ctx10 = canvas10.getContext('2d');

    setInterval(() => {
        for (let r = 0; r < canvas10.width / 5; r++) {
            for (let c = 0; c < canvas10.height / 5; c++) {
                color = Math.floor(Math.random() * 256);
                ctx10.fillStyle = `rgb(${color}, ${color}, ${color})`;
                ctx10.fillRect(r * 5, c * 5, 5, 5);
            }
        }
    }, "700");
});