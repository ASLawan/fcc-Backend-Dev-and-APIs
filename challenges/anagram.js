// implement a function that checks if given
// words are anagrams of the target word

const isAnagram = (word, wordArr) => {
  const sortLetters = (str) =>
    str.toLowerCase().trim().split("").sort().join("");

  const removeTarget = (str, strArr) => {
    return strArr.filter((w) => w.toLowerCase() !== str.toLowerCase());
  };

  sortedWord = sortLetters(word);

  wordArr = wordArr.filter((w) => sortLetters(w) === sortedWord);

  let results = removeTarget(word, wordArr);

  return results;
};

let word = "stone";
let wordArr = ["stone", "tones", "banana", "tons", "notes", "Seton"];

console.log(isAnagram(word, wordArr));
console.log(
  isAnagram("allergy", [
    "gallery",
    "ballerina",
    "regally",
    "clergy",
    "largely",
    "leading",
  ])
);

console.log(isAnagram("BANANA", ["BANANA", "Banana", "banana"]));
