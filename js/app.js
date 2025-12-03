import { renderDrawChangeWheel } from "./ui/drawChangeWheelView.js";

function main() {
  const appRoot = document.getElementById("app");
  if (!appRoot) {
    console.error("App root element not found");
    return;
  }

  renderDrawChangeWheel(appRoot);
}

main();
