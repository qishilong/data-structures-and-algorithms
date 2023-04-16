// 变态青蛙跳台阶
// 这只青蛙，一次可以跳1级台阶、2级台阶、或n级台阶。
// 问：这只青蛙，跳上n级台阶有多少种方法?

// f(n) = f(n-1) + f(n-2) + f(n-3) + …… + f(2) + f(1) + f(0)

const jump = (n) => {
    if (n === 0) return -1;
    if (n === 1) return 1;
    if (n === 2) return 2;
    let result = 0;
    for (let i = 1; i < n; i++) {
        result += jump(n - i);
    }
    return result + 1;
}

console.log(jump(8))