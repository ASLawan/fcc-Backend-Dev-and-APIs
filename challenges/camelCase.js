// implement a function that returns a sentence or word with every other letter capitalized

const toCamelCase = (str) => {
  str = str.trim().split("");
  let result = [];
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      result.push(str[i].toUpperCase());
    } else {
      result.push(str[i].toLowerCase());
    }
  }

  return result.join("");
};

console.log(toCamelCase("Lawan"));
console.log(toCamelCase("Lawan Austin Sewoyebaa"));
console.log(toCamelCase("lawan12"));
console.log(toCamelCase(" sewoyebaa@yahoo.com "));
