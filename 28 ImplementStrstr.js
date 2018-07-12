/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle.length === 0) return 0;
    if (needle.length > haystack.length) return -1;
    let l = 0,
        r = 0;
    while (l < haystack.length && r < needle.length) {

        if (haystack[l] == needle[r])
            l++, r++;
        else {
            l = l - r + 1, r = 0;
        };
    }
    if (r == needle.length) return l - r;
    return -1;
};

console.log(strStr('mississippi', 'issip'));