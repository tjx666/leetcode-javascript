/**
 * 这道题就是前端面试中常考的大数相加，还有更简单的考法是数字字符串是逆序的
 *
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
function addStrings(num1, num2) {
    const numArray1 = num1.split('').map((char) => Number(char));
    const numArray2 = num2.split('').map((char) => Number(char));

    let i = num1.length - 1;
    let j = num2.length - 1;

    let result = '';
    let carry = 0;
    while (i >= 0 && j >= 0) {
        const temp = numArray1[i] + numArray2[j] + carry;
        result = `${temp % 10}${result}`;
        carry = temp >= 10 ? 1 : 0;
        i--;
        j--;
    }

    let rest;
    let k;
    if (i === -1) {
        rest = numArray2;
        k = j;
    } else {
        rest = numArray1;
        k = i;
    }

    for (; k >= 0; k--) {
        const temp = rest[k] + carry;
        carry = temp >= 10 ? 1 : 0;
        result = `${temp % 10}${result}`;
    }

    if (carry === 1) {
        result = `1${result}`;
    }

    return result;
}
