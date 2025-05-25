
let colors = ["red", "green", "blue", "yellow", "brown", "orange", "black", "white"];
let selectedColor;
let intentNumber = 0;
let colorsToGuess = [];


function startPlay() {
    colorsToGuess = [];
    generateColors();
}

function generateColors() {
    for (let i = 0; i < 4; i++) {
        let rand = Math.floor(Math.random() * colors.length);
        if (includesColorsToAdivinate(colorsToGuess, colors[rand])) {
            i--;
        } else {
            colorsToGuess.push(colors[rand]);
        }
    }
}

function includesColorsToAdivinate(array, color) {
    for (let i = 0; i < array.length; i++) {
        if (color == array[i]) {
            return true;
        }
    }
    return false;
}

function addColorInSequence() {
    let rand = Math.floor(Math.random() * colors.length);
    sequence.push(colors[rand]);
    showSequence();
}

function clickSlot(id) {
    let linePosition = id.split('-')[1];
    if (linePosition == intentNumber) {
        let element = document.getElementById(id);
        element.className = selectedColor;
    }
}

function selectColor(color) {
    selectedColor = color;
}

function checkTry() {
    let colorAndPosition = 0;
    let colorOnly = 0;
    let vicotry = false;
    let aciertos = [];
    let colorTemp = [];
    
    for (let i = 1; i <= colorsToGuess.length; i++) {
        let element = document.getElementById("e-" + intentNumber + "-" + i);
        let colorElement = element.className;
        
        if (colorElement == colorsToGuess[i - 1]) {
            if (!includesColorsToAdivinate(colorTemp, colorElement)) {
                colorTemp.push(colorElement);
                colorAndPosition++;
            }
        } else if (includesColorsToAdivinate(colorsToGuess, colorElement)) {
            if (!includesColorsToAdivinate(colorTemp, colorElement)) {
                colorTemp.push(colorElement);
                colorOnly++;
            }
        }
    }
    
    if (colorAndPosition == colorsToGuess.length) {
        vicotry = true;
        alert('WIN!!');
    } else {
        if ((intentNumber + 1) > 9) {
            alert('No tens més intents');
        }
    }
    
    for (colorAndPosition; colorAndPosition > 0; colorAndPosition--) {
        aciertos.push('red');
    }
    
    for (colorOnly; colorOnly > 0; colorOnly--) {
        aciertos.push('white');
    }
    
    for (let i = 1; i <= aciertos.length; i++) {
        let element = document.getElementById("c-" + intentNumber + "-" + i);
        element.style.background = aciertos[i - 1];
        element.style.boxShadow = ' 0.2mm 0.2mm 0.2mm inset';
    }
    intentNumber++;
}

startPlay();
// document.write(colorsToGuess);
console.log(colorsToGuess);