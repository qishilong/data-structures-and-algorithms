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

const start = (nodeList, target) => {
    if (nodeList === null || nodeList.length === 0) return false;
    const childList = [];
    for (let i = 0; i < nodeList.length; i++) {
        if (nodeList[i] !== null) {
            // console.log(nodeList[i].value, target);
            if (nodeList[i].value === target) {
                return true;
            } else {
                childList.push(nodeList[i].left);
                childList.push(nodeList[i].right);
            }
        }
    }
    return start(childList, target);
}

const result = start([a], "a");
console.log(result);