

const canvas = document.createElement('canvas');
canvas.id = 'matrixCanvas';
canvas.style.position = 'fixed';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.width = '100vw';
canvas.style.height = '100vh';
canvas.style.zIndex = '-2'; 
canvas.style.opacity = '0.35'; 
canvas.style.pointerEvents = 'none'; 
document.body.insertBefore(canvas, document.body.firstChild);

const ctx = canvas.getContext('2d');
let width, height;
let columns = 0;
let drops = [];

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%""\'#&_(),.;:?!\\|{}<>[]^~アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレゲゼデベペオォコソトノホモヨョロゴゾドボポヴッン'.split('');
const fontSize = 14;

function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;

    let newColumns = Math.floor(width / fontSize);
    if (newColumns > columns) {
        for (let x = columns; x < newColumns; x++) {
            drops[x] = Math.random() * -100; 
        }
    }
    columns = newColumns;
}
window.addEventListener('resize', resize);
resize();

function draw() {
    ctx.fillStyle = 'rgba(8, 8, 8, 0.07)'; 
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = '#28c40e'; 
    ctx.font = fontSize + 'px monospace';
    ctx.textAlign = 'center';

    for (let i = 0; i < columns; i++) {
        if (drops[i] === undefined) drops[i] = 1;

        const text = characters[Math.floor(Math.random() * characters.length)];

        if (Math.random() > 0.95) {
            ctx.fillStyle = '#39ff14'; 
        } else {
            ctx.fillStyle = '#28c40e';
        }

        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(draw, 33);
