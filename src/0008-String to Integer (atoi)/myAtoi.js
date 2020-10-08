/**
 * 题述：字符串转整数 `number`
 * 思路：其实就是 parseInt，这里用正则来解只是为了熟悉下正则
 * @param {string} str
 * @return {number}
 */
function myAtoi(str) {
    const pattern = /^ *([+-]?\d+)/;
    const matchResult = str.match(pattern);
    const integer = matchResult === null ? 0 : parseInt(matchResult[1], 10);
    const INT_MAX = 2 ** 31 - 1;
    const INT_MIN = -(2 ** 31);
    if (integer >= INT_MAX) {
        return INT_MAX;
    }

    if (integer <= INT_MIN) {
        return INT_MIN;
    }

    return integer;
}

module.exports = myAtoi;
