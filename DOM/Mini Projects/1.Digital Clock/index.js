let time = document.querySelector(".time");

setInterval(function () {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let formattedHours = hours % 12 || 12;

  time.innerHTML = `
    ${formattedHours}:${
    minutes < 10 ? "0" + minutes : minutes
  }:${seconds < 10 ? "0" + seconds : seconds} ${hours >= 12 ? "PM" : "AM"}
    `;
  // time.innerHTML = date.toLocaleTimeString();
}, 1000);
