
// Exercici 1
function ej1() {
    let canvas1 = document.getElementById('canvas1');
    let ctx1 = canvas1.getContext('2d');

    let x = 170;
    let sum = 40;

    for (let i = 1; i <= 5; i++) {
        ctx1.beginPath();
        ctx1.moveTo(x, 20);
        ctx1.lineTo(x + sum, 100);
        ctx1.lineTo(x, 200);
        ctx1.lineTo(x - sum, 100);
        ctx1.closePath();

        if (i == 1) {
            ctx1.fillStyle = 'rgb(0,0,0)';
        } else if (i == 2) {
            ctx1.fillStyle = 'rgba(255, 255, 20, 0.6)';
        } else if (i == 3) {
            ctx1.fillStyle = 'rgba(137, 90, 255, 0.6)';
        } else if (i == 4) {
            ctx1.fillStyle = 'rgba(60, 255, 135, 0.5)';
        } else if (i == 5) {
            ctx1.fillStyle = 'rgba(250, 255, 75, 0.8)';
        }
        ctx1.fill();
        x += sum;
    }

    let limitL = 20;
    let limitT = 280;

    ctx1.beginPath();
    ctx1.moveTo(limitL, limitT);
    for (let i = 0; i <= 15; i++) {
        limitL += 10;
        ctx1.lineTo(limitL, limitT);
        limitT += 10;
        ctx1.lineTo(limitL, limitT);

        if (i == 15) {
            ctx1.lineTo(limitL - 10 * 16, limitT);
            ctx1.lineTo(limitL - 10 * 16, limitT - 10 * 16);
        }
    }
    ctx1.stroke()
}

ej1();


// Exercici 2
function ej2() {
    let canvas21 = document.getElementById('canvas21');
    let ctx21 = canvas21.getContext('2d');

    ctx21.beginPath();
    ctx21.moveTo(30, 30);
    ctx21.lineTo(50, 15);
    ctx21.lineTo(70, 30);
    ctx21.lineTo(55, 30);
    ctx21.lineTo(55, 60);
    ctx21.lineTo(45, 60);
    ctx21.lineTo(45, 30);
    ctx21.closePath();
    ctx21.fillStyle = 'rgb(255, 41, 32)';
    ctx21.fill();

    ctx21.beginPath();
    ctx21.moveTo(130, 60);
    ctx21.lineTo(100, 90);
    ctx21.lineTo(130, 120);
    ctx21.closePath();
    ctx21.fillStyle = 'rgb(255, 141, 45)';
    ctx21.fill();


    let canvas22 = document.getElementById('canvas22');
    let ctx22 = canvas22.getContext('2d');

    ctx22.beginPath();
    ctx22.moveTo(30, 30);
    ctx22.lineTo(50, 15);
    ctx22.lineTo(70, 30);
    ctx22.lineTo(55, 30);
    ctx22.lineTo(55, 60);
    ctx22.lineTo(45, 60);
    ctx22.lineTo(45, 30);
    ctx22.closePath();
    ctx22.strokeStyle = 'rgb(255, 141, 45)';
    ctx22.stroke();

    ctx22.beginPath();
    ctx22.moveTo(130, 60);
    ctx22.lineTo(100, 90);
    ctx22.lineTo(130, 120);
    ctx22.closePath();
    ctx22.strokeStyle = 'rgb(255, 141, 45)';
    ctx22.stroke();
}
ej2();


// Exercici 3
function ej3() {
    let canvas3 = document.getElementById('canvas3');
    let ctx3 = canvas3.getContext('2d');

    let inicio = 0;
    let alto = 0;

    for (let i = 1; i <= 10; i++) {
        ctx3.beginPath();
        ctx3.moveTo(inicio, alto + inicio);
        ctx3.lineTo(inicio + 20, alto + inicio);

        inicio += 20;
        ctx3.stroke();
    }

    let limitL = 300;
    let limitT = 300;

    ctx3.beginPath();
    ctx3.moveTo(limitL, limitT);
    for (let i = 0; i <= 15; i++) {
        limitL += 10;
        ctx3.lineTo(limitL, limitT);
        limitT += 10;
        ctx3.lineTo(limitL, limitT);

        if (i == 15) {
            ctx3.lineTo(limitL - 10 * 16, limitT);
            ctx3.lineTo(limitL - 10 * 16, limitT - 10 * 16);
        }
    }
    ctx3.stroke()
}
ej3();


