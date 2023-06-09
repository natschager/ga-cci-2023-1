function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function moveButtonRandomly() {
    const button = document.getElementById('animatedButton');
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const targetX = randomInt(0, windowWidth - button.clientWidth);
    const targetY = randomInt(0, windowHeight - button.clientHeight);

    anime({
        targets: button, // animating stuff within button
        // members of the button object that we want to animate
        left: targetX,
        top: targetY,
        // anime.js options
        duration: 1000,
        easing: 'easeOutElastic(1, .5)'
    });
}

// after page is loaded, move button on press
document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('animatedButton');
    button.addEventListener('click', moveButtonRandomly);
});