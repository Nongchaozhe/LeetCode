/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let strArr = [];
    let maxLen = 0;
    console.log(s, s.length);
    if (s.length && s.length > 1) {
        strArr = s.split("");
    } else if (s.length <= 1) {
        // console.log(s.length);
        return s.length;
    }
    let begin = 0; //某个点开始比较
    let index = 1; //这个点，要与从begin开始到index-1的点比较
    let temp = 0; //标记位，
    let len = 1; //如果begin到index-1比较中，没有相等的case，+1
    while (index < strArr.length) {
        len = 1;
        for (begin; begin < index; begin++) {
            if (strArr[begin] == strArr[index]) {
                maxLen = ((index - begin) > maxLen) ? (index - begin) : maxLen;
                begin++; //起始点变为相等的下一位
                temp = begin; //标记初始起始点；如果一轮比下来都没有相等话，index++之后还要从temp这个初始点开始比较
                index++;
                // console.log(begin,index);
                break;
            } else {
                len++;
                maxLen = (len > maxLen) ? len : maxLen;
                if (begin + 1 == index) {
                    begin = temp; //一轮比下来都没有相等，那index++之后，begin的位置还是要在这个for循环起始的begin位置
                    index++;
                    break;
                }
            }
        }
    }
    // console.log(maxLen);
    return maxLen;

};