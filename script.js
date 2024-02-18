class Node {
  constructor(value, node){

    this.value = value ? value : null;
    this.next = node ? node: null;

  }
}



class LinkedList {
  constructor(){

    this.head = null;

  }

  lastNode(node){
    if(node.next === null){
      return node;
    } 
  
    return this.lastNode(node.next);
  
  }


  append(value){

    if(this.head === null){
      this.head = new Node(value);
      return;
    } 

    let nullNode = this.lastNode(this.head);
    nullNode.next = new Node(value);

  }

  prepend(value){

    const node = new Node(value, this.head);
    this.head = node;

  }

  size(){

    let length = 0;
    let node = this.head;
    while(!(node === null)){
      node = node.next;
      ++length;
    }
    return length;
  }

  first (){

    return this.head;

  }


}





const list = new LinkedList();

list.prepend("three");
list.prepend("two");
list.prepend("one");
list.append("four");
list.append("five")

console.log(list.size())
console.log(list.first());
console.log(list.lastNode(list.head))
console.log(list);
