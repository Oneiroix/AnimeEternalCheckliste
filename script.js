const checkboxes = document.querySelectorAll('.race-checkbox');
const circle = document.getElementById('progress-circle');
const text = document.getElementById('progress-text');

// Beim Laden prüfen, ob Checkboxen im localStorage gespeichert sind
checkboxes.forEach((box) => {
  const saved = localStorage.getItem(box.id);
  if (saved === 'true') {
    box.checked = true;
    box.parentElement.classList.add('checked');
  }
});

// Checkbox-Events überwachen
checkboxes.forEach((box) => {
  box.addEventListener('change', () => {
    localStorage.setItem(box.id, box.checked);
    box.parentElement.classList.toggle('checked', box.checked);
    updateProgress();
  });
});

// Fortschritt berechnen
function updateProgress() {
  const total = checkboxes.length;
  const checked = [...checkboxes].filter(c => c.checked).length;
  const percent = Math.round((checked / total) * 100);
  text.textContent = `${percent}%`;
  circle.style.background = `conic-gradient(#00ff6a ${percent * 3.6}deg, #444 ${percent * 3.6}deg)`;
}

// Initial aufrufen
updateProgress();
