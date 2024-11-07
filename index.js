console.log("hey");

// undefined : variable is declared but no value is assigned
let userAge;
console.log(userAge);

// null : value is assiged ("no value" or "empty value")
let userEmail = null;
console.log(userEmail);

let isLooseEqual = 5 == "5";

console.log(isLooseEqual);

function greet(name) {
  return `Hello, ${name}!`;
}

const sayHi = function(name) {
    return `Hi, ${name}!`;
};

let globalVar = "I'm global";

function scopeExample() {
    let localVar = "I'm local";
    console.log(globalVar);  // Accessible
    console.log(localVar);   // Accessible
}

function createCounter() {
    let count = 0;
    return function() {
        return ++count;
    };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 2


