import '../css/common.css';

const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

startBtn.addEventListener('click', genarateColor);
stopBtn.addEventListener('click', stopGenarateColor);

let timerId = null;
let isActive = false;

function genarateColor(evt) {
    if (isActive) {
    return;
    } 
isActive = true;

timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
}, 1000);
}

function stopGenarateColor(e) {
    clearInterval(timerId);
    isActive = false;
};
