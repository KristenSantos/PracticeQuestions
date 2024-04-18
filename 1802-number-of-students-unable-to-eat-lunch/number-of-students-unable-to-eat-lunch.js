/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {

    while(sandwiches.length > 0 && students.includes(sandwiches[0])){
            if(students[0] === sandwiches[0]){
                students.shift();
                sandwiches.shift();
            } else {
                student = students.shift();
                students.push(student);
            }
        
    }
    return students.length;
    
};