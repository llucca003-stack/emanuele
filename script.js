const music = document.getElementById("music");
const btn = document.getElementById("musicBtn");
const icon = document.getElementById("musicIcon");
const text = document.getElementById("musicText");

btn.addEventListener("click", async () => {
  if (music.paused) {
    try {
      await music.play();
      icon.textContent = "❚❚";
      text.textContent = "Pausar nossa música";
    } catch (e) {
      alert("Coloque o arquivo assets/caju.mp3 na pasta do site para tocar a música.");
    }
  } else {
    music.pause();
    icon.textContent = "▶";
    text.textContent = "Tocar nossa música";
  }
});

const hearts = document.getElementById("hearts");
const symbols = ["♥","❤","♡","💕","💗","💖"];

function createHeart() {
  const h = document.createElement("span");
  h.className = "heart";
  h.textContent = symbols[Math.floor(Math.random() * symbols.length)];
  h.style.left = Math.random() * 100 + "vw";
  h.style.fontSize = (12 + Math.random() * 24) + "px";
  h.style.animationDuration = (5 + Math.random() * 6) + "s";
  h.style.animationDelay = (Math.random() * 1.5) + "s";
  hearts.appendChild(h);
  setTimeout(() => h.remove(), 13000);
}
setInterval(createHeart, 360);
for(let i=0;i<12;i++) setTimeout(createHeart, i*160);
