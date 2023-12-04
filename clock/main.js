function createNumbers() {
  const clock = document.getElementById('clock');
  for (let i = 1; i <= 12; i++) {
    const number = document.createElement('div');
    number.className = 'number';
    number.innerHTML = i;
    const angle = (i - 3) * 30; 
    const radius = 70;
    const x = 100 + radius * Math.cos(angle * (Math.PI / 180));
    const y = 100 + radius * Math.sin(angle * (Math.PI / 180));
    number.style.left = x + 'px';
    number.style.top = y + 'px';
    clock.appendChild(number);
  }
}

function updateClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const hourDegree = (hours % 12 + minutes / 60) * 30;
  const minuteDegree = (minutes + seconds / 60) * 6;
  const secondDegree = seconds * 6;

  document.getElementById('hour').style.transform = `rotate(${hourDegree}deg)`;
  document.getElementById('minute').style.transform = `rotate(${minuteDegree}deg)`;
  document.getElementById('second').style.transform = `rotate(${secondDegree}deg)`;

  document.getElementById('time-display').innerText = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}

function formatTime(time) {
  return time < 10 ? '0' + time : time;
}

createNumbers();
updateClock(); 
setInterval(updateClock, 1000);
