class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const map = new Map();
        for (const n in nums) {
            const val = nums[n];
            // console.log(parseInt(n), val, target - val, map.get(val));
            if (map.get(val) !== undefined) return [map.get(val), parseInt(n)];

            map.set(target - val, parseInt(n));
        }
    }
}
