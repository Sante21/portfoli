const colors = ['red', 'green', 'yellow', 'blue'];
let sequence = [];
let userPosition = 0;
let isPlaying = false;


function clickColor(color) {
    if (!isPlaying) return;
    if (sequence[userPosition] != color) {
        alert("Game Over Chavalurdo");
        return;
    } else {
        if (userPosition + 1 == sequence.length) {
            userPosition = 0;
            addColorInSequence();
        } else {
            userPosition++;
        }
    }
}

function startPlay() {
    sequence = [];
    addColorInSequence();
    isPlaying = true;
}

function addColorInSequence() {
    let rand = Math.floor(Math.random() * colors.length);
    sequence.push(colors[rand]);
    showSequence();
}

function clearAll() {
    for (let color of colors) {
        document.getElementById(color).className = "";
    }
}

function showSequence() {
    const speed = 1000;
    for (let i = 0; i < sequence.length; i++) {
        setTimeout(function () {
            let color = sequence[i];
            let element = document.getElementById(color);
            element.className = "light";
        }, speed * i)

        setTimeout(function () {
            clearAll();
        }, speed * (i + 1) - 300);
    }
    setTimeout(function () {
        clearAll();
    }, speed * sequence.length);
}
