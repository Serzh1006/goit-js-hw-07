function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const textInput = document.querySelector('#controls');
const boxes = document.querySelector('#boxes');

btnCreate.addEventListener('click', createBoxes);
btnDestroy.addEventListener('click', destroyBoxes);

function createBoxes() {
  const counter = textInput.firstElementChild.value;
  const collections = [];
  let increment = 30;

  if (counter >= 1 && counter <= 100) {
    for (let i = 0; i < counter; i += 1) {
      const newEl = document.createElement('div');
      newEl.style.width = `${increment}px`;
      newEl.style.height = `${increment}px`;
      newEl.style.backgroundColor = getRandomHexColor();
      collections.push(newEl);
      increment += 10;
    }
    boxes.innerHTML = '';
    boxes.append(...collections);
    textInput.firstElementChild.value = '';
  }
}

function destroyBoxes() {
  boxes.innerHTML = '';
}
