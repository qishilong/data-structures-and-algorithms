/**
 * 野蛮的排序方法
 */
const arr = [4, 5, 2, 4, 32, 4, 43, 5, 342, 3, 23, 4, 6, 5, 65, 7, 5, 2, 3, 2, 3, 4, 34, 23, 23, 1, 3, 2, 523, 6, 5, 8, 6, 54, 43, 4];

// 找到最小值
const getMin = (arr) => {
    const length = arr.length;
    if (arr === null || length < 0) return;
    let index = -1;
    for (let i = 0; i < length; i++) {
        if (arr[i] !== null && arr[i] < arr[index] || arr[i] !== null && index === -1) {
            index = i;
        }
    }
    let result = arr[index];
    arr[index] = null;
    return result;
}

// 排序
const sort = (arr) => {
    const length = arr.length;
    if (arr === null || length < 0) return;
    const newArr = new Array(length);
    for (let i = 0; i < length; i++) {
        newArr[i] = getMin(arr)
    }
    return newArr;
}

console.log(sort(arr))