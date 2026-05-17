class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const hashMap: Object = {};
        let i = 0;
        while (i < nums.length) {
            if (hashMap[nums[i]] !== undefined) return true;

            hashMap[nums[i]] = nums[i];
            i++;
        }
        return false;
    }
}
