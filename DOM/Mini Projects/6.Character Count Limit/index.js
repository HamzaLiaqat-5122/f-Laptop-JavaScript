const textInput = document.querySelector("#textInput")
const charCount = document.querySelector("#charCount")

textInput.addEventListener("input", e => {
    const value = textInput.value;
    let count = 0;

    for(let i = 0; i < value.length; i++){
        if(value[i] !== " "){
            count++;
        }
    }

    charCount.innerHTML = count;

    if(count === 100){
        charCount.classList.add("danger");
        charCount.classList.remove("warning");
        charCount.classList.remove("neutral");
    } else if(count >= 80){
        charCount.classList.add("warning");
        charCount.classList.remove("danger");
        charCount.classList.remove("neutral");
    }
    else if(count < 80){
        charCount.classList.add("neutral");
        charCount.classList.remove("danger");
        charCount.classList.remove("warning");
    }

    else {
        charCount.classList.remove("warning", "danger", "neutral");
    }
});
