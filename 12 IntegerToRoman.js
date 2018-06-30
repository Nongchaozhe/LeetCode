/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let romeList = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    let numList = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let out = "";
    let i = 0;
    while (i < numList.length && num != 0) {
        const element = numList[i];
        if (num >= element) {
            out += romeList[i];
            num -= element;
        } else {
            i++;
        }
    }
    return out;
};