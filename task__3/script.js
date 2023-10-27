const changeColorBtn = document.querySelector('#changeColorBtn');
const tableRows = document.querySelectorAll('.table tbody tr');

const colors = ['#CFE2FF', '#F8D7DA', '#D1E7DD', '#FFF3CD'];

// Распространяется на все строки в таблице

// changeColorButton.addEventListener('click', () => {
//   tableRows.forEach((row) => {
//     const randomColor = colors[Math.floor(Math.random() * colors.length)];
//     row.style.backgroundColor = randomColor;
//   });
// });

// Через одну строку
changeColorBtn.addEventListener('click', () => {
  tableRows.forEach((row, idx) => {
    if (idx % 2 === 0) {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      row.style.backgroundColor = randomColor;
    }
  });
});

