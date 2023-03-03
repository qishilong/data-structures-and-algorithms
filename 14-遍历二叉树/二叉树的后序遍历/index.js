class BinaryTree {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
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

const start = (root) => {
    if (root === null) return null;
    start(root.left);
    start(root.right);
    console.log(root.value);
}

start(a)