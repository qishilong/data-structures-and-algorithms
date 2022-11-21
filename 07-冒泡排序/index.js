/**
 * 冒泡排序
 * 排序不是比较大小
 * 排序的本质是交换和对比
 */

const arr = [4, 5, 2, 4, 32, 4, 43, 5, 342, 3, 23, 4, 6, 5, 65, 7, 5, 2, 3, 2, 3, 4, 34, 23, 23, 1, 3, 2, 523, 6, 5, 8, 6, 54, 43, 4];

// 对比
const compare = (a, b) => {
    if (a < b) return true
    else return false;
}

// 交换
const exchange = (arr, a, b) => {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

// 排序
const sort = (arr) => {
    if (arr === null || arr.length === 0) return; // 算法首先需要进行判断错误处理
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (compare(arr[j], arr[j + 1])) {
                exchange(arr, j, j + 1);
            }
        }
    }
}
sort(arr);
console.log(arr)

