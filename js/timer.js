import { alarm } from './alarm.js';
import { state } from './state.js';

const minutesElem = document.querySelector('.time__minutes');
const secondsElem = document.querySelector('.time__seconds');

const showTime = (milliseconds) => {

    let minutes = parseInt(milliseconds / 60);
    let seconds = milliseconds % 60;

    let fMinutes = minutes < 10 ? '0' + minutes : minutes;
    let fseconds = seconds < 10 ? '0' + seconds : seconds;
    
    minutesElem.textContent = fMinutes;
    secondsElem.textContent = fseconds;
};

export const startTimer = () => {
    state.timeLeft--;

    showTime(state.timeLeft);

    if(state.timeLeft > 0 && state.isActive) {
        state.timerId = setTimeout(startTimer, 1000);
    }

    if(state.timeLeft <= 0) {
        alarm();
    }

};