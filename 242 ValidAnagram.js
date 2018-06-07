/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let m = {};
    if (s.length != t.length) {
        return false;
    }
    s.split('').forEach(element => {
        m[element] ? m[element]++ : (m[element] = 1)
    });

    for (const iterator of t.split('')) {
        if (m[iterator]) {
            m[iterator]--;
        } else {
            return false;
        }
    }
    // js中forEach无法break，return
    return true;
};