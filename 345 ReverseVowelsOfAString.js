/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let l = 0,
        r = s.length - 1;
    let vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let arr = s.split('');
    while (l < r) {
        while (l < r && vowel.indexOf(arr[l]) < 0) {
            l++;
        }
        while (l < r && vowel.indexOf(arr[r]) < 0) {
            r--;
        }
        if (l < r) {
            [arr[l], arr[r]] = [arr[r], arr[l]];
        }
        l++;
        r--;
    }
    return arr.join('');
};