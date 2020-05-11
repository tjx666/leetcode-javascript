/**
 * 题述：爬楼梯，每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 * 思路：从 n 层爬到顶部的种类等于从 n+1 层爬到顶部的种类 +  从 n + 2 层爬到顶部的种类
 * 时间复杂度：通过备忘录来优化，时间复杂度从 2 的 n 次方降到 n
 * 空间复杂度：n
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
    const notes = new Array(n);
    notes[n - 1] = 1;
    notes[n - 2] = 2;
    function recursive(start) {
        if (notes[start] !== undefined) return notes[start];
        const result = recursive(start + 1) + recursive(start + 2);
        notes[start] = result;
        return result;
    }
    return recursive(0);
}
