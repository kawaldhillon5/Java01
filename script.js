class Node {
  constructor(value, node){

    this.value = value ? value : null;
    this.next = node ? node: null;

  }
}



class LinkedList {
  constructor(){

    this.head = null;
    this.last = null;
    this.length = 0;
  
  }

  append(value){

    if (this.last) {
      this.last = this.last.next = new Node(value);
    } else {
      this.head = this.last = new Node(value);
    }
    this.length++;

  }

  prepend(value){

    if (this.head) {
      this.head  = new Node(value, this.head);
    } else {
      this.head = this.last = new Node(value);
    }
    this.length++;

  }

  size(){
    return this.length;
  }

  first (){
    return this.head;
  }

  tail(){
    return this.last;
  }

  at(index){

    let node = this.head;
    for(let i = 0; i < index; i++){
      node = node.next
    }
    return node;
  }

  pop(){

    const value = this.last.value;
    if (this.head == null){
      return;
    }
    else if (this.head == this.last){
      this.head = null;
      this.last = null;
      this.length--
    }
    else {
      let temp = this.head;
      let pre = this.head;
      while(temp.next){
          pre = temp;
          temp = temp.next;
      }
      this.last = pre;
      this.last.next = null;
      this.length--
    }
    return value;
  }

  contains(input) {

    let node = this.head;
    let found = false;
    for(let i = 0; i <= this.length; i++){
      if(node){
        if(node.value === input){
          found = true;
        }
        node = node.next;
      }
    }
    return found;
  }

  find(input){
    let node = this.head;
    let index = null;
    for(let i = 1; i <= this.length; i++){
      if(node){
        if(node.value === input){
          index =  i
        } 
        node = node.next;
      }
    }
    return index;
  }

  toString(){
    let node = this.head;
    let value = "";
    for(let i = 0; i <= this.length; i++){
      if(node === null){
          value += `null`; 
      } else {
        value += `(${node.value}) -> `;
        node = node.next;
      }
    }
    return value;
  }

}





const list = new LinkedList();

list.prepend("three");
list.prepend("two");
list.prepend("one");
list.append("four");
list.append("five")

// console.log(list.size())
// console.log(list.first());
// console.log(list.tail())
// console.log(list.at(2));
// list.pop();
console.log(list.toString());
console.log(list);
