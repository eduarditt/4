const title = document.querySelector(".title");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const container = document.querySelector(".container");
const cardFinal = document.getElementById("cardFinal");

let step = 0;

yesBtn.addEventListener("click", () => {
  if (step === 0) {
    animateText("¿Querés ser mi San Valentín? ❤️");
    yesBtn.innerText = "Sí 💖";
    noBtn.classList.remove("hidden");
    step = 1;
    return;
  }

  if (step === 1) {
    animateText("Sabía que ibas a decir que sí 💘");
    yesBtn.innerText = "Ver sorpresa 🎁";
    noBtn.classList.add("hidden");
    launchConfetti();
    step = 2;
    return;
  }

  if (step === 2) {
    container.classList.add("hidden");
    cardFinal.classList.remove("hidden");
    document.body.classList.add("show-card");
    launchConfetti();
    step = 3;
  }
});

/* NO se escapa */
function escapeNo() {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  noBtn.style.position = "fixed";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

noBtn.addEventListener("mouseenter", escapeNo);
noBtn.addEventListener("touchstart", escapeNo);
noBtn.addEventListener("click", escapeNo);

function animateText(text) {
  title.classList.remove("show");
  void title.offsetWidth;
  title.innerText = text;
  title.classList.add("show");
}

function launchConfetti() {
  for (let i = 0; i < 25; i++) {
    const c = document.createElement("div");
    c.innerText = "💖";
    c.style.position = "fixed";
    c.style.left = Math.random() * 100 + "vw";
    c.style.top = "-20px";
    c.style.fontSize = "22px";
    c.style.animation = "fall 3s linear forwards";
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 3000);
  }
}
