
let input = document.getElementById('add');
let toDo = document.getElementById('toDo');

input.addEventListener("keypress", sendInput);

function sendInput(e) {
    if (e.key == "Enter") {
        if (input.value.length >= 1) {
            console.log(input);
            toDo.innerHTML += `<div class="div" draggable="true">
                    <div class="elemento" id="task">${input.value}</div></div>`;
            e.target.value = '';
        }
    }
}

let tasks = document.querySelectorAll('[class="contenedorTasks"]')
let elements = document.querySelectorAll('[class="dic"]')

for (const task of tasks) {
    task.addEventListener("dragstart", dragTaskStart);
    task.addEventListener("dragend", dragTaskEnd);
    task.addEventListener("dragover", dragTaskOver);
    task.addEventListener("dragenter", dragTaskEnter);
    task.addEventListener("dragleave", dragTaskLeave);
    task.addEventListener("drop", dropTask);
}

let elementOrigen;

function dragTaskStart(e) {
    e.target.style.opacity = '0.4';
    elementOrigen = e.target;
}

function dragTaskEnd(e) {
    e.target.style.opacity = '1';
    elementOrigen = e.target;
}

function dragTaskOver(e) {
    if (e.preventDefault) {
        e.preventDefault();
    }
    return false;
}

function dragTaskEnter(e) {
    if (e.target != elementOrigen) {
        e.target.classList.add('hover');
    }
    if (e.target.id == elementOrigen.id) {
        e.target.style.padding = '10mm 0mm 12mm 0mm';
    }
}

function dragTaskLeave(e) {
    e.target.classList.remove('hover');
    
    if (e.target.id == elementOrigen.id) {
        e.target.style.padding = '0mm 0mm 0mm 0mm';
    }
}

function dropTask(e) {
    e.target.appendChild(elementOrigen);
    e.target.classList.remove('hover');
    elementOrigen.style.opacity = '1';
}