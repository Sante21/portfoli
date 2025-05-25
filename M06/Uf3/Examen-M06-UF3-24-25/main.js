
document.addEventListener('DOMContentLoaded', () => {

    //#region Ex1 HECHO
    const inputName = document.getElementById('input-name');

    let twoWords = document.getElementById('have2words');
    let notAnumber = document.getElementById('NotNumber');
    let notAspecialChar = document.getElementById('NotSpecialChar');
    let capitalized = document.getElementById('isCapitalized');

    let send = document.getElementById('send');


    let palabra1 = false;
    let palabra2 = false;

    let capitalized1 = true;
    let capitalized2 = true;

    const specialChars = ['!', '"', '·', '$', '%', '&', '/', '(', ')', '=', '?', '¿', '*', '_', '-'];


    inputName.addEventListener('keyup', checkNameLname);

    function checkNameLname(e) {
        let text = e.target.value;

        let have2words = false;
        let notNumber = true;
        let notSpecialChar = true;
        let isCapitalized = true;

        if (palabra1 && e.code != 'Space') {
            palabra2 = true;
        }

        if (text.length > 1 && e.code == 'Space') {
            palabra1 = true;
        }

        if (palabra1 && palabra2) {
            have2words = true;
        }

        for (const char of text) {
            console.log(char.toLowerCase());
            if (!isNaN(char) && char != ' ') {
                console.log('Number');
                console.log(char);
                notNumber = false;
            }
            if (char.toLowerCase() == char) {
                isCapitalized = false;
            }
        }


        for (const sChar of specialChars) {
            if (text.includes(sChar)) {
                notSpecialChar = false;
            }
        }

        if (have2words) {
            twoWords.classList.add('valid');
        } else {
            twoWords.classList.remove('valid');
        }

        if (notNumber) {
            notAnumber.classList.add('valid');
        } else {
            notAnumber.classList.remove('valid');
        }

        if (notSpecialChar) {
            notAspecialChar.classList.add('valid');
        } else {
            notAspecialChar.classList.remove('valid');
        }

        if (isCapitalized) {
            capitalized.classList.add('valid');
        } else {
            capitalized.classList.remove('valid');
        }

        checkSend();
    }

    function checkSend() {
        if (twoWords.className == 'valid' && notAnumber.className == 'valid' &&
            notAspecialChar.className == 'valid' && capitalized.className == 'valid') {
            send.removeAttribute('disabled');
        } else {
            send.setAttribute('disabled', 'disabled');
        }
    }
    //#endregion


    //#region Ex2 HECHO
    let boton = document.getElementById('boto-esquiu');

    boton.addEventListener('mouseenter', enterBoton);

    function enterBoton(e) {
        let alto = Math.floor(Math.random() * (501 - 30));
        let ancho = Math.floor(Math.random() * (501 - 120));
        e.target.style.top = alto + 'px';
        e.target.style.left = ancho + 'px';
    }
    //#endregion


    //#region Ex3 HECHO
    const boardPokemon = document.getElementsByClassName('pokemon-fusion');

    let origPok;
    let destPok;

    boardPokemon[0].addEventListener('dragover', overPok);
    boardPokemon[0].addEventListener('dragstart', dragStartPok);
    boardPokemon[0].addEventListener('drop', dropPok);

    boardPokemon[0].addEventListener('dragenter', dragEnterPok);
    boardPokemon[0].addEventListener('dragleave', dragLeavePok);

    function overPok(e) {
        e.preventDefault();
    }

    function dragStartPok(e) {
        origPok = e.target.getAttribute('data-src');
    }

    function dropPok(e) {
        destPok = e.target.getAttribute('data-dst');
        e.target.style.backgroundImage =
            'url("img/pokemonfuse/' + origPok + destPok + '.png")';
    }

    function dragEnterPok(e) {
        destPok = e.target.getAttribute('data-dst');

        if (e.target.classList.contains('dst')) {
            e.target.style.backgroundImage =
                'url("img/pokemonfuse/' + origPok + destPok + '.png")';
        }
    }

    function dragLeavePok(e) {
        if (e.target.classList.contains('dst')) {
            e.target.style.backgroundImage = '';
        }
    }

    //#endregion


    //#region Ex4 HECHO
    const boardMines = document.getElementById('cerca-mines');

    boardMines.addEventListener('click', revelarCasella);

    function revelarCasella(e) {
        e.target.className = 'revelat';

        let caselles = boardMines.children;
        let mines = 0;

        let row = parseInt(e.target.getAttribute('data-row'));
        let col = parseInt(e.target.getAttribute('data-col'));

        // Derecha
        if (col + 1 < 9 && caselles[(9 * row) + col + 1].className == 'mina') {
            mines++;
        }

        // Izquierda
        if (col - 1 > 0 && caselles[(9 * row) + col - 1].className == 'mina') {
            mines++;
        }

        // Arriba
        if ((row - 1) > 0 && caselles[(row - 1) + col].className == 'mina') {
            mines++;
        }

        // Abajo
        if ((row + 1) < 9 && caselles[(row + 1) + col].className == 'mina') {
            mines++;
        }

        // Arriba Derecha
        if ((row - 1) > 0 && (col + 1) < 9 && caselles[(row - 1) + (col + 1)].className == 'mina') {
            mines++;
        }

        // Arriba Izquierda
        if ((row - 1) > 0 && (col - 1) > 0 && caselles[(row - 1) + (col - 1)].className == 'mina') {
            mines++;
        }

        // Abajo Derecha
        if ((row + 1) < 9 && (col + 1) < 9 && caselles[(row + 1) + (col + 1)].className == 'mina') {
            mines++;
        }

        // Abajo Izquierda
        if ((row + 1) < 9 && (col - 1) > 0 && caselles[(row + 1) + (col - 1)].className == 'mina') {
            mines++;
        }

        e.target.innerHTML = mines;
    }
    //#endregion
})