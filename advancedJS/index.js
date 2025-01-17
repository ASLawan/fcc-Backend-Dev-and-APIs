// Closures
// A closure is a feature where an inner function has access to variables from its outer
//  function even after the outer function has executed.
// A closure allows a function to "remember" the scope in which it was created.
// It gives access to the outer function’s variables even when the inner function
// is called outside its original scope.

function createCounter() {
  let count = 0;

  return function () {
    count++;

    return count;
  };
}

let counter = createCounter();
console.log("Closure:");
console.log(counter());
console.log(counter());
console.log(counter());

// Currying is a technique where a function with multiple arguments is
// transformed into a series of functions, each taking a single argument.
// Currying breaks down a function into smaller, reusable functions.
// It helps in creating highly composable and flexible code.

function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
console.log("Currying:");
console.log(add(1)(2)(3));

function sayHello(greeting) {
  return function (name) {
    return `${greeting} ${name}!`;
  };
}

console.log("Greet:");
const greet = sayHello("Hi");

console.log(greet("Austin"));
console.log(greet("B"));
