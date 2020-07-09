/**
 * 题述：
 * 假设你是一位很棒的家长，想要给你的孩子们一些小饼干。但是，每个孩子最多只能给一块饼干。
 * 对每个孩子 i ，都有一个胃口值 gi ，这是能让孩子们满足胃口的饼干的最小尺寸；
 * 并且每块饼干 j ，都有一个尺寸 sj 。如果 sj >= gi ，我们可以将这个饼干 j 分配给孩子 i ，这个孩子会得到满足。
 * 你的目标是尽可能满足越多数量的孩子，并输出这个最大数值。
 * 思路：先排序，再从大的饼干开始发，尽量将饼干发出去，本质还是贪心
 * 时间复杂度：max(mlgm, nlgn) m 和 n 分别是 g 和 s 的长度，取决于排序的时间复杂度
 * 空间复杂度：取决于排序的空间复杂度，采用不使用额外空间的排序算法就是 1
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
function findContentChildren(g, s) {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);

    let i = g.length - 1;
    let j = s.length - 1;
    let count = 0;
    while (i >= 0 && j >= 0) {
        if (g[i] <= s[j]) {
            i--;
            j--;
            count++;
        }
        i--;
    }
    return count;
}
