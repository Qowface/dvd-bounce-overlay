const params = new URLSearchParams(window.location.search);

const width = parseInt(params.get('width')) || 1920; // Browser source width
const height = parseInt(params.get('height')) || 1080; // Browser source height
const speed = parseFloat(params.get('speed')) || 0.2; // Image movement speed
const imagePath = params.get('imagePath') || 'placeholder.png'; // Path to image

let imageObject = null;
let xSpeed = speed;
let ySpeed = speed;

const phaserGame = new Phaser.Game({
    type: Phaser.WEBGL,
    scale: {
        mode: Phaser.Scale.FIT,
        width,
        height,
    },
    transparent: true,
    scene: {
        preload,
        update,
        create,
    },
});

function preload() {
    this.load.image('img', imagePath);
}

function update(time, delta) {
    imageObject.x += delta * xSpeed;
    imageObject.y += delta * ySpeed;

    if (imageObject.x > width - imageObject.width / 2 || imageObject.x < imageObject.width / 2) {
        xSpeed = -xSpeed;
    }
    if (imageObject.y > height - imageObject.height / 2 || imageObject.y < imageObject.height / 2) {
        ySpeed = -ySpeed;
    }
}

function create() {
    imageObject = this.add.image(0, 0, 'img');

    imageObject.x = width / 2;
    imageObject.y = height / 2;
}
