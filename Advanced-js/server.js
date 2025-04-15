// Closures and Lexical Scope

// Lexical Scope

function outer() {
  let outerVar = "I am outer";

  function inner() {
    console.log(outerVar); // Accessible due to lexical scope
  }

  inner();
}

outer();

// Closures

function Closures() {
  let count = 0;

  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = Closures();

counter();
counter();
counter(); 


// Synchronous VS. Asynchronous JavaScript

//Callbacks

// Promises

// Async/Await
