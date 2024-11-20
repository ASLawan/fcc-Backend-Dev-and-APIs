const callPoints = (ops) => {
  let len = ops.length;
  let results = [];
  let newScore;

  for (let i = 0; i < len; i++) {
    if (Number.isInteger(Number(ops[i]))) {
      results.push(Number(ops[i]));
    } else if (ops[i] === "+") {
      newScore = results[results.length - 1] + results[results.length - 2];
      results.push(newScore);
    } else if (ops[i] === "D") {
      newScore = results[results.length - 1] * 2;
      results.push(newScore);
    } else if (ops[i] === "C") {
      results.pop();
    } else {
      continue;
    }
  }

  const totalScores = results.reduce((initialValue, currentValue) => {
    return initialValue + currentValue;
  }, 0);

  console.log("Results:", results);
  console.log(totalScores);
  console.log("Type of totalScore: ", typeof totalScores);
};

let test = ["5", "2", "C", "D", "+"];

callPoints(test);
