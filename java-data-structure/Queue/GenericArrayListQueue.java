package DataStructure.Queues;
import java.util.ArrayList;

public class GenericArrayListQueue<T> {
    ArrayList<T> _queue = new ArrayList<T>();

    private boolean hasElements() {
        return !_queue.isEmpty();
    }

    public T peek() {
        T result = null;
        if(this.hasElements()) {
            result = _queue.get(0);
        }
        return result;
    }

    public boolean enqueue(T item) {
        return _queue.add(item);
    }

    public T dequeue() {
        T result = null;
        if(hasElements()) {
            result = _queue.remove(0);
        }
        return result;
    }
}