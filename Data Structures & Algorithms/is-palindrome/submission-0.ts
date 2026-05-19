class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const regPattern = /^[a-z0-9]+$/i;
        // .test(string)
        let left = 0;
        let right = s.length - 1;
        while (left < right) {
            if (!regPattern.test(s[left])) {
                left++;
                continue;
            }
            if (!regPattern.test(s[right])) {
                right--;
                continue;
            }

            if (s[left].toLocaleLowerCase() !== s[right].toLocaleLowerCase()) return false;
            left++;
            right--;
        }
        return true;
    }
}
