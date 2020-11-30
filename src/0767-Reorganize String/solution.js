/**
 * 题述：重构字符串
 * 思路：
 * 首先要明白，如果要得到一个任何两两相邻坐标元素值不同的字符串，所以字符中最多不能超过 (length + 1) / 2
 * 判断出可以构造出来以后，我们可以使用贪心策略来构造这个字符串，具体来说就是把相同的字符串先全部插偶数坐标，再把所有相同的数插奇数坐标
 * 为什么是先偶数坐标？因为无论字符长度是奇数还是偶数，相同字符最多的那个字符都可以填满偶数坐标
 * 时间复杂度：n，n 为字符串长度
 * 空间复杂度：常数级，因为最多 26 个字符，map 最多保存 26 个 (字符, 数量) 对
 * @param {string} S
 * @return {string}
 */
function reorganizeString(S) {
    const strLen = S.length;
    const counts = new Map();
    let maxCount = -Infinity;
    let maxCountChar = null;
    for (let i = 0; i < strLen; i++) {
        const char = S[i];
        const count = ~~counts.get(char) + 1;
        counts.set(char, count);
        if (count > maxCount) {
            maxCount = count;
            maxCountChar = char;
        }
    }

    const noAns =
        (strLen % 2 === 0 && maxCount > strLen / 2) ||
        (strLen % 2 !== 0 && maxCount > (strLen + 1) / 2);
    if (noAns) {
        return '';
    }

    const ansArray = new Array(strLen);
    let evenIndex = 0;
    let oddIndex = 1;
    for (let i = 0; i < maxCount; i++) {
        ansArray[evenIndex] = maxCountChar;
        evenIndex += 2;
    }
    counts.delete(maxCountChar);
    for (const char of counts.keys()) {
        while (counts.get(char) > 0 && evenIndex <= strLen - 1) {
            ansArray[evenIndex] = char;
            counts.set(char, counts.get(char) - 1);
            evenIndex += 2;
        }

        while (counts.get(char) > 0) {
            ansArray[oddIndex] = char;
            counts.set(char, counts.get(char) - 1);
            oddIndex += 2;
        }
    }
    return ansArray.join('');
}
