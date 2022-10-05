
const btnLeft = document.querySelector('.button-arrow.-left');
const btnRight = document.querySelector('.button-arrow.-right');
const elements = document.querySelector('.elements')

let pixels = 50;

btnLeft.addEventListener('click', function () {
  pixels = pixels - 50;
  elements.style = `transform: translateX(${pixels}px);`
})

btnRight.addEventListener('click', function () {
  pixels = pixels + 50;
  elements.style = `transform: translateX(${pixels}px);`
})

