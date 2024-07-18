// Breath First Search (BFS)

// Function to perform level order traversal of a binary tree
function printLevelOrder(root) {
    // Create a deque to store nodes for traversal
    const queue = new Deque();
    // Add the root node to the queue
    queue.enqueue(root);
    // Continue traversal until the queue is empty
    while (!queue.isEmpty()) {
        // Remove and get the first node from the queue
        const tempNode = queue.dequeue();
        // Print the data of the current node
        console.log(tempNode.data + " ");

        // Enqueue the left child if it exists
        if (tempNode.left !== null) {
            queue.enqueue(tempNode.left);
        }
        // Enqueue the right child if it exists
        if (tempNode.right !== null) {
            queue.enqueue(tempNode.right);
        }
    }
}
