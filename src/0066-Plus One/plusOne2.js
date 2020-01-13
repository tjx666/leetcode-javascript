/**
 * @param {number[]} digits
 * @return {number[]}
 */
function plusOne(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        const temp = digits[i] + 1;
        digits[i] = temp % 10;
        if (temp < 10) {
            return digits;
        }
    }

    for (let j = digits.length - 1; j >= 0; j--) {
        digits[j + 1] = digits[j];
    }
    digits[0] = 1;

    return digits;
}

module.exports = plusOne;
