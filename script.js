// Deine gesamte Checklisten-Struktur hier definieren:
const data = [
  {
    city: "Earth City",
    races: [
      {
        name: "Dragon Race",
        members: ["Saiyan", "Namekian", "Human"]
      },
      {
        name: "Beast Race",
        members: ["Wolf", "Tiger", "Bear"]
      }
    ]
  },
  {
    city: "Mars City",
    races: [
      {
        name: "Demon Race",
        members: ["Ifrit", "Succubus", "Shadow Fiend"]
      },
      {
        name: "Spirit Race",
        members: ["Fire Spirit", "Water Spirit", "Wind Spirit"]
      }
    ]
  }
];

// Container-Element holen
const container = document.getElementById("main-container");

// HTML generieren
data.forEach((cityObj, index) => {
  const cityEl = document.createElement("div");
  cityEl.innerHTML = `<h1>${index + 1}. ${cityObj.city}</h1>`;

  cityObj.races.forEach((race) => {
    const cat = document.createElement("div");
    cat.classList.add("category");

    cat.innerHTML = `<h2>${race.name}</h2>`;

    race.members.forEach((member) => {
      const safeId = member.toLowerCase().replace(/\s+/g, "_");
      const div = document.createElement("div");
      div.classList.add("item");
      div.innerHTML = `
        <label class="checkbox-label">
          <input type="checkbox" class="race-checkbox" id="${safeId}" />
          ${member}
        </label>
      `;
      cat.appendChild(div);
    });

    cityEl.appendChild(cat);
  });

  container.appendChild(cityEl);
});

// Fortschritt + Farben + Speicherung wie bisher
const checkboxes = document.querySelectorAll('.race-checkbox');
const circle = document.getElementById('progress-circle');
const text = document.getElementById('progress-text');

// Beim Laden gespeicherte Werte wiederherstellen
checkboxes.forEach((box) => {
  const saved = localStorage.getItem(box.id);
  if (saved === 'true') {
    box.checked = true;
    box.parentElement.classList.add('checked');
  }
});

// Checkbox-Event
checkboxes.forEach((box) => {
  box.addEventListener('change', () => {
    localStorage.setItem(box.id, box.checked);
    box.parentElement.classList.toggle('checked', box.checked);
    updateProgress();
  });
});

function updateProgress() {
  const total = checkboxes.length;
  const checked = [...checkboxes].filter(c => c.checked).length;
  const percent = Math.round((checked / total) * 100);
  text.textContent = `${percent}%`;
  circle.style.background = `conic-gradient(#00ff6a ${percent * 3.6}deg, #444 ${percent * 3.6}deg)`;
}

updateProgress();
