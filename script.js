function showTime() {
  let amPm = "am";
  let clock = document.getElementById("clock");
  let currentTime = new Date();
  let hours = currentTime.getUTCHours();
  let minutes = currentTime.getUTCMinutes();
  let seconds = currentTime.getUTCSeconds();
  let timeZone = document.getElementById("timeZone").value;
  switch (timeZone) {
    case "pst":
      hours -= 8;
      break;
    case "mst":
      hours -= 7;
      break;
    case "cst":
      hours -= 6;
      break;
    case "est":
      hours -= 5;
      break;
  }
  if (hours < 0) {
    hours = hours + 12;
    amPm = "pm";
  } else if (hours > 12) {
    hours = hours - 12;
  } else if (hours === 0) {
    hours = 12;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  let clockTime = `${hours}:${minutes}:${seconds} ${amPm}`;
  clock.innerText = clockTime;
}
showTime();

setInterval(showTime, 1000);
