//-------------------------------------------
//criando o pixel board
//-------------------------------------------
const pixelBoard = document.querySelector('#pixel-board');
const pixel = document.createElement('div')
pixel.classList = 'pixel'
for (let index = 0; index <25; index += 1) {
  pixelBoard.innerHTML += '<div class="pixel"></div>';
}
/**Source https://www.ti-enxame.com/pt/javascript/crie-varias-divs-usando-um-loop/1053998065/ */

//-------------------------------------------
//selecionar cor da paleta de cor pelo clique
//-------------------------------------------
let colors = document.querySelectorAll('.color')
for (let index = 0; index < colors.length; index++) {
  let color = colors[index];
  color.addEventListener('click' , selectColor);  
}
function selectColor(selecionado) {
  for( let color of colors)
  color.classList.remove('selected')
    selecionado.target.classList.add('selected')
    let colorToPaint = selecionado.target
    return colorToPaint
}


//------------------------------------------------------------
//pintar pixels do pixel-board com as cores da paleta de cores
//------------------------------------------------------------
// -----criando as cores aleatórias que não se repetem, onde a primeira é sempre preta ----
let blackColor = document.querySelector('#black');
let aleatoryColorR = document.querySelector('#r');
let aleatoryColorG = document.querySelector('#g');
let aleatoryColorB = document.querySelector('#b');

let radomColorR = Math.floor(Math.random()*255);
let radomColorG = Math.floor(Math.random()*255);
let radomColorB = Math.floor(Math.random()*255);

aleatoryColorR.style.backgroundColor = 'rgb( '+radomColorR+' , 0 , 0)'
aleatoryColorG.style.backgroundColor = 'rgb( 0 , '+radomColorG+', 0)'
aleatoryColorB.style.backgroundColor = 'rgb(0 , 0 , '+radomColorB+')'

/**Source https://www.youtube.com/watch?v=tUJvE4xfTgo&ab_channel=VictorRibeiro */

//------- pintando os pixels do pixel-board  ---------
// blackColor.addEventListener('click', paintPixel);
// aleatoryColorR.addEventListener('click', paintPixel);
// aleatoryColorG.addEventListener('click', paintPixel);
// aleatoryColorB.addEventListener('click', paintPixel);

pixelBoard.addEventListener('click', paintPixel)
const colorPalette = document.getElementById('color-palette');

function paintPixel (event) {
  let pixelToPaint = document.querySelector('.selected');
  const paintColor = window.getComputedStyle(pixelToPaint).backgroundColor

event.target.style.backgroundColor = paintColor

console.log(window.getComputedStyle(pixelToPaint).backgroundColor)
}  

  


//----------------------------------------------------------------
//--------------Botão Limpar -------------------------------------
//----------------------------------------------------------------
let clearBoard = document.querySelector('#clear-board');
clearBoard.addEventListener('click', clear)
function clear (event){
  if (event) {
    let pixelsToClean = document.querySelectorAll('.pixel')
  for(let pixelToClean of pixelsToClean ) {
    pixelToClean.style.backgroundColor = 'white'
  }
}
}