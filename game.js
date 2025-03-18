// game.js
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let gorilla = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    width: 50,
    height: 50,
    color: 'brown',
    speed: 5
};

let leopards = [];
for (let i = 0; i < 5; i++) {
    leopards.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        width: 40,
        height: 40,
        color: 'yellow'
    });
}

function drawGorilla() {
    ctx.fillStyle = gorilla.color;
    ctx.fillRect(gorilla.x, gorilla.y, gorilla.width, gorilla.height);
}

function drawLeopards() {
    leopards.forEach(leopard => {
        ctx.fillStyle = leopard.color;
        ctx.fillRect(leopard.x, leopard.y, leopard.width, leopard.height);
    });
}

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawGorilla();
    drawLeopards();
}

function moveGorilla(event) {
    switch (event.key) {
        case 'ArrowUp':
            gorilla.y -= gorilla.speed;
            break;
        case 'ArrowDown':
            gorilla.y += gorilla.speed;
            break;
        case 'ArrowLeft':
            gorilla.x -= gorilla.speed;
            break;
        case 'ArrowRight':
            gorilla.x += gorilla.speed;
            break;
    }
}

window.addEventListener('keydown', moveGorilla);
setInterval(update, 1000 / 60); // 60 FPS