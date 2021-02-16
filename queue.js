function createQueue() {
  return {
    elements: [],
    size() {
      return this.elements.length;
    },
    add(element) {
      return this.elements.push(element);
    },
    peek() {
      //return this.elements[0]
      return [...this.elements].shift()
    },
    dequeue() {
      if (this.elements.length === 0) throw new Error;

      return this.elements.shift()
    }
  }
}

module.exports = { createQueue }
