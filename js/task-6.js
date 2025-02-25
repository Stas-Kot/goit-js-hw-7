function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  let width = 30;
  let height = 30;
  let markup = '';
  for (let i = 0; i < amount; i++) {
    width += 10;
    height += 10;
    markup += `<div style="width: ${width}px; height: ${height}px; background-color: ${getRandomHexColor()}; margin-top: 5px;" ></div>`;
  }

  boxes.innerHTML = markup;
}

function handleInput(e) {
  number = e.target.value.trim();
}

function handleCreate(e) {
  if (number > 100 || number < 1) {
    return;
  }
  createBoxes(number);
  input.value = '';
}

function destroyBoxes(e) {
  boxes.innerHTML = '';
}

const input = document.querySelector('input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');
let number = 0;

input.addEventListener('input', handleInput);
createBtn.addEventListener('click', handleCreate);
destroyBtn.addEventListener('click', destroyBoxes);

// const markup = images
//   .map(image => `<li><img src="${image.url}" alt="${image.alt}"></li>`)
//   .join('');

// list.insertAdjacentHTML('beforeend', markup);
