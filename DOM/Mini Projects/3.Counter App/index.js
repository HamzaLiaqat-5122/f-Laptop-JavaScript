const buttons = document.querySelectorAll(".btn");
const counter = document.querySelector(".counter");
const body = document.body;

let count = 0;
counter.innerHTML = count;

buttons.forEach(button => {
    button.addEventListener("click", e => {
        if(e.target.classList.contains("dec")){
            counter.innerHTML = --count;
        } else if(e.target.classList.contains("res")){
            counter.innerHTML = count = 0
        } else if(e.target.classList.contains("inc")){
            counter.innerHTML = ++count;
        }
        if(count > 0){
            body.classList.add("positive")
            body.classList.remove("negative");
            body.classList.remove("neutral");
        } else if (count < 0){
            body.classList.add("negative");
            body.classList.remove("positive");
            body.classList.remove("neutral");
        } else if (count === 0) {
            body.classList.add("neutral");
            body.classList.remove("negative");
            body.classList.remove("positive");
        }
    })
})