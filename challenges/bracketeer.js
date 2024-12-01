// IMplement a function that checks if brackets are closed
// checks if brackets are correctly nested
//(){}[]

// const handleSymmetry = (str) => {
//   let status = true;
//   let len = str.length;
//   let midPoint = len / 2;

//   let fh = str.slice(0, midPoint);
//   let sh = str.slice(midPoint, len);
//   sh = sh.reverse();

//   console.log(`FH: ${fh}`);
//   console.log(`SH: ${sh}`);

//   for (let i = 0; i < midPoint; i++) {
//     if (!fh[i] === "(" && sh[i] === ")") {
//       status = false;
//     }
//     if (!fh[i] === "{" && sh[i] === "}") {
//       status = false;
//     }
//     if (!fh[i] === "[" && sh[i] === "]") {
//       status = false;
//     }
//   }

//   return status;
// };

// const handleNonSymmetry = (str) => {
//   let status;
//   let len = str.length;
//   if (len % 2 !== 0) {
//     return false;
//   }

//   for (let i = 0; i < len - 1; i++) {
//     if (
//       (str[i] === "(" && str[i + 1] === ")") ||
//       (str[i] === "{" && str[i + 1] === "}") ||
//       (str[i] === "[" && str[i + 1] === "]")
//     ) {
//       status = true;
//     } else {
//       status = false;
//     }
//   }

//   return status;
// };

// const validBrackets = (str) => {
//   let brackets = [];
//   str = str.trim().split("");

//   for (let i = 0; i < str.length; i++) {
//     if (
//       str[i] === "(" ||
//       str[i] === ")" ||
//       str[i] === "{" ||
//       str[i] === "}" ||
//       str[i] === "[" ||
//       str[i] === "]"
//     ) {
//       brackets.push(str[i]);
//     }
//   }

//   //   brackets = brackets.join("");

//   //   console.log(brackets);

//   let status = handleNonSymmetry(brackets);

//   if (status === true) {
//     return status;
//   } else {
//     status = handleSymmetry(brackets);
//   }

//   return status;
// };

// console.log(validBrackets("[["));

const validBrackets = (str) => {
  const stack = [];
  const bracketMap = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (const char of str) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else if (char === ")" || char === "}" || char === "]") {
      if (stack.length === 0 || stack.pop() !== bracketMap[char]) {
        return false;
      }
    }
  }

  // If the stack is empty, all brackets were matched correctly
  return stack.length === 0;
};

console.log(validBrackets("[["));
