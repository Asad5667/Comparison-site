// Show Sections
function showLetter() {
    document.querySelector(".hero").style.display = "none";
    document.getElementById("letter").style.display = "block";
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function showGallery() {
    document.getElementById("letter").style.display = "none";
    document.getElementById("gallery").style.display = "block";
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function showFinal() {
    document.getElementById("gallery").style.display = "none";
    document.getElementById("final").style.display = "block";

    // Confetti 🎉
    for (let i = 0; i < 80; i++) {
        createHeart("🎉");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Floating Hearts ❤️
function createHeart(symbol = "❤") {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = symbol;

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (20 + Math.random() * 25) + "px";
    heart.style.animationDuration = (4 + Math.random() * 4) + "s";

    document.getElementById("hearts").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

// Hearts every 300ms
setInterval(() => {
    createHeart();
}, 300);

// Welcome popup after page load
window.onload = () => {
    setTimeout(() => {
        alert("🎂 Happy Birthday Aati! 💜\n\nA small surprise made with love by Asad ❤️");
    }, 800);
};

// Optional background music
// 1. Create a folder named "music"
// 2. Put your MP3 inside it and name it "birthday.mp3"

const music = new Audio("music/birthday.mp3");
music.loop = true;

document.body.addEventListener("click", () => {
    music.play().catch(() => {});
}, { once: true });