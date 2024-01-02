/**
 * 1. Javascript automatically inserts a ';'
 */


'use strict';
/*
"use strict".
    1. Catches silent errors: Assigning values to an undeclared variable.
    2. Forces parameter name uniqueness.
    3. Assigning a value to a read-only property, like undefined or NaN, will throw an error.
    4. Enhances security, etc..
*/


/*
Install and Set EsLint to better watch out for issues.
    1. npm install -g eslint
    2. eslint --init
    3. eslint Gotcha.js
 */

const Gotchas1 = function () {
    const a = '1';
    const b = 1;
    const c = '1.0';

    /**
     * The == operator performs type coercion: 
     * if things being compared are not of the same type.
     * 
     * === : strict equality.
     */
    console.log(a === b);
    console.log(b === c);
    console.log(a === c); // lexical comparison.
}


const Gotchas2 = function (){
    haha = 2; // becomes global. Declare variable before use.
    //let haha = 2;
    console.log(haha);
}

Gotchas1();
Gotchas2();
//console.log(haha);
