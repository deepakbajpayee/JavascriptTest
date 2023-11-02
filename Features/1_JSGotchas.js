

/**
 * 1. Javascript automatically inserts a ;.
 */


'use strict';
/*
Benefits of "use strict".
    1. Catches silent errors: Assigning values to an undeclared variable.
    2. Forces parameter name uniqueness.
    3. Watches changes to read-only properties, deletion of properties.
    4. Enhances security, etc.

Install and Set EsLint to better watch out for issues.
    1. npm install -g eslint
    2. eslint --init
    3. Run eslint Gotcha.js
 */

const Gotchas1 = function (){
    const a = '1';
    const b = 1;
    const c = '1.0';

    /**
     * The == operator performs type coercion: if things being compared
     * are not of the same type
     */
    console.log(a == b);
    console.log(b == c);
    console.log(a == c);
}


const Gotchas2 = function (){
    //haha = 2; // becomes global.
    let haha = 2;
    console.log(haha);
}

//Gotchas1();
Gotchas2();
//console.log(haha);
