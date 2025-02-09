/**
 * https://leetcode.com/problems/valid-sudoku/
 * 
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const hashSet = new Set();

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const cellVal = board[i][j];
            if (cellVal !== '.') {
                const uniqueRowVal = `row:${i}:${cellVal}`;
                const uniqueColumnVal = `col:${j}:${cellVal}`;
                const uniqueMiniGridVal = `grd:${Math.floor(i/3)}:${Math.floor(j/3)}:${cellVal}`;

                if (hashSet.has(uniqueRowVal) || hashSet.has(uniqueColumnVal) || hashSet.has(uniqueMiniGridVal)) {
                    return false;
                }

                hashSet.add(uniqueRowVal);
                hashSet.add(uniqueColumnVal);
                hashSet.add(uniqueMiniGridVal);
            }
        }
    }
    return true;
};