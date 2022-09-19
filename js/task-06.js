const input = document.querySelector('#validation-input');
// console.log(input);

input.addEventListener('blur', event => {
  //   console.log(event.currentTarget.value.length);
  //   console.log(Number(input.dataset.length));
  if (event.currentTarget.value.trim().length === Number(input.dataset.length)) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
});
