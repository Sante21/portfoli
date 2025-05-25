
// Exercici 1
function ej1() {
    let canvas1 = document.getElementById('canvas1');
    let ctx1 = canvas1.getContext('2d');
    
    
    let images = [];
    
    for (let i = 0; i <= 6; i++) {
        let img = new Image();
        img.src = `img/fighter/Frame${i}.png`;
        images.push(img);
    }

    let loadedImages = 0;
    for (const img of images) {
        img.onload = () => {
            loadedImages++;
            if (loadedImages === 7) {
                startAnimation();
            }
        };
    }

    function startAnimation() {
        let counter = 0;
        setInterval(() => {
            ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
            ctx1.drawImage(images[counter], 10, 20);
            counter++;
            if (counter == 6) {
                counter = 0;
            }
        }, 300);
    }
}

ej1();


// Exercici 2
function ej2() {
    let canvas2 = document.getElementById('canvas2');
    let ctx2 = canvas2.getContext('2d');

    let img = new Image();
    img.src = `img/bomberman/Bomberman.png`;
    ctx2.imageSmoothingEnabled = false;


    let sprites = [
        { imgX: 0, imgY: 135, imgW: 20, imgH: 33 },
        { imgX: 20, imgY: 135, imgW: 20, imgH: 33 },
        { imgX: 41, imgY: 135, imgW: 25, imgH: 33 },
        { imgX: 69, imgY: 135, imgW: 20, imgH: 33 },
        { imgX: 92, imgY: 135, imgW: 23, imgH: 33 },
        { imgX: 117, imgY: 135, imgW: 20, imgH: 33 },
        { imgX: 138, imgY: 135, imgW: 28, imgH: 33 },
        { imgX: 167, imgY: 135, imgW: 23, imgH: 33 },
        { imgX: 189, imgY: 135, imgW: 21, imgH: 33 },
        { imgX: 210, imgY: 135, imgW: 21, imgH: 33 },
        { imgX: 234, imgY: 135, imgW: 21, imgH: 33 }
    ]

    let count = 0;

    img.onload = () => {
        setInterval(() => {
            ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
            let sprite = sprites[count];
            ctx2.drawImage(img, sprite.imgX, sprite.imgY, sprite.imgW, sprite.imgH, 200, 200, 70, 90);
            count++;
            if (count >= sprites.length) {
                count = 0;
            }
        }, 300);
    };
}
ej2();



// Exercici 3
function ej3() {
    let canvas3 = document.getElementById('canvas3');
    let ctx3 = canvas3.getContext('2d');

    let img = new Image();
    img.src = `img/metal-slug/MetalSlug.gif`;
    ctx3.imageSmoothingEnabled = false;


    class Frame {
        constructor(posX, posY, width, height) {
            this.posX = posX;
            this.posY = posY;
            this.width = width;
            this.height = height;
        }
    }

    let standing = [
        new Frame(0, 220, 70, 70),
        new Frame(68, 220, 70, 70),
        new Frame(136, 220, 70, 70),
    ];

    let driving = [
        new Frame(0, 560, 68, 68),
        new Frame(72, 560, 68, 68),
        new Frame(143, 560, 68, 68),
        new Frame(223, 560, 68, 68),
        new Frame(292, 560, 68, 68),
        new Frame(368, 560, 68, 68),
        new Frame(440, 560, 68, 68),
        new Frame(514, 560, 68, 68),

        new Frame(3, 625, 68, 68),
        new Frame(83, 625, 68, 68),
        new Frame(154, 625, 68, 68),
        new Frame(224, 625, 68, 68),
        new Frame(300, 625, 68, 68),
        new Frame(373, 625, 68, 68),
        new Frame(445, 625, 68, 68),
        new Frame(521, 625, 68, 68),

        new Frame(6, 688, 68, 68),
        new Frame(78, 688, 68, 68),
        new Frame(145, 688, 68, 68),
        new Frame(213, 688, 68, 68),
        new Frame(287, 688, 68, 68),
    ];

    let jumping = [
        new Frame(10, 460, 75, 75),
        new Frame(80, 460, 75, 75),
        new Frame(150, 460, 75, 75),
        new Frame(296, 460, 75, 75),
        new Frame(365, 460, 75, 75),
        new Frame(433, 460, 75, 75),
    ];

    let duking = [
        new Frame(4, 307, 76, 76),
        new Frame(73, 307, 76, 76),
        new Frame(139, 307, 76, 76),
        new Frame(209, 307, 76, 76),
        new Frame(279, 307, 76, 76),
        new Frame(349, 307, 76, 76),
        new Frame(421, 307, 76, 76),
        new Frame(499, 307, 76, 76),

        new Frame(9, 379, 73, 65),
        new Frame(97, 379, 73, 65),
        new Frame(179, 379, 73, 65),
        new Frame(258, 379, 73, 65),
        new Frame(336, 379, 73, 65),
    ];

    let action = standing;


    let frameNum = 0;
    img.onload = () => {
        setInterval(() => {
            ctx3.clearRect(0, 0, canvas3.width, canvas3.height);
            let frame = action[frameNum];
            ctx3.drawImage(img, frame.posX, frame.posY, frame.width, frame.height, 150, 150, 200, 200);
            frameNum = (frameNum + 1) % action.length;
        }, 300);
    }

    canvas3.addEventListener('keydown', (e) => {
        if (e.key == 'ArrowRight' || e.key == 'ArrowLeft') {
            action = driving;
        }

        if (e.key == 'ArrowUp') {
            action = jumping;
        }

        if (e.code == 'Space') {
            action = duking;
        }
    });

    canvas3.addEventListener('keyup', (e) => {
        action = standing;
        frameNum = 0;
    })
}
ej3();

function ej32() {
    let canvas32 = document.getElementById('canvas32');
    let ctx32 = canvas32.getContext('2d');

    let img = new Image();
    img.src = `img/veggito/veggito.gif`;
    ctx32.imageSmoothingEnabled = false;

    class Frame {
        constructor(x, y, w, h) {
            this.x = x;
            this.y = y;
            this.w = w;
            this.h = h;
        }
    }

    let run = [
        new Frame (20, 20, 40, 50)
    ]


    img.onload = () => {
        ctx32.drawImage(img, 292, 5, 63, 112, 115, 25, 59*4, 112*4)
        ctx32.drawImage(img, 20, 5, 63, 112, 115, 25, 59*4, 112*4)
        ctx32.drawImage(img, 76, 5, 63, 112, 115, 25, 59*4, 112*4)
    }
}
ej32();



// Exercici 4

// function ej4() {
//     let canvas4 = document.getElementById('canvas4');
//     let ctx4 = canvas4.getContext('2d');

//     ctx4.beginPath();
//     ctx4.moveTo(canvas4.width, canvas4.height / 2);
//     ctx4.lineTo(0, canvas4.height / 2);
//     ctx4.lineTo(0, 75);
//     ctx4.quadraticCurveTo(150, 10, 200, 100);
//     ctx4.quadraticCurveTo(240, 55, 255, 85);
//     ctx4.quadraticCurveTo(320, 70, 350, 110);
//     ctx4.quadraticCurveTo(410, 65, 420, 110);
//     ctx4.quadraticCurveTo(445, 5, canvas4.width, 125);

//     ctx4.fillStyle = "#cfcafc"
//     ctx4.fill()

//     // ctx2.bezierCurveTo(65, 10, 175, 165, 240, 90);
// }
// ej4();

