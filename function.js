//Question 1
function calculateArea(length, width){
    return length * width;
}

console.log(calculateArea(30,20));
console.log(calculateArea(400,200));
console.log(calculateArea(15,10));



//Question 2
let globalVar = 20;// we declare a global variable 20 outside the function declaration.
function accessingVariables(){
    let localVar = 4;// we declare a local variable 4 inside the function
    console.log(localVar);// The value 4 is printed on the console since a local variable can only be accessed and used inside the function it was declared
    console.log(globalVar);// the value 20 is printed on the console indicating that a global variable can be accessed both inside and outside a function.
}
accessingVariables();// we call the function in order to access the variables both local and global


//Question 3
function counter() {
    let count = 0;  

    function incrementCounter() {
      count++; 
      return count;  
    }

    return incrementCounter;  
  }

  const myCounter1 = counter();
  const myCounter2 = counter();

  console.log(myCounter1()); 
  console.log(myCounter1());  
  console.log(myCounter2());  
  console.log(myCounter2());
  console.log(myCounter2());  
  console.log(myCounter2());  
  



//Question 4
function calculate(num1, num2){
    let myobj = {
        sum : num1 + num2,
        difference : num1 - num2,
        product : num1 * num2,
        quotient : num1 / num2
    }
    return myobj;

}
console.log(calculate(30,20));
console.log(calculate(45,34));


//Question 5
function performOperation(num1, num2, callbackFunction) {
    return callbackFunction(num1, num2);
  }
  function add(var1, var2) {
    return var1 + var2;
  }
  
  function subtract(var1, var2) {
    return var1 - var2;
  }
  
  function multiply(var1, var2) {
    return var1 * var2;
  }
  
  function divide(var1, var2) {
    if (var2 === 0) {
      return "Division by zero is not allowed";
    }
    return var1 / var2;
  }
  
  console.log(performOperation(33, 20, add));  
  console.log(performOperation(40, 18, subtract));  
  console.log(performOperation(132,46, multiply)); 
  console.log(performOperation(78, 4, divide)); 
  