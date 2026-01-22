let percent = 0;
const loader = document.getElementById("loader");
const fill = document.getElementById("loader-fill");
const text = document.getElementById("loader-percent");

const interval = setInterval(() => {
  percent += 1;
  fill.style.width = percent + "%";
  text.textContent = percent + "%";

  if (percent >= 100) {
    clearInterval(interval);
    setTimeout(() => {
      loader.style.display = "none";
    }, 300);
  }
}, 20);