// Exercici 4
function ej4() {
    let canvas4 = document.getElementById('canvas4');
    let ctx4 = canvas4.getContext('2d');

    ctx4.beginPath();
    ctx4.moveTo(40, 20);
    ctx4.lineTo(80, 20);
    ctx4.lineTo(95, 50);
    ctx4.lineTo(80, 80);
    ctx4.lineTo(40, 80);
    ctx4.lineTo(25, 50);
    ctx4.closePath();
    ctx4.fill();

    ctx4.beginPath();
    ctx4.moveTo(140, 20);
    ctx4.lineTo(180, 20);
    ctx4.lineTo(195, 50);
    ctx4.lineTo(180, 80);
    ctx4.lineTo(140, 80);
    ctx4.lineTo(125, 50);
    ctx4.closePath()
    ctx4.fillStyle = 'rgb(162, 19, 12)'
    ctx4.fill();

    ctx4.beginPath();
    ctx4.moveTo(240, 20);
    ctx4.lineTo(280, 20);
    ctx4.lineTo(295, 50);
    ctx4.lineTo(280, 80);
    ctx4.lineTo(240, 80);
    ctx4.lineTo(225, 50);
    // ctx4.fill(); //Cuando hacemos el Fill sin cerrarlo, automaticamente se cierra internamente
    // ctx4.lineWidth(2)
    ctx4.stroke();

    ctx4.beginPath();
    ctx4.moveTo(340, 20);
    ctx4.lineTo(380, 20);
    ctx4.lineTo(395, 50);
    ctx4.lineTo(380, 80);
    ctx4.lineTo(340, 80);
    ctx4.lineTo(325, 50);
    ctx4.closePath();
    ctx4.strokeStyle = 'red'
    ctx4.stroke();
}
ej4();


// Exercici 5
function ej5() {
    let canvas5 = document.getElementById('canvas5');
    let ctx5 = canvas5.getContext('2d');
    // console.log(canvas5.height)Ç

    for (let i = 0; i <= 12; i++) {
        ctx5.beginPath();
        ctx5.moveTo(40 * i, canvas5.height);
        ctx5.lineTo(canvas5.width, canvas5.height - 40 * i);
        ctx5.closePath();
        ctx5.stroke();
    }
}
ej5();

// Exercici 6
function ej6() {
    let canvas6 = document.getElementById('canvas6');
    let ctx6 = canvas6.getContext('2d');

    let width = canvas6.width;
    let height = canvas6.height;

    // Arriba Izquierda
    for (let i = 1; i <= (width / 2) / 5; i++) {
        ctx6.beginPath();
        ctx6.moveTo(5 * i, 0);
        ctx6.lineTo(0, height / 2);
        ctx6.stroke();
    }

    for (let i = 1; i <= (width / 2) / 5; i++) {
        ctx6.beginPath();
        ctx6.moveTo(0, 5 * i);
        ctx6.lineTo(width / 2, 0);
        ctx6.stroke();
    }

    // Arriba Derecha    
    for (let i = 1; i <= (width / 2) / 5; i++) {
        ctx6.beginPath();
        ctx6.moveTo(width - 5 * i, 0);
        ctx6.lineTo(width, height / 2);
        ctx6.stroke();
    }

    for (let i = 1; i <= (height / 2) / 5; i++) {
        ctx6.beginPath();
        ctx6.moveTo(width, 5 * i);
        ctx6.lineTo(width / 2, 0);
        ctx6.stroke();
    }


    // Abajo izquierda
    for (let i = 1; i <= (width / 2) / 5; i++) {
        ctx6.beginPath();
        ctx6.moveTo(5 * i, height);
        ctx6.lineTo(0, height / 2);
        ctx6.stroke();
    }

    for (let i = 1; i <= (height / 2) / 5; i++) {
        ctx6.beginPath();
        ctx6.moveTo(0, height - 5 * i);
        ctx6.lineTo(width / 2, height);
        ctx6.stroke();
    }

    // Abajo Derecha
    for (let i = 1; i <= (width / 2) / 5; i++) {
        ctx6.beginPath();
        ctx6.moveTo(width - 5 * i, height);
        ctx6.lineTo(width, height / 2);
        ctx6.stroke();
    }

    for (let i = 1; i <= (height / 2) / 5; i++) {
        ctx6.beginPath();
        ctx6.moveTo(width, height / 2 + 5 * i);
        ctx6.lineTo(width / 2, height);
        ctx6.stroke();
    }
}
ej6();

// Exercici 6.2

function ej62() {
    let canvas62 = document.getElementById('canvas62');
    let ctx62 = canvas62.getContext('2d');

    let width = canvas62.width;
    let height = canvas62.height;

    // for (let i = 0; i < (width / 2); i = i + 5) {
    //     ctx62.beginPath();
    //     ctx62.moveTo(i, 0);
    //     ctx62.lineTo(0, (height / 2));
    //     ctx62.stroke();
    // }

    // for (let i = 0; i < (height / 2); i = i + 5) {
    //     ctx62.beginPath();
    //     ctx62.moveTo(0, i);
    //     ctx62.lineTo(width/2, 0)
    //     ctx62.stroke();
    // }

    // ctx62.beginPath();
    // ctx62.moveTo(width/2, height/2);
    // ctx62.lineTo(width/2+50, height/2+100);
    // ctx62.lineTo(width/2-50, height/2+100);
    // ctx62.closePath()
    // ctx62.lineWidth = 13;
    // ctx62.strokeStyle = 'rgb(17, 64, 48)';
    // ctx62.stroke();

    ctx62.beginPath();
    ctx62.moveTo(width / 2 + 50, height / 2);
    ctx62.arc(width / 2, height / 2, 50, 0, 2 * Math.PI);
    ctx62.lineWidth = 10;
    ctx62.strokeStyle = 'red'

    ctx62.stroke();


}
ej62();

