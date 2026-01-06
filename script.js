// ===============================
// LIVE CLOCK + DATE (SECURECLOCK)
// ===============================

function updateClock() {
  const now = new Date();

  // Get time values
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Format time (00)
  hours = hours.toString().padStart(2, "0");
  minutes = minutes.toString().padStart(2, "0");
  seconds = seconds.toString().padStart(2, "0");

  // Update time in DOM
  const hrsEl = document.getElementById("hrs");
  const minEl = document.getElementById("min");
  const secEl = document.getElementById("sec");
  const dateEl = document.getElementById("date");

  if (hrsEl && minEl && secEl) {
    hrsEl.textContent = hours;
    minEl.textContent = minutes;
    secEl.textContent = seconds;
  }

  // Format date
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  if (dateEl) {
    dateEl.textContent = now.toLocaleDateString(undefined, options);
  }
}

// Initial run
updateClock();

// Update every second
setInterval(updateClock, 1000);
