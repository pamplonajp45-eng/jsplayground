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
