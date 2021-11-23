const pixelBoard = document.getElementById('pixel-board');
const colorPalete = document.getElementById('#color-palete');
console.log(colorPalete);
let pixel = document.querySelector('#pixel');
let colors = document.querySelectorAll('.color');console.log(colors);
let eachPixelList = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '','', '', '', '', '', '', '', '', '', ''];
let colorBlack = document.querySelector('#black-1');
let colorRed = document.querySelector('#red-2');
let colorGreen = document.querySelector('#green-3');
let colorBlue = document.querySelector('#blue-4')

for (let index = 0; index < eachPixelList.length; index += 1) {
  let eachPixel = eachPixelList[index];
  let pixel1 = document.createElement('p');
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
