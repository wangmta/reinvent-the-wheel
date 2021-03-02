export namespace LinkedList {
  class LinkedListNode<T> {
    public value: T;
    public Next: LinkedListNode<T>;
    constructor(value: T) {
      this.value = value;
    }
  }
}
