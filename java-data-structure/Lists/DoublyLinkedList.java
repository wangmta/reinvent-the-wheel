package DataStructure.Lists;

class Link {
    public int value;
    public Link next;
    public Link previous;

    public Link(int value) {
        this.value = value;
    }

    public void displayLink() {
        System.out.println(value + "");
    }
}

public class DoublyLinkedList {
    private Link head;
    private Link tail;
    private int size;

    // default constructor
    public DoublyLinkedList(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // another constructor
    public DoublyLinkedList(int[] array){
        if(array == null) throw new NullPointerException();
        for(int i : array){

        }
        size = array.length;
    }

    public void insertHead(int x) {
        Link newLink = new Link(x);
        if(size == 0) {
            tail = newLink;
            head = tail;
        }else {
            head.previous = newLink;
            newLink.next = head;
            head = newLink;
        }
        size++;
    }

    public void insertTail(int x) {
        Link newLink = new Link(x);
        newLink.next = null;
        if(size == 0) {
            tail = newLink;
            head = tail;
        } else {
            tail.next = newLink;
            newLink.previous = tail;
            tail = newLink;
        }
        size++;      
    }

    public void insertElementByIndex(int x, int index) {
        if(index > size) throw new IndexOutOfBoundsException("Index: " + index + ", Size: " + size);
        if(index == 0) {
            insertHead(x);
        }else{
            if(index == size){
                insertTail(x);
            }else{
                Link newLink = new Link(x);
                Link current = head;
                for (int i = 0; i < index - 1; ++i) {
                    current = current.next;
                }
                newLink.next = current.next;
                current.next.previous = newLink;
                newLink.previous = current;
                current.next = newLink;
            }
        }
        size++;
    }

    public void deleteHead(){
        Link destroy = head;
        head = head.next;

        if(head == null) {
            tail = null;
        }else{
            head.previous = null;
        }
        destroy = null;
        size--;
    }

    public void deleteTail(){
        Link destroy = tail;
        tail = tail.previous;

        if(tail == null) {
            head = null;
        }else{
            tail.next = null;
        }
        destroy = null;
        size--;
    }

    public void delete(int x){
        Link current = head;

        while(current.value != x) {
            if(current != tail) {
                current = current.next;
            }else {
                throw new RuntimeException("The element to be deleted does not exist!")
            }
        }
    }
}