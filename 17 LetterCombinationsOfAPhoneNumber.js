/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let numMap = {
        "0": "",
        "1": "",
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz",
    };

    if (digits == null || digits.length <= 0) return [];
    let ret = [];
    generateCombinations(digits, 0, "");
    return ret;

    // 回溯法
    function generateCombinations(digits, start, s) {
        if (s.length == digits.length) {
            ret.push(s);
            return;
        }
        let letter = numMap[digits[start]];
        for (let index = 0; index < letter.length; index++) {
            generateCombinations(digits, start + 1, s + letter[index]);
        }
        return;
    }
};