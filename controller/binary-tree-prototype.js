function BinaryTree() {
    function tree() {
        this.root = null
    }

    tree.prototype.create = function (value) {
        let node = {
            value: value,
            left: null,
            right: null
        }

        if(this.root === null) this.root = node
        else{
            this.addChild(this.root , node )
        }
    }

    tree.prototype.addChild = function (parentNode , node) {
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

    this.tree = new tree()
    return this
}

BinaryTree.prototype.show = function () {
    console.log(this.tree.root)
}

BinaryTree.prototype.create = function (data) {
    this.tree.create(data)
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

binaryTree.show()