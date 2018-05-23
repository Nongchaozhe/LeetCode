/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let minLenStr = strs[0] || "";
    let minLen = 0;
    // 找出length最短的
    strs.forEach(element => {
        minLenStr = (element.length < minLenStr.length) ? element : minLenStr;
    });

    let out = "";
    for (let index = 0; index <= minLenStr.length; index++) {
        const firStr = minLenStr.substring(0, index);
        for (let j = 0; j < strs.length; j++) {
            const str = strs[j].substring(0, index);
            if (firStr != str) {
                return out;
            }
        }
        out = firStr;
    }
    return out;
};