// --- Directions
// Implement a 'peek' method in this Queue class.
// Peek should return the last element (the next
// one to be returned) from the queue *without*
// removing it.

class Queue {
  constructor() {
    this.items = [];
  }

  add(item) {
    return this.items.unshift(item);
  }

  remove() {
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

module.exports = Queue;
