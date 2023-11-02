


/*
    arguments: wannabe array.
 */
const max = function() {

    console.log(arguments instanceof Array);
    console.log(typeof(arguments));

    let large = arguments[0];
    for(let i = 0; i < arguments.length; i++) {
        if(arguments[i] > large) {
            large = arguments[i];
        }
    }
    return large;
};
//console.log(max(2, 1, 7, 4));

/**
 * rest: (...)
 * 1. Parameter is a placeholder for any number of arguments.
 * 2. Rest parameters is of array type.
 * 3. Rest parameter has to be last formal parameter.
 */

const maxRest = function(...values) {
    console.log(values instanceof Array);
    let large = values[0];
    for(let i = 0; i < values.length; i++) {
        if(values[i] > large) {
            large = values[i];
        }
    }
    return large;
};
//console.log(maxRest(2, 1, 7, 4));


/*
    Since Rest parameter is of Array type, functional programming can be used.
    We can't call methods like reduce on arguments.
 */
const maxFunctional = function(...values) {
    return values.reduce((large, e) => large > e ? large : e, values[0]);
};

//console.log(maxFunctional(2, 1, 7, 4));



/**
 * Spread Operator.
 *  1. Appears on calling side.
 *  2. Opposite of Rest: breaks a collection into discrete values,
 *      while rest gathers into an array.
 */

const mixed = function(name1, name2, ...names) {
    console.log('name1: ' + name1);
    console.log('name2: ' + name2);
    console.log('names: ' + names);
};
mixed('Tom', ...['Jerry', 'Tyke', 'Spike']);


/*
    Used to copy contents of an object while optionally providing
    new values for some field. Used to make copies of immutable state.
*/

const sam = { name: 'Sam', age: 2 };
//console.log(sam);
//console.log({...sam, age: 3});
//console.log({...sam, age: 4, height: 100 });
//console.log(sam);


/**
 * Default
 *  1. If undefined is passed, however, then the default value is given to the
 *      parameter in place of undefined.
 */

const sortByTitle = function(books, ascending = true) {
    const multiplier = ascending ? 1 : -1;
    const byTitle = function(book1, book2) {
        return book1.title.localeCompare(book2.title) * multiplier;
    };
    // Reason for not calling sort directly on array is because it will
    // modify the array on which it is called.
    // slice() function makes a copy of the given array.
    return books.slice().sort(byTitle);
};
const books = [
    { title: 'Who Moved My Cheese' },
    { title: 'Great Expectations' },
    { title: 'The Power of Positive Thinking' }
];
console.log(sortByTitle(books));
console.log(sortByTitle(books, false));