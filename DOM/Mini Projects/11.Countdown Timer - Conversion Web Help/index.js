const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const heading = document.querySelector(".heading");

const targetDate = new Date("july 3, 2025 12:00:00").getTime();

const timer = setInterval(function () {
    const now = new Date().getTime();

    const difference = targetDate - now;

     days.innerHTML = Math.floor(difference / (1000 * 60 * 60 * 24));
     hours.innerHTML = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     minutes.innerHTML = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
     seconds.innerHTML = Math.floor((difference % (1000 * 60)) / 1000);

     if(difference <= 0){
        clearInterval(timer);
        days.innerHTML = "00"
        hours.innerHTML = "00"
        minutes.innerHTML = "00"
        seconds.innerHTML = "00"
        heading.innerHTML = "Happy Birthday, Hamza!";
     }
    
}, 1000);