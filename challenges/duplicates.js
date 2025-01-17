// remove duplicate letters
// loop through given string and remove duplicate letters
// return str with unique adjacent letters

const removeDuplicates = (str) => {
  let unique = [];
  str = str.toLowerCase();

  for (let letter of str) {
    if (unique.length && unique.indexOf(letter) !== -1) {
      unique.pop();
    } else {
      unique.push(letter);
    }
  }

  return unique.join("");
};

// console.log(removeDuplicates("abbaca"));
// console.log(removeDuplicates("AbBaca"));

// implement a function that removes letter repeated k-times
// loop through and acertain each letter
// remove if the letter in question repeates k-times
// return results

const removeRepeated = (str, k) => {
  let store = {};
  let result = "";
  str = str.toLowerCase();

  for (let letter of str) {
    if (store.hasOwnProperty(letter) && store[letter] + 1 === k) {
      delete store[letter];
    } else if (store.hasOwnProperty(letter)) {
      store[letter] += 1;
    } else {
      store[letter] = 1;
    }
  }

  for (const [key, val] of Object.entries(store)) {
    result += key.repeat(val);
  }
  console.log(store);
  console.log(Object.keys(store));
  console.log(result);
  //   return Object.keys(store).join("");
};

removeRepeated("deeedbbcccbdaa", 3);
