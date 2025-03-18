class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

// Consumes more memory than a singly linked list
// Getting first or last node is done in O(1)
// Searching and insertion can be done faster than in singly linked list in O(n/2)
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;

      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;

    const lastNode = this.tail;

    // If the length is 1
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      const newTail = lastNode.prev;

      // Server the current connections
      newTail.next = null;
      lastNode.prev = null;

      // Set the new tail
      this.tail = newTail;
    }

    this.length--;
    return lastNode;
  }

  // Remove at the beginning
  shift() {
    if (this.length === 0) return undefined;

    const oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    
      oldHead.next = null;
    }

    this.length--;
    return oldHead;
  }

  // Add at the beginning
  unshift(val) {
    const newhead = new Node(val);

    if (!this.head) {
      this.head = newhead;
      this.tail = newhead;
    } else {
      this.head.prev = newhead;
      newhead.next = this.head;

      this.head = newhead;
    }

    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;

    let current, runs;

    if (index <= this.length / 2) {
      // console.log('Fetching from the beginning');
      current = this.head;
      runs = 0;

      while (index !== runs) {
        current = current.next;
        runs++;
      }
    } else {
      // console.log('Fetching from the end');
      current = this.tail;
      runs = this.length - 1;

      while (index !== runs) {
        current = current.prev;
        runs--;
      }
    }

    return current;
  }

  set(index, value) {
    const existingNode = this.get(index);

    if (existingNode) {
      existingNode.val = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) {
      throw new Error("Invalid index");
    }

    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);

    const newNode = new Node(value);
    const prevNode = this.get(index - 1);
    const currentNode = prevNode.next;

    prevNode.next = newNode;
    newNode.prev = prevNode;
    newNode.next = currentNode;
    currentNode.prev = newNode;

    this.length++;

    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      throw new Error("Invalid index");
    }

    let oldNode;

    if (index === 0) {
      oldNode = this.shift();
    } else if (index === this.length - 1) {
      oldNode = this.pop();
    } else {
      oldNode = this.get(index);
      const prevNode = oldNode.prev;
      const nextNode = oldNode.next;

      prevNode.next = nextNode;
      nextNode.prev = prevNode;

      oldNode.prev = null;
      oldNode.next = null;

      this.length--;
    }
    return oldNode;
  }

  reverse() {
    let current = this.head;
    this.head = this.tail;
    this.tail = current;

    let prev = null;

    while (current) {
      const next = current.next;

      current.next = prev;
      current.prev = next;

      prev = current;
      current = next;
    }
    return this;
  }

  print(onlyString) {
    let current = this.head;

    let results = "";

    while (current) {
      results += current.val + "";

      if (!onlyString) {
        console.log(current);
      }
      current = current.next;

      if (current) {
        results += ", ";
      }
    }

    if (!results.length) results = "EMPTY!";

    return results;
  }
}

// Node creation
// const first = new Node("Hi");
// const second = new Node("There");
// const third = new Node("Dennis");
// first.next = second;
// second.prev = first;
// second.next = third;
// third.prev = second;
// console.log(first)

// Pushing
const list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
// console.log(list);
// console.log(list.print(1));

// Popping
// console.log('list: ', list.print(1));
// const poppedItem = list.pop();
// console.log('poppedItem: ', poppedItem);
// console.log('list: ', list.print(1));

// Shifting
// console.log(list.print(1));
// const shiftedItem = list.shift();
// console.log('shiftedItem: ', shiftedItem);
// console.log('list: ', list.print(1));

// unshifting
// console.log(list.print(1));
// const updatedList = list.unshift(6);
// console.log(updatedList.print(1));

// Get
// const item = list.get(4);
// console.log(item);

// Set
// console.log(list.set(0, "one"));
// console.log(list.set(2, "middle"));
// console.log(list.set(4, "last"));
// console.log('list: ', list.print(1));

// Insert
// console.log('list: ', list.print(1));
// list.insert(0, "shifted");
// list.insert(2, "inserted");
// list.insert(7, "pushed");
// console.log('list: ', list.print());

// Remove
// console.log('list: ', list.print(1));
// console.log('removed: ', list.remove(3));
// console.log('list: ', list.print());

// Reverse
// console.log('list: ', list.print(1));
// list.reverse();
// console.log('newHead: ', list.head);
// console.log('newTail: ', list.tail);
// console.log('reversed: ', list.print(1));
