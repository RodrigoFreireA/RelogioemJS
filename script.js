const currentTimeElem = document.getElementById('current-time');
const targetTimeInput = document.getElementById('target-time');
const countdownElem = document.getElementById('countdown');
const showGifButton = document.getElementById('show-gif'); // Corrigido para corresponder ao ID do botão no HTML
const gifContainer = document.getElementById('gif-container');
const overlay = document.getElementById('overlay');

function updateCurrentTime() {
    const now = new Date();
    currentTimeElem.textContent = now.toLocaleString();
}

function updateCountdown() {
    const targetTime = new Date(targetTimeInput.value);
    const now = new Date();

    if (targetTime > now) {
        const diff = targetTime - now;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        countdownElem.innerHTML = `
            <span>${days} Dias</span>
            <span>${hours} Horas</span>
            <span>${minutes} Minutos</span>
            <span>${seconds} Segundos</span>
        `;
    } else {
        countdownElem.textContent = "Tempo expirado";
    }
}

showGifButton.addEventListener('click', function() {
    gifContainer.style.display = 'block';
    overlay.style.display = 'block';
    updateCurrentTime(); // Atualize o horário quando o GIF é mostrado
});

overlay.addEventListener('click', function() {
    gifContainer.style.display = 'none';
    overlay.style.display = 'none';
});

setInterval(function() {
    updateCurrentTime();
    updateCountdown();
}, 1000);

targetTimeInput.addEventListener('input', updateCountdown);
