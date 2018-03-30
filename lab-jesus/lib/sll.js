'use strict';

const Node = require('./node');


class SLL {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  insertHead(val) {
    let node = new Node(val);
    node.next = this.head;
    this.head = node;
    this.length++;
    return this;
  }

  insertEnd(val) {
    let node = new Node(val);
    this.length++;
    if(!this.head) {
      this.head = node;
      return this;
    }
    
    let current = this.head;
    while(current.next){
      current = current.next;
    }
    current.next = node;

    return this;
  }

  reverse() {
    let newThis = new SLL();
    let current = this.head;
    while(current){
      newThis.insertHead(current.value);
      current = current.next;
    }

    this.head = newThis.head;
    return this;
  }

  remove(n) {
    if(n > this.length || n <= 0 || typeof n !== 'number'){
      return null;
    }

    if(n === 1){
      this.head = this.head.next;
      return this;
    }

    let pre = this.findNthNode(n-1);
    pre.next = pre.next.next;
    this.length--;
    return this;
  }     

  findNthNode(n) {
    if(n > this.length || n <= 0 || typeof n !== 'number'){
      return null;
    }

    let count = 1;
    let currentNode = this.head;

    while(count < n){
      count++;
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  findNthNodeFromEnd(n) {
    return this.findNthNode(this.length - n + 1);
  }
}

module.exports = SLL;
