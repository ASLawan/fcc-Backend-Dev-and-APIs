//Implement a function that computes scrabl=ble score

const letterGroups = {
  1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
  2: ["D", "G"],
  3: ["B", "C", "M", "P"],
  4: ["F", "H", "V", "W", "Y"],
  5: ["K"],
  8: ["J", "X"],
  10: ["Q", "Z"],
};

const getScore = (word) => {
  let letterScore = {};
  let score = 0;

  for (const [score, letters] of Object.entries(letterGroups)) {
    letters.forEach((letter) => {
      letterScore[letter] = Number(score);
    });
  }
  word = word.toUpperCase().split("");
  console.log(letterScore);
  console.log(word);
  for (let i = 0; i < word.length; i++) {
    score += Number(letterScore[word[i]]);
  }

  return score;
};

console.log(getScore("Lawan"));
