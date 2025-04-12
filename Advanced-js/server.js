// Closures and Lexical Scope

// Lexical Scope

function outer() {
    let outerVar = "I am outer";
    
    function inner() {
      console.log(outerVar); // Accessible due to lexical scope
    }
    
    inner();
  }
  
 console.log(outer()); 

// Closures

function outer() {
    // let count 
}

// Synchronous VS. Asynchronous JavaScript

//Callbacks

// Promises

// Async/Await
