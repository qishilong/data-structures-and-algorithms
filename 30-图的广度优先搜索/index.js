function Node(value) {
    this.value = value;
    this.neighbor = [];
}

var a = new Node("a");
var b = new Node("b");
var c = new Node("c");
var d = new Node("d");
var e = new Node("e");

a.neighbor.push(b);
a.neighbor.push(c);
b.neighbor.push(a);
b.neighbor.push(c);
b.neighbor.push(d);
c.neighbor.push(a);
c.neighbor.push(b);
c.neighbor.push(d);
d.neighbor.push(b);
d.neighbor.push(c);
d.neighbor.push(e);
e.neighbor.push(d);

function bfs(node, target, path) {
    if (node === null || node.length === 0) return false;
    let nextNode = [];
    for (let i = 0; i < node.length; i++) {
        if (path.indexOf(node[i]) > -1) continue;
        path.push(node[i]);
        if (node[i].value === target) {
            return true
        } else {
            nextNode = nextNode.concat(node[i].neighbor)
        }
    }
    return bfs(nextNode, target, path)
}

console.log(bfs([a], 'n', []))