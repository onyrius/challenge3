const pixelBoard = document.getElementById('pixel-board');
const colorPalete = document.getElementById('#color-palete');
let pixel = document.getElementsByClassName('pixel');
console.log(pixel);
let colors = document.querySelectorAll('.color');console.log(colors);
let eachPixelList = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '','', '', '', '', '', '', '', '', '', ''];
const colorBlack = document.querySelector('#black-1');
const colorRed = document.querySelector('#red-2');
const colorGreen = document.querySelector('#green-3');
const colorBlue = document.querySelector('#blue-4');

for (let index = 0; index < eachPixelList.length; index += 1) {
  let eachPixel = eachPixelList[index];
 const pixel1 = document.createElement('p');
  eachPixelList.innerText = pixel1;
  pixel1.className = 'pixel';
  pixelBoard.appendChild(pixel1);
}

for (const color of colors) {
  color.addEventListener('click', selectedColor)
}
function selectedColor(event) {
  for (const color of colors) {
    color.classList.remove('selected');
    event.target.classList.add('selected');
    console.log(event.target);
 }
}

for (let place of pixel) {
 place.addEventListener('click', paintColor);
  function paintColor (evento) {
   if (selectedColor === colorRed) {
    selectedColor.classList.remove('color selected')
    evento.target.classList.add('color selected')
    place.style.backgroundColor = 'red'
   } if (selectedColor === colorGreen) {
    place.style.backgroundColor = 'green'
   } if (selectedColor === colorBlue) {
    place.style.backgroundColor = 'blue'
   } if (selectedColor === colorBlack){
   place.style.backgroundColor = 'black'
   }
 }
}