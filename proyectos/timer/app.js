import { Timer } from "./timer/timer.js";

const timerElement = document.querySelector(".timer__time");
const buttonInitTimer = document.querySelector(".timer__init");
const buttonPausedTimer = document.querySelector(".timer__paused");

const timer = new Timer();

// Maneja el Timer
function handleTimer(isOver, currenTime){
    timerElement.textContent = currenTime;

    if(isOver){
        timerElement.textContent = Timer.formatTime(0);
    }
}


buttonInitTimer.addEventListener("click", ()=>{

    timer.startTimer(500,handleTimer);

    buttonPausedTimer.dataset.status === "continue" && ( buttonPausedTimer.dataset.status = "paused")

});


buttonPausedTimer.addEventListener("click", ()=>{

    if(buttonPausedTimer.dataset.status === "paused" && timer.pausedTimer()){

        buttonPausedTimer.dataset.status = "continue";

    }else if(buttonPausedTimer.dataset.status === "continue" && timer.continueTimer()){

        buttonPausedTimer.dataset.status = "paused";

    }

});


