/**
 * @param {number} n
 * @return {number[]}
 */
function sumZero(n) {
    const result = [];
    if (n === 0) return [];

    let sum = 0;
    for (let i = 0; i < n - 1; i++) {
        result.push(i);
        sum += i;
    }
    result.push(-sum);

    return result;
}
