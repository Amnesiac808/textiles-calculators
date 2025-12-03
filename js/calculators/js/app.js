// js/app.js
import { renderDrawChangeWheel } from "./ui/drawChangeWheelView.js";

function main() {
  const appRoot = document.getElementById("app");
  if (!appRoot) {
    console.error("App root element not found");
    return;
  }

  // For now, load the draw frame calculator directly.
  // Later you can add a simple navigation and switch between calculators.
  renderDrawChangeWheel(appRoot);
}

main();
