/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s == null) return true;
    let left = ['{', '[', '('];
    let right = ['}', ']', ')'];
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        const ele = s[i];
        if (left.indexOf(ele) >= 0) stack.push(ele);
        else if (right.indexOf(ele) >= 0) {
            let arrPop = stack.pop();
            if (arrPop == null || left.indexOf(arrPop) < 0) {
                return false;
            } else if (right.indexOf(ele) == left.indexOf(arrPop)) {
                continue;
            } else {
                return false;
            }
        }
    }
    if (stack.length > 0) return false;
    return true;
};