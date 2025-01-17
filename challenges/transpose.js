// implement a function that computes the transpose of a matrix

const transpose = (matrix) => {
  let tranposed = [];

  let rows = matrix.length;

  if (rows === 0) {
    return;
  }
  let cols = matrix[0].length;

  let maxLen = 0;

  for (let submat of matrix) {
    if (submat.length > maxLen) {
      maxLen = submat.length;
    }
  }
  console.log("Max Length :", maxLen);

  for (let j = 0; j < cols; j++) {
    tranposed[j] = Array(rows);
  }
  for (let i = 0; i < rows; i++) {
    let len = matrix[i].length;
    console.log(len);
    if (maxLen !== len) {
      for (let j = 0; j < maxLen - len; j++) {
        // console.log(i);
        matrix[i].push(" ");
      }
    }
    for (let j = 0; j < cols; j++) {
      tranposed[j][i] = matrix[i][j];
    }
  }

  console.log(tranposed);
};

transpose(["A", "1"]);
