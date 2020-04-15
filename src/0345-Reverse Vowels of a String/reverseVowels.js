/**
 * 题述：反转元音字母
 * 思路：和 344 题一样，还是用首尾双指针
 * 算法复杂度：n
 * 空间复杂度：1
 *
 * @param {string} s
 * @return {string}
 */
function reverseVowels(s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let head = 0;
    let tail = s.length - 1;
    while (head < tail) {
        const isHeadVowel = vowels.has(s[head]);
        const isTailVowel = vowels.has(s[tail]);

        if (isHeadVowel && isTailVowel) {
            s = swapChar(s, head, tail);
            head++;
            tail--;
            continue;
        }

        if (!isHeadVowel) {
            head++;
        }

        if (!isTailVowel) {
            tail--;
        }
    }

    return s;
}

function swapChar(str, index1, index2) {
    // prettier-ignore
    return `${str.slice(0, index1)}${str[index2]}${str.slice(index1 + 1, index2)}${str[index1]}${str.slice(index2 + 1)}`
}
