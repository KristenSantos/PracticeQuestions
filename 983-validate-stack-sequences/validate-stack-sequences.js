/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    const stack = [];
    let poppedPointer = 0;

    for(let num of pushed){
        stack.push(num);

        while(stack.length > 0){
        if(stack[stack.length - 1] === popped[poppedPointer]){
            stack.pop();
            poppedPointer++;
        } else {
            break;
        }
    }

    }
    return stack.length > 0 ?  false :  true

};