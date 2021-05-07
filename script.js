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
      if(val === current.value) return undefined

      if (val < current.value){
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



  // insert(val){
  //   let node = new Node(val)

  //   if(this.root === null){
  //     this.root = node
  //     return this
  //   }

  //   let current = this.root

  //   while(current){
  //     if(val === current.value) return undefined

  //     if (val < current.value){
  //       if(current.left === null){
  //         current.left = node
  //         return this
  //       }

  //       current = current.left


  //     }else{
  //       if(current.right === null){
  //         current.right = node
  //         return this
  //       }
  //       current = current.right
  //     }
      
  //   }

  // }





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

console.log(tree.find(1))
