class Node{
  constructor(value){
    this.value = value
    this.left = null
    this.right = null
  }
}

class BST{
  constructor(){
    this.root = null
  }

  insert(val){
    let node = new Node(val)

    if(this.root === null){
      this.root = node
      return this
    }

    let current = this.root

    while(current){
      if(val === current.val) return undefined

      if (val < current.val){
        if(current.left === null){
          current.left = node
          return this
        }

        current = current.left


      }else{
        if(current.right === null){
          current.right = node
          return this
        }
        current = current.right
      }
      
    }

  }

  // insert(value){
  //       var newNode = new Node(value);
  //       if(this.root === null){
  //           this.root = newNode;
  //           return this;
  //       }
  //       let current = this.root;
  //       while(current){
  //           if(value === current.value) return undefined;
  //           if(value < current.value){
  //               if(current.left === null){
  //                   current.left = newNode;
  //                   return this;
  //               }
  //               current = current.left;
  //           } else {
  //               if(current.right === null){
  //                   current.right = newNode;
  //                   return this;
  //               } 
  //               current = current.right;
  //           }
  //       }
  //   }

  print(){
      let output = JSON.stringify(this)
      return output
    }
}







// const tree = new BST()

// tree.root = new Node(10)
// tree.root.left = new Node(4)
// tree.root.right = new Node(15)
// tree.root.left.left = new Node(3)
// tree.root.left.right = new Node(6)
// tree.root.right.left = new Node(14)
// tree.root.right.right = new Node(20)
// tree.root.right.right.left = new Node(19)

// console.log(tree.print())


const tree = new BST()

tree.insert(10)
tree.insert(2)
tree.insert(20)



console.log(tree.print())
