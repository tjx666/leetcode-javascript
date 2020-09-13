/**
 * 题述：单词搜索
 * 思路：回溯
 * 时间复杂度：m * n * 3 的 s 次方，m 为行数， n 为列数， s 为 word 的长度，总共 m * n 个入口，每次 dfs 除了第一次以外每次都走三个方向
 * 空间复杂度：没有使用额外空间
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
function exist(board, word) {
    const row = board.length;
    const column = board[0].length;
    let ans = false;
    function dfs(i, j, wordIndex) {
        if (
            ans ||
            i < 0 ||
            i >= row ||
            j < 0 ||
            j >= column ||
            board[i][j] === 'X' ||
            board[i][j] !== word[wordIndex]
        ) {
            return;
        }

        if (wordIndex === word.length - 1) {
            ans = true;
            return;
        }

        const temp = board[i][j];
        board[i][j] = 'X';
        dfs(i - 1, j, wordIndex + 1);
        dfs(i + 1, j, wordIndex + 1);
        dfs(i, j - 1, wordIndex + 1);
        dfs(i, j + 1, wordIndex + 1);
        board[i][j] = temp;
    }

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            if (board[i][j] === word[0]) {
                dfs(i, j, 0);
            }
        }
    }
    return ans;
}
