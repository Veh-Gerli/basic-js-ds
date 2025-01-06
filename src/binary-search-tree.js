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
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(value) {
    this.rootNode = addWithin(this.rootNode, value);

    function addWithin(node, value) {
      if (!node) {
        return new Node(value);
      }

      if (node.value === value) {
        return node;
      }

      if (value < node.value) {
        node.left = addWithin(node.left, value);
      } else {
        node.right = addWithin(node.right, value);
      }

      return node;
    }
  }

  has(data) {
    return searchList(this.rootNode, data);

    function searchList(node, data) {
      if (!node) return false;

      if (node.data === data) {
        return true;
      }

      if (data < node.data)
        return searchList(node.left, data)
      else return searchList(node.rigth, data);

    }
  }

  find(data) {
    if (!this.rootNode) return null;
    let node = this.rootNode;
    // while (node.value) node.node.left;

    return null;
  }

  remove(data) {

  }

  min() {
    if (!this.rootNode) return;

    let node = this.rootNode;
    while (node.left) node.node.left;

    return node.value;

  }

  max() {
    if (!this.rootNode) return;

    let node = this.rootNode;
    while (node.rigth) node.node.rigth;

    return node.value;
  }
}

module.exports = {
  BinarySearchTree
};
