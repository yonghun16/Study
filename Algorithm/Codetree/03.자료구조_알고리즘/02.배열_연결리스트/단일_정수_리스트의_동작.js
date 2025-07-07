// linked list
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertAtHead(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  insertAtTail(data) {
    const newNode = new Node(data);
    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }
    curr.next = newNode;
  }

  print() {
    let curr = this.head;
    while (curr) {
      console.log(curr.data);
      curr = curr.next;
    }
  }
}

const sll = new LinkedList();

sll.insertAtHead(15);
sll.insertAtHead(25);
sll.insertAtTail(20);
sll.insertAtHead(45);
sll.insertAtTail(30);

sll.print();
