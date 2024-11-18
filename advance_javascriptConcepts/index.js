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

// asynchronous operations - query a data base, fetching a file,gathering resources

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

fetchData((data) => console.log(data));

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

// Promise = An object that manages asynchronous operations.
// Wrap a promise Object around asynchronous code
// promise object promise to return a value
// In a use case if there is a task if the task is resovled

// let myPromise = new Promise(function (myResolve, myReject) {
//   // "Producing Code" (May take some time)

//   myResolve(); // when successful
//   myReject(); // when error
// });

// "Consuming Code" (Must wait for a fulfilled Promise)
// myPromise.then(
//   function (value) {
//     /* code if successful */
//     console.log("successful");

//   },
//   function (error) {
//     /* code if some error */
//     console.log("error");

//   }
// );

// example simulate ordering a pizza

function orderPizza(pizzaType) {
  return new Promise((resolve, reject) => {
    console.log(`Ordering a ${pizzaType} pizza`); // what is trying to achieve

    setTimeout(() => {
      if (pizzaType) {
        resolve(`${pizzaType} pizza is ready! 🍕`);
      } else {
        reject("You didn't choose a pizza! 😞");
      }
    }, 3000); // simulate a 3 second delay
  });
}

orderPizza("")
  .then((message) => {
    console.log(message);
    console.log("Eating the pizza! ❤️😁👍");
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("Done with the pizza process!");
  });

//  Async/Await

// A cleaner syntax for working with promises.

async function fetchData() {
  try {
    const data = await new Promise((resolve) => resolve("Fetched data"));
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

fetchData();

