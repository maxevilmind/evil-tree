class Node {
    constructor(value) {
      this.value = value;
      this.right = undefined;
      this.left = undefined;
    }
    getValue() {
      return this.value;
    }
  }
  class Btree {
    constructor() {
      this.root = undefined;
    }
    add(node, root = this.root) {
      if (!this.root) {
        this.root = node;
      } else {
        if (root.value < node.value) {
          if (!root.right) {
            root.right = node;
          } else {
            this.add(node, root.right);
          }
        } else {
          if (!root.left) {
            root.left = node;
          } else {
            this.add(node, root.left);
          }
        }
      }
    }
    search(key, root = this.root) {
      if (!root || root.value === key) {
        console.log("root");
        return root;
      }
      // Key is greater than root's key
      if (root.value < key) {
        return this.search(key, root.right);
      }
      // Key is smaller than root's key
      return this.search(key, root.left);
    }
  }
  
  export { Node, Btree };
  