/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let pathArr = path.split('/');
    let ret = [];
    // forEach遍历更费事
    for (let i = 0; i < pathArr.length; i++) {
        let el = pathArr[i];
        if (el.length === 0 || el === '.') continue;
        if (el === '..' && ret.length > 0) {
            ret.pop();
        } else if (el !== '..') {
            ret.push(el);
        }
    }
    return '/' + ret.join('/');
};