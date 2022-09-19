function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input');
console.log(input);
const buttonCreate = document.querySelector('[data-create]');
console.log(buttonCreate);
const buttonDestroy = document.querySelector('[data-destroy]');
console.log(buttonDestroy);
const boxes = document.querySelector('#boxes');
console.log(boxes);

let valueDiv = 20;
function createBoxes(amount) {
  amount = Number(input.value);
  boxes.innerHTML = '';
  for (let i = 0; i < amount; i += 1) {
    valueDiv += 10;
    boxes.insertAdjacentHTML('afterbegin', '<div class="boxesEl"></div>');
    const divBox = document.querySelector('.boxesEl');
    divBox.style.width = `${valueDiv}px`;
    divBox.style.height = `${valueDiv}px`;
    divBox.style.backgroundColor = getRandomHexColor();
  }
}

function destroyBoxes() {
  boxes.innerHTML = '';
  input.value = '';
  valueDiv = 20;
}

buttonCreate.addEventListener('click', createBoxes);
buttonDestroy.addEventListener('click', destroyBoxes);
