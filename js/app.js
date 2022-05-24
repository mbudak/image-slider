// your code
var sliderIndex = 0;
var sliderWatch = null;

const pictures = [
    'contBcg-0',
    'contBcg-1',
    'contBcg-2',
    'contBcg-3',
    'contBcg-4',
  ];
  const carNames = [
    'Mercedes AMG',
    'Mercedes E Class',
    'BMW',
    'AUDI',
    'Dodge Challenger',
  ];

document.addEventListener("keydown", keyboardListener);
document.getElementById("icon-left").onclick = slideLeft;
document.getElementById("icon-right").onclick = slideRight;
document.getElementById('playBtn').onclick = playSlider;
document.getElementById('stopBtn').onclick = stopSlider;

var slider = document.getElementsByClassName('img-container');
var carName = document.getElementsByClassName('car-name');


function keyboardListener(e) {
    if (e.key == "ArrowLeft") {
        slideLeft();
    }
    if (e.key == "ArrowRight") {
        slideRight();
    }
}
function slideLeft() {    
    sliderIndex--;
    if (sliderIndex <= 0) {
        sliderIndex = carNames.length -1;
    }
    setSlider(sliderIndex);
}

function slideRight() {
    sliderIndex++;
    if (sliderIndex >= carNames.length -1) {
        sliderIndex = 0;
    }
    setSlider(sliderIndex);
}

function setSlider(ix) {
    carName[0].innerText = carNames[ix];
    slider[0].style.background = `url("./img/contBcg-${ix}.jpeg") center/cover no-repeat`; 
}

function playSlider() {
    // make sure clean start
    clearInterval(sliderWatch);
    sliderWatch = setInterval(slideRight, 1000);
}

function stopSlider() {
    clearInterval(sliderWatch)
}



