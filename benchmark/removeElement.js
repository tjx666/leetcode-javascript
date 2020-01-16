const { Suite } = require('benchmark');

const removeElement1 = require('../src/0027-Remove Element/removeElement1');
const removeElement2 = require('../src/0027-Remove Element/removeElement2');

const testArr = [...Array(1e8)].map(() => 6);

new Suite()
    .add('removeDuplicates1', function() {
        removeElement1(testArr, 6);
    })
    .add('removeDuplicates2', function() {
        removeElement2(testArr, 6);
    })
    .on('cycle', function(event) {
        console.log(String(event.target));
    })
    .on('complete', function() {
        console.log(`Fastest is ${this.filter('fastest').map('name')}`);
    })
    .run({ async: true });

/* =>
removeDuplicates1 x 13,222,545 ops/sec ±0.55% (87 runs sampled)
removeDuplicates2 x 12,658,451 ops/sec ±1.33% (89 runs sampled)
Fastest is removeDuplicates1 ops/sec ±2.42% (84 runs sampled)
Fastest is removeDuplicates2
 */
