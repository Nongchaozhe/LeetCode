/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // 超时版本，最古老的版本了
    if (strs.length < 1) {
        return [];
    }
    let ret = [
        [strs[0]]
    ];
    for (let i = 1; i < strs.length; i++) {
        let j = 0;
        for (j; j < ret.length; j++) {
            if (isAnagram(ret[j][0], strs[i])) {
                ret[j].push(strs[i]);
                break;
            }
        }
        if (j == ret.length) {
            ret.push([strs[i]]);
        }
    }
    return ret;
};

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