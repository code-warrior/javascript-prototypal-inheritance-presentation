/*jslint es6, single, devel, for */
/*eslint no-console: ["error", { allow: ["log"] }] */

'use strict';

let dog = {
    adoptable: true,
    vaccinated: true
};

Object.defineProperty(dog, `name`, {
    value: `Spot`,
    enumerable: false
});

console.log(dog.propertyIsEnumerable(`adoptable`));  // true
console.log(dog.propertyIsEnumerable(`vaccinated`)); // true
console.log(dog.propertyIsEnumerable(`name`));       // false
console.log(`Please adopt ${dog.name}. He’s…`);

for (let property in dog) {
    console.log(`— ${property}`);
}
