const progress = document.getElementById("progress");
const status = document.getElementById("status");
const downloadBox = document.getElementById("downloadBox");

let percent = 0;

const interval = setInterval(() => {
  percent += 2;
  progress.style.width = percent + "%";

  if (percent >= 100) {
    clearInterval(interval);
    downloadBox.classList.add("success");
    status.innerHTML = `
      <svg width="20" height="20" fill="#00c853" viewBox="0 0 24 24">
        <path d="M9 16.2l-3.5-3.5L4 14.2 9 19.2 20 8.2 18.5 6.7z"/>
      </svg>
      Download Complete!
    `;
  }
}, 100);
