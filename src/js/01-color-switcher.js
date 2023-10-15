const startBtn = document.querySelector('[data-start]'); 
const stopBtn = document.querySelector('[data-stop]'); 
const body = document.querySelector('body'); 
 
startBtn.addEventListener('click', onStart); 
stopBtn.addEventListener('click', onStop); 
 
let timerId = null; 
 
function onStart() { 
    stopBtn.disabled = false; 
    startBtn.disabled = true; 
    body.style.backgroundColor = getRandomHexColor(); 
    timerId = setInterval(() => { 
        body.style.backgroundColor = getRandomHexColor(); 
    }, 1000); 
} 
 
function onStop(){ 
    startBtn.disabled = false; 
    stopBtn.disabled = true; 
    clearInterval(timerId); 
} 
 
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
