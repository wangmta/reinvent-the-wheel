package DataStructure.Lists;

import java.util.StringJoiner;

class Node<T> {
    int value;
    Node next;
    // default Constructor
    Node(){}
    // Constructor with value input
    Node(int value) {
        this(value, null);
    }
    // Constructor with value & next inputs
    Node(int value, Node next){
        this.value = value;
        this.next = next;
    }
}


public class SinglyLinkedList {
    private Node head;
    private int size;
    public SinglyLinkedList(){
        head = null;
        size = 0;
    }

    // insert an element at the head of the list
    public void insertHead(int data) {
        insertNth(data, 0);
    }

    // insert an element at the tail of the list
    public void insert(int data) {
        insertNth(data, size);
    }

    // insert an item at nth position
    public void insertNth(int data, int position) {
        checkBounds(position, 0, size);
        Node newNode = new Node(data);
        //empty list
        if(head == null){
            head = newNode;
            size++;
            return;
        }else if(position == 0) {
            //insert at the head of the list
            newNode.next = head;
            head = newNode;
            size++;
            return;
        }
        Node current = head;
        for(int i = 0; i < position - 1; ++i){
            current = current.next;
        }
        newNode.next = current.next;
        size++;
    }

    public void checkBounds(int position, int low, int high) {
        if(position > high || position < low) {
            throw new IndexOutOfBoundsException(position + "");
        }
    }

    public void deleteHead(){

    }

    public void delete(){}

    // delete a node at nth position
    public void deleteNth(int position){
        checkBounds(position, 0, size - 1);
        if(position == 0){
            Node destroy = head;
            head = head.next;
            destroy = null;
            size--;
            return;
        }
        Node current = head;
        for(int i = 0; i < position - 1; ++i){
            current = current.next;
        }
        Node destroy = current.next;
        current.next = current.next.next;
        destroy = null;
        size--;
    }

    public void clear() {
        Node current = head;
        while (current != null){
            Node previous = current;
            current = current.next;
            previous = null;
        }
        head = null;
        size = 0;
    }

    public boolean isEmpty() {
        return size == 0;
    }

    public int size() {
        return size;
    }

    public Node getHead() {
        return head;
    }

    // calculate the count of the list manually
    public int count() {
        int count = 0;
        Node current = head;
        while(current != null) {
            current = current.next;
            count++;
        }
        return count;
    }

    public boolean search(int key) {
        Node current = head;
        while(current != null) {
            if(current.value == key){
                return true;
            }
            current = current.next;
        }
        return false;
    }

    public int getNth(int index) {
        checkBounds(index, 0, size);
        Node current = head;
        for(int i = 0; i < index; ++i){
            current = current.next;
        }
        return current.value;
    }

    @Override
    public String toString(){
        StringJoiner joiner = new StringJoiner("->");
        Node current = head;
        while(current != null) {
            joiner.add(current.value + "");
            current = current.next;
        }
        return joiner.toString();
    }

    public static void main(String[] arg) {

    }
} 