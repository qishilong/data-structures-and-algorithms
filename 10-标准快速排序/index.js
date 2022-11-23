/**
 * 标准快速排序
 * 🌟🌟🌟🌟🌟
 */
const arr = [4, 5, 2, 4, 32, 4, 43, 5, 342, 3, 23, 4, 6, 5, 65, 7, 5, 2, 3, 2, 3, 4, 34, 23, 23, 1, 3, 2, 523, 6, 5, 8, 6, 54, 43, 4];

const swap = (arr, a, b) => {
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

const quickSortFn = (arr, begin, end) => {
    if (begin >= end - 1) return arr;
    let left = begin;
    let right = end;
    do {
        do left++; while (left < right && arr[left] < arr[begin]);
        do right--; while (right > left && arr[right] > arr[begin]);
        if (left < right) swap(arr, left, right);
    } while (left < right);
    const swapPoint = left === right ? right - 1 : right;
    swap(arr, begin, swapPoint);
    quickSortFn(arr, begin, swapPoint);
    quickSortFn(arr, swapPoint + 1, end)
}

const quickSort = (arr) => {
    if (arr === null || arr.length === 0) return;
    quickSortFn(arr, 0, arr.length);
}

quickSort(arr);
console.log(arr)