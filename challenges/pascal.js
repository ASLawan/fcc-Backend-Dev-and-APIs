// implememt a function that prints first N rows from Pascal's triangle

const printPascal = (N) => {
  const triangle = []; // declare the tirangle as an array of arrays

  for (let i = 0; i < N; i++) {
    triangle[i] = []; // initialize each row as an array
    triangle[i][0] = 1; // each row starts with a 1

    //compute elements for each row
    for (let j = 1; j < i; j++) {
      triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
    }

    triangle[i][i] = 1; // each row ends with a 1
  }

  const rowWidth = triangle[N - 1].join(" ").length;

  triangle.forEach((row) => {
    const rowStr = row.join(" ");
    const padding = " ".repeat((rowWidth - rowStr.length) / 2);
    console.log(`${padding} ${rowStr} ${padding}`);
  });
};
printPascal(5);
