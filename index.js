function createBank() {
  let balance = 0;

  return {
    deposit: function (amount) {
      balance += amount;
    },
    withdraw: function (amount) {
      if (balance >= amount) {
        balance -= amount;
        return amount;
      } else {
        return console.log("balance is too low");
      }
    },
    getBalance: function () {
      return balance;
    },
  };
}

const myBank = createBank();
myBank.deposit(1000);

console.log(myBank.getBalance());

let person = {
  name: "noel",
  age: 20,
  city: "galle",
};

console.log(person);
console.log(person.city);

const personNew = {
  name: "noel",
  age: 20,
  city: "galle",
  sayHello: function () {
    return `Hello! Iam ${this.name}`;
  },
};

console.log(personNew.sayHello());

const fruitsNew = ["apple", "banana", "orange"];

// fruits.push("grape");            // Add to end
// fruits.pop();                    // Remove from end
// fruits.unshift("lemon");         // Add to start
// fruits.shift();                  // Remove from start

// for (let index = 0; index < fruitsNew.length; index++) {
//     const element = fruitsNew[index];
//     console.log(fruitsNew.pop(element));
// }

// console.log(fruitsNew);

fruitsNew.forEach((fruitsNew) => console.log(fruitsNew));
const upperFruits = fruitsNew.map((fruitsNew) => fruitsNew.toUpperCase());
console.log(upperFruits);

let numbers = [1, 2, 3, 4, 5];
let colors = ["red", "blue", "green"];

let car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020,
  isElectric: false,
};

console.log(car.brand);
console.log(numbers.length);

for (let num of numbers) {
  console.log(num);
}

let arr = [1, 2, 3, 4, 5, 6];

let doubled = arr.map((num) => num * 2);

let evenNums = arr.filter((num) => num % 2 === 0);
console.log(evenNums);

let found = arr.find((num) => num > 2);
console.log(found);
