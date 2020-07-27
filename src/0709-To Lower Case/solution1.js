/**
 * 题述：实现函数 ToLowerCase()，该函数接收一个字符串参数 str，并将该字符串中的大写字母转换成小写字母，之后返回新的字符串。
 * 思路：很多看起来难题你把它拆成一个个小问题各个击破就可以解决了，但是需要我们认真对待每一个小问题
 * @param {string} str
 * @return {string}
 */
function toLowerCase(str) {
    // 使用硬编码避免重复计算
    const mapper = {
        A: 'a',
        B: 'b',
        C: 'c',
        D: 'd',
        E: 'e',
        F: 'f',
        G: 'g',
        H: 'h',
        I: 'i',
        J: 'j',
        K: 'k',
        L: 'l',
        M: 'm',
        N: 'n',
        O: 'o',
        P: 'p',
        Q: 'q',
        R: 'r',
        S: 's',
        T: 't',
        U: 'u',
        V: 'v',
        W: 'w',
        X: 'x',
        Y: 'y',
        Z: 'z',
    };
    return str.replace(/[A-Z]/g, (upperLetter) => mapper[upperLetter]);
}
