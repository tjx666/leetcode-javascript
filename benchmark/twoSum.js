const { Suite } = require('benchmark');
const { shuffle, range } = require('lodash');

const twoSome1 = require('../src/0001-Two Sum/twoSum1');
const twoSome2 = require('../src/0001-Two Sum/twoSum2');

const testArr = shuffle(range(1, 10001));
new Suite()
    .add('twoSome1', function() {
        twoSome1(testArr, 3);
    })
    .add('twoSome2', function() {
        twoSome2(testArr, 3);
    })
    .on('cycle', function(event) {
        console.log(String(event.target));
    })
    .on('complete', function() {
        console.log(`Fastest is ${this.filter('fastest').map('name')}`);
    })
    .run({ async: true });

/* =>
twoSome1 x 18.32 ops/sec ±2.05% (41 runs sampled)
twoSome2 x 370 ops/sec ±0.80% (87 runs sampled)
Fastest is twoSome2
 */
