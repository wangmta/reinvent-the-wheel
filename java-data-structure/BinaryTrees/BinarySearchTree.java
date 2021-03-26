public class BinarySearchTree<T extends Comparable<T>>{
    
    private int nodeCount = 0;
    private Node root = null;

    public boolean isEmpty() {
        return nodeCount == 0;
    }

    public boolean contains(T data) {
        return contains(root, data);
    }

    private boolean contains(Node node, T data) {
        if (node == null) return false;
        int cmp = data.compareTo(node.data);
        if (cmp < 0) return contains(node.left, data);
        else if (cmp > 0) return contains(node.right, data);
        else return true;
    }

    public boolean add(T data) {
        if (contains(data)) {
            return false;
        } else {
            root = add(root, data);
            nodeCount++;
            return true;
        }
    }

    private Node add(Node node, T data) {
        if (node == null) {
            node = new Node(null, null, data);
        } else {
            if (data.compareTo(node.data) < 0) {
                add(node.left, data);
            }else {
                add(node.right, data);
            }
        }
        return node;
    }

    private Node findMin(Node node) {
        while(node.left != null) node = node.left;
        return node;
    }

    private Node findMax(Node node) {
        while(node.right != null) node = node.right;
        return node;
    }

    private class Node {
        T data;
        Node left, right;

        public Node(Node left, Node right, T data) {
            this.left = left;
            this.right = right;
            this.data = data;
        }
    }

}