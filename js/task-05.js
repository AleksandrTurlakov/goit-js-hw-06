const input = document.querySelector('#name-input');
const nameOut = document.querySelector('#name-output');
// console.log(input);
// console.log(nameOut);
input.addEventListener('input', event => {
  nameOut.textContent = event.currentTarget.value.trim();
  if (event.currentTarget.value.trim() === '') {
    nameOut.textContent = 'Anonymous';
  }
});
