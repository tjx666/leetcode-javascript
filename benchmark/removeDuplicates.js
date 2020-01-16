const { Suite } = require('benchmark');

const removeDuplicates1 = require('../src/0026-Remove Duplicates from Sorted Array/removeDuplicates1');
const removeDuplicates2 = require('../src/0026-Remove Duplicates from Sorted Array/removeDuplicates2');

const testArr = [...Array(1e5)].map(() => 6);

new Suite()
    .add('removeDuplicates1', function() {
        removeDuplicates1(testArr);
    })
    .add('removeDuplicates2', function() {
        removeDuplicates2(testArr);
    })
    .on('cycle', function(event) {
        console.log(String(event.target));
    })
    .on('complete', function() {
        console.log(`Fastest is ${this.filter('fastest').map('name')}`);
    })
    .run({ async: true });

/* =>
removeDuplicates1 x 94,495,506 ops/sec ±1.94% (83 runs sampled)
removeDuplicates2 x 11,855,308 ops/sec ±3.34% (84 runs sampled)
Fastest is removeDuplicates1
 */
