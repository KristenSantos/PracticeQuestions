// class MyQueue {
//     constructor() {
//         this.stack1 = [];
//         this.stack2 = [];
//     }

//     push(x) {
//         this.stack1.push(x);
//     }

//     pop() {
//         if(this.stack2.length === 0){
//             this.transferStack1()
//         }

//         return this.stack2.pop();
//     }

//     peek() {
//         if(this.stack2.length === 0 ){
//             this.transferStack1()
//         }

//         return this.stack2[this.stack2.length-1]
//     }

//     empty() {
//         return this.stack1.length === 0 && this.stack2.length === 0;
//     }

//     transferStack1() {
//         while(this.stack1.length > 0){
//             this.stack2.push(this.stack1.pop());
//         }
//     }
// }






var MyQueue = function(){
    this.stack1 = [];
    this.stack2 = [];
}



/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stack1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
        if(this.stack2.length === 0){
            this.transferStack1()
        }

        return this.stack2.pop();  
};

/**
 * @return {number}
 */

MyQueue.prototype.peek = function() {
        if(this.stack2.length === 0 ){
            this.transferStack1()
        }
        return this.stack2[this.stack2.length-1]
};

MyQueue.prototype.transferStack1 = function() {
    while(this.stack1.length > 0){
             this.stack2.push(this.stack1.pop());
}
}
/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.stack1.length === 0 && this.stack2.length === 0;
    
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */