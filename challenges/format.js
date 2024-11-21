// implement function to change data format
// change from one-to-many to one-t-one

const letterGroups = {
  1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
  2: ["D", "G"],
  3: ["B", "C", "M", "P"],
  4: ["F", "H", "V", "W", "Y"],
  5: ["K"],
  8: ["J", "X"],
  10: ["Q", "Z"],
};

const transform = (arr) => {
  let oneToOne = {};
  for (const [score, letters] of Object.entries(arr)) {
    // console.log(`Score: ${score}, Letters: ${letters}`);
    letters.forEach((letter) => {
      letter = letter.toLowerCase();
      oneToOne[letter] = Number(score);
    });
  }

  return oneToOne;
};

console.log(transform(letterGroups));
