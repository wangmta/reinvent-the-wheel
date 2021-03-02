export interface ILinkedList<T> {
  forEach: (
    callback: (item: T, index: number, list: ILinkedList<T>) => void,
    thisArg: any
  ) => void;
  isEmpty: () => boolean;
  push: (value: T) => void;
  pop: () => T;
  remove: (value: T) => void;
  shift: () => T;
  unshift: (value: T) => void;
}

export interface ILinkedListItem<T> {
  next: ILinkedListItem<T>;
  prev: ILinkedListItem<T>;
  value: T;
}

export class LinkedList<T> {
  public head: ILinkedListItem<T>;
  public tail: ILinkedListItem<T>;
  public length: number = 0;

  public static emptyListItem<T>(): ILinkedListItem<T> {
    return <ILinkedListItem<T>>{ prev: null, value: null, next: null };
  }

  public static newItem<T>(
    prev: ILinkedListItem<T>,
    value: T,
    next: ILinkedListItem<T>
  ): ILinkedListItem<T> {
    return <ILinkedListItem<T>>{ prev, value, next };
  }

  constructor() {
    this.tail.prev = this.head;
    this.head.next = this.tail;
  }

  public forEach(
    callback: (item: T, index: number, list: LinkedList<T>) => void,
    thisArg: any = null
  ): void {
    var currentItem = this.head.next;
  }
}
