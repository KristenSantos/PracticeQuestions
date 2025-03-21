/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let stack = [];
    let newPath = path.split("/")
    console.log(newPath)

    for(let i = 0; i < newPath.length; i++){
        console.log(stack)
        if(newPath[i] === '..'){
            stack.pop()
        } else if(newPath[i] === '.' ||  newPath[i] === ''){
            continue;
        }else {
            stack.push(newPath[i])
        }
        
    }

    const newstring = stack.join("/")
    return '/'+newstring

    
};