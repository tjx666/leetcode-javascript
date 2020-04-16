/**
 * @param {character[]} chars
 * @return {number}
 * @example
 *
 * 输入：['a', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b']。
 *
 * 输出：
 * 返回4，输入数组的前4个字符应该是：['a', 'b', '1', '2']。
 *
 */
function compress(chars) {
    const { length } = chars;
    if (length <= 1) {
        return length;
    }

    let slow = 0;
    let fast = 1;
    while (fast < chars.length) {
        if (chars[fast] !== chars[slow]) {
            const repeatCount = fast - slow;
            const repeatCountStr = String(repeatCount);
            if (repeatCount >= 2) {
                chars.splice(slow + 1, repeatCount - 1, ...repeatCountStr.split(''));
                slow += repeatCountStr.length + 1;
                fast = slow + 1;
            } else {
                slow++;
                fast++;
            }
        } else {
            fast++;
        }
    }

    const repeatCount = chars.length - slow;
    const repeatCountStr = String(repeatCount);
    if (repeatCount >= 2) {
        chars.splice(slow + 1, repeatCount - 1, ...repeatCountStr.split(''));
    }

    return chars.length;
}
