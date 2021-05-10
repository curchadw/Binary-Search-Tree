class Node{
  constructor(value){
    this.value = value
    this.left = null
    this.right = null
    this.count = 0 //tracks the number of children for that node
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

    const addSide = side =>{
      if (!current[side]){
        current[side] = node
        return this
      }
      current = current[side]
    }

    while(true){
      if(val === current.value){
        current.count++
        return this
      }

      if(val < current.value){
        addSide('left')
      } else{ 
        addSide('right')
      }
    }
      
  }

  



  


  find(val){
  if (!this.root){
    return false
  }

  let current = this.root

  let located = false

  while (current && !located){
    if (val < current.value){
      current = current.left
    } else if (val > current.rigth){
      current = current.right
    }else{
      located = true
    }

  }

  if (!located) return "Doesn't exist in tree"

  return located

  
}

//case 1: if node is a leaf(no children), just simply delete if
//case 2: if node has one child
//case 2: if node has two children

//First we have to find the value
BFS(start){
  let data = [],
      queue = [],
      current = start ? this.find(start) : this.root

  queue.push(current);
  while (queue.length){
    current = queue.shift()
    data.push(current.value)

    if (current.left) queue.push(current.left)
    if (current.right) queue.push(current.right)
  }

  return data
}



remove(val){
  if(!this.root) return undefined
  let current = this.root, parent
  
  
    //setting up the cases of going left or right depending on the value
    const pickSide = side =>{
      if (!current[side]) return null

      parent = current
      current = current[side]
    }

    const deleteNode = side =>{
      //the case of deleting a leaf node(has no children)
      if(current.value === val && current.count > 1) current.count--;
      else if (current.value === val){
      const children = this.BFS(current.value);
      parent[side] = null;
      children.splice(0, 1);
      children.forEach(child => this.create(child));
      }
    }

    while(current.value !== val){
      if(val < current.value){
        pickSide('left')
        deleteNode('left')
      }else{
        pickSide('right')
        deleteNode('right')
      }
    }
  

  return current
}

  

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



// console.log(tree.print())

tree.remove(2)

console.log(tree.print())


