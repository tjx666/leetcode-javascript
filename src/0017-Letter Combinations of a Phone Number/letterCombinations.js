/**
 * @param {string} digits
 * @return {string[]}
 */
function letterCombinations(digits) {
    const { length } = digits;
    if (length === 0) return [];

    const digitLetterMapper = new Map([
        ['2', ['a', 'b', 'c']],
        ['3', ['d', 'e', 'f']],
        ['4', ['g', 'h', 'i']],
        ['5', ['j', 'k', 'l']],
        ['6', ['m', 'n', 'o']],
        ['7', ['p', 'q', 'r', 's']],
        ['8', ['t', 'u', 'v']],
        ['9', ['w', 'x', 'y', 'z']],
    ]);
    const result = [];
    const path = [];
    function backTrace(index) {
        if (index === length) {
            result.push(path.join(''));
            return;
        }

        const digit = digits[index];
        const mappedLetters = digitLetterMapper.get(digit);
        for (let i = 0; i < mappedLetters.length; i++) {
            path.push(mappedLetters[i]);
            backTrace(index + 1);
            path.pop();
        }
    }
    backTrace(0);
    return result;
}
