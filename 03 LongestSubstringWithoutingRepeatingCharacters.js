/**
 * @param {string} s
 * @return {number}
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // let freq = Array.apply(null, Array(256)).map(() => 0);
    let freq = {};
    let l = 0,
        r = -1; // [l,r]为滑动窗口
    let ret = 0;
    while (l < s.length) {
        if ((r + 1) < s.length && !freq[s[r + 1]]) {
            r++;
            freq[s[r]] = true;
            ret = Math.max(ret, r - l + 1);
        } else {
            freq[s[l]] = false;
            l++;
        }
    }
    return ret;
}