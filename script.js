// Checkbox-Status im Browser speichern
const saiyanCheckbox = document.getElementById('saiyan');

if (localStorage.getItem('saiyanChecked') === 'true') {
  saiyanCheckbox.checked = true;
}

saiyanCheckbox.addEventListener('change', () => {
  localStorage.setItem('saiyanChecked', saiyanCheckbox.checked);
});
