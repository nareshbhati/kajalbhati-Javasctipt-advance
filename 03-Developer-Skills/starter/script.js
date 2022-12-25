// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const num = 56;
console.log(num);

console.log("hiee!");

// const temp = [3, 2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const tempOne = [3, 2, -6, -1, "error"];
const tempTwo = [9, 13, 17, 15, 14, 9, 5];
const temp = tempOne.concat(tempTwo);
console.log(temp);
const calcTemp = function (temp) {
  let max = temp[0];
  let min = temp[0];
  for (let i = 1; i < temp.length; i++) {
    if (typeof temp[i] !== "number") continue;
    if (max < temp[i]) max = temp[i];
    if (min > temp[i]) min = temp[i];
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcTemp(temp);
console.log(amplitude);
