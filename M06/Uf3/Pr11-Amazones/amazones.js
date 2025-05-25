const BOARD_SIZE = 10;
let board;
let turnTitle;
let whiteQueen;
let turn = 'white';
let queenToRemove = '';

board = document.querySelector('.board');
turnTitle = document.getElementById('turno');
initBoard();
markQueens();


function initBoard() {
    for (let r = 0; r < BOARD_SIZE; r++) {
        let row = document.createElement('div');
        board.appendChild(row)
        for (let c = 0; c < BOARD_SIZE; c++) {
            let cell = document.createElement('div');
            cell.setAttribute('data-row', r);
            cell.setAttribute('data-column', c);

            row.appendChild(cell);
        }
    }
    board.children[0].children[3].className = 'blackQueen';
    board.children[0].children[6].className = 'blackQueen';
    board.children[3].children[0].className = 'blackQueen';
    board.children[3].children[9].className = 'blackQueen';

    board.children[9].children[3].className = 'whiteQueen';
    board.children[9].children[6].className = 'whiteQueen';
    board.children[6].children[0].className = 'whiteQueen';
    board.children[6].children[9].className = 'whiteQueen';

    board.addEventListener('click', cellClick);
}

function cellClick(e) {
    if (e.target.classList.contains('toSelect')) {
        removeClass('toSelect');
        markQueenMovements(e.target, 'toMove');
        queenToRemove = e.target;
    } else if (queenToRemove == e.target) {
        removeClass('toMove');
        markQueens();
    } else if (e.target.classList.contains('toMove')) {
        e.target.className = queenToRemove.className;
        queenToRemove.className = '';
        removeClass('toMove');
        markQueenMovements(e.target, 'toShoot')

    } else if (e.target.classList.contains('toShoot')) {
        e.target.className = 'arrow';
        removeClass('toShoot');
        
        let nextTorn = (turn == 'white' ? 'black' : 'white');
        if (!checkOponentMovements('black')) {
            alert('White Queens Win')
        }
        if (!checkOponentMovements('white')) {
            alert('Black Queens Win')
        }
        turn = nextTorn;
        markQueens();
    }
}

function markQueens() {
    let queens = board.getElementsByClassName(turn + 'Queen');
    for (let queen of queens) {
        queen.classList.add('toSelect');
    }
    turnTitle.innerHTML = 'Turn ' + turn;
}

function markQueenMovements(currentQueen, className) {
    let movements = getElementOfQueenMovements(currentQueen);
    for (let movement of movements) {
        movement.className = className;
    }
}

function getElementOfQueenMovements(currentQueen) {
    let movements = [];
    let startRow = parseInt(currentQueen.getAttribute('data-row'));
    let startCol = parseInt(currentQueen.getAttribute('data-column'));

    let directions = [
        { row: 0, col: 1 },   // Horizontal derecha
        { row: 0, col: -1 },  // Horizontal izquierda
        { row: 1, col: 0 },   // Vertical abajo
        { row: -1, col: 0 },  // Vertical arriba
        { row: 1, col: 1 },   // Diagonal abajo derecha
        { row: 1, col: -1 },  // Diagonal abajo izquierda
        { row: -1, col: 1 },  // Diagonal arriba derecha
        { row: -1, col: -1 }  // Diagonal arriba izquierda
    ];

    for (let dir of directions) {
        for (let i = 1;
            (dir.col * i) + startCol >= 0 && (dir.col * i) + startCol < BOARD_SIZE &&
            (dir.row * i) + startRow >= 0 && (dir.row * i) + startRow < BOARD_SIZE &&
            board.children[(dir.row * i) + startRow].children[(dir.col * i) + startCol].className == '';
            i++) {
            movements.push(board.children[(dir.row * i) + startRow].children[(dir.col * i) + startCol]);
        }
    }
    return movements;
}

function checkOponentMovements(torn) {
    let queens = board.getElementsByClassName(torn + 'Queen')
    let count = 0;

    for (let queen of queens) {
        let movements = getElementOfQueenMovements(queen);
        count += movements.length;
    }
    return count > 0;
}

function removeClass(className) {
    let elementsToSelect = board.querySelectorAll('.' + className);
    for (let elem of elementsToSelect) {
        elem.classList.remove(className);
    }
}

function shootArrow(cellToShoot) {
    cellToShoot.className = 'arrow';
}

function changeTurn() {
    if (turn == 'white') {
        turn = 'black';
    } else {
        turn = 'white';
    }
}