/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) return false;

    let diff = new Array(26).fill(0);
    for (let i = 0; i < s1.length; i++) {
        diff[s1[i].charCodeAt() - 97]++;
        diff[s2[i].charCodeAt() - 97]--;
    }

    for (let i = s1.length; i < s2.length; i++) {
        if (diff.every((val) => val === 0)) {
            return true;
        }

        diff[s2[i - s1.length].charCodeAt() - 97]++;
        diff[s2[i].charCodeAt() - 97]--;
    }

    return diff.every((val) => val === 0);

    // let checkNum = s2.length - s1.length + 1;
    // let s1Arr = s1.split('').sort().join('');
    // for (let i = 0; i <= checkNum; i++) {
    //     let subArr = s2.substr(i, s1.length).split('').sort().join('');
    //     if (subArr == s1Arr) {
    //         return true;
    //     }
    // }
    // return false;
};

console.log(checkInclusion("ab", "eidbaooo"));