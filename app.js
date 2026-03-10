function openPayment(product, price) {
  document.getElementById("productName").innerText = product;
  document.getElementById("productPrice").innerText = price;
  document.getElementById("paymentModal").style.display = "block";
}

function closePayment() {
  document.getElementById("paymentModal").style.display = "none";
}

window.onclick = function(event) {
  const modal = document.getElementById("paymentModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

function copyPix() {
  const pix = document.getElementById("pixKey").innerText;
  navigator.clipboard.writeText(pix).then(() => {
    alert("Chave PIX copiada com sucesso.");
  });
}

const popup = document.getElementById("popup");
const fakeNames = ["Lucas", "João", "Pedro", "Mateus", "Carlos", "Ana", "Rafaela", "Julia"];
const fakeProducts = ["Pacote FiveM Private", "Discord Nitro Premium"];

function showFakePopup() {
  const randomName = fakeNames[Math.floor(Math.random() * fakeNames.length)];
  const randomProduct = fakeProducts[Math.floor(Math.random() * fakeProducts.length)];

  popup.innerText = randomName + " acabou de comprar " + randomProduct;
  popup.style.display = "block";

  setTimeout(() => {
    popup.style.display = "none";
  }, 4000);
}

setInterval(showFakePopup, 9000);

let counter = 0;
const target = 137;
const counterEl = document.getElementById("clientCounter");

function animateCounter() {
  if (!counterEl) return;
  counter += 1;
  counterEl.innerText = counter;
  if (counter < target) {
    setTimeout(animateCounter, 20);
  }
}
animateCounter();

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const particles = [];
for (let i = 0; i < 80; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2 + 1,
    dx: (Math.random() - 0.5) * 0.6,
    dy: (Math.random() - 0.5) * 0.6
  });
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let p of particles) {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(77,163,255,0.7)";
    ctx.fill();

    p.x += p.dx;
    p.y += p.dy;

    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
  }

  requestAnimationFrame(animateParticles);
}
animateParticles();
