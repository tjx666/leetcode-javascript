const { Suite } = require('benchmark');

const removeElement1 = require('../src/0027-Remove Element/removeElement1');
const removeElement2 = require('../src/0027-Remove Element/removeElement2');

const testArr = [1, 2, ...Array.from({ length: 100 * 10000 }).map(() => 6), 1, 4, 7, 10, 1];

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
js 测试算法效率真的很扯淡

当被删除的元素是 6 时
removeDuplicates1 x 9,380,990 ops/sec ±2.30% (81 runs sampled)
removeDuplicates2 x 10,155,150 ops/sec ±2.42% (84 runs sampled)
Fastest is removeDuplicates2
 */
