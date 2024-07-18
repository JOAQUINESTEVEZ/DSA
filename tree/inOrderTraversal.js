// LEFT, ROOT, RIGHT

// Given a binary tree, print its nodes in inorder
function printInorder(node) {
    if (node == null)
        return;

    // First recur on left child */
    printInorder(node.left);

    // Then print the data of node
    console.log(node.key + " ");

    // Now recur on right child
    printInorder(node.right);
}
