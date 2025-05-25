/* --- EXERCICI 1 --- */

const vector = [
    42, 18, 96, 73, 54, 22, 87, 33, 66, 5, 90, 41, 78,
    12, 67, 92, 15, 48, 31, 61, 39, 74, 100, 53, 25];

let mayor;
let resultat = [];

function find10PerCentHiger(array) {
    let percent = 10;
    findMayor(vector);

    for (let i = 0; i < array.length; i++) {
        if (array[i] >= mayor * (1 - (percent / 100))) {
            resultat.push(array[i]);
        }

    }
    return resultat;
}

function findMayor(array) {
    mayor = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > mayor) {
            mayor = array[i];
        }
    }
    return mayor;
}

function cercarEx1() {
    find10PerCentHiger(vector);
    let element = document.getElementById('resultatEx1');
    element.innerHTML = `Resultat = [${resultat}]`;
}



/* --- EXERCICI 2 --- */

const colores = ["pink", "purple", "yellow", "aquamarine",
    "red", "orange", "blue", "fuchsia"];

let interval;
let colorActual;
let divCPU = document.getElementById("colorCPU");
let divUser = document.getElementById("colorUser");

function jugarEx2() {
    let colorUser = [];

    let rand;
    for (let i = 0; i < 4; i++) {
        rand = Math.floor(Math.random() * colores.length);
        if (includes(colorUser, colores[rand])) {
            i--;
        } else {
            colorUser.push(colores[rand]);
        }
    }

    console.log(`${colorUser}`);
    divCPU.className = colores[rand];

    interval =
        setInterval(() => {
            let random = Math.floor(Math.random() * colorUser.length) + 1;
            divUser.className = colorUser[random];
        }, 300);
}

function escollirColorEx2() {
    if (divUser.className == divCPU.className) {
        alert("Has guanyat :)")
    } else {
        alert("Has perdut :(")
    }
    clearInterval(interval);

}

function includes(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (value == array[i]) {
            return true;
        }
    }
    return false;
}



/* --- EXERCICI 3 --- */

const matriz = [
    ['A', 'X', 'G', 'T', 'M'],
    ['P', 'L', 'K', 'E', 'W'],
    ['R', 'C', 'M', 'H', 'Q'],
    ['S', 'Z', 'O', 'D', 'B'],
    ['Y', 'J', 'U', 'F', 'V']
];

let position = [];

class Position {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

function findElement(array, value) {
    for (let r = 0; r < array.length; r++) {
        for (let c = 0; c < array[r].length; c++) {
            if (array[r][c] == value) {
                position.push(new Position(c, r));
            }
        }
    }
    return position;
}

function cercarEx3() {
    findElement(matriz, "M");
    let element = document.getElementById('resultatEx3');
    element.innerHTML += `Resultat: `
    for (let i = 0; i < position.length; i++) {
        element.innerHTML += `{x: ${position[i].x} y: ${position[i].y}}, `;
    }
}


/* --- EXERCICI 4 --- */

class Node {
    constructor(value) {
        this.value = value;
    }

    addChild(value) {
        let child = new Node(value);
        child.value = value;
        this.value = child;
        return child;
    }

    getChildren() {
        return this.value;
    }

    find(value) {
        return Node;
    }
}

let n = new Node(1);
let c1 = n.addChild(2);
let c2 = n.addChild(6);
let c3 = n.addChild(8);

let c1_1 = c1.addChild(3);
let c2_1 = c2.addChild(7);
let c3_1 = c3.addChild(9);
let c3_2 = c3.addChild(10);

let c1_1_1 = c1_1.addChild(4);
let c1_1_2 = c1_1.addChild(5);
let c3_2_1 = c3_2.addChild(11);

n.getChildren();