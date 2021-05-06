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

  print(){
    stringify.JSON(tree)
  }
}


const tree = new BST()

tree.root = new Node(10)
tree.root.left = new Node(4)
tree.root.right = new Node(15)
tree.root.left.left = new Node(3)
tree.root.left.right = new Node(6)
tree.root.right.left = new Node(14)
tree.root.right.right = new Node(20)
tree.root.right.right.left = new Node(19)

console.log(tree)

