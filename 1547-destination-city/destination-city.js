/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    let current = new Set();
    let destination = new Set();
    for(let i = 0; i < paths.length; i++){
        [curr, des] = paths[i];
        current.add(curr);
        destination.add(des)
    }
    for(let visit of destination) {
        if(!current.has(visit)){
            return visit
        }
    }


};