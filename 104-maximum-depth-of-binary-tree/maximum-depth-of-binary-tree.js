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
 * @return {number}
 */
var maxDepth = function(root) {
    const stack = [[root, 1]];
    let max = 0;

    while(stack.length > 0){
        let current = stack.pop();
        let node = current[0];
        let height = current[1];

        if(node !== null){
            max = Math.max(max, height);
            stack.push([node.left, height+1])
            stack.push([node.right, height+1])
        }
    }
    console.log(max)
    return max
}