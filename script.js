let interval;
let running = false;
let time = 0;
const timeDisplay = document.querySelector('.time');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
function updateTime() {
    time++;
    const hours = Math.floor(time / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((time % 3600) / 60).toString().padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
}
startButton.addEventListener('click', () => {
    if (!running) {
        interval = setInterval(updateTime, 1000);
        startButton.textContent = 'Pause';
    } else {
        clearInterval(interval);
        startButton.textContent = 'Resume';
    }
    running = !running;
});
stopButton.addEventListener('click', () => {
    clearInterval(interval);
    startButton.textContent = 'Start';
    running = false;
});
resetButton.addEventListener('click', () => {
    clearInterval(interval);
    startButton.textContent = 'Start';
    running = false;
    time = 0;
    updateTime();
});
