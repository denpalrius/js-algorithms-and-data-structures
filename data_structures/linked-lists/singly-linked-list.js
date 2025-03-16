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

    print() {
        let current = this.head;
        let results = '';
        while (current) {
            results += current.val + '';
            current = current.next;
            if (current) {
                results += ', ';
            }
        }

        return results;
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

    get(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }

        let current = this.head;
        let position = 0;

        while (position < index) {
            current = current.next;
            position++;
        }

        return current;
    }

    set(index, value) {
        const node = this.get(index);

        if (node) {
            node.val = value;
            return true;
        }
        return false;
    }

    insert(index, value) {
        if (+index < 0 || index > this.length || !value) return false;

        if (this.length === index) {
            const updatedList = this.push(value);

            return updatedList.length > index;
        }

        if (index === 0) {
            const updatedList = this.unshift(value);

            return updatedList.length > index;
        }

        const newNode = new Node(value);
        const trailingNode = this.get(index - 1);

        newNode.next = trailingNode.next;
        trailingNode.next = newNode;

        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined;


        if (index === this.length - 1) return this.pop();

        if (index === 0) return this.shift();

        const prevNode = this.get(index - 1);
        const currentNode = prevNode.next;
        const nextNode = currentNode.next;

        prevNode.next = nextNode;
        this.length--;

        return currentNode;
    }

    reverse() {
        let current = this.head;

        this.head = this.tail;
        this.tail = current;

        let next;
        let prev = null;

        let runs = 0;
        while (runs < this.length) {
            next = current.next;
            current.next = prev;

            prev = current;
            current = next;

            runs++;
        }

        return this;
    }


}

// Node creation
// const first = new Node("Hi");
// first.next = new Node("There");
// first.next.next = new Node("Dennis");
// console.log(first)

// Pushing
const list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
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
// console.log(list);
// const updatedList = list.unshift(5);
// console.log(updatedList);


// Get
// const item = list.get(3);
// console.log(item);

// Set
// const setResults = list.set(1, "one");
// const lastSetResults = list.set(3, "last");
// console.log(setResults);
// console.log(lastSetResults);
// console.log(list);


// Insert
// const insertResults = list.insert(0, "22");
// console.log(insertResults);
// console.log(list);

// Remove
// console.log(list);
// const staleNode = list.remove(2);
// console.log(staleNode);
// console.log(list);

// Reverse
// console.log("Original: ", list.print());
// console.log("Reversed: ", list.reverse().print());
// console.log("Reversed: ", list.reverse().print());