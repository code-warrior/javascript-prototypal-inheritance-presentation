/*jslint es6, single, devel, this */
/*eslint no-console: ["error", { allow: ["log"] }] */

'use strict';


let dog = {
    adoptable: true,
    vaccinated: false
};

console.log(dog.toString()); // [object Object]

// Over-ride the inherited toString method in the prototype
dog.toString = function () {
    let output = `This dog is `;

    output += ((this.adoptable)  ? `adoptable ` : `not adoptable `);
    output += ((this.vaccinated) ? `and vaccinated.` : `and not vaccinated.`);

    return output;
};

// This dog is adoptable and not vaccinated.
console.log(dog.toString());

// true, because toString shadows the inherited prototype method for toString
console.log(dog.hasOwnProperty(`toString`));
