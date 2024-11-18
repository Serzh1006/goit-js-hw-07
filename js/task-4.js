const form = document.querySelector('.login-form');

form.addEventListener('submit', e => {
  e.preventDefault();
  if (
    form.elements[0].value.trim() === '' ||
    form.elements[1].value.trim() === ''
  ) {
    alert('All form fields must be filled in');
  } else {
    const emailName = e.currentTarget.elements.email.name;
    const passwordName = e.currentTarget.elements.password.name;
    const emailValue = e.currentTarget.elements.email.value.trim();
    const passwordValue = e.currentTarget.elements.password.value.trim();
    const dataForm = {
      [emailName]: emailValue,
      [passwordName]: passwordValue,
    };
    console.log(dataForm);
    e.currentTarget.reset();
  }
});
