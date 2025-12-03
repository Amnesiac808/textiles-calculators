// js/calculators/drawChangeWheel.js

export function calculateNewChangeWheel(desiredWeight, currentWheel, presentWeight) {
  if (presentWeight <= 0 || currentWheel <= 0 || desiredWeight <= 0) {
    return null;
  }

  const raw = desiredWeight * currentWheel / presentWeight;
  const rounded = Math.round(raw);

  return {
    raw,
    rounded
  };
}
