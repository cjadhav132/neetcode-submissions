class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let total = 1;
        const suffixArr = [1];
        const prefixArr = [1];
        for (let i = 1; i < nums.length; i++) {
            const start = i - 1;
            const end = nums.length - i;
            prefixArr.push(nums[start] * prefixArr[start]);
            suffixArr.push(nums[end] * suffixArr[start]);
        }
        console.log(prefixArr);
        console.log(suffixArr);

        const finalArr = [];
        for (let start = 0; start < nums.length; start++) {
            const end = nums.length - start - 1;
            finalArr.push(prefixArr[start] * suffixArr[end]);
        }

        // nums.forEach((n) => (total = total * n));
        // console.log(total);
        // return nums.map((n) => total / n);
        return finalArr
    }
}
