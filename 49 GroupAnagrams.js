/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let ret = [];
    let hash = {};
    strs.forEach(str => {
        temp = str.split('').sort().join('');
        if (hash[temp] != undefined) {
            ret[hash[temp]].push(str);
        } else {
            hash[temp] = ret.length;
            ret.push([str])
        }
    });
    return ret;
};