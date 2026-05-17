class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const map = new Map();
        const freqArr = new Array(nums.length).fill(null);
        const finalArray = [];
        for (const n in nums) {
            const value = nums[n];
            const mapValue = map.get(value);

            if (mapValue === undefined) {
                map.set(value, 1);
                if (freqArr[0] === null) {
                    freqArr[0] = { [value]: 1 };
                    // freqArr[0] = [value];
                } else {
                    freqArr[0][value] = 1;
                    // freqArr[0].push(value);
                }
            } else {
                // console.log(freqArr, mapValue);
                map.set(value, mapValue+1);
                delete freqArr[mapValue - 1][value];
                // freqArr[0][mapValue] = 1;

                if (freqArr[mapValue] === null) {
                    freqArr[mapValue] = { [value]: 1 };

                    // freqArr[mapValue] = [value];
                } else {
                    freqArr[mapValue][value] = 1;
                    // freqArr[mapValue].push(value);
                }
            }
        }

        // for (const n in freqArr) {
        //     console.log(n, freqArr[n]);
        // }

        let resCount = 0;
        for (let i = nums.length - 1; i >= 0 && resCount < k; i--) {
            if (freqArr[i] !== null) {
                const values = Object.keys(freqArr[i]);
                // console.log(values)
                finalArray.push(...values);
                resCount += values.length;
            }
        }

        return [...new Set(finalArray)];
    }
}
