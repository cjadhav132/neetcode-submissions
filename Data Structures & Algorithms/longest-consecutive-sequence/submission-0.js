class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let st = new Set();
        let res = 0;

        // Hash all the array elements
        for (let val of nums) {
            st.add(val);
        }

        // Check each possible sequence from the start then update
        // optimal length
        for (let val of nums) {
            // If current element is the starting element of a sequence
            if (st.has(val) && !st.has(val - 1)) {
                // Then check for next elements in the sequence
                let cur = val,
                    cnt = 0;
                while (st.has(cur)) {
                    // Remove this number to avoid recomputation
                    st.delete(cur);
                    cur++;
                    cnt++;
                }

                // Update optimal length
                res = Math.max(res, cnt);
            }
        }
        return res;
    }
}
