let targetDate = new Date('Jan 22, 2021, 17:24:21:21').getTime();
let timerId = null;

const daysRef = document.querySelector('.value[data-value="days"]');
const hoursRef = document.querySelector('.value[data-value="hours"]');
const minsRef = document.querySelector('.value[data-value="mins"]');
const secsRef = document.querySelector('.value[data-value="secs"]');

function getTimeDif(targetDate) {
  const currentDate = Date.now();
  const timeDif = targetDate - currentDate;
  return timeDif;
}

function updateClockface(time) {
  const timeLeft = getTimeDif(targetDate);
  if (timeLeft >= 0) {
    const days = pad(Math.floor(timeLeft / (1000 * 60 * 60 * 24)));
    const hours = pad(
      Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = pad(Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((timeLeft % (1000 * 60)) / 1000));

    daysRef.textContent = days;
    hoursRef.textContent = hours;
    minsRef.textContent = mins;
    secsRef.textContent = secs;
  } else {
    clearInterval(timerId);
  }
}

function pad(value) {
  return String(value).padStart(2, '0');
}

timerId = setInterval(updateClockface, 1000);
