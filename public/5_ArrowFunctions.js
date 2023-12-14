/**
 * Javascript has three different ways to define a function.
 */

/*
    1. Named Function.
 */

function sqr(n) {return n*n;}

/*
    2. Anonymous:
       - Doesn't have a name.
       - Can be passed to another function as an argument or stored in a variable.
 */

const square = function (n) {return n*n;};

/*
    3. Arrow Function.
        - parentheses are optional if the function takes only one parameter.
 */
const squareArrow = (n) => n*n;

setTimeout(function() { console.log('greetings'); }, 2000);
setTimeout(() => console.log('greetings'), 2000);

const greet = subject => console.log('Hello ' + subject);
setTimeout(greet.bind(null, 'Earthling'), 2000);

/**
 * Anonymous vs Arrow Function.
 *  1. JS scopes all non-parameter, non-local variables to lexical scope for anonymous function,
 *      except for this and arguments.
 *      - this and arguments: Dynamic scoping.
 *  2. Arrow Functions have consistent lexical scoping for all non-parameter, non-local variables.
 */


// Example of Dynamic Scoping: arguments.
const create = function(message) {
    console.log('First argument for create: ' + arguments[0]); // some value
    console.log('this for create: ' + this);

    return function() {
        console.log('First argument seen by greet: ' + arguments[0]); // hi
        console.log('this for greet: ' + this);
        };
    };

//const greet1 = create('some value');
//greet1('hi');

/*
    Lexical Scoping: Arrow Function.
        - If your function relies on using arguments, then stick with the anonymous function,
        instead of converting it to an arrow function.
        - If you decide to convert to an arrow function, then change arguments to a rest parameter.
 */

const createLex = function(message) {
    console.log('First argument for create: ' + arguments[0]); // some value
    return () => console.log('First argument seen by greet: ' + arguments[0]); // some value
};
const greetLex = createLex('some value');
greetLex('hi');


/**
 * Differences in Bind, Call, Apply.
 *  Bind.
 *      - First argument binds to this. Makes little sense in the context of Arrow function.
 *  Call and Apply.
 *      - Help to pass values for this in addition to parameters.
 *      - Since arrow functions already bind this to their lexical scope, makes little sense to use
 *          call or apply with arrow functions.
 *
 */

const greeting = function(message, name) {
    console.log(message + ' ' + name);
};
const sayHi = greeting.bind(null, 'hi');
sayHi('deepak');


/**
 * Limitations of Arrow Function.
 */
// Only Anonymous: recursive calls.
const repeat = function repeat(count) {
    console.log('called...');
    if(count > 1)
        setTimeout(repeat.bind(null, count - 1), 1000);
};
//setTimeout(repeat.bind(null, 5), 1000);

// Functions may serve as constructor but not Arrow.

const Car = function(year) {
    this.year = year;
}
const car1 = new Car(2018);

// Functions may use 'new.target' to determine if called as a constructor or as a regular function.
// Arrow functions don't have the 'new.target' property.

const f1 = function() {
    if(new.target) {
        console.log('called as a constructor');
    }
    else {
        console.log('called as a function');
    }
};
new f1();
f1();

// Arrow functions don't have prototype property.
const aFunc = function() {};
const anArrow = () => {};
console.log(aFunc.prototype);
console.log(anArrow.prototype);

// Caution returning Object literals. JavaScript notices the body of the arrow function
// starts with { and so decides it’s a compound body instead of a single-line body.
// Once it steps into the body, it notices there’s no return, so it returns undefined.

const createObject = (name) => { firstName: name };
console.log(createObject('George'));

const createObject1 = (name) => ({ firstName: name });
console.log(createObject1('George'));


/**
 * When to use Arrow Functions.
 *  1. Don't use arrow function to define methods of a class, in an object literal, or through Object.prototype.
 *      - this will not refer to the instance on which method is called.
 *  2. Avoid multi-line arrow functions as arguments to functions.
 *  3. When registering even handlers, don't use if this needs dynamic scoping instead of lexical scoping.
 *  4. Use single-line arrow functions as arguments to functions.
 */

/**
 * Arrow Functions and Functional Style.
 */

const pickNamesInUpperCaseOfLength = function(names, length) {
    return names
        .filter((name) => name.length === length)
        .map((name) => name.toUpperCase())
        .join(', ');
};




