const loveContainer = document.getElementById('loveContainer');
const colors = ['#ff4d4d','hotpink','#ff66ff','#ffcc00','#00e5ff','#00ff99','#ff8c00','#ff1493'];
const hearts = ['❤️','💛','💚','💙','💜','🩷','🧡'];

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.textContent = hearts[Math.floor(Math.random()*hearts.length)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (3 + Math.random() * 4) + 's';
    heart.style.fontSize = (18 + Math.random() * 16) + 'px';
    heart.style.color = colors[Math.floor(Math.random()*colors.length)];
    loveContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);
}

setInterval(createHeart, 250);