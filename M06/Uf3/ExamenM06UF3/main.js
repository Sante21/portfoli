
document.addEventListener('DOMContentLoaded', () => {

    //#region Exercici 1
    const inputName = document.getElementById('firstname');
    const inputLastName = document.getElementById('lastname');
    const inputLicensePlate = document.getElementById('licensePlate');
    const buttonSubmit = document.getElementById('reserve');

    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const specialChars = ['!', '"', '·', '$', '%', '&', '/', '(', ')', '=', '?', '¿', '*', '_', '-'];
    const vocals = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    let checkLisence = false;
    let check = true;

    inputName.addEventListener('keyup', checkNameSurname);
    inputLastName.addEventListener('keyup', checkNameSurname);
    inputLicensePlate.addEventListener('keyup', checkLicensePlate);

    function checkNameSurname(e) {
        let input = e.target.value;

        for (let specialChar of specialChars) {
            if (input.includes(specialChar)) {
                check = false;
            }
        }

        for (let number of numbers) {
            if (input.includes(number)) {
                check = false;
            }
        }

        if (check && input.length > 0) {
            e.target.className = 'ex1-valid';
        } else {
            e.target.className = 'ex1-error';
        }

        enableButton();
    }

    function checkLicensePlate(e) {
        let input = e.target.value;
        let digits = 0;
        let letters = 0;

        for (let i = 0; i < input.length; i++) {
            if (!vocals.includes(input[i]) && !isNaN(input[i])) {
                letters++;
            }
            if (isNaN(input[i]) && input[i] != '') {
                digits++;
            }
        }

        if (digits == 3 && letters == 4) {
            checkLisence = true;
            e.target.className = 'ex1-valid';
        } else {
            checkLisence = true;
            e.target.className = 'ex1-error';
        }
        enableButton();
    }

    function enableButton() {
        if (inputName.className == 'ex1-valid' &&
            inputLastName.className == 'ex1-valid' &&
            inputLicensePlate.className == 'ex1-valid') {
            buttonSubmit.disabled = false;
        } else {
            buttonSubmit.disabled = true;
        }
    }
    //#endregion


    //#region Exercici 2
    document.getElementById('memory-board').addEventListener('click', clickCard);

    let currentCard;
    let finalCard;

    function clickCard(e) {
        let card = e.target;

        if (!card.classList.contains('show')) {
            if (!currentCard) {
                currentCard = e.target;
                currentCard.classList.add('show');
            } else if (!finalCard) {
                finalCard = e.target;
                finalCard.classList.add('show');
            } else if (currentCard.classList[0] != finalCard.classList[0]) {
                currentCard.classList.remove('show');
                finalCard.classList.remove('show');

                currentCard = card;
                currentCard.classList.add('show');
                finalCard = null;
            } else if (currentCard.classList[0] == finalCard.classList[0]) {
                currentCard = card;
                currentCard.classList.add('show');
                finalCard = null;
            }
        }
    }
    //#endregion


    //#region Exercici 3
    const boardColor = document.getElementById('mix-color');

    boardColor.addEventListener('dragstart', startDragColor);
    boardColor.addEventListener('dragover', overDragColor);
    boardColor.addEventListener('drop', dropColor);

    boardColor.addEventListener('dragenter', enterDragColor);
    boardColor.addEventListener('dragleave', leaveDragColor);

    let originColor;
    let enterColor;

    function startDragColor(e) {
        originColor = e.target.style.backgroundColor.replace("rgb(", "").replace(")", "").split(",");
    }

    function dropColor(e) {
        // console.log(e.target.style.backgroundColor.replace("rgb(", "").replace(")", "").split(","));
        let endColor = e.target.style.backgroundColor.replace("rgb(", "").replace(")", "").split(",");

        e.target.style.backgroundColor = 'rgb(' + parseInt(originColor[0]) + parseInt(endColor[0]) + ',' +
            parseInt(originColor[1]) + parseInt(endColor[1]) + ',' +
            parseInt(originColor[2]) + parseInt(endColor[2]) + ')';
    }

    function overDragColor(e) {
        e.preventDefault()
    }

    function enterDragColor(e) {
        if (e.target.tagName == 'TD') {
            enterColor = e.target.style.backgroundColor;
            rgbEnter = enterColor.replace("rgb(", "").replace(")", "").split(",");

            e.target.style.backgroundColor = 'rgb(' + parseInt(originColor[0]) + parseInt(rgbEnter[0]) + ',' +
                parseInt(originColor[1]) + parseInt(rgbEnter[1]) + ',' +
                parseInt(originColor[2]) + parseInt(rgbEnter[2]) + ')';
        }
    }

    function leaveDragColor(e) {
        if (e.target.tagName == 'TD') {
            e.target.style.backgroundColor = enterColor;
        }
    }
    //#endregion


    //#region Exercici 4
    const boardCandy = document.getElementById('candy-table');

    boardCandy.addEventListener('mousedown', mouseDownCandy);
    boardCandy.addEventListener('mouseup', clickCandy);

    let firstCandy;

    let firstCordsX;
    let firstCordsY;
    let firstDataCol;
    let firstDataRow;

    let tempClass;

    let direction;

    function mouseDownCandy(e) {
        firstCandy = e.target;
        firstDataRow = parseInt(firstCandy.parentNode.getAttribute('data-row'));
        firstDataCol = parseInt(firstCandy.getAttribute('data-col'));

        firstCordsX = e.clientX;
        firstCordsY = e.clientY;
    }

    function clickCandy(e) {
        let secondCordsX = e.clientX;
        let secondCordsY = e.clientY;

        let resX = secondCordsX - firstCordsX;
        let resY = secondCordsY - firstCordsY;

        if (Math.abs(resX) > Math.abs(resY)) {
            if (resX > 0) {
                // Derecha
                direction = 'right';
            } else {
                // Izquierda
                direction = 'left';
            }
        } else {
            if (resY > 0) {
                // Abajo
                direction = 'down';
            } else {
                // Arriba
                direction = 'up';
            }
        }

        if (direction == 'right') {
            tempClass = boardCandy.children[firstDataRow].children[firstDataCol + 1].className;
            boardCandy.children[firstDataRow].children[firstDataCol + 1].className = firstCandy.className;
            firstCandy.className = tempClass;
        } else if (direction == 'left') {
            tempClass = boardCandy.children[firstDataRow].children[firstDataCol - 1].className;
            boardCandy.children[firstDataRow].children[firstDataCol - 1].className = firstCandy.className;
            firstCandy.className = tempClass;
        } else if (direction == 'down') {
            tempClass = boardCandy.children[firstDataRow + 1].children[firstDataCol].className;
            boardCandy.children[firstDataRow + 1].children[firstDataCol].className = firstCandy.className;
            firstCandy.className = tempClass;

        } else if (direction == 'up') {
            tempClass = boardCandy.children[firstDataRow - 1].children[firstDataCol].className;
            boardCandy.children[firstDataRow - 1].children[firstDataCol].className = firstCandy.className;
            firstCandy.className = tempClass;
        }
    }
    //#endregion
})
