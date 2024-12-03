// check if word is a palindrome

const isPalindrome = (str) => {
  let reversedStr = str.trim().split("").reverse().join("");

  console.log(str);
  console.log(reversedStr);
  return str === reversedStr;
};

console.log(isPalindrome("lawan"));
console.log(isPalindrome("racecar"));
