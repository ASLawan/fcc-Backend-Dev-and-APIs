const transpose = (input) => {
  //   let rows = input.join("").split(",");

  //   console.log(rows);

  //   const maxLen = Math.max([...rows].map((row) => row.length));
  //   console.log(`Max length: ${maxLen}`);

  //   const arrRows = rows.map((row) => [...row]);

  //   console.log(`Array of rows: ${arrRows}`);

  //   const paddedRows = rows.map((row) => row.padStart(maxLen, " "));

  //   console.log(`Padded rows: ${paddedRows}`);

  //   let tranposed = [];

  //   for (let col = 0; col < maxLen; col++) {
  //     let newRow = "";
  //     for (let row = 0; row < paddedRows.length; row++) {
  //       row += paddedRows[row][col] || " ";
  //     }
  //     tranposed.push(newRow);
  //   }

  //   console.log(tranposed);
  input = input.map((str) => Array.from(str));
  console.log(input);

  let maxLen = 0;

  input.map((row) => {
    if (row.length > maxLen) {
      maxLen = row.length;
    }
  });

  console.log(`Max length: ${maxLen}`);
  let transposed = [];
  let rows = input.length;
  let cols = maxLen;

  for (let i = 0; i < rows; i++) {
    let len = input[i].length;
    if (len !== maxLen) {
      for (let j = 0; j < maxLen - len; j++) {
        input[i].push(" ");
      }
    }

    for (let j = 0; j < cols; j++) {
      transposed[j][i] = input[i][j];
    }
  }

  console.log(tranposed);
};

transpose(["ABC", "DEF", "GHI"]);
