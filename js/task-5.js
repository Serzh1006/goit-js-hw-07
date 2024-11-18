function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnChange = document.querySelector('.change-color');
const colorText = document.querySelector('.color');

btnChange.addEventListener('click', e => {
  const getColor = getRandomHexColor();
  document.body.style.backgroundColor = getColor;
  colorText.textContent = getColor;
});
