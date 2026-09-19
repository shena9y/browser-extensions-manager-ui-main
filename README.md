# 🧩 Browser Extensions Manager UI — Frontend Mentor Solution

This is a solution to the **Frontend Mentor** "Browser Extensions Manager UI" challenge. A clean dashboard UI for managing browser extensions, built with HTML, CSS and vanilla JavaScript. Extensions are loaded from a local `data.json` and rendered as cards with filtering (All / Active / Inactive), active-state toggles, remove actions, and a light/dark theme switcher.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Frontend Mentor](https://img.shields.io/badge/Frontend_Mentor-Challenge-3F54A3?style=flat&logo=frontendmentor&logoColor=white)

🔗 **Live Demo:** [https://shena9y.github.io/browser-extensions-manager-ui-main/](https://shena9y.github.io/browser-extensions-manager-ui-main/)

## ✨ Features

- 🗂️ **Extension cards** rendered dynamically from `data.json` (name, logo, description)
- 🔀 **Filtering tabs** — view All, Active, or Inactive extensions
- 🎚️ **Toggle switches** to activate/deactivate each extension
- 🗑️ **Remove button** to delete an extension from the list
- 🌗 **Light / dark theme** switcher with sun/moon icons
- 🎨 Self-hosted **Noto Sans** variable font
- 📱 Responsive grid layout matching the provided desktop & mobile designs

## 🛠️ Tech Stack

- **HTML5**
- **CSS3** — custom properties, responsive grid
- **Vanilla JavaScript** — fetch-based data loading, filtering, toggles, theming (`main.js`)
- **JSON** — local `data.json` as the data source

## 📂 Project Structure

```
browser-extensions-manager-ui-main/
├── index.html          # Dashboard markup
├── style.css           # Styles incl. light/dark themes
├── main.js             # Data loading, filters, toggles
├── data.json           # Extensions data source
├── assets/
│   ├── fonts/          # Noto Sans (variable)
│   └── images/         # Logos & theme icons (SVG)
├── design/             # Challenge design references
└── preview.jpg         # Challenge preview
```

## 🚀 Getting Started

**Try it live:** [https://shena9y.github.io/browser-extensions-manager-ui-main/](https://shena9y.github.io/browser-extensions-manager-ui-main/) — no installation needed!

Because the app fetches `data.json`, serve it over HTTP (opening the file directly will be blocked by CORS):

```bash
git clone https://github.com/shena9y/browser-extensions-manager-ui-main.git
cd browser-extensions-manager-ui-main
npx serve .
```

Then open the printed local URL in your browser.

## 📝 License

This project is licensed under the MIT License.
