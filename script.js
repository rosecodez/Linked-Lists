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

  // function that returns the first node in the list
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

  // function that returns the node at the given index
  at(index) {
    let node = this.head;
    if (index == 0) {
      return this.head;
    }
    while (index--) {
      if (node.nextNode !== null) {
        node = node.nextNode;
      } else {
        console.log('index does not exist');
      }
    }
    return node;
  }

  // function that removes the last element from the list
  pop() {
    if (!this.head) {
      return null;
    }

    if (!this.head.nextNode) {
      this.head = null;
      return;
    }
    let previous = this.head;
    let tail = this.head.nextNode;
    while (tail.nextNode !== null) {
      previous = tail;
      tail = tail.nextNode;
    }

    previous.nextNode = null;
    return this.head;
  }

  // function that return true if the passed value is in the list and otherwise returns false
  contains(value) {
    const current = this.head;
    while (current != null) {
      if (current.value === value) {
        console.log(`linked list contains: ${value}`);
        return true;
      }
      current = current.next;
    }
    console.log(`linked list does not contain: ${value}`);
    return false;
  }
}

const list = new LinkedList();
list.append(5);
list.prepend(2);
list.prepend(10);
list.pop();
list.contains(10);
console.log(list);
list.size();
console.log(list.at(1));
