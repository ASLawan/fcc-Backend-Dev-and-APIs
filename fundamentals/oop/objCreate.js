// Object.create method to create and instantiate objects

let Person = {
  getAge() {
    return new Date().getFullYear() - this.birthYear;
  },

  greet() {
    console.log(`Hello, ${this.name}`);
  },

  init(name, gender, birthYear) {
    this.name = name;
    this.gender = gender;
    this.birthYear = birthYear;
  },
};

let austin = Object.create(Person);
austin.name = "Austin";
austin.gender = "Male";
austin.birthYear = 1993;

console.log(austin.getAge());
austin.greet();
console.log(austin);

let game = Object.create(Person, {
  name: { value: "Kingsley" },
  gender: { value: "Male" },
  birthYear: { value: 1992 },
});

console.log(game);

let echo = Object.create(Person);
echo.init("Capwell", "Male", 1991);

console.log(echo);
