const pixelBoard = document.getElementById('pixel-board');
let main = document.getElementsByTagName('main')[0];
let eachPixelList =['', '', '', '', '', '', '', '', '', '', '', '', '', '', '','', '', '', '', '', '', '', '', '', ''];

for (let index = 0; index < eachPixelList.length; index += 1) {
  let eachPixel = eachPixelList[index];

  let pixel = document.createElement('p');

  eachPixelList.innerText = pixel;
  pixel.className = 'pixel';
  pixelBoard.appendChild(pixel);
}
