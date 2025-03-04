/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let rows = grid.length;
    let cols = grid[0].length;
    const visited = new Set();
    let maxArea = 0;

    const bfs = (r,c) => {
        const queue = [];
         let currArea = 1;
        queue.push([r,c]);
        visited.add(`${r},${c}`);
        
        while(queue.length > 0){
            let [row,col] = queue.shift();
            const directions = [[0,1],[0,-1],[1,0],[-1,0]]

        for(let [dr, dc] of directions){
            let nr = row + dr
            let nc = col + dc

            if(nr < rows && nc < cols && nr >= 0 && nc >= 0 && !visited.has(`${nr},${nc}`) && grid[nr][nc] === 1){
                queue.push([nr,nc]);
                visited.add(`${nr},${nc}`);
                currArea++;
            }
            }
        }
        return currArea
    };

    for(let row = 0; row < rows; row++){
        for(let col = 0; col < cols; col++){
            if(!visited.has(`${row},${col}`) && grid[row][col] === 1){
                maxArea = Math.max(maxArea, bfs(row,col))
                
            }
        }
    }




    return maxArea
};