class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    return this.items.push(item);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    let lastIndex = this.items.length - 1;
    if (lastIndex == -1) {
      return null;
    }

    return this.items[lastIndex];
  }
}

module.exports = Stack;