// Exercici 7
function ej7() {
    // Exercici 7.1
    let canvas7 = document.getElementById('canvas7');
    let ctx7 = canvas7.getContext('2d');

    let width = canvas7.width;
    let height = canvas7.height;

    // Derecha
    for (let i = 0; i <= height / 5; i++) {
        ctx7.beginPath();
        ctx7.moveTo(width / 2, 5 * i + 1);
        ctx7.lineTo(width, height / 2);
        ctx7.stroke();
    }

    // Izquierda
    for (let i = 0; i <= height / 5; i++) {
        ctx7.beginPath();
        ctx7.moveTo(width / 2, 5 * i + 1);
        ctx7.lineTo(0, height / 2);
        ctx7.stroke();
    }


    // Exercici 7.2
    let canvas71 = document.getElementById('canvas71');
    let ctx71 = canvas71.getContext('2d');

    // Derecha
    for (let i = 0; i <= height / 5; i++) {
        ctx71.beginPath();
        ctx71.moveTo(5 * i + 1, height / 2);
        ctx71.lineTo(width / 2, 0);
        ctx71.stroke();
    }

    // Izquierda
    for (let i = 0; i <= height / 5; i++) {
        ctx71.beginPath();
        ctx71.moveTo(5 * i + 1, height / 2);
        ctx71.lineTo(width / 2, height);
        ctx71.stroke();
    }
}
ej7();


// Exercici 8
function ej8() {
    // Exercici 8
    let canvas8 = document.getElementById('canvas8');
    let ctx8 = canvas8.getContext('2d');

    let width = canvas8.width;
    let height = canvas8.height;

    let x;
    let y;

    canvas8.addEventListener('mousemove', (e) => {
        console.log(e)
        x = e.offsetX;
        y = e.offsetY;
        seguirMouse();
    })

    function seguirMouse() {
        ctx8.clearRect(0, 0, width, height)
        // Izquierda
        for (let i = 0; i <= height / 5; i++) {
            ctx8.beginPath();
            ctx8.moveTo(0, 5 * i);
            ctx8.lineTo(x, y);
            ctx8.stroke();
        }

        // Arriba
        for (let i = 0; i <= height / 5; i++) {
            ctx8.beginPath();
            ctx8.moveTo(5 * i, 0);
            ctx8.lineTo(x, y);
            ctx8.stroke();
        }

        // Derecha
        for (let i = 0; i <= height / 5; i++) {
            ctx8.beginPath();
            ctx8.moveTo(width, 5 * i);
            ctx8.lineTo(x, y);
            ctx8.stroke();
        }

        // Abajo
        for (let i = 0; i <= height / 5; i++) {
            ctx8.beginPath();
            ctx8.moveTo(width - 5 * i, height);
            ctx8.lineTo(x, y);
            ctx8.stroke();
        }
    }

}
ej8();



// Exercici 9
function ej9() {
    let canvas9 = document.getElementById('canvas9');
    let ctx9 = canvas9.getContext('2d');

    let width = canvas9.width;
    let height = canvas9.height;

    function getRcolor() {
        return Math.floor(Math.random() * 256);
    }

    for (let i = 0; i <= (width / 10) * 4; i++) {
        ctx9.strokeStyle = `rgb(${getRcolor()}, ${getRcolor()}, ${getRcolor()})`;
        // Abajo Izquierda a Arriba Derecha
        ctx9.beginPath();
        ctx9.moveTo(10 * i, height);
        ctx9.lineTo(width, height - 10 * i);
        ctx9.closePath();
        ctx9.stroke();

        ctx9.strokeStyle = `rgb(${getRcolor()}, ${getRcolor()}, ${getRcolor()})`;
        // Abajo Derecha a Arriba Izquierda
        ctx9.beginPath();
        ctx9.moveTo(width - 10 * i, height);
        ctx9.lineTo(0, height - 10 * i);
        ctx9.closePath();
        ctx9.stroke();

        ctx9.strokeStyle = `rgb(${getRcolor()}, ${getRcolor()}, ${getRcolor()})`;
        // Arriba Derecha a Abajo Izquierda
        ctx9.beginPath();
        ctx9.moveTo(10 * i, 0);
        ctx9.lineTo(0, height - 10 * i);
        ctx9.closePath();
        ctx9.stroke();

        ctx9.strokeStyle = `rgb(${getRcolor()}, ${getRcolor()}, ${getRcolor()})`;
        // Arriba Izquierda a Abajo Derecha
        ctx9.beginPath();
        ctx9.moveTo(width - 10 * i, 0);
        ctx9.lineTo(width, height - 10 * i);
        ctx9.closePath();
        ctx9.stroke();
    }
}
ej9();
