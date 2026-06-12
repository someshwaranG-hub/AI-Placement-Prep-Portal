"""
Problem: Binary Tree Traversal
Level: Advanced
Topic: Trees, DFS/BFS

Description:
Implement In-order, Pre-order, and Post-order traversals for a binary tree.

Tree Structure:
       1
      / \
     2   3
    / \
   4   5

Expected Output:
In-order: [4, 2, 5, 1, 3]
Pre-order: [1, 2, 4, 5, 3]
Post-order: [4, 5, 2, 3, 1]

Your Task:
1. Create a TreeNode class
2. Implement three traversal methods
3. Test with the given tree
"""

# Solution:
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def inorder(root, result=[]):
    if root is None:
        return result
    inorder(root.left, result)
    result.append(root.val)
    inorder(root.right, result)
    return result

def preorder(root, result=[]):
    if root is None:
        return result
    result.append(root.val)
    preorder(root.left, result)
    preorder(root.right, result)
    return result

def postorder(root, result=[]):
    if root is None:
        return result
    postorder(root.left, result)
    postorder(root.right, result)
    result.append(root.val)
    return result

# Create tree
root = TreeNode(1)
root.left = TreeNode(2)
root.right = TreeNode(3)
root.left.left = TreeNode(4)
root.left.right = TreeNode(5)

print("In-order:", inorder(root, []))
print("Pre-order:", preorder(root, []))
print("Post-order:", postorder(root, []))
