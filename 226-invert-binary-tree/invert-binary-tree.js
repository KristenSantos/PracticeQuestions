/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */


var invertTree = function(root) {
    if(root === null){
        return null
    }
    // Swap left and right leafs 
    let leftPlaceHolder = root.left
    root.left = root.right
    root.right = leftPlaceHolder

    //Make recursive call subtrees 

    invertTree(root.right)
    invertTree(root.left)

    //return tree
    return root
};