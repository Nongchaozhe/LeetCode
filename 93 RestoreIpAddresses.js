/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    let ret = [];
    generateIpAddresses([], 4, s);
    return ret;

    function generateIpAddresses(ip, seg, ipLeft) {
        if (ipLeft.length == 0 && seg == 0 && (ip.join().length - 3) === s.length) {
            ret.push(ip.join('.'));
            return;
        }
        // 1.1.1.1，255.255.255.255 1位不够/3位超出，返回
        if (seg > ipLeft.length) return;
        if (seg * 3 < ipLeft.length) return;

        // i表示截取位数
        for (let i = 1; i <= ipLeft.length && i <= 3; i++) {
            // 如果剩余ip长度等于 剩余段数*3，那么肯定是3位.3位.3位
            if (seg * 3 == ipLeft.length && i < 3) continue;
            let firstSeg = parseInt(ipLeft.substring(0, i));
            if (firstSeg >= 0 && firstSeg <= 255) {
                ip.push(firstSeg);
                generateIpAddresses(ip, seg - 1, ipLeft.substring(i));
                ip.pop()
            }
        }
        return;
    }
};

// "010010" 0不能省略
// ["0.10.0.10","0.100.1.0"]

// https: //leetcode-cn.com/submissions/detail/3619150/