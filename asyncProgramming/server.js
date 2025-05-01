// let a = 1;
// let b = 2;

// setTimeout(() => {
//   console.log(`Async`);
// }, 100);

// console.log(`synchronous`);

// console.log(a);
// console.log(b);

// // timeout example

// const pizzaList = {
//   margherita: 550.0,
//   pepperoni: 650.0,
//   vegetarian: 600.0,
//   hawaiian: 700.0,
//   bbq_chicken: 750.0,
//   mushroom: 580.0,
//   custom: 1000,
//   meat_lovers: 800.0,
//   buffalo_chicken: 720.0,
//   spinach_and_feta: 630.0,
//   italian_sausage: 680.0,
//   supreme: 780.0,
//   white_pizza: 620.0,
//   four_cheese: 670.0,
//   pesto_and_tomato: 640.0,
//   mediterranean: 710.0,
//   vegan_delight: 730.0,
//   spicy_italian: 690.0,
//   chicken_alfredo: 760.0,
//   bacon_cheeseburger: 820.0,
// };

// function getPizzaList(params) {
//   for (const key in params) {
//     console.log(`${key}:${params[key]}`);
//   }
// }

// setTimeout(() => {
//   getPizzaList(pizzaList);
// }, 1000);

// synchronous

console.log(" I ");
console.log(" eat ");
console.log(" ice cream");
console.log(" with a ");
console.log(" spoon ");

setTimeout(() => {
  console.log("hi mom");
}, 3000);

// callback

// example1

function one(call_two) {
  console.log("step 1 complete. please call step 2");
  call_two();
}

function two() {
  console.log("step 2");
}

one(two);

// example2

let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let order = (Fruit_name, call_production) => {
  //   console.log("order placed, please call production");
  setTimeout(() => {
    console.log(`${stocks.Fruits[Fruit_name]} was selected.`);
    call_production();
}, 2000);
};

let production = () => {
  //   console.log("order received, starting production");
  setTimeout(() => {
    console.log("production has started");
  }, 0);
};

order(0, production);
