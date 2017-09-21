slidenumbers: true
autoscale: true
build-lists: true
theme: titillium, 1

[.hide-footer]

# JavaScript Prototypal Inheritance — a Brief Intro

Roy Vanegas

#### GothamSass
#### New York, NY
#### 21 September 2017

^
* Logitech Spotlight
* Projector resolution
* 16:9 (78%, or 1.7 repeating) 1080p/i; 720p/i
* 4:3 (33%, or 1.3 repeating)
* Set aspect ratio under the Presentation menu.

---

## Objectives

We’ll learn

* how to create objects that inherit from other objects;
* about the base prototype and how other objects inherit from it;
* and, how and when to use inheritance.

---

## Agenda

We’ll see

* examples of the five `Object.prototype` methods that all objects inherit from,
* an example of prototypal inheritance in the real world.

---

## Definitions

* **Object**: a composite of data types, including other objects.
* **Method**: a function bound to an object.
* **Prototype**: a template, or model, consisting of methods used by other objects.
* **Inheritance**: properties inherited by a “child” instance of another object.

^
Use markers

---

## Prototypal Inheritance

* Also known as prototype chaining.
* `Object.prototype` is the first in the prototype chain.
* `Object.prototype` is the base prototype from which all objects inherit.
* `Object.prototype` provides **five** methods to all descendants:

^
Make an analogy with human lineage.

---

## Prototypal Inheritance
### `hasOwnProperty`

`hasOwnProperty()` returns `true` on non-inherited properties it owns, or `false` for inherited properties.

---

## Prototypal Inheritance
### `hasOwnProperty`

````javascript
let dog = {
   cute: true
};

dog.hasOwnProperty('ugly');                  // false
dog.hasOwnProperty('cute');                  // true
dog.hasOwnProperty('toString');              // false
Object.prototype.hasOwnProperty('toString'); // true
````

^ toString is another of the five base methods.

---

## Prototypal Inheritance
### `propertyIsEnumerable`

`propertyIsEnumerable()` returns `true` on non-inherited properties defined as `enumerable` (the default), which means it will appear in a `for...in` loop. It returns `false` otherwise.

---

## Prototypal Inheritance
### `propertyIsEnumerable`

````javascript
let dog = {
   adoptable: true,
   vaccinated: true
};

Object.defineProperty(dog, 'name', {
   value: 'Spot',
   enumerable: false
});

dog.propertyIsEnumerable('adoptable');  // true
dog.propertyIsEnumerable('vaccinated'); // true
dog.propertyIsEnumerable('name');       // false

console.log('Please adopt ' + dog.name + '. He’s…');

for (let property in dog) {
   console.log('— ' + property);
}
````

^
* enumerable is true by default, thus the need to use defineProperty
* Questions?
* Why do you think enumerable is true by default?

---

## Prototypal Inheritance
### `valueOf`

`valueOf()` returns the primitive value associated with an object, or the object itself. Only in the most unique and isolated situations would you modify this method.

---

## Prototypal Inheritance
### `valueOf`

````javascript
// Construct the Dog object
function Dog(name, breed) {
   this.name = name;
   this.breed = breed;
}

// Create a new Dog instance named dog
let dog = new Dog('Spot', 'mutt');

// Retrieve the object itself
dog.valueOf(); // Dog {name: "Spot", breed: "mutt"}

// Using prototypal inheritance, over-ride how valueOf behaves, returning the name of the dog
Dog.prototype.valueOf = function () {
   return this.name;
}

dog.valueOf(); // Spot
````

---

## Prototypal Inheritance
### `toString`

`toString()` converts an object to a string whenever the object is used in a string context. The result, however, many not be useful, so over-riding it using prototypal inheritance can be advantageous.

---

## Prototypal Inheritance
### `toString`

````javascript
let dog = {
   adoptable: true,
   vaccinated: false
};

dog.toString(); // [object Object]

// Over-ride the inherited toString method in the prototype
dog.toString = function () {
   let output = 'This dog is ';

   output += ((this.adoptable) ? 'adoptable ' : 'not adoptable ');
   output += ((this.vaccinated)? 'and vaccinated.' : 'and not vaccinated.');

   return output;
}

dog.toString();                 // This dog is adoptable and not vaccinated.
dog.hasOwnProperty('toString'); // true, because toString shadows the inherited prototype method for toString
````

---

## Prototypal Inheritance
### `isPrototypeOf`
`isPrototypeOf()` returns `true` if one object is the prototype of another, or  `false` if otherwise. (`isPrototypeFor` is a more appropriate name. You’ll see why in a moment.)

---

## Prototypal Inheritance
### `isPrototypeOf`

````javascript
let dog = {
   adoptable: true,
   vaccinated: false
};

let puppy = Object.create(dog);

// Is Object.prototype a prototype of dog?
Object.prototype.isPrototypeOf(dog); // true

// Is dog a prototype of puppy?
dog.isPrototypeOf(puppy);            // true

// The prototype chain, or prototypal inheritance, looks like…
'Object.prototype → dog → puppy'
````

---

## Inheritance in the Real World

---

![fit](images/honda-accord-models.png)

---

![fit](images/honda-accord-models--lx.png)

---

![fit](images/honda-accord-models--sport.png)

---

![fit](images/honda-accord-models--sport-special-edition.png)

---

## [fit] Demo Time

![fit](images/honda-accord-models.png)

---

## [fit] Thanks
