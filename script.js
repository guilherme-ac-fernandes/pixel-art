window.onload = function () {
  // Essa função Math.floor combinada com Math.random é capaz de gerar aleatoriamente cores hexadecimal, onde .toString(16) transforma um número na base 10 para base 16 (hexadecimal)
  // source: https://css-tricks.com/snippets/javascript/random-hex-color/
  function paletteColorRandom() {
    const randomColorArray = ['black'];
    for (let r = 0; r < 3; r += 1) {
      let color = r;
      color = Math.floor(Math.random() * 16777215).toString(16);
      if (color[0] !== color[1] !== color[2] !== color[3]) {
        randomColorArray.push(`#${color}`);
      }
    }
    return randomColorArray;
  }
  paletteColorRandom();

  // Adicionando paleta de cores
  // const colors = ['black', 'red', 'blue', 'green'];
  function createColorPalette(arrayColors) {
    const fatherPosition = document.getElementById('color-palette');
    for (let i = 0; i < arrayColors.length; i += 1) {
      const div = document.createElement('div');
      fatherPosition.appendChild(div);
      div.className = 'color';
      div.style.backgroundColor = arrayColors[i];
      div.style.border = 'solid 1px black';
      div.style.height = '50px';
      div.style.width = '50px';
      div.style.display = 'inline-block';
      div.style.margin = ' 0px 10px';
    }
  }
  createColorPalette(paletteColorRandom());

  // Adicione a cor preta como a primeira cor da paleta
  // Já esta presente no array colors
  // Adicionar à página de pixels
  function pixelBoard(number) {
    const fatherPixelBoard = document.getElementById('pixel-board');
    for (let i = 0; i < number; i += 1) {
      const line = document.createElement('div');
      line.className = 'pixel-line';
      for (let j = 0; j < number; j += 1) {
        const pixelItem = document.createElement('div');
        line.appendChild(pixelItem);
        pixelItem.className = 'pixel';
        pixelItem.style.height = '40px';
        pixelItem.style.width = '40px';
        pixelItem.style.border = 'solid 1px black';
        pixelItem.style.display = 'inline-block';
        pixelItem.style.backgroundColor = 'white';
      }
      fatherPixelBoard.appendChild(line);
    }
  }
  pixelBoard(5);

  // Padronização dos pixel
  // Altura e largura de 40 px
  // Borda sólida de 1px cor preta
  // Tudo alterado no requisito superior
  // A primeira cor da paleta deve ter a class selected
  const blackColorPalette = document.getElementById('color-palette').firstElementChild;
  blackColorPalette.className = 'color selected';

  // Seleciona a posição da cor que será clicada e altera para selected
  const paletteColors = document.querySelector('#color-palette');
  paletteColors.addEventListener('click', (event) => {
    const selectedDiv = document.querySelector('.selected');
    selectedDiv.classList.remove('selected');
    if (event.target.className === 'color') {
      event.target.className = 'color selected';
    }
  });

  // Realizar a função para preencher o pixel
  const pixelPosition = document.querySelector('#pixel-board');
  pixelPosition.addEventListener('click', (event) => {
    const selectedDiv = document.querySelector('.selected');
    const color = selectedDiv.style.backgroundColor;
    event.target.style.backgroundColor = color;
  });

  // Incluir botão para limpar o pixel-board
  const pixelToClear = document.querySelectorAll('.pixel');
  // const pixelBoardClear = document.querySelector('#pixel-board');
  const button = document.querySelector('#clear-board');
  button.addEventListener('click', () => {
    for (let q = 0; q < pixelToClear.length; q += 1) {
      const pixelItem = pixelToClear[q];
      pixelItem.style.backgroundColor = 'white';
    }
  });

  // Fazer um input para o usuário informar o tamanho do board
  function removeBoard() {
    const father = document.querySelector('#pixel-board');
    const childLine = document.querySelectorAll('.pixel-line');
    for (let q = 0; q < childLine.length; q += 1) {
      const position = childLine[q];
      console.log(position)
      father.removeChild(position);
    }
  }
  const buttonGenerateBoard = document.querySelector('#generate-board');
  const inputSize = document.querySelector('#board-size');
  let size = 5;
  buttonGenerateBoard.addEventListener('click', () => {
    size = inputSize.value;
    if (size === '') {
      alert('Board inválido!');
      return;
    } if (size < 5) {
      alert('Valor menor que 5, considerar 5 como padrão');
      size = 5;
    } else if (size > 50) {
      alert('Valor menor que 50, considerar 50 como padrão');
      size = 50;
    }
    removeBoard();
    pixelBoard(size);
  });

  // Gerar um array de cores geradas aleatoriamente com o primeiro sendo preto
  // O gerador de cores aleatórias foi colocado no inicio do código, juntamente com a referência utilizada.
}

