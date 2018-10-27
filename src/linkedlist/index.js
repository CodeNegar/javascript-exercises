// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    let next = this.head;
    let node = new Node(data, next);
    this.head = node;
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node != null) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;

    while (node != null && node.next != null) {
      node = node.next;
    }

    return node;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
  }

  removeLast() {
    if (this.head == null) {
      return;
    }

    if (this.head.next == null) {
      this.head = null;
      return;
    }

    let node = this.head;
    let target = this.head.next;
    while (target.next != null) {
      node = target;
      target = target.next;
    }

    node.next = null;
  }
}

module.exports = { Node, LinkedList };
