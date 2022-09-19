function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyColor = document.querySelector('body');
const buttonChange = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');
// console.log(bodyColor);
// console.log(buttonChange);
// console.log(spanColor);

buttonChange.addEventListener('click', event => {
  bodyColor.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = bodyColor.style.backgroundColor;
});
