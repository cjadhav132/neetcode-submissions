class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        return strs.map((s) => `${s.length}#${s}`).join("");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const finalList = [];
        let i = 0;
        while (i < str.length) {
            let pointer = i;
            while (str[pointer] !== "#") {
                pointer++;
            }
            const wordLength = parseInt(str.substring(i, pointer));
            const word = str.substring(pointer + 1, pointer + 1 + wordLength);
            finalList.push(word);
            // console.log(wordLength, word, pointer + 1 + wordLength);
            i = pointer + 1 + wordLength;
        }

        return finalList;
    }
}
