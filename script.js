// node that contains 2 properties: its value and link to the nex one
// both properties are null by default
function Node(value, nextNode = null) {
  return { value, nextNode };
}

// list that contains the full list
class LinkedList {
  constructor() {
    this.head = null;
  }

  // function that adds a new node to the start of the list
  prepend(value) {
    // create new node object
    const newNode = new Node(value);
    // set pointer at the same node
    newNode.nextNode = this.head;
    this.head = newNode;
    return this.head;
  }

  // function that adds a new node to the end of the list
  append(value) {
    // create new node object
    const newNode = new Node(value);
    // if list is empty,
    if (!this.head) {
      // set the head of the linkedList to the new node
      this.head = newNode;
      return this.head;
    }
    let tail = this.head;
    while (tail.nextNode !== null) {
      tail = tail.nextNode;
    }
    tail.nextNode = newNode;
    return this.head;
  }

  // function that return the total number of nodes in the list
  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.nextNode;
    }
    console.log(`count:${count}`);
    return count;
  }

  // function that return the first node in the list
  getHead() {
    return this.head;
  }

  // function that returns the last node in the list
  getTail() {
    let lastNode = this.head;
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
    }
    return lastNode;
  }
}
const list = new LinkedList();
list.append(5);
list.prepend(2);
console.log(list);
list.size();
