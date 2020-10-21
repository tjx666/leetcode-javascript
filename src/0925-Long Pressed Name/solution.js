/**
 * 题述：
 * 你的朋友正在使用键盘输入他的名字 name。偶尔，在键入字符 c 时，按键可能会被长按，而字符可能被输入 1 次或多次。
 * 你将会检查键盘输入的字符 typed。如果它对应的可能是你的朋友的名字（其中一些字符可能被长按），那么就返回 True。
 * 思路：直接双指针遍历一遍，很直观的思路
 * 时间复杂度：m + n
 * 空间复杂度：常数级
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
function isLongPressedName(name, typed) {
    let i = 0;
    let j = 0;

    while (j < typed.length) {
        if (name[i] === typed[j]) {
            i++;
            j++;
        } else if (typed[j] !== name[i - 1]) {
            return false;
        } else {
            j++;
        }
    }

    if (i < name.length) return false;

    return true;
}
