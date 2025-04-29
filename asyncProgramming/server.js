let a = 1;
let b = 2;

setTimeout(() => {
  console.log(`Async`);
}, 100);

// fetch("/").then(function () {
//   console.log(`fetch`);
// });

console.log(`synchronous`);

console.log(a);
console.log(b);

// timeout example

const pizzaList = {
  margherita: 550.0,
  pepperoni: 650.0,
  vegetarian: 600.0,
  hawaiian: 700.0,
  bbq_chicken: 750.0,
  mushroom: 580.0,
  custom: "variable",
  meat_lovers: 800.0,
  buffalo_chicken: 720.0,
  spinach_and_feta: 630.0,
  italian_sausage: 680.0,
  supreme: 780.0,
  white_pizza: 620.0,
  four_cheese: 670.0,
  pesto_and_tomato: 640.0,
  mediterranean: 710.0,
  vegan_delight: 730.0,
  spicy_italian: 690.0,
  chicken_alfredo: 760.0,
  bacon_cheeseburger: 820.0,
};

function getPizzaList(params) {
  for (const key in params) {
    console.log(`${key}:${params[key]}`);
  }
}

setTimeout(() => {
  getPizzaList(pizzaList);
}, 1000);
