class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinaryTree {
    constructor() {
        this.root = null
    }

    create(value) {
        let node = new Node(value)

        if(this.root === null) this.root = node
        else{
            this.addChild(this.root , node )
        }
    }

    addChild(parentNode , node) {
        if(parentNode.value > node.value) {
            if(parentNode.left == null) parentNode.left = node
            else {
                this.addChild(parentNode.left , node)
            }
        }else if(parentNode.value < node.value) {
            if(parentNode.right == null) parentNode.right = node
            else {
                this.addChild(parentNode.right , node)
            }
        }
    }

    show() {
        console.log(this.root)
    }
}

let binaryTree = new BinaryTree()

binaryTree.create(8) // negro
binaryTree.create(3) // rojo
binaryTree.create(10) // rojo
binaryTree.create(14)
binaryTree.create(1) // null
binaryTree.create(6)
binaryTree.create(11)
binaryTree.create(13)
binaryTree.create(9)

//console.log(JSON.stringify(binaryTree.root))
binaryTree.show()