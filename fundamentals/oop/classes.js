// Class declarations

class Person {
  constructor(name, gender, birthYear) {
    this.name = name;
    this.gender = gender;
    this.birthYear = birthYear;
  }

  getAge = function () {
    let age = new Date().getFullYear() - this.birthYear;
    console.log(`You are ${age} years old!`);
  };

  greet = function () {
    console.log(`Hello, ${this.name}!`);
  };
}

let person1 = new Person("Austin", "Male", 1993);
person1.greet();
person1.getAge();
console.log(person1);

let person2 = new Person("Brenda", "Female", 1999);
person2.greet();
person2.getAge();
console.log(person2);
