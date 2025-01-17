// Constructor function

let Person = function (name, gender, birthYear) {
  this.name = name;
  this.gender = gender;
  this.birthYear = birthYear;
};

Person.prototype.getAge = function () {
  let age = new Date().getFullYear() - this.birthYear;
  console.log(age);
};

let person1 = new Person("Lawan", "Male", 1993);
person1.getAge();
console.log(person1);

let person2 = new Person("Game", "Male", 1992);
person2.getAge();

console.log(person2);

let person3 = new Person("The American", "Female", 1998);

person3.getAge();
console.log(person3);
