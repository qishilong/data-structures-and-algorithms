function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
const g = new Node("g");
const h = new Node("h");
const j = new Node("j");

a.left = b;
a.right = c;
b.left = d;
// b.right = e;
c.left = f;
c.right = g;
d.right = h;
// e.right = j;

// 获取树的深度
const getDeep = (root) => {
    if (root === null) return 0;
    const left = getDeep(root.left);
    const right = getDeep(root.right);
    return Math.max(left, right) + 1;
}

// 判断是否平衡
const isBalance = (root) => {
    if (root === null) return true;
    let rightBalance = getDeep(root.right);
    let leftBalance = getDeep(root.left);
    if (Math.abs(rightBalance - leftBalance) > 1) { // 不平衡
        return false;
    } else {
        return isBalance(root.left) && isBalance(root.right)
    }
}

console.log(isBalance(a))