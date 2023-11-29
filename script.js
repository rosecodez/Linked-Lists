// node that contains 2 properties: its value and link to the nex one
// both properties are null by default
function Node(value = null, nextNode = null) {
  return { value, nextNode };
}

// list that contains the full list
class LinkedList {
  constructor() {
    this.head = null;
  }

  // function that adds a new node to the end of the list
  append(value) {
    // create new node object
    const newNode = new Node(value);
    // if list is empty,
    if (this.head === null) {
      // set the head to the the node
      this.head = newNode;
    } else {
      // start at the beginning of the list
      let currentTail = this.head;
      // traverse to the end of the list
      while (currentTail.next !== null) {
        currentTail = currentTail.next;
      }
      // point the current tail to the new node
      currentTail.next = newNode;
    }
  }

  // function that adds a new node to the start of the list
  prepend(value) {
    // create new node object
    const newNode = new Node(value);
    // if list is empty,
    if (this.head === null) {
      // set the head of the linkedList to the new node
      this.head = newNode;
    } else {
      // find the current head node
      const currentHead = this.head;
      // reassign the head to our new node
      this.head = newNode;
      // set its next pointer to the current head
      newNode.next = currentHead;
    }
  }
}
// create 2 nodes
const node1 = new Node(1);
const node2 = new Node(2);

// assign link between nodes
node1.nextNode = node2;

// create linked list
const list = new LinkedList(node1);

// access nodes
console.log(list.list.nextNode.value);
