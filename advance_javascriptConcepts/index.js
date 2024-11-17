//Advance javascript topics

// closures and lexical scope

//lexical scope

function outer() {
  let outerVar = "I am outer";
  function inner() {
    console.log(outerVar); // Accessible due to lexical scope
  }
  inner();
}

outer();

// closure scope

function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}
const counter = outer();
counter(); // 1
counter(); // 2

/* synchronous means code that executes line by line in 
a sequential manner code that wait for an operation to complete*/

// asynchronous allows operations to performed concurrently without waiting.
// it does not block the execution flow and allows the program to continue.

// asynchronous operations

// timeouts

console.log("Start");
setTimeout(() => console.log("mid"), 3000);
console.log("End");

// callback

function fetchData(callback) {
  setTimeout(() => {
    callback("Data fetched");
  }, 1000);
}

fetchData(data=>console.log(data))

// callback and timeouts use in a single operation

function func1(callback) {
  setTimeout(() => {
    console.log("Task 1");
    callback();
  }, 3000);
}

function func2() {
  console.log("Task 2");
  console.log("Task 3");
  console.log("Task 4");
  console.log("Task 5");
}

func1(func2);


// Promises

console.log();

