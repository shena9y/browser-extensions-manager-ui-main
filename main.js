// ---------------------------------------------
// GLOBAL STATE
// ---------------------------------------------
let extensionsData = []; // full list of extensions, loaded from data.json
let currentFilter = "all"; // tracks which filter tab is currently selected

// ---------------------------------------------
// LOAD DATA FROM data.json
// ---------------------------------------------
async function loadExtensions() {
  const response = await fetch("./data.json");
  extensionsData = await response.json();
  renderExtensions(extensionsData);
}

// ---------------------------------------------
// BUILD HTML FOR ONE CARD
// ---------------------------------------------
function createExtensionCard(extension) {
  return `
    <div class="card" data-active="${extension.isActive}">
      <div class="card-top">
        <img src="${extension.logo}" alt="${extension.name} logo" />
        <div>
          <h3>${extension.name}</h3>
          <p>${extension.description}</p>
        </div>
      </div>
      <div class="card-actions">
        <button class="remove-btn" data-name="${extension.name}">Remove</button>
        <button class="toggle-btn ${extension.isActive ? "active" : ""}" data-name="${extension.name}"></button>
      </div>
    </div>
  `;
}

// ---------------------------------------------
// RENDER A LIST OF EXTENSIONS INTO THE GRID
// ---------------------------------------------
function renderExtensions(extensions) {
  const container = document.getElementById("extensions-list");
  container.innerHTML = extensions.map(createExtensionCard).join("");
}

// ---------------------------------------------
// FILTERING HELPER
// ---------------------------------------------
function getCurrentFilteredData() {
  if (currentFilter === "active") {
    return extensionsData.filter((extension) => extension.isActive === true);
  } else if (currentFilter === "inactive") {
    return extensionsData.filter((extension) => extension.isActive === false);
  } else {
    return extensionsData; // 'all'
  }
}

// ---------------------------------------------
// REMOVE / TOGGLE LOGIC
// ---------------------------------------------
function removeExtension(name) {
  extensionsData = extensionsData.filter(
    (extension) => extension.name !== name,
  );
  renderExtensions(getCurrentFilteredData());
}

function toggleExtension(name) {
  const extension = extensionsData.find((ext) => ext.name === name);
  extension.isActive = !extension.isActive;
  renderExtensions(getCurrentFilteredData());
}

// ---------------------------------------------
// EVENT DELEGATION: Remove + Toggle button clicks
// ---------------------------------------------
const container = document.getElementById("extensions-list");

container.addEventListener("click", (event) => {
  if (event.target.classList.contains("remove-btn")) {
    const name = event.target.dataset.name;
    removeExtension(name);
  }

  if (event.target.classList.contains("toggle-btn")) {
    const name = event.target.dataset.name;
    toggleExtension(name);
  }
});

// ---------------------------------------------
// FILTER BUTTONS (All / Active / Inactive)
// ---------------------------------------------
const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    currentFilter = button.dataset.filter;
    renderExtensions(getCurrentFilteredData());
  });
});

// ---------------------------------------------
// INITIAL LOAD
// ---------------------------------------------
loadExtensions();

// ---------------------------------------------
// THEME SWITCHER
// ---------------------------------------------
const themeToggleBtn = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const brandLogo = document.getElementById("brand-logo");
function applySavedTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    document.body.classList.add("light-theme");
    themeIcon.src = "./assets/images/icon-moon.svg";
    brandLogo.src = "./assets/images/logo-light.svg";
  }
}

themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");

  const isLight = document.body.classList.contains("light-theme");
  themeIcon.src = isLight
    ? "./assets/images/icon-moon.svg"
    : "./assets/images/icon-sun.svg";

  brandLogo.src = isLight
    ? "./assets/images/logo-light.svg"
    : "./assets/images/logo-dark.svg";

  localStorage.setItem("theme", isLight ? "light" : "dark");
});

applySavedTheme();
