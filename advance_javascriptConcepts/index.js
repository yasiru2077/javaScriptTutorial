function outer() {
  let outerVar = "I am outer";
  function inner() {
    console.log(outerVar); // Accessible due to lexical scope
  }
  inner();
}

outer();
