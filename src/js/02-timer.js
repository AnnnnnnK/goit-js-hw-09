import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const refs = {
 input : document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('button[data-start]'),
  
 days : document.querySelector('span[data-days]'),
 hours : document.querySelector('span[data-hours]'),
 minutes : document.querySelector('span[data-minutes]'),
 seconds : document.querySelector('span[data-seconds]'),
}

refs.startBtn.addEventListener('click', onClick);

function onClick() {
  refs.startBtn.disabled = true;
  const selectedDate = fp.selectedDates[0];
  let datesDiff = selectedDate - Date.now();
  console.log(datesDiff);
  let timerId = setInterval(() => {
    datesDiff -= 1000;
    if (datesDiff <= 0) {
      clearInterval(timerId);
      Notiflix.Notify.info('The sale is over');
      return;
    }
    convertMs(datesDiff);
  }, 1000)
}

refs.startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    const datesDiff = selectedDates[0] - options.defaultDate;
    if (datesDiff < 0) {
      Notiflix.Notify.warning('Please choose a date in the future');
    } else {
      refs.startBtn.disabled = false;
    }   
},
}
const fp = flatpickr(refs.input, options);


function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  
  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds =addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
  
  refs.days.textContent = days;
  refs.hours.textContent = hours;
  refs.minutes.textContent = minutes;
  refs.seconds.textContent = seconds;
  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2,'0')
}
