class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;

        return this;
    }

    traverse() {
        let current = this.head;
        while (current) {
            console.log(current.val);
            current = current.next;
        }
    }

    pop() {
        // 0 items
        if (!this.head) return undefined;

        let current = this.head;
        let newTail = current;

        // 1 item
        if (!current.next) {
            this.head = null;
            this.tail = null;
        } else {
            // 2 or more items
            while (current.next) {
                newTail = current;
                current = current.next;
            }

            this.tail = newTail;
            this.tail.next = null;
        }
        this.length--;
        return current;
    }

    shift() {
        // 0 items
        if (!this.head) return undefined;

        const current = this.head;

        // 1 item
        if (!current.next) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = current.next
            current.next = null;
        }

        this.length--;
        return current;
    }

    unshift(val) {
        const newHead = new Node(val)

        if (!this.head) {
            this.head = newHead;
            this.tail = this.head;
        } else {
            const currentHead = this.head;
            newHead.next = currentHead;
            this.head = newHead;
        }

        this.length++;
        return this;
    }
}

// Node creation
const first = new Node("Hi");
first.next = new Node("There");
first.next.next = new Node("Dennis");
// console.log(first)

// Pushing
const list = new SinglyLinkedList();
list.push(1);
list.push(2);
// list.push(3);
// list.push(4);
// console.log(JSON.stringify(list));

// Traversing
// list.traverse();

// Popping
// console.log(list);
// const poppedItem = list.pop();
// console.log(poppedItem);
// console.log(list);

// Shifting
// console.log(list);
// const shiftedItem = list.shift();
// console.log(shiftedItem);
// console.log(list);

// unshifting
console.log(list);
const updatedList = list.unshift(5);
console.log(updatedList);