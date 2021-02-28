class Node {
    constructor(val) {
        this.val = val;
        this.right = null;
        this.left = null;
    }
}
class BinarySearchTree {
    constructor(val) {
        this.root = null;
    }

    /* 
        base Condition : 
            this.root === null; --> Insert here
        
    */
    insert(value) {
        if (!this.root) {
            this.root = new Node(value)
        }
        this.insert()
    }
}