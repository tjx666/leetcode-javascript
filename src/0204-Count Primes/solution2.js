/**
 * 题述: 计算 1 ~n 中质数的个数
 * 思路：排除法
 * @param {number} n
 * @return {number}
 */
function countPrimes(n) {
    const array = new Array(n).fill(true);
    // 题述说的是小于 n 的质数，所以这里 小于 Math.sqrt(n) 即可
    // 如果是小于等于 n 的质数，这里应该要改成 小于等于，举个例子就是 ｎ 为 ９ 的情况
    for (let i = 2; i < Math.sqrt(n); i++) {
        if (isPrime(i)) {
            for (let j = 2 * i; j < n; j += i) {
                array[j] = false;
            }
        }
    }

    let count = 0;
    for (let i = 2; i < n; i++) {
        if (array[i]) count++;
    }

    return count;
}

function isPrime(num) {
    if (num === 1) return false;
    if (num === 2) return true;
    /**
     * 为什么只需要判断 2 ~ sqrt（n)
     * 答：因为因子的对称性
     * 例如：12
     * 12 = 2 x 6
     * 12 = 3 x 4
     * 12 = sqrt(12) * sqrt(12)
     * 12 = 4 x 3
     * 12 = 6 x 2
     */
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
