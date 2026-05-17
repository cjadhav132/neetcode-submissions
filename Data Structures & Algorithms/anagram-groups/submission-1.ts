class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    baseAsciValue = 97;
    groupAnagrams(strs: string[]): string[][] {
        const map = new Map();
        strs.forEach((s) => {
            const arr = Array(26).fill(0);
            for (let i = 0; i < s.length; i++) {
                const charValue = s.charCodeAt(i) - this.baseAsciValue;
                arr[charValue] += 1;
            }

            const mapKey = arr.reduce((acc, cur) => `${acc}-${cur}`, "");
            const mapValue = map.get(mapKey);
            if (mapValue) {
                map.set(mapKey, [...mapValue, s]);
            } else {
                map.set(mapKey, [s]);
            }
        });
        return [...map.values()];
    }
}
