const icon = document.querySelector('.icon');
const startAnimationBtn = document.querySelector('#startAnimation');
const changeColorBtn = document.querySelector('#changeColor');

const colors = ['red', 'green', 'pink', 'yellow', 'blue'];

startAnimationBtn.addEventListener('click', () => {
  icon.style.animation = "bounce 2s ease-in-out infinite";
});

changeColorBtn.addEventListener('click', () => {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  icon.style.backgroundColor = randomColor;
});