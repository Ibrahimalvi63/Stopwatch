
let [hour, minute, second] = [0, 0, 0];
const display = document.getElementById('display');
let timer = null;
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');



stopBtn.disabled = true;

function watch() {
    second++;
    if (second == 60) {
        second = 0;
        minute++;
        if (minute == 60) {
            minute = 0;
            hour++;
        }
    }
    let hours = hour < 10 ? '0' + hour : hour;
    let minutes = minute < 10 ? '0' + minute : minute;
    let seconds = second < 10 ? '0' + second : second;
    display.innerHTML = `${hours}:${minutes}:${seconds}`;

}

function startWatch() {
    if (timer !== null) {
        clearInterval(timer);
    }
    timer = setInterval(watch, 1000);

    startBtn.disabled = true;
    stopBtn.disabled = false;
}

function stopWatch() {
    clearInterval(timer);
    startBtn.disabled = false;
    stopBtn.disabled = true;
}

function resetWatch() {
    clearInterval(timer);
    [hour, minute, second] = [0, 0, 0];
    display.innerHTML = '00:00:00';
}