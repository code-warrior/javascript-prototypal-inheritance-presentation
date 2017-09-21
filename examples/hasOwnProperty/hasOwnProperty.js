/*jslint es6, single, devel */
/*eslint no-console: ["error", { allow: ["log"] }] */

'use strict';

let dog = {
    cute: true
};

console.log(dog.hasOwnProperty(`ugly`));                  // false
console.log(dog.hasOwnProperty(`cute`));                  // true
console.log(dog.hasOwnProperty(`toString`));              // false
console.log(Object.prototype.hasOwnProperty(`toString`)); // true
