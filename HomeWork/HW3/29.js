//29. Write a JavaScript function to get the function name. 

function getFunctionName(func) {
    return func.name;
}
function sampleFunction() {}
console.log(getFunctionName(sampleFunction));