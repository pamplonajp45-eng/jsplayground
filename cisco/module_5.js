// function

let sum;
let meanTemp;
function getMeanTemp(temps) {
  sum = 0;
  for (let i = 0; i < temps.length; i++) {
    sum += temps[i];
  }
  return sum / temps.length;
}
const meanTemps = getMeanTemp([22, 24, 19, 21, 23]);
console.log(`Mean temperature: ${meanTemps}`);

// functions are declared before they are called,

let name = "Jordan";
function showName() {
  console.log(name);
}
showName(); // This will work because the function is hoisted

// This is also work the same
let name = "Jordan";
showName();
function showName() {
  console.log(name);
}
