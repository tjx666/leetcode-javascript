/**
 * @param {number[]} digits
 * @return {number[]}
 */
function plusOne(digits) {
    return `${BigInt(digits.join('')) + 1n}`.split('');
}

module.exports = plusOne;
