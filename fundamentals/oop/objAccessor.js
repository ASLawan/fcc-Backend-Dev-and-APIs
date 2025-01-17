// Object accessors
// getters
// setters

// Encapsulation - hides data from outside world
//

let person = {
  name: "Austin",
  gender: "Male",
  birthYear: 1993,
  career: "Software Engineer",

  get getName() {
    return this.name;
  },

  get getAge() {
    return new Date().getFullYear() - this.birthYear;
  },

  /**
   * @param {(arg0: string) => void} newName
   */
  set setName(newName) {
    this.name = newName;
  },
};

console.log(person.getName);
person.setName = "Sewoyebaa";

console.log(`Name set tp: ${person.getName}`);

console.log(`You are ${person.getAge} years old!`);
