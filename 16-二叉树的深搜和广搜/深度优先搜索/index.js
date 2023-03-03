class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const a = new BinaryTree("a")
const b = new BinaryTree("b")
const c = new BinaryTree("c")
const d = new BinaryTree("d")
const e = new BinaryTree("e")
const f = new BinaryTree("f")
const g = new BinaryTree("g")

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;

// 对于二叉树来说，深度优先搜索和前序遍历的顺序是一样的
const start = (tree, target) => {
    if (tree === null) return false;
    if (tree.value === target) return true;
    const left = start(tree.left, target);
    const right = start(tree.right, target);
    return left || right;
}

const result = start(a, "a")
console.log(result)