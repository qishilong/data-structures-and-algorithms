const center = ["d", "b", "e", "a", "f", "c", "g"];
const after = ["d", "e", "b", "f", "g", "c", "a"];

class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const start = (center, after) => {
    if (center === null || after === null || center.length === 0 || after.length === 0 || center.length !== after.length) return null;

    const root = new BinaryTree(after[after.length - 1]);
    const index = center.indexOf(root.value);
    let centerLeft = center.slice(0, index);
    let centerRight = center.slice(index + 1, center.length);
    let afterLeft = after.slice(0, index);
    let afterRight = after.slice(index, after.length - 1)

    root.left = start(centerLeft, afterLeft);
    root.right = start(centerRight, afterRight);
    return root;
}

const root = start(center, after);
console.log(root);