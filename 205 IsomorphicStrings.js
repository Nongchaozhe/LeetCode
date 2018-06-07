/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length != t.length) {
        return false;
    }

    let m = {};
    let sT = new Set();
    for (let i = 0; i < s.length; i++) {
        if (m[s[i]]) {
            if (t[i] == m[s[i]]) {
                continue;
            } else {
                return false;
            }
        } else {
            if (sT.has(t[i])) {
                return false;
            } else {
                sT.add(t[i]);
                m[s[i]] = t[i];
            }
        }
    }

    return true;
};