/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs) {
    const aCodePoint = 'a'.codePointAt(0);
    const map = new Map();
    for (const str of strs) {
        const count = new Array(26).fill(0);
        for (const char of str) {
            count[char.codePointAt(0) - aCodePoint]++;
        }
        const key = count.toString();
        if (map.get(key)) {
            map.get(key).push(str);
        } else {
            map.set(key, [str]);
        }
    }
    return [...map.values()];
}
