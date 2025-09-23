function mostrarMensagem() {
  document.getElementById("mensagem").style.display = "block";
}

const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetes = [];
for (let i = 0; i < 200; i++) {
  confetes.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 6 + 4,
    d: Math.random() * 10 + 5,
    color: `hsl(${Math.random() * 360}, 100%, 50%)`,
    tilt: Math.random() * 10 - 10
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confetes.forEach(c => {
    ctx.beginPath();
    ctx.fillStyle = c.color;
    ctx.ellipse(c.x, c.y, c.r, c.r / 2, Math.random() * Math.PI, 0, 2 * Math.PI);
    ctx.fill();
  });
  update();
}

function update() {
  confetes.forEach(c => {
    c.y += c.d * 0.5;
    c.x += Math.sin(c.tilt);
    if (c.y > canvas.height) {
      c.y = 0;
      c.x = Math.random() * canvas.width;
    }
  });
}

setInterval(draw, 30);
