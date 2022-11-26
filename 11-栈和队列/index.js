function Stack() {
    this.arr = [];
    this.push = function (e) {
        this.arr.push(e);
    };
    this.pop = function (e) {
        this.arr.pop(e);
    }
}

const stack = new Stack();
stack.push(1)
stack.push(2);
stack.push(3)
console.log(stack.arr)

stack.pop()
console.log(stack.arr)

function Queue() {
    this.arr = [];
    this.push = function (e) {
        this.arr.push(e);
    };
    this.shift = function (e) {
        this.arr.shift(e);
    }
}

const queue = new Queue();

queue.push(1);
queue.push(2);
queue.push(3);
console.log(queue.arr)
queue.shift()
console.log(queue.arr)