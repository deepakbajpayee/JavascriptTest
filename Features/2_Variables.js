'use strict';

/*
  var does two things poorly:
   1. Doesn't prevent a variable from being redefined in a scope.
   2. Does not have a block scope. Variables defined(with var) within functions have function scope.

   var hoists the variable to the top of the function.
 */

/*
    Let.
    1. Let does not permit a variable in scope to be redefined.
    2. Block scope {..}.
    3. Variables are not hoisted to the top of the function.

    If a function will have access to variables defined outside its immediate scope, 
    it's better to make those variables immutable.

 */

let factor = 2;
let product = function (number){
    return number * factor;
}
factor = 0;
console.log(product(4)); // prints 0. Not captured at the time of definition.

/*
    Const.
    1. Only primitive values, like number, and references to objects are
    protected from change. 
    2. The actual object that the reference refers to does not receive any protection.

 */

const max = 200;
const ok = true;
const nothing = undefined;
const nope = null;
const sam = { first: 'Sam', age: 2 };
//max = 200; //Not allowed
//ok = true; //Not allowed
//nothing = undefined; //Not allowed
//nope = null; //Not allowed
//sam = { first: 'Sam', age: 2 }; //Not allowed
sam.age = 3; //allowed
console.log(sam.age);



/**
  To make a reference immutable, use const. However, to make an object itself immutable.

 Shallow Freeze: 
    1. Object.freeze(): Returns a reference to an object that is immutable. 
    2. Makes only top-level properties read-only.
    3. A code that fails loudly is better than one that misbehaves quietly. (use strict)

*/

const greet = 'dude';
console.log(greet);
//greet[0] = 'r'; // Error: Cannot assign to read only property '0' of string 'dude'


const sam1 = Object.freeze({ first: 'Sam', age: 2 });
//sam1 = {}; //ERROR, the reference sam is immutable
//sam1.age = 3; // Error.
console.log(sam1.age);

/**
 IIFE Design Pattern: to prevent variable hoisting.
 */