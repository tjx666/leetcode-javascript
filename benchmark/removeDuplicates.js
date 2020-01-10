const { Suite } = require('benchmark');

const removeDuplicates1 = require('../src/0026-Remove Duplicates from Sorted Array/removeDuplicates1');
const removeDuplicates2 = require('../src/0026-Remove Duplicates from Sorted Array/removeDuplicates2');

const testArr = Array.from({ length: 30 * 10000 }).map(() => 1);

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
removeDuplicates1 x 107,409,421 ops/sec ±0.69% (93 runs sampled)
removeDuplicates2 x 11,718,588 ops/sec ±0.60% (91 runs sampled)
Fastest is removeDuplicates1

结果很出人意料，暂且认为是因为我写的那个双指针最后修改 length 时，清空数组元素比较耗时，因为删掉那几句代码后结果就反过来了
 */
