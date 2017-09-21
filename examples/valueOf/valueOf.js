/*jslint es6, single, devel, this */
/*eslint no-console: ["error", { allow: ["log"] }] */

'use strict';

// Construct the Dog object
function Dog(name, breed) {
    this.name = name;
    this.breed = breed;
}

// Create a new Dog instance named dog
let dog = new Dog(`Spot`, `mutt`);

// Retrieve the object itself
console.log(dog.valueOf()); // Dog {name: "Spot", breed: "mutt"}

// Using prototypal inheritance, over-ride how valueOf behaves, returning the name
// of the dog
Dog.prototype.valueOf = function () {
    return this.name;
};

console.log(dog.valueOf()); // Spot
