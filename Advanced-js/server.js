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

function ClosureExample1(param) {
  let age = param;

  return () => {
    age++;
    console.log("users age after a year:", age);
  };
}

const daughter = ClosureExample1(10);
const father = ClosureExample1(40);

daughter();
father();

// Synchronous VS. Asynchronous JavaScript

// Synchronous JavaScript

console.log("First");
console.log("Second");
console.log("Third");

// Asynchronous JavaScript

console.log("Start");
setTimeout(() => {
  console.log("Middle");
}, 3000);

console.log("End");

//Callbacks

function fetchData(callback) {
  setTimeout(() => {
    callback("data fetched");
  }, 1000);
}

fetchData((data) => console.log(data));

// callback example with multiple operations

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

//callback hell

// fetchUserData(function (userData) {
//   getPermissions(userData.id, function (permissions) {

//   });
// });

// Promises

// Async/Await

// "this" keyword

const obj = {
  name: "Alice",
  greet() {
    console.log(`hello, ${this.name}`);
  },
};

obj.greet();

const greetFunction = obj.greet;

greetFunction();

// Binding "this" (controlling value of "this")

const boundGreet = obj.greet.bind(obj);

boundGreet();

const obj2 = {
  name: "Bob",
  delayedGreet() {
    setTimeout(() => {
      console.log(`Hello, ${this.name}`);
    }, 1000);
  },
};

obj2.delayedGreet();

const greetDelayedFunction = obj2.delayedGreet.bind(obj2);

greetDelayedFunction();

function introduce(greeting) {
  console.log(`${greeting}, I am ${this.name}`);
}

introduce.call(obj, "hi");
introduce.call(obj, ["Hello"]);

// Prototypes and inheritance

// Constructor Functions and Prototypes

function Person(name) {
  this.name = name;
}


