function Node(value) {
    this.value = value;
    this.next = null;
}

const node1 = new Node(1)
const node2 = new Node(2)
const node3 = new Node(3)
const node4 = new Node(4)
const node5 = new Node(5)
// const node7 = new Node(7);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
// node7.next = null;

function reverse(root) {
    if (root.next.next === null) {  // 表示当前节点是倒数第二个节点
        root.next.next = root; // 让倒数第二个节点指向自己
        return root.next;
    } else {
        const result = reverse(root.next);
        root.next.next = root;
        root.next = null;
        return result;
    }
}

const newRoot = reverse(node1);

// 遍历节点
function traverse(root) {
    if (root === null) return;
    console.log(root.value);
    traverse(root.next)
}

traverse(newRoot)