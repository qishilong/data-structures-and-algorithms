# Data-structures-and-algorithms
关于数据结构与算法的学习与练习
>算法在进行计算之前首先需要进行判断是否输入不符合处理
```js
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
```