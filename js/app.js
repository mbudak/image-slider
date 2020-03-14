// IIFE 
(function() {
  // array of our background image names
  const pictures = [ "contBcg-0", "contBcg-1", "contBcg-2", "contBcg-3", "contBcg-4"];
  const carNames = [ "Mercedes AMG", "Mercedes E Class", "BMW", "AUDI", "Dodge Challenger"];

  //select both left and right button. Add event listeners
  const buttons = document.querySelectorAll('.btn')
  // image container
  const imageDIV = document.querySelector('.img-container');

  // play, stop buttons
  const playBtn = document.querySelector('#playBtn');
  const stopBtn = document.querySelector('#stopBtn');

  // car name 
  const carName = document.querySelector('.car-name');
  carName.textContent = carNames[0];

  let counter = 0;
  var allIntervals = [];
 
  // auto slider
  playBtn.addEventListener('click', function() {
    var timer = setInterval(function() {

    counter++;
    if(counter > pictures.length -1){
      counter = 0;
    }
    imageDIV.style.backgroundImage = `url('./img/${pictures[counter]}.jpeg')`
    carName.textContent = carNames[counter];
    // pushing all intervals
    allIntervals.push(timer);

    }, 1500)
    
  })
  stopBtn.addEventListener('click', function() {
    // clearing all intervals
    allIntervals.forEach(clearInterval);

    });

  // manual slider
  buttons.forEach(function(button){
    button.addEventListener('click', function(e){
      if (button.classList.contains('btn-left')){
        console.log(button.classList);
        counter--;
        if(counter < 0){
          counter = pictures.length -1;
        }
        imageDIV.style.backgroundImage = `url('./img/${pictures[counter]}.jpeg')`
        carName.textContent = carNames[counter];
      }
      if (button.classList.contains('btn-right')){
        counter++;
        if(counter > pictures.length -1){
          counter = 0;
        }
        imageDIV.style.backgroundImage = `url('./img/${pictures[counter]}.jpeg')`
        carName.textContent = carNames[counter];
      }
    })
  })
})();
