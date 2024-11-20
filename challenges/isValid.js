// Write a script that checks if a given input is valid
// input = ['(', ')', '{', '}', '[', ']'];

const handleSymmetry = (arr) => {
  let status;
  let len = arr.length;
  let midPoint = len / 2;

  let fh = arr.slice(0, midPoint);
  let sh = arr.slice(midPoint);

  sh = [...sh].reverse();

  console.log(`First: ${fh}`);
  console.log(`Second: ${sh}`);

  for (let i = 0; i < midPoint; i++) {
    if (
      (fh[i] === "(" && sh[i] === ")") ||
      (fh[i] === "{" && sh[i] === "}") ||
      (fh[i] === "[" && sh[i] === "]")
    ) {
      console.log(`${arr[i]} === ${sh[i]}`);
      status = true;
    } else {
      status = false;
    }
  }

  return status;
};

// handle non symmetry
const handleNonSymmetry = (arr) => {
  let status;

  for (let i = 0; i < arr.length - 1; i++) {
    if (
      (arr[i] === "(" && arr[i + 1] === ")") ||
      (arr[i] === "{" && arr[i + 1] === "}") ||
      (arr[i] === "[" && arr[i + 1] === "]")
    ) {
      status = true;
    } else {
      status = false;
    }
  }

  return status;
};

const isValid = (str) => {
  let inputArr = str.split("");

  console.log(`Input Array: ${inputArr}`);

  let len = inputArr.length;

  if (len % 2 !== 0) {
    return false;
  }

  let status = handleNonSymmetry(inputArr);

  if (status === true) {
    return status;
  } else {
    return handleSymmetry(inputArr);
  }
};

let testArr = "(){}[]";
let testArr2 = "({[()]})";
let testArr3 = "([)]";
let testArr4 = "(((";

if (isValid(testArr4)) {
  console.log("valid");
} else {
  console.log("invalid");
}
