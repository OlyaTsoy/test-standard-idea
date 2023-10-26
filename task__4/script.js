const progressBar = document.querySelector("#progressBar");
const percentInput = document.querySelector("#percentInput");
const startBtn = document.querySelector("#startBtn");

function updateProgressBar() {
  const percent = percentInput.value;
  if (percent >= 0 && percent <= 100) {
    progressBar.style.width = "0%";
    startBtn.disabled = true;

    setTimeout(() => {
      progressBar.style.transition = `width ${percent / 100}s linear`;
      progressBar.style.width = percent + "%";
    }, 10);

    setTimeout(() => {
      progressBar.style.transition = "none";
      startBtn.disabled = false;
      percentInput.value = "";
    }, percent * 10);
  }
}

startBtn.addEventListener("click", () => {
  updateProgressBar();
});

percentInput.addEventListener("input", () => {
  startBtn.disabled = false;
});

updateProgressBar();