// New Binding

function Person(firstname, lastname) {
  (this.firstname = firstname), (this.lastname = lastname);
}

// initialize a Person instance

const person1 = new Person("Austin", "Lawan");

// console.log(person1.lastname);

//  Implicit Binding
// When a function is called as a method of an object (using dot notation),
// this refers to the object that owns the method.

const person = {
  firstname: "Austin",
  lastname: "Lawan",
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
  getFullName: function () {
    console.log(`Fullname: ${this.firstname} ${this.lastname}`);
  },
};

// person.greet();
// person.getFullName();

// Explicit binding
function intro() {
  console.log(`Hello, my nickname is: ${this.nickame}`);
}

function getFullname() {
  console.log(`Full name: ${this.firstname} ${this.lastname}`);
}

function getAge() {
  currentDate = new Date();
  currentYear = currentDate.getFullYear();
  console.log(`I am ${currentYear - this.birthYear} years old.`);
}

const personObj = {
  firstname: "Autin",
  lastname: "Lawan",
  nickame: "Store",
  birthYear: 1993,
};

// Call
// The call() method immediately invokes the function with a specific
// this context and allows you to pass arguments individually.
intro.call(personObj);

// Apply
// The apply() method immediately invokes the function with a specific
// this context but requires arguments to be passed as an array.
getFullname.apply(personObj);

// Bind
// The bind() method does not invoke the function immediately.
// Instead, it creates a new function where the this context is permanently
// set to the provided value, and it can be invoked later.
const myAge = getAge.bind(personObj);

myAge();
