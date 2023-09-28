const timeDisplay = document.querySelector('.time');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
let startTime;
let interval;
function startTimer() {
    if (!startTime) {
        startTime = Date.now();
        interval = setInterval(updateTime, 10);
        startButton.textContent = 'Pause';
    } else {
        clearInterval(interval);
        startTime = null;
        startButton.textContent = 'Resume';
    }
}
function stopTimer() {
    clearInterval(interval);
    startTime = null;
    startButton.textContent = 'Start';
}
function resetTimer() {
    clearInterval(interval);
    startTime = null;
    timeDisplay.textContent = '00:00:00';
    startButton.textContent = 'Start';
}
function updateTime() {
    const currentTime = Date.now() - startTime;
    const hours = Math.floor(currentTime / 3600000);
    const minutes = Math.floor((currentTime % 3600000) / 60000);
    const seconds = Math.floor((currentTime % 60000) / 1000);
    const milliseconds = Math.floor(currentTime % 1000);
    const timeString = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    timeDisplay.textContent = timeString;
}