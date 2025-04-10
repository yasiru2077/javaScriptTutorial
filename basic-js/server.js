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

const item1 = [
  ["x", "y", "z"],
  ["x1", "y1", "z1"],
];

for (let index = 0; index < item.length; index++) {
  const element = item[index];
  console.log(element);
}

item.forEach((item) => console.log(item));
item1.map((i) => console.log("map",i));

// Arrays & Objects

const fruits = [`apple`, `banana`];

fruits.push("cherry");

console.log("second:", fruits[1]);

const user = { name: "Tom", age: 22 };
console.log(user.name);


