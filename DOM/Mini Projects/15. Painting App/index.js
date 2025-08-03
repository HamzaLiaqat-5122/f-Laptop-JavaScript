let colorPicker = document.querySelector('#colorPicker');
let brushSize = document.querySelector('#brushSize');
let eraserBtn = document.querySelector('#eraserBtn');
let line = document.querySelector('.line');
const clearBtn = document.querySelector("#clearBtn");
const downloadBtn = document.querySelector("#downloadBtn");
const container = document.querySelector('.canvas-container');
let a = '5'

brushSize.addEventListener('change', e => {
  a = e.target.value;
})

const containerRect = container.getBoundingClientRect();
let c = "#000"
colorPicker.addEventListener("change", e => {
  c = colorPicker.value
})

eraserBtn.addEventListener("click", e => {
  c = "#fff"
})

clearBtn.addEventListener("click", e => {
  container.innerHTML = '';
  createSpan(e);
})

let isDrawing = false; // track if mouse is pressed

container.addEventListener('mousedown', e => {
  if(e.button === 0){
    isDrawing = true;
    if (isDrawing) {
      createSpan(e);
    }
  }
});

container.addEventListener('mousemove', e => {
  
  if (isDrawing) {
    createSpan(e);
  }
});

container.addEventListener('mouseup', () => {
  isDrawing = false;
});

// Optional: stop drawing if mouse leaves the container
container.addEventListener('mouseleave', () => {
  isDrawing = false;
});


  // setInterval(function () {
  // }, 1)

  
function createSpan(e){
    let span = document.createElement("canvas");
    span.classList.add('line');
    span.style.backgroundColor = c;
    span.style.width = a + "px"
    span.style.height = a + "px";

    let lineHeight = span.offsetHeight;
    let lineWidth = span.offsetWidth;

    span.style.left = (e.clientX - containerRect.left - lineWidth / 2) + "px";
    span.style.top = (e.clientY - containerRect.top - lineHeight / 2) + "px";

    container.append(span)
}

downloadBtn.addEventListener("click", () => {
  html2canvas(container).then(canvas => {
    const link = document.createElement('a');
    link.download = 'capture.png';
    link.href = canvas.toDataURL(); // Get image data URL
    link.click();
  });
});