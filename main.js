function updateClock() {
  const currentTime = new Date();

  const hours = currentTime.getHours().toString().padStart(2, '0');
  const minutes = currentTime.getMinutes().toString().padStart(2, '0');
  const seconds = currentTime.getSeconds().toString().padStart(2, '0');
  const weekDay = currentTime.toLocaleDateString('en-US', { weekday: 'short' });
  const monthName = currentTime.toLocaleDateString('en-US', { month: 'short' });
  const monthDate = currentTime.getDate();

  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent =":" +minutes;
  document.getElementById('seconds').textContent =":"+ seconds;
  document.getElementById('WeekDay').textContent = weekDay;
  document.getElementById('monthName').textContent = monthName;
  document.getElementById('monthDate').textContent = monthDate;
}

updateClock();
setInterval(updateClock, 1000);
