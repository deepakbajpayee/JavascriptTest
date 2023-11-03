/**
 * Enhanced For Loop: for..of
 */

const names = ['Sara', 'Jake', 'Pete', 'Mark', 'Jill'];
for(const name of names) {
    console.log(name);
}

for(const entry of names.entries()) {
    console.log(entry);
}

for(const [i, name] of names.entries()) {
    console.log(i + '--' + name);
}

/**
 * Symbol.
 *  1. A new primitive type added.
 *  2. Previously, 5 primitives: number, string, boolean, null, undefined.
 *  3. Not visible during simple iteration.
 */

const age = Symbol('ageValue');
const email = 'emailValue';
const sam = {
    first: 'Sam',
    [email]: 'sam@example.com', // [email] defines a property named emailValue
    [age]: 2
};

console.log('iterating over properties:');
for(const property in sam) {
    console.log(property + ' : ' + sam[property]);
}
//console.log('list of property names:');
//  console.log(Object.getOwnPropertyNames(sam));


//console.log('list of symbol properties');
//console.log(Object.getOwnPropertySymbols(sam));
//console.log('accessing a symbol property:');
//console.log(sam[age]);
//console.log('changing value...');
//sam[age] = 3;
//console.log(sam[age]);


/**
 * Custom Iterators.
 *  1.
 */

class CardDeck {
    constructor() {
        this.suitShapes = ['Clubs', 'Diamonds', 'Hearts', 'Spaces'];
    }

    /* [Symbol.iterator]() {
         let index = -1;
         const self = this;
         return {
             next() {
                 index++;
                 return {
                     done: index >= self.suitShapes.length,
                     value: self.suitShapes[index]
                 };
             }
         };
     }*/

    * suits() {
        for (const color of this.suitShapes) {
            yield color;
        }
    }
}

const deck = new CardDeck();
for(const suit of deck.suits()) {
    console.log(suit);
}

