/**
 * 题述：判断 ransomNote 中的字符能否由 magazine 中的字符组成，magazine 中的字符每个只能用一次
 * 思路：将 magazine 中的字符存到 hash 表里，key 为字符，value 为出现的次数
 * 时间复杂度： 假设 ransomNote 长度为 n，magazine 长度为 m，那么总的遍历次数为 m + n
 * 空间复杂度：为 hash 表长度也就是 m
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
function canConstruct(ransomNote, magazine) {
    const map = new Map();
    for (let i = 0; i < magazine.length; i++) {
        const char = magazine[i];
        if (map.has(char)) {
            map.set(char, map.get(char) + 1);
        } else {
            map.set(char, 1);
        }
    }

    for (let j = 0; j < ransomNote.length; j++) {
        const char = ransomNote[j];
        if (!map.has(char)) {
            return false;
        }

        if (map.get(char) === 1) {
            map.delete(char);
        } else {
            map.set(char, map.get(char) - 1);
        }
    }

    return true;
}

console.log(canConstruct('aa', 'aab'));
