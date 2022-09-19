let counterValue = 0;
const value = document.querySelector('#value');
const buttonDec = document.querySelector('[data-action="decrement"]');
const buttonInc = document.querySelector('[data-action="increment"]');
console.log(value);
console.log(buttonDec);
console.log(buttonInc);

buttonDec.addEventListener('click', () => {
  value.textContent = counterValue -= 1;
});
buttonInc.addEventListener('click', () => {
  value.textContent = counterValue += 1;
});
