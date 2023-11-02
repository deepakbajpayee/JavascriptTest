'use strict';

/*
  var does two things poorly:
   1. Doesn't prevent a variable from being redefined in a scope.
   2. Does not have a block scope.

   Variables defined(with var) within functions have function scope.
 */

/*
    Let.
    1. Let does not permit a variable in scope to be redefined.
    2. Block scope {..}.
    3. Variables are not hoisted to the top of the function.
 */


/**
 * If a function will have access to variables defined outside its immediate
 * scope, it's better to make those variables immutable.
 */

let factor = 2;
let product = function (number){
    return number * factor;
}
factor = 0;
console.log(product(4));

/*
    Const.
    1. Only primitive values, like number, and references to objects are
    protected from change. The actual object that the reference refers to
    does not receive any protection.

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
sam.age = 3;
console.log(sam.age);

/**
 * Shallow Freeze: Makes only top-level properties read-only.
 * A code that fails loudly is better than one that misbehaves quietly.
 */

const sam = Object.freeze({ first: 'Sam', age: 2 });
//sam = {}; //ERROR, the reference sam is immutable
sam.age = 3; // Error.
console.log(sam.age);