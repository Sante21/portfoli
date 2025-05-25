let diccionari = ['HTML', 'CSS', 'JAVASCRIPT', 'WEB', 'FRONTEND', 'BACKEND', 'DEVELOPER', 'SERVER']
let sopa = [
    ['L', 'Z', 'X', 'H', 'C', 'U', 'W', 'M', 'W', 'F', 'T'],
    ['B', 'X', 'Y', 'J', 'D', 'N', 'C', 'S', 'S', 'J', 'K'],
    ['A', 'F', 'R', 'O', 'N', 'T', 'E', 'N', 'D', 'A', 'Q'],
    ['C', 'O', 'U', 'R', 'C', 'H', 'T', 'T', 'P', 'V', 'T'],
    ['K', 'S', 'C', 'D', 'P', 'F', 'Q', 'N', 'Z', 'A', 'K'],
    ['E', 'H', 'S', 'A', 'D', 'C', 'P', 'I', 'Y', 'S', 'J'],
    ['N', 'F', 'T', 'T', 'T', 'S', 'Q', 'S', 'T', 'C', 'L'],
    ['D', 'J', 'W', 'M', 'K', 'G', 'M', 'A', 'B', 'R', 'E'],
    ['Z', 'A', 'A', 'S', 'L', 'W', 'A', 'E', 'N', 'I', 'A'],
    ['F', 'D', 'L', 'F', 'L', 'H', 'W', 'N', 'W', 'P', 'J'],
    ['E', 'A', 'H', 'L', 'D', 'X', 'A', 'P', 'S', 'T', 'N']
];

cercador();

function cercador() {
    for (let r = 0; r < sopa.length; r++) {
        for (let c = 0; c < sopa[r].length; c++) {
            for (let paraula of diccionari) {
                cercaHoritzontal(r, c, paraula);
                cercaVertical(r, c, paraula);
                cercaDiagonalDaltABaix(r, c, paraula);
                cercaDiagonalBaixADalt(r, c, paraula);

            }
        }
    }
}

function cercaHoritzontal(r, c, paraula) {
    let l = 0;
    for (l = 0; l < paraula.length; l++) {
        if (/*r + paraula.length <= sopa.length && */sopa.length > r + l) {
            if (paraula[l] != sopa[r][c + l]) {
                horizontal = [];
                break;
            }
        } else {
            break;
        }
    }
    if (l == paraula.length) {
        document.write('<span style="font-weight: bold;">' + ' Horizontal: ' + '</span>' + paraula + '<br>');
        // console.log('(' + sopa[r][c] + ') [r' + r + '/c' + c + '] ' + paraula + ': ' + l + '/' + paraula.length);
    }
}

function cercaVertical(r, c, paraula) {
    let l = 0;
    for (l = 0; l < paraula.length; l++) {
        if (/*r + paraula.length <= sopa.length && */sopa.length > r + l) {
            if (paraula[l] != sopa[r + l][c]) {
                break;
            }
        } else {
            break;
        }
    }
    if (l == paraula.length) {
        document.write('<span style="font-weight: bold;">' + ' Vertical: ' + '</span>' + paraula + '<br>');
        // console.log('(' + sopa[r][c] + ') [r' + r + '/c' + c + '] ' + paraula + ': ' + l + '/' + paraula.length);
    }
}

function cercaDiagonalDaltABaix(r, c, paraula) {
    let l = 0;
    for (l = 0; l < paraula.length; l++) {
        if (/*r + paraula.length <= sopa.length && */sopa.length > r + l) {
            if (paraula[l] != sopa[r + l][c + l]) {
                break;
            }
        } else {
            break;
        }
    }
    if (l == paraula.length) {
        document.write('<span style="font-weight: bold;">' + ' Diagonal dalt a abaix: ' + '</span>' + paraula + '<br>');
        //console.log('(' + sopa[r][c] + ') [r' + r + '/c' + c + '] ' + paraula + ': ' + l + '/' + paraula.length);
    }
}

function cercaDiagonalBaixADalt(r, c, paraula) {
    let l = 0;
    for (l = 0; l < paraula.length; l++) {
        if (/*r + paraula.length <= sopa.length && */ r - l >= 0 && c - l >= 0) {
            if (paraula[l] != sopa[r - l][c + l]) {
                break;
            }
        } else {
            break;
        }
    }
    if (l == paraula.length) {
        document.write('<span style="font-weight: bold;">' + ' Diagonal abaix a dalt: ' + '</span>' + paraula + '<br>');
        //console.log('(' + sopa[r][c] + ') [r' + r + '/c' + c + '] ' + paraula + ': ' + l + '/' + paraula.length);
    }
}