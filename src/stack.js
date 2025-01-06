const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.items = [];
  }

  /**
   * Adds an element to the stack.
   * @param {any} item The element to add.
   */
  push(item) {
    this.items.push(item);
  }

  /**
   * Returns the top element from the stack without deleting it.
   * @returns {any} The top element, or undefined if the stack is empty.
   */
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.items.length - 1];
  }

  /**
   * Removes and returns the top element from the stack.
   * @returns {any} The top element, or undefined if the stack is empty.
   */
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items.pop();
  }

  /**
   * Checks if the stack is empty.
   * @returns {boolean} True if the stack is empty, false otherwise.
   */
  isEmpty() {
    return this.items.length === 0;
  }
}


module.exports = {
  Stack
};
