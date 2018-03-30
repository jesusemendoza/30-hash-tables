'use strict';

const Sll = require('./sll');

module.exports = class HashTable {

  constructor(size=512){
    if(size <= 0){
      throw new Error('Invalid size input');
    }
  
    this.size = size;
    this.memory = [...Array(this.size)].fill(new Sll());
  }

  hash(key){
    if(typeof key !== 'string'){
      throw new Error('Invalid type of key');
    }
    let hashedKey = key.split('').reduce((a, b) => a + b.charCodeAt(0), 0) % this.size;
    return hashedKey;
  }

  set(key, value) {
    if(this.memory[this.hash(key)].head === null){
      this.memory[this.hash(key)].insertHead({'key': key, 'val': value});
    }else{
      let currentNode = this.memory[this.hash(key)].head;
      while(currentNode){
        if(currentNode.value['key'] === key){
          currentNode.value['val'] = value;
          return;
        }
        currentNode = currentNode.next;
      }
      this.memory[this.hash(key)].insertHead({'key': key, 'val': value});
    }
    return;
  }
  get(key){
    let currentNode = this.memory[this.hash(key)].head;
  while(currentNode){
    if(currentNode.value['key'] === key){
      return currentNode.value['val'];
    }
    currentNode = currentNode.next;
  }
  return null;
  }

  delete (key) {
    let currentNode = this.memory[this.hash(key)].head;
    if(currentNode === null){
      return null;
    }
    if(currentNode.value['key'] === key){
      this.memory[this.hash(key)].head = this.memory[this.hash(key)].head.next;
      this.memory[this.hash(key)].length -= 1;
      return;
    }
  
    let preNode = currentNode;
    currentNode = currentNode.next;
    while(currentNode){
      if(currentNode.value['key'] === key){
        preNode.next = currentNode.next;
        this.memory[this.hash(key)].length -= 1;
        return;
      }
      preNode = currentNode; let currentNode = this.memory[this.hash(key)].head;
      if(currentNode === null){
        return null;
      }
      if(currentNode.value['key'] === key){
        this.memory[this.hash(key)].head = this.memory[this.hash(key)].head.next;
        this.memory[this.hash(key)].length -= 1;
        return;
      }
    
      let preNode = currentNode;
      currentNode = currentNode.next;
      while(currentNode){
        if(currentNode.value['key'] === key){
          preNode.next = currentNode.next;
          this.memory[this.hash(key)].length -= 1;
          return;
        }
        preNode = currentNode;
        currentNode = currentNode.next;
      }
      return null;
      currentNode = currentNode.next;
    }
    return null;
  }
}



