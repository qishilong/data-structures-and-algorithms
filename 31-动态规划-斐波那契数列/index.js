// 动态规划，笔试遇到动态规划是后面的大题

// 0, 1, 1, 2, 3, 5, 8, 13, 21 ……
// 给出第n位，问第n位值为几？

function fib(value) {
    if (value < 0) return -1;
    if (value === 0) return 0;
    if (value === 1 || value === 2) return 1;
    return fib(value - 1) + fib(value - 2);
}

const result = fib(8);
console.log(result);