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

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits && digits.length == 0) return [];
    let numMap = {
        "0": [],
        "1": [],
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"],
    };
    let ret = numMap[digits[0]];
    digits = digits.substring(1);
    digits.split('').forEach(item => {
        let next = numMap[item];
        let cur = [];
        next.forEach(item2 => {
            cur = cur.concat(ret.map((item3) => {
                return item3 + item2;
            }));
        });
        ret = cur;
    });
    return ret;
};