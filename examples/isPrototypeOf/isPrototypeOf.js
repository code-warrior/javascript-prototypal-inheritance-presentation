/*jslint es6, single, devel */
/*eslint no-console: ["error", { allow: ["log"] }] */

'use strict';

let dog = {
    adoptable: true,
    vaccinated: false
};

let puppy = Object.create(dog);

// Is Object.prototype a prototype of dog?
console.log(Object.prototype.isPrototypeOf(dog)); // true

// Is dog a prototype of puppy?
console.log(dog.isPrototypeOf(puppy));            // true

// The prototype chain, or prototypal inheritance, looks like…
console.log(`Object.prototype → dog → puppy`);
