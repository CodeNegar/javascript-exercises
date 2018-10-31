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

  insertLast(data) {
    if (this.head == null) {
      this.insertFirst(data);
      return;
    }

    let lastElement = this.getLast();
    let newNode = new Node(data);
    lastElement.next = newNode;
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;

    while (node != null) {
      if (counter == index) {
        return node;
      }

      node = node.next;
      counter++;
    }

    return null;
  }

  removeAt(index) {
    if (this.head == null) {
      return;
    }

    let previousNode = this.getAt(index - 1);
    let nextNode = this.getAt(index + 1);

    if (index == 0) {
      this.head = nextNode;
      return;
    }

    previousNode.next = nextNode;
  }

  insertAt(data, index) {
    let newNode = new Node(data);

    if (this.head == null) {
      this.head = newNode;
      return;
    }

    if (index == 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let previousNode = this.getAt(index - 1) || this.getLast();
    let nextNode = this.getAt(index);

    previousNode.next = newNode;
    newNode.next = nextNode;
  }
}

module.exports = { Node, LinkedList };
