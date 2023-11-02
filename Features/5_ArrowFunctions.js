/**
 * Javascript has three different ways to define a function.
 */

// 1. Named Function.
function sqr(n) {return n*n;}

// 2. Anonymous: Doesn't have a name.
    // Can be passed to another function as an argument or stored in a variable.
const square = function (n) {return n*n;};

// 3. Arrow Function.
const squareArrow = (n) => n*n;

setTimeout(function() { console.log('greetings'); }, 2000);
setTimeout(() => console.log('greetings'), 2000);

// parentheses are optional if the function takes only one parameter.

const greet = subject => console.log('Hello ' + subject);
setTimeout(greet.bind(null, 'Earthling'), 2000);