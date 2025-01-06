const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  root() {
    return this.root;
  }

  add(data) {
    if (this.root === null) {
      this.root = new Node(data);
      return;
    }

    let current = this.root;
    while (true) {
      if (data < current.data) {
        if (current.left === null) {
          current.left = new Node(data);
          return;
        } else {
          current = current.left;
        }
      } else {
        if (current.right === null) {
          current.right = new Node(data);
          return;
        } else {
          current = current.right;
        }
      }
    }
  }

  has(data) {
    if (this.root === null) {
      return false;
    }

    let current = this.root;
    while (current !== null) {
      if (data === current.data) {
        return true;
      } else if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  find(data) {
    if (this.root === null) {
      return null;
    }

    let current = this.root;
    while (current !== null) {
      if (data === current.data) {
        return current;
      } else if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return null;
  }

  remove(data) {
    if (this.root === null) {
      return;
    }

    let parent = null;
    let current = this.root;

    while (current !== null) {
      if (data === current


module.exports = {
  BinarySearchTree
};
