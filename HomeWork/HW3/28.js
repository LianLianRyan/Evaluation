//28. Write a JavaScript program to pass a 'JavaScript function' as parameter. 

function executeFunction(fn) {
    return fn();
}
console.log(executeFunction(() => "Hello from function!"));