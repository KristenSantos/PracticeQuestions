/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let stack = [];

    for(let i = 0; i < s.length; i++){
        stack.push(s[i])
        if(stack[stack.length-1] === stack[stack.length-2]){
            stack.pop();
            stack.pop()
        }
        
    }
    console.log(stack)
    return stack.join("")
    
};