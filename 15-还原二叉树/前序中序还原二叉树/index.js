const font = ["a", "b", "d", "e", "c", "f", "g"];
const center = ["d", "b", "e", "a", "f", "c", "g"];

class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const start = (font, center) => {
    if (font === null || center === null || font.length === 0 || center.length === 0 || font.length !== center.length) return null;
    const root = new BinaryTree(font[0])

    let index = center.indexOf(root.value);
    let fontLeft = font.slice(1, index + 1);
    let fontRight = font.slice(index + 1, font.length);
    let centerLeft = center.slice(0, index);
    let centerRight = center.slice(index + 1, center.length);

    root.left = start(fontLeft, centerLeft);
    root.right = start(fontRight, centerRight);
    return root;
}

const root = start(font, center);
console.log(root);


