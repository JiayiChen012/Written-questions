// 以下两种方式实现螺旋式循环二维数组并输出一维数组
/**
 * js实现螺旋式循环二维数组并输出一维数组
 * 方式 1
 *例： 输入  
    [
        [1, 2, 3, 4, 5, 6],
        [18, 19, 20, 21, 22, 7],
        [17, 28, 29, 30, 23, 8],
        [16, 27, 26, 25, 24, 9],
        [15, 14, 13, 12, 11, 10]
    ]
 * 输出
    [
        1,  2,  3,  4,  5,  6,  7,  8,  9,
        10, 11, 12, 13, 14, 15, 16, 17, 18,
        19, 20, 21, 22, 23, 24, 25, 26, 27,
        28, 29, 30
    ]
 * @param arr int整型二维数组 要处理的二维数组
 * @return int整型一维数组
 */
function spin1(arr) {
    // write code here
    let carr = [];
    let l1 = arr.length;
    for (let i = 0; i < l1; i++) {
        // 克隆数组
        carr.push([...arr[i]])
    }

    let narr = [];
    do {
        narr = narr.concat(...carr[0]); // 添加 上
        carr.shift(); // 删除 上   即 二维数组每次循环的首项 如 [1,2,3,4,5,6]

        let j;
        for (j = 0; j < carr.length; j++) {
            narr.push(carr[j][carr[j].length - 1]); // 添加 右
            carr[j].pop(); // 删除 右
        }
        if (j === 0) break;
        carr[j - 1].reverse();
        narr.push(...carr[j - 1]); // 添加 下

        carr.pop(); // 删除 下
        for (let n = carr.length - 1; n >= 0; n--) {
            narr.push(carr[n][0]); // 添加 左
            carr[n].shift(); // 删除 左
        }
    } while (carr.length !== 0);
    return narr;
}
/**
 * js实现螺旋式循环二维数组并输出一维数组
 * 方式 2
 * @param arr int整型二维数组 要处理的二维数组
 * @return int整型一维数组
 */
function spin2(arr) {
    let startX = 0,
        endX = arr[0].length - 1,
        startY = 0,
        endY = arr.length - 1,
        sum = arr[0].length * arr.length,
        narr = [];

    while (startX <= endX && startY <= endY) {
        let i;
        for (i = startX; i <= endX; i++) // 添加 上
            narr.push(arr[startY][i]);
        if (narr.length === sum) break;
        startY++; // 增加行的开始坐标
        for (i = startY; i <= endY; i++) // 添加 右
            narr.push(arr[i][endX]);
        endX--; // 减小列的结束坐标
        for (i = endX; i >= startX; i--) // 添加 下
            narr.push(arr[endY][i]);
        endY--; // 减小行的结束坐标
        for (i = endY; i >= startY; i--) // 添加左
            narr.push(arr[i][startX]);
        startX++; // 增加列的开始坐标
    }
    return narr;
}
let arr = [
    [1, 2, 3, 4, 5, 6],
    [18, 19, 20, 21, 22, 7],
    [17, 28, 29, 30, 23, 8],
    [16, 27, 26, 25, 24, 9],
    [15, 14, 13, 12, 11, 10]
];
// let arr = [
//     [1, 2, 3, 4, 5, 6, 7],
//     [22, 23, 24, 25, 26, 27, 8],
//     [21, 36, 37, 38, 39, 28, 9],
//     [20, 35, 42, 41, 40, 29, 10],
//     [19, 34, 33, 32, 31, 30, 11],
//     [18, 17, 16, 15, 14, 13, 12]
// ];
// let output = spin1(arr);
let output = spin2(arr);
console.log(output);