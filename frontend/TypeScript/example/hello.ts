const data = [];
let curValue = 0;

function addRandomValue() {
  const delta = Math.random() > 0.5 ? 1 : -1;
  data.push(curValue);
  curValue += delta;
}

function addManyRandomValues() {
  for (let i = 0; i < 100; i++) {
    addRandomValue();
  }
}

for (let j = 0; j < 100; j++) addManyRandomValues();
