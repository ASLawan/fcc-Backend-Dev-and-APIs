// implemeting getters and setters using class expressions

let User = class {
  constructor(name, gender, password, role) {
    this.name = name;
    this.gender = gender;
    this.password = password;
    this.role = role;
  }

  /**
   * @param {any} passwd
   */
  set setPass(passwd) {
    if (passwd.length < 4) {
      console.log(`Password must be at least 4 characters long`);
    } else {
      this.password = passwd;
    }
  }

  roles = ["intern", "supervisor", "assistant", "trainer", "trainee"];
  /**
   * @param {any} newRole
   */
  set setRole(newRole) {
    let role = this.roles.find((el) => el === newRole);
    if (!role) {
      console.log(`Here are the available roles to choose from: ${this.roles}`);
    } else {
      this.role = newRole;
    }
  }
};

let user = new User("Austin", "Male", "Lawan123", "Admin");

// console.log(user);

// user.setPass = "Austin321";
// console.log(user);
let newRole = "Intern".toLowerCase();
user.setRole = newRole;

console.log(user);
