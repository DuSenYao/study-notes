const data: number[] = [];
let curValue = 0;

function addRandomValue(): void {
  const delta = Math.random() > 0.5 ? 1 : -1;
  data.push(curValue);
  curValue += delta;
}

function addManyRandomValues(): void {
  for (let i = 0; i < 100; i++) {
    addRandomValue();
  }
}

for (let j = 0; j < 100; j++) addManyRandomValues();
