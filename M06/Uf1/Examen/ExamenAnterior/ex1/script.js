let diccionari = ['NEU', 'GORRO', 'NIT', 'SOPA', 'GUANTS', 'MITJONS',
    'BOTES', 'BUFANDA', 'ABRIC', 'JERSEI'];

let sopa = [
    ['S', 'N', 'E', 'U', 'A', 'N', 'P', 'U', 'A'],
    ['U', 'S', 'B', 'A', 'E', 'I', 'P', 'L', 'B'],
    ['N', 'G', 'U', 'A', 'N', 'T', 'S', 'B', 'O'],
    ['B', 'O', 'F', 'J', 'E', 'R', 'S', 'E', 'I'],
    ['L', 'R', 'A', 'R', 'R', 'D', 'B', 'N', 'E'],
    ['O', 'R', 'N', 'S', 'O', 'P', 'A', 'D', 'S'],
    ['C', 'O', 'D', 'B', 'E', 'A', 'I', 'H', 'U'],
    ['K', 'U', 'A', 'A', 'V', 'E', 'C', 'C', 'N'],
    ['P', 'I', 'M', 'I', 'T', 'J', 'O', 'N', 'S']
];

let horitzontals = [];
let verticals = [];

check();

function check() {
    for (let r = 0; r < sopa.length; r++) {
        for (let c = 0; c < sopa[r].length; c++) {
            for (let palabra of diccionari) {
                cercaHoritzontal(r, c, palabra);
                cercaVertical(r, c, palabra);
            }
        }
    }
}

function cercaHoritzontal(r, c, palabra) {
    let find = true;
    for (let l = 0; l < palabra.length; l++) {
        if (palabra[l] != sopa[r][c + l]) {
            find = false;
            break;
        }
    }
    
    if (find) {
        horitzontals.push(palabra);
    }
}

function cercaVertical(r, c, palabra) {
    let find = true;
    for (let l = 0; l < palabra.length; l++) {
        if (palabra[l] != sopa[r + l][c]) {
            find = false;
            break;
        }
    }
    if (find) {
        verticals.push(palabra);
    }
}

function mostrarArray() {
    let element = document.getElementById("paraulesTrobades");
    element.innerHTML = `Paraules Horitzontals: ${horitzontals} <br> Paraules Verticals: ${verticals} <br>`;
}
