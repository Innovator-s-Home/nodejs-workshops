import * as app from './app.js';

let arr = [4, 1, 6, 3, 4, 89, 0];

console.log(app.xyz());

const result = arr.filter((item) => {
  return item >= 4;
});

console.warn(result);
