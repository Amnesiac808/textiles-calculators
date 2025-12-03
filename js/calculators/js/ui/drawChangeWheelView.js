// js/ui/drawChangeWheelView.js
import { calculateNewChangeWheel } from "../calculators/drawChangeWheel.js";

export function renderDrawChangeWheel(root) {
  root.innerHTML = `
    <h1>Draw Frame Draft Change Wheel</h1>
    <p class="lede">
      Find the new draft change wheel when you alter the weight of hank or sliver.
      Use the same units and test length for both present and desired weights.
    </p>

    <section class="panel" aria-label="Draft change wheel calculator">
      <div class="panel-title">Calculator</div>

      <div class="field">
        <label for="desiredWeight">Desired weight</label>
        <input id="desiredWeight" type="number" step="0.01" min="0" inputmode="decimal">
        <span class="hint">For example grams per 6 or 10 yards of sliver.</span>
      </div>

      <div class="field">
        <label for="currentWheel">Change wheel on</label>
        <input id="currentWheel" type="number" step="1" min="1" inputmode="numeric">
        <span class="hint">Teeth on the current draft change wheel.</span>
      </div>

      <div class="field">
        <label for="presentWeight">Present weight of sliver</label>
        <input id="presentWeight" type="number" step="0.01" min="0" inputmode="decimal">
        <span class="hint">Measured weight using the same units and length as above.</span>
      </div>

      <button id="calcButton">Calculate new change wheel</button>

      <div id="error" class="error" aria-live="polite"></div>

      <div id="result" class="result" aria-live="polite"></div>
      <div id="resultSecondary" class="result-secondary" aria-live="polite"></div>

      <div class="formula-block">
        Formula:
        <span class="formula-inline">
          new wheel = desired weight × change wheel on ÷ present weight
        </span>
        <br>
        This assumes all other gearing stays the same and you only alter the draft change wheel.
      </div>
    </section>
  `;

  const desiredWeightInput = root.querySelector("#desiredWeight");
  const currentWheelInput = root.querySelector("#currentWheel");
  const presentWeightInput = root.querySelector("#presentWeight");
  const button = root.querySelector("#calcButton");
  const errorEl = root.querySelector("#error");
  const resultEl = root.querySelector("#result");
  const resultSecondaryEl = root.querySelector("#resultSecondary");

  button.addEventListener("click", () => {
    const desiredWeight = parseFloat(desiredWeightInput.value);
    const currentWheel = parseFloat(currentWheelInput.value);
    const presentWeight = parseFloat(presentWeightInput.value);

    errorEl.textContent = "";
    resultEl.textContent = "";
    resultSecondaryEl.textContent = "";

    if (Number.isNaN(desiredWeight) || Number.isNaN(currentWheel) || Number.isNaN(presentWeight)) {
      errorEl.textContent = "Please enter values for all three fields.";
      return;
    }

    const result = calculateNewChangeWheel(desiredWeight, currentWheel, presentWeight);
    if (!result) {
      errorEl.textContent = "All values must be greater than zero.";
      return;
    }

    resultEl.textContent = `New draft change wheel: ${result.rounded} teeth`;
    resultSecondaryEl.textContent = `(Exact value ${result.raw.toFixed(2)} teeth.)`;
  });
}
