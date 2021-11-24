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
function selectColor(selecionar) {
  for( let color of colors)
  color.classList.remove('selected')
    selecionar.target.classList.add('selected')
    let colorToPaint = selecionar.target
    return colorToPaint
}
console.log(typeof selectColor)

//------------------------------------------------------------
//pintar pixels do pixel-board com as cores da paleta de cores
//------------------------------------------------------------
let black = document.querySelector('#black');
