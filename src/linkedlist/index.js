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

  getFirst(){
    return this.head;
  }
}

module.exports = { Node, LinkedList };
