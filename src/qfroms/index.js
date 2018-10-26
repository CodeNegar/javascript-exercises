// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.pop(); // returns 1
//     q.pop(); // returns 2

const Stack = require("./stack");

class Queue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  add(item) {
    this.stack1.push(item);
  }

  remove() {
    // Move everything to stack1 so it become reversed
    while (this.stack1.peek() != null) {
      let item = this.stack1.pop();
      this.stack2.push(item);
    }

    let item = this.stack2.pop();

    // Move everything back
    while (this.stack2.peek() != null) {
      let item = this.stack2.pop();
      this.stack1.push(item);
    }

    return item;
  }

  peek() {
    // Move everything to stack1 so it become reversed
    while (this.stack1.peek() != null) {
      let item = this.stack1.pop();
      this.stack2.push(item);
    }

    let item = this.stack2.peek();

    // Move everything back
    while (this.stack2.peek() != null) {
      let item = this.stack2.pop();
      this.stack1.push(item);
    }

    return item;
  }
}

module.exports = Queue;
