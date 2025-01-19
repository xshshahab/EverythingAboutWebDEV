// Hacking messages
const messages = [
  "Initializing Hacking...",
  "Reading Your files...",
  "Password files detected...",
  "Cracking password...",
  "Sending all passwords and personal files to server...",
  "Hacking Your System...",
  "Your System is being Hacked...",
  "Hacking Complete...",
  "Your System is now under our control...",
  "Your System is now being monitored...",
  "Your System is now being controlled...",
  "Your System is now being used for illegal activities...",
  "Your System is now being used for malicious purposes...",
  "Cleaning up...",
  "Removing all evidence...",
];

// Delay time between messages
const minDelay = 1000; // 1 second
const maxDelay = 7000; // 7 seconds

// Function to start the hacking simulation
function startHacking() {
  const terminalText = document.getElementById("terminal-text");
  let index = 0;

  function showMessage() {
    if (index < messages.length) {
      terminalText.innerHTML += messages[index] + "...\n";
      terminalText.scrollTop = terminalText.scrollHeight; // Auto-scroll terminal
      index++;
      setTimeout(showMessage, Math.random() * (maxDelay - minDelay) + minDelay);
    }
  }

  showMessage();
}

// Show terminal after 5 seconds
setTimeout(() => {
  document.getElementById("terminal-container").classList.remove("hidden");
  startHacking();
}, 5000);
