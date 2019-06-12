/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding - In the global execution context (outside of any function), 'this' refers to the global object ('Window' for a browser).
* 
* 2. Implicit Binding - Occurs when dot notation is used to invoke a function, whatever is to the left of the dot becomes the context for 'this' in the function. 
*
* 3. New Binding - Occurs when using the 'new' keyword to create an object. 'This' references the newly created object.
*
* 4. Explicit Binding - Occurs when .call(), .apply(), or .bind() are used on a function. Explicitly specify to a function what object 'this' refers to. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
this.name = "My Window";
console.log(this.name);

// Principle 2

// code example for Implicit Binding
function sayHello() {
    return `${this.greeting}!`;
}

const salutations = {
    greeting: 'Wilkommen',
    sayHello: sayHello
}

console.log(salutations.sayHello()); // <--- Implicit Binding, 'this' bound to the 'salutations' object

// Principle 3

// code example for New Binding
function Dog(breed, coat, loudBark) {
    this.breed = breed;
    this.coat = coat;
    this.loudBark = 'loudBark';
    this.bark = () => {
            loudBark ? console.log('WOOF!') : console.log('yip.');
        }
}

const Kona = new Dog('Anatolian Shepherd', 'Thick, Sheds', true); // <--- New Binding, 'this' refers to the const 'Kona'


// Principle 4

// code example for Explicit Binding
function toDo(...things) {
    return `*** Things To Do Today *** \n 1. ${this.firstThing} \n 2. ${this.secondThing} \n 3. ${this.thirdThing}`
}

const thingsToDo = {
    firstThing: 'make coffee',
    secondThing: 'review assignments',
    thirdThing: 'sleep'
}

console.log(toDo.call(thingsToDo)); // <--- Explicit Binding, 'this' refers to the 'thingsToDo' object