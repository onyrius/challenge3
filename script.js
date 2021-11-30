//-------------------------------------------
//criando o pixel board
//-------------------------------------------
let pixelBoard = document.querySelector('#pixel-board');


function addPixel(){

for (let index = 1; index <=25; index += 1) {
  let pixel = document.createElement('div')
  pixel.classList = 'pixel'
  pixelBoard.appendChild(pixel)
}
  
}
addPixel()

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

let radomColorR = Math.random()*255;
let radomColorG = Math.random()*255;
let radomColorB = Math.random()*255;

aleatoryColorR.style.backgroundColor = radomColor()
aleatoryColorG.style.backgroundColor = radomColor()
aleatoryColorB.style.backgroundColor = radomColor()

function radomColor () {
  let radomColorR = Math.random()*255;
  let radomColorG = Math.random()*255;
  let radomColorB = Math.random()*255;

  let cor = 'rgb( '+radomColorR+' , '+radomColorG+' , '+radomColorB+')'
  return cor
}
radomColor()

/**Source https://www.youtube.com/watch?v=tUJvE4xfTgo&ab_channel=VictorRibeiro */

//------- pintando os pixels do pixel-board  ---------

pixelBoard.addEventListener('click', paintPixel)
const colorPalette = document.getElementById('color-palette');

function paintPixel (event) {
  let pixelToPaint = document.querySelector('.selected');
  const paintColor = window.getComputedStyle(pixelToPaint).backgroundColor

event.target.style.backgroundColor = paintColor
}  

//----------------------------------------------------------------
//--------------Botão Limpar -------------------------------------
//----------------------------------------------------------------
let clearBoard = document.querySelector('#clear-board');
clearBoard.addEventListener('click', clear)
function clear (){
  
    let pixelsToClean = document.querySelectorAll('.pixel')
  for(let pixelToClean of pixelsToClean ) {
    pixelToClean.style.backgroundColor = 'white'
    input.value = ""
  
}
}
//------------------------------------------------------------------
//-----Pessoa usuária define tamanho do quadro----------------------
//------------------------------------------------------------------
// -------- define input e botão vqv--------------------------------
let vqvButton = document.querySelector('#generate-board')
vqvButton.addEventListener('click', verification)
let input = document.querySelector('#board-size');
if (input < 5 && input > 50) {
  pixelBoard
}
function verification (){
    let inputSize = document.querySelector('#board-size');
    let size = parseInt(inputSize.value)
    
    if ( !size || (size < 5) ) {
      alert('Board inválido!') 
    clear()
    inputSize.value = ''
    
}
}


vqvButton.addEventListener('click', defineSizeBoard)
function defineSizeBoard(){
  const pixelBoardFlex = document.getElementById('pixel-board');
  newSizeBoard =  parseInt(window.getComputedStyle(pixelBoardFlex).width);

let inputValue = parseInt(input.value);

if (inputValue <= 5 ) {
  pixelBoardFlex.style.width = '210px'
  pixelBoardFlex.style.height = '210px'
} else if ( inputValue > 5 && inputValue <=50){
  newSizeBoard = inputValue*40
  pixelBoardFlex.style.width = newSizeBoard.toString() + 'px';
  pixelBoardFlex.style.height = newSizeBoard.toString() + 'px';

} else if (inputValue >= 50) {
  newSizeBoard = 50*40
  pixelBoardFlex.style.width = newSizeBoard.toString() + 'px';
  pixelBoardFlex.style.height = newSizeBoard.toString() + 'px';
}
}
vqvButton.addEventListener('click', addNewPixels)

function addNewPixels() {
  let input = document.querySelector('#board-size');
  let inputValue = parseInt(input.value);

  if (inputValue > 5 && inputValue < 50  ) {
    let oldPixels = document.querySelectorAll('.pixel');
    for ( let index = 0; index < oldPixels.length ; index +=1) {
      oldPixels[index].remove()}
    for (let numeroDeNewPixels = 0; numeroDeNewPixels < inputValue**2; numeroDeNewPixels++) {
      let pixel = document.createElement('div')
      pixel.classList = 'pixel'
      pixelBoard.appendChild(pixel)
    }
  }else if (inputValue >= 50 ) {
    let oldPixels = document.querySelectorAll('.pixel');
    for ( let index = 0; index < oldPixels.length ; index +=1) {
      oldPixels[index].remove()}
      for (let numeroDeNewPixels = 0; numeroDeNewPixels < 50**2; numeroDeNewPixels++) {
        let pixel = document.createElement('div')
        pixel.classList = 'pixel'
        pixelBoard.appendChild(pixel)

    }  
  }
  }
  



addNewPixels()
/**Source : inspirações https://github.com/tryber/sd-018-b-project-pixels-art/pull/79/files
 *        https://github.com/tryber/sd-018-b-project-pixels-art/pull/61/files
 */