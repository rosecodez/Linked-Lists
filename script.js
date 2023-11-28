// list to contain the full list
class LinkedList {
  constructor(list) {
    this.list = list;
  }
}
// node that contains 2 properties: its value and link to the nex one
// both properties are null by default
function Node(value = null, nextNode = null) {
  return { value, nextNode };
}
// create 2 nodes
const node1 = new Node(1);
const node2 = new Node(2);

// assign link between nodes
node1.next = node2;

// create linked list
const list = new LinkedList(node1);

// access nodes
console.log(list.list.next.value);
