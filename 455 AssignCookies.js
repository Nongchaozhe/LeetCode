/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a, b) => (a - b));
    s.sort((a, b) => (a - b));
    let si = s.length - 1,
        gi = g.length - 1;
    let res = 0;
    while (gi >= 0 && si >= 0) {
        if (s[si] >= g[gi]) {
            res++;
            si--;
            gi--;
        } else {
            gi--;
        }
    }

    return res;
};

var g = [250, 490, 328, 149, 495, 325, 314, 360, 333, 418, 430, 458]
var s = [376, 71, 228, 110, 215, 410, 363, 135, 508, 268, 494, 288, 24, 362, 20, 5, 247, 118, 152, 393, 458, 354, 201, 188]

console.log(findContentChildren(g, s));