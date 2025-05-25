
document.addEventListener('DOMContentLoaded', () => {
    let video = document.getElementById('bunny');

    let spanCounter = document.getElementById('counter');
    let count = 0;
    video.addEventListener('pause', () => {
        count++;
        spanCounter.innerHTML = count;

    });

    let play = document.querySelector('.fa-play');
    let pause = document.querySelector('.fa-pause');

    play.addEventListener('click', () => {
        video.play();
        play.style.display = 'none';
        pause.style.display = 'block';
    })

    pause.addEventListener('click', () => {
        video.pause();
        pause.style.display = 'none';
        play.style.display = 'block';
    })

    let mute = document.querySelector('.fa-volume-xmark');
    let volume = document.querySelector('.fa-volume-high');

    mute.addEventListener('click', () => {
        video.volume = 1;
        mute.style.display = 'none';
        volume.style.display = 'block';
    })

    volume.addEventListener('click', () => {
        video.volume = 0;
        volume.style.display = 'none';
        mute.style.display = 'block';
    })

    let backward = document.querySelector('.fa-backward');
    let forward = document.querySelector('.fa-forward');

    backward.addEventListener('click', () => {
        video.currentTime = currentTime - 5;
        // video.currentTime
        // video.volume = 1;
        // mute.style.display = 'none';
        // volume.style.display = 'block';
    })

    forward.addEventListener('click', () => {
        video.currentTime = currentTime + 5;
    })

    const barra = document.getElementById("mislider");
    const reproductor = document.getElementById("reproductor");
    const valor = document.getElementById("valor");

    barra.addEventListener("input", function (ev) {
        const volumen = ev.currentTarget.value; // Obtener el valor del slider
        reproductor.volume = volumen; // Ajustar el volumen del audio
        valor.textContent = (volumen * 100).toFixed(0) + "%"; // Mostrar el porcentaje
    });


})