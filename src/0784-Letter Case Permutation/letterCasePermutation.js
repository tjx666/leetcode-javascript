/**
 * 题述：给定一个字符串S，通过将字符串S中的每个字母转变大小写，我们可以获得一个新的字符串。返回所有可能得到的字符串集合。
 * 思路：dfs + 回溯
 * 时间复杂度：2的n次方
 * 空间复杂度：n
 * @param {string} S
 * @return {string[]}
 */
function letterCasePermutation(S) {
    const result = [];

    const path = [];
    let strIndex = 0;
    function backTrace() {
        if (strIndex === S.length) {
            result.push(path.join(''));
            return;
        }

        const char = S[strIndex];
        const codePoint = char.codePointAt(0);
        strIndex++;
        path.push(char);
        backTrace();
        strIndex--;
        path.pop();

        if (codePoint >= 65 && char.codePointAt(0) <= 90) {
            // 如果是大写字母
            strIndex++;
            path.push(char.toLowerCase());
            backTrace();
            strIndex--;
            path.pop();
        } else if (codePoint >= 97 && char.codePointAt(0) <= 122) {
            // 如果是小写字母
            strIndex++;
            path.push(char.toLocaleUpperCase());
            backTrace();
            strIndex--;
            path.pop();
        }
    }
    backTrace();

    return result;
}
