// Day 17: Data Structures

//Tasks/Activities:


// Activity 1: Linked List

 
//Task 1: Implement a Node class to represent an element in a linked list with properties value and next.

class Node{
    constructor(values){
        this.values = values;
        this.next = null;
    }
}


//Task 2: Implement a LinkedList class with methods to add a node to the end, remove a node from the end, and display all nodes.

class LinkedList{
    constructor(){
        this.head = null;
    }

    add(value){
        const newNode = new Node(value);
        if(this.head === null){
            this.head = newNode;
        }else{
            let current =   this.head;
            while(current.next !== null){
                current = current.next;
            }
            current.next = newNode;
        }
    }

    remove(value){
        if(this.head ===null){
            return null;
        }
        if(this.head.next ===null){
            this.head = null;
            return ;
        }

        let current = this.head;
        while(current.next.next !== null){
            current = current.next;
        }
        current.next = null;
    }
    
    display(){
        let current = this.head;
            while(current != null){
                console.log(current.value);
                current = current.next;
            }
    }
}


//Activity 2 - stack

//Task 3: Implement a Stack class with methods push (add element), pop (remove element), and peek (view the top element).


class stack{
        constructor(){
            this.items = [];

        }
        push(element){
            this.items.push(element);
        }

        pop(){
            if(this.items.length === 0){
                return "Underflow";
            }
            return this.items.pop()
        }

        peek(){
            return this.items[this.items.length-1];
        }
}


  //Task 4: Use the Stack class to reverse a string by pushing all characters onto the stack and then popping them off.

  function reverseString(str){
    let stack  = new Stack();
    for(let char of str){
        stack.push(char);
    }
    let revstr = " ";
    while(stack.items.length>0){
        revstr += stack.pop();
    }
    return revstr;
  }


  // Activity 3: Queue 


  // Task 5:Implement a Queue class with methods enqueue (add element), dequeue (remove element), and front (view the first element).

class Queue {
    constructor(){
        this.items = [];

    }

    add(element){
        this.items.push(element);
    }

    remove(){
        if (this.items.length === 0) return "Underflow";
      return this.items.shift();
    }

    front(){
        if(this.items.length === 0){
            return "no element in queue";
            return this.items[0];
        }
    }
}


// Task 6: Use the Queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order.

class PrinterQueue extends Queue {
    printJob(){
        while(this.items.length>0){
            console.log(`printing ${this.remove()}`);
        }
    }
}


// Activity 4: Binary Tree 

// Task 7: Implement a TreeNode class to represent a node in a binary tree with properties value, left, and right.

class TreeNode{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


  // Task 8: Implement a BinaryTree class with methods for inserting values and performing in-order traversal to display nodes.

  class Binary{
    constructor(){
        this.root = null;
    }

    insert(value){
        const newNode = new TreeNode(element);
        if(this.root == null){
            this.root = newNode;
        }
        else{
            this.insertNode(this.node)
        }
    }
  

  insertNode(node, newNode){
    if(newNode.value < node.value){
        if( node.left == null){
            node.left = newNode;
        }else{
            this.insertNode(node.left,newNode);
        }
    }else{
        if(node.right == null){
            node.right = newNode;
        }else{
            this.insertNode(node.right,newNode);
        }
    }
  }

  inorder(node){
    if(node != null){
        this.inorder(node.left);
        console.log(node.value);
        this.inorder(node.right);
    }
  }
}


// Activity 5: Graph (Optional)


// Task 9: Implement a Graph class with methods to add vertices, add edges, and perform a breadth-first search (BFS).

class Graph{
    constructor(){
        this.adjacencyList = new Map();

    }

    addVertex(vertex){
        if(!this.adjacencyList.has(vertex)){
            this.adjacencyList.set(vertex,[]);
        }
    }

    addEdge(vertex1,vertex2){
        if(this.adjacencyList.has(vertex1)){
            this.adjacencyList.get(vertex1).push(vertex2);
        }
        
        if(this.adjacencyList.has(vertex2)){
            this.adjacencyList.get(vertex2).push(vertex1);
        }
    }

    bfs(start){
        let visited = new set();
        let queue = [start];
        while(queue.length!=0){
            let vertex = queue.shift();
            if(!visited.has(vertex)){
                console.log(vertex);
                visited.add(vertex);
                queue.push(
                    ...this.adjacencyList
                    .get(vertex)
                    .filter((neighbor)=> !visited.has(neighbor))
                );
            }
        }
    }
}


// Task 10: Use the Graph class to represent a simple network and perform BFS to find the shortest path between two nodes.
let g = new Graph();
g.addVertex("1");
g.addVertex("2");
g.addVertex("3");
g.addVertex("4");
g.addVertex("5");
g.addEdge("1", "2");
g.addEdge("1", "3");
g.addEdge("2", "3");
g.addEdge("4", "5");
g.bfs("1");