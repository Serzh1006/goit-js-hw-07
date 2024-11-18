const input = document.querySelector('#name-input');
const text = document.querySelector('#name-output');

input.addEventListener('input', event => {
  if (event.currentTarget.value.trim() === '') {
    text.textContent = 'Anonymous';
  } else {
    text.textContent = event.currentTarget.value.trim();
  }
});
