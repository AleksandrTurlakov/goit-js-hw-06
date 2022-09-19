const input = document.querySelector('#font-size-control');
// console.log(input);
const text = document.querySelector('#text');
// console.log(text);
input.value = input.min;
input.addEventListener('input', event => {
  console.log('Текущий размер шрифта:', event.currentTarget.value);
  text.style.fontSize = `${event.currentTarget.value}px`;
});
