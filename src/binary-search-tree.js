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

  add(data) {
    this.rootNode = addList(this.rootNode, data);

    function addList(node, data) {
      if (!node) return new Node(data);


      if (node.data === data) return node;


      if (data < node.data)
        node.left = addList(node.left, data);
      else
        node.right = addList(node.right, data);

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
      else return searchList(node.right, data);

    }
  }

  find(data) {
    return findList(this.rootNode, data);

    function findList(node, data) {
      if (!node) {
        return null;
      }
      if (data === node.data) {
        return node;
      }
      return data < node.data ? findList(node.left, data) : findList(node.right, data);
    }
  }

  remove(data) {
    this.rootNode = removeNode(this.rootNode, data);

    function removeNode(node, data) {
      if (!node) return null;

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else
        if (node.data < data) {
          node.right = removeNode(node.right, data);
          return node;
        } else {
          if (!node.left && !node.right) return null;

          if (!node.left) {
            node = node.right;
            return node;
          }

          if (!node.right) {
            node = node.left;
            return node;
          }

          let minR = node.right;
          while (minR.left) minR = minR.left;

          node.data = minR.data;
          node.right = removeNode(node.right, minR.data);

          return node;
        }
    }
  }

  min() {
    if (!this.rootNode) return;

    let node = this.rootNode;
    while (node.left) node = node.left;

    return node.data;

  }

  max() {
    if (!this.rootNode) return;

    let node = this.rootNode;
    while (node.right) node = node.right;

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};
