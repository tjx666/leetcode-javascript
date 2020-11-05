/**
 * 题述: 计算 1 ~n 中素数的个数
 * @param {number} n
 * @return {number}
 */
function countPrimes(n) {
    let count = 0;
    for (let i = 2; i < n; i++) {
        if (isPrime(i)) count++;
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
