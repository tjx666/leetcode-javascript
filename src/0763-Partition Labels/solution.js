/**
 * 题述：字符串 S 由小写字母组成。我们要把这个字符串划分为尽可能多的片段，同一个字母只会出现在其中的一个片段。返回一个表示每个字符串片段的长度的列表。
 * 思路：
 * 为了后序更快的获取一个字符的最后索引，先遍历一遍用 hash map 保存每个字符的最后索引
 * 因为要获得长度，可以用慢指针保存起始点
 * 时间复杂度：n
 * 空间复杂度：常数级，小写字母最多 26 个
 * @param {string} S
 * @return {number[]}
 */
function partitionLabels(S) {
    const map = new Map();

    for (let i = 0; i < S.length; i++) {
        map.set(S[i], i);
    }

    const ans = [];
    for (let i = 0, j = 0, end = map.get(S[0]); j < S.length; j++) {
        if (j === end) {
            ans.push(j - i + 1);
            i = j + 1;
            end = map.get(S[i]);
        } else {
            const charEnd = map.get(S[j]);
            if (charEnd > end) {
                end = charEnd;
            }
        }
    }

    return ans;
}
