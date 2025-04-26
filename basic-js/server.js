const person = {
  name: "John",
  age: "30",
  hobbies: ["reading", "gaming"],
};

function greet(name) {
  return `Hello, ${name}!`;
}

const message = greet(`Alice`);

console.log(message);

const add = (a, b) => a + b;

add(2, 4);

// loops
const item = ["apple", "banana", "cherry"];

const item1 = [["x"], ["x", "y"], ["x", "y", "z"], ["x1", "y1", "z1", "r1"]];

for (let index = 0; index < item.length; index++) {
  const element = item[index];
  console.log(element);
}

console.log("second items list:");
for (let index = 0; index < item1.length; index++) {
  const element = item1[index];

  console.log(element);
  // while (condition) {

  // }
  let word = "";
  for (let index = 0; index < element.length; index++) {
    const element2 = element[index];
    word += element2;
  }
  console.log(word);
}

item.forEach((item) => console.log("foreach:", item));
item1.map((i) => console.log("map:", i));

// two pointer method

const numbers = [1, 2, 3, 4, 5];

function arrayReverseTwiPointer(number) {
  let temp;
  for (let first = 0, last = number.length - 1; first < last; first++, last--) {
    temp = number[first];
    number[first] = number[last];
    number[last] = temp;
  }
  return number;
}

const twoPointers = arrayReverseTwiPointer(numbers);
console.log("reverse array:", twoPointers);

// Arrays & Objects

const fruits = [`apple`, `banana`];

fruits.push("cherry");

console.log("second:", fruits[1]);

const user = { name: "Tom", age: 22 };
console.log(user.name);

// Destructuring

const users = { name: "Alice", age: 30 };
const { name, age } = users;

console.log(users.name);

// Template Literals

const msg = `Hello, ${users.name}`;

console.log(msg);

// Spread Operator

const arr = [1, 2];

const newArr = [...arr, 3];

console.log(newArr);

const numbersArr = [1, 2, 3, 4, 5, 6, 7];

const newNumbersArr = [8, 9, 10];

const newNumbersArr1 = [11, 12, 13, 14];

const connected = [...numbersArr, ...newNumbersArr, ...newNumbersArr1];

console.log(connected);

// Function Expression

const firstName = "jane";

const greet1 = function (params) {
  return `Hello, ${params}`;
};

greet1(firstName);

const greet2 = (name) => `Hell, ${name}`;

greet2(firstName);

// Asynchronous JavaScript

// setTimeout

console.log("Start");

setTimeout(() => {
  console.log("Times up");
}, 3000);

console.log("End");

// promises

const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data loaded!"), 2000);
  });
};

getData().then((data) => console.log(data));

// fetch + async/await

async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data[0]);
}

const fetchArrowFun = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    console.log(data[0]);
  } catch (error) {
    console.error("error is:",error);
  }
};

// fetchUsers();
fetchArrowFun();

// Array Method

// map() - transform items

const nums = [1, 2, 3];

const doubled = nums.map((n) => n * 2);

// filter() - remove some items

const even = nums.filter((n) => n % 2 === 0);
console.log(even);

// reduce() - sum  or combine

const total = nums.reduce((acc, curr) => acc + curr, 0);
console.log(total);

// Modren JS Features

// Destructing

const fruitMarket = { fruit: "banana", price: 20 };
const { fruit, price } = fruitMarket;
console.log(fruitMarket);

// Spread & Rest

const more = [...nums, 4];

function sum(...args) {
  return args.reduce((a, b) => a + b, 0);
}

const customer = {
  name: "Alex",
  address: {
    city: "Paris",
    code: "8000",
    Home_address: { lane: "bope cross rd", city: "galle" },
  },
};

console.log(customer?.name);
console.log(customer.address?.city);
console.log(customer.address?.code);
console.log(customer.address.Home_address?.city);

// OOP

class Car {
  constructor(brand) {
    this.brand = brand;
  }

  honk() {
    return `${this.brand} says beep beep!`;
  }
}

const myCar = new Car("Tesla");
console.log(myCar.honk());

class Animal {
  constructor(animal, sound) {
    this.animal = animal;
    this.sound = sound;
  }

  makeSound() {
    return `${this.animal} says ${this.sound}`;
  }
}

const myAnimal = new Animal("Cow", "Mow");

console.log(myAnimal.makeSound());
