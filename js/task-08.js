const form = document.querySelector('.login-form');
// console.log(form);
form.addEventListener('submit', event => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === '' || password.value === '') {
    alert(`Все поля должны быть заполнены`);
  } else {
    console.log(`Email: ${email.value}, Password: ${password.value}`);
    console.log({ email: email.value, password: password.value });
  }
  event.currentTarget.reset();
});
