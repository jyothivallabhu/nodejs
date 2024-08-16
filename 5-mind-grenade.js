const num1 = 10
const num2 = 5

//here we didnt exported and in app we didnt assigned to variable and invoked but still we can see rseult bcoz we didnt exportted, it actually wraps in function that why when u required u do invoked code 

function addValues() {
    console.log(`the sum of numbers is ${num1} + ${num2}`);
    
}

addValues()