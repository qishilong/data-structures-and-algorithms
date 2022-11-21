/**
 * 简单快速排序
 */

const arr = [4, 5, 2, 4, 32, 4, 43, 5, 342, 3, 23, 4, 6, 5, 65, 7, 5, 2, 3, 2, 3, 4, 34, 23, 23, 1, 3, 2, 523, 6, 5, 8, 6, 54, 43, 4];

const quickSort = (arr) => {
    const length = arr.length;
    if (arr === null || length === 0) return arr;
    const leader = arr[0];
    let left = [];
    let right = [];
    for (let i = 1; i < length; i++) {
        if (arr[i] < leader) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    left = quickSort(left);
    right = quickSort(right);
    left.push(leader)
    return left.concat(right)
}

console.log(quickSort(arr))