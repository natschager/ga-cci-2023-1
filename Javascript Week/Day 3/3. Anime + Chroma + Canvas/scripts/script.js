class Square {
    constructor(x, y, size, color) { 
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.size, this.size);
    }
}

let canvas, ctx, square;

document.addEventListener('DOMContentLoaded', () => { // wait for the page to load

    // create the canvas and the square
    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext('2d');
    square = new Square(50, 50, 100, chroma.random().hex()); // chroma.random().hex() returns a random color in hex format

    // start the color change animation
    changeColorOverTime();
});

function changeColorOverTime() {
    const startColor = chroma(square.color);
    const endColor = chroma.random();
    console.log(startColor, endColor);
    const targetX = Math.random() * canvas.width - square.size;
    const targetY = Math.random() * canvas.width - square.size;

    anime({
        targets: square, // targets an object
        duration: 1000,
        x: targetX,
        y: targetY,
        update: (anim) => {
            square.color = startColor.interpolate(endColor, anim.progress * 0.01).hex();
            square.draw();
        },
        changeComplete: (anim) => {
            changeColorOverTime();
        }
    });
}
