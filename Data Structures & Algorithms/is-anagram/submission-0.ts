class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;

        const sMap: Object = {};
        const tMap: Object = {};

        let i = 0;

        while (i < s.length) {
            sMap[s[i]] = (sMap[s[i]] || 0) + 1;
            tMap[t[i]] = (tMap[t[i]] || 0) + 1;
            i++
        }

        const sKeys = Object.keys(sMap);
        const tKeys = Object.keys(tMap);

        for (const [key, value] of Object.entries(sMap)) {
            if (tMap[key] !== value) return false;
        }
        
        for (const [key, value] of Object.entries(tMap)) {
            if (sMap[key] !== value) return false;
        }
        
        return true
    }
}
