// ROOT, LEFT, RIGHT

// Given a binary tree, print its nodes in preorder
function printPreorder(node) {
    if (node == null)
        return;

    // First print data of node
    document.write(node.key + " ");

    // Then recur on left subtree
    printPreorder(node.left);

    // Now recur on right subtree
    printPreorder(node.right);
}
