/**
 * 选择排序
 */

const arr = [4, 5, 2, 4, 32, 4, 43, 5, 342, 3, 23, 4, 6, 5, 65, 7, 5, 2, 3, 2, 3, 4, 34, 23, 23, 1, 3, 2, 523, 6, 5, 8, 6, 54, 43, 4];

// 比较
const compare = (a, b) => {
    if (a > b) return false;
    return true
}

// 交换
const exchange = (arr, a, b) => {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
    // console.log(1)
}

// 排序
const sort = (arr) => {
    const length = arr.length;
    if (arr === null || length <= 0) return;
    for (let i = 0; i < length; i++) {
        let maxIndex = 0;
        for (let j = 0; j < length - i; j++) {
            if (compare(arr[maxIndex], arr[j])) {
                maxIndex = j;
            }
            // exchange(arr, maxIndex, length - 1 - i); // 在这里交换的话，exchange函数运行了666次
        }
        exchange(arr, maxIndex, length - 1 - i); // 这里交换运行了36次
    }
}


sort(arr);
console.log(arr);