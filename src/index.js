import './index.css';

function requireAll(r) {
  r.keys().forEach(r);
}

requireAll(require.context('./svg', true, /\.svg$/));

document.addEventListener('DOMContentLoaded', () => {
  function startTimer(hours, minutes, seconds) {
    const targetTime = new Date();
    targetTime.setHours(hours, minutes, seconds);

    function formatTime(time) {
      const padZero = value => String(value).padStart(2, '0');
      const currentHours = padZero(time.getHours());
      const currentMinutes = padZero(time.getMinutes());
      const currentSeconds = padZero(time.getSeconds());
      return `${currentHours}:${currentMinutes}:${currentSeconds}`;
    }

    function subtractOneSecond() {
      targetTime.setSeconds(targetTime.getSeconds() - 1);
      document.querySelector('.offer__label-count').textContent = formatTime(targetTime);

      if (
        targetTime.getSeconds() === 0 &&
        targetTime.getMinutes() === 0 &&
        targetTime.getHours() === 0
      ) {
        clearInterval(timerInterval);
      }
    }

    document.querySelector('.offer__label-count').textContent = formatTime(targetTime);

    const timerInterval = setInterval(subtractOneSecond, 1000);
  }

  startTimer(4, 51, 16);
});
