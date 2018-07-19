/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
    let ret = 0;
    for (let i = 0; i < points.length; i++) {
        let disMap = {};
        for (let j = 0; j < points.length; j++) {
            if (j === i) continue;
            let dis = distance(points[i], points[j]);
            let freq = ~~disMap[dis];
            ret += freq;
            disMap[dis] = freq + 1;
        }
    }
    return ret * 2;
};

function distance(i, j) {
    return (i[0] - j[0]) * (i[0] - j[0]) + (i[1] - j[1]) * (i[1] - j[1]);
}