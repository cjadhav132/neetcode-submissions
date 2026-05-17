class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const rowsCheck = Array(9)
            .fill(null)
            .map(() => new Map());
        const colsCheck = Array(9)
            .fill(null)
            .map(() => new Map());

        const blocksCheck = Array(3)
            .fill(null)
            .map(() => new Array(3).fill(null).map(() => new Map()));

        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                const value = board[row][col];
                // console.log(`${row}/${col}`, value, rowsCheck[row], colsCheck[col]);
                if (value === ".") continue;

                if (
                    rowsCheck[row].get(value) !== undefined ||
                    colsCheck[col].get(value) !== undefined
                ) {
                    return false;
                }

                const blockRow = Math.floor(row / 3);
                const blockCol = Math.floor(col / 3);
                if (blocksCheck[blockRow][blockCol].get(value) !== undefined) return false;

                blocksCheck[blockRow][blockCol].set(value, 1);
                rowsCheck[row].set(value, 1);
                colsCheck[col].set(value, 1);
            }
        }

        return true;
    }
}
