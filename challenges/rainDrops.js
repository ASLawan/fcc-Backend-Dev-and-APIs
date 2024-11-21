// implement a function that converts numbers to rainfrops
// divisible by 3 = pling
// divisible by 5 = plong
// divisible by 7 = plang
// none of the above = str(number)

const makeRain = (number) => {
  let rainDrop = [];

  if (number % 3 === 0) {
    rainDrop.push("Pling");
  }
  if (number % 5 === 0) {
    rainDrop.push("Plang");
  }
  if (number % 7 === 0) {
    rainDrop.push("Plong");
  }

  if (rainDrop.length === 0) {
    rainDrop.push(String(number));
  }

  console.log(rainDrop);
  return rainDrop.join("");
};

console.log(makeRain(28));
console.log(makeRain(30));
console.log(makeRain(34));
