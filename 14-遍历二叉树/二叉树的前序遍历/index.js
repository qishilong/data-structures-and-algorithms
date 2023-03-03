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

const begin = (root) => {
    if (root === null) return null;
    console.log(root.value);
    begin(root.left)
    begin(root.right)
}

begin(a);