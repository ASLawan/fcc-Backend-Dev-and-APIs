// flatten an array of any depth

const flatten = (arr) => {
  let newArr = [];
  for (let value of arr) {
    if (Array.isArray(value)) {
      let flat = flatten(value);
      newArr.push(...flat);
    } else {
      newArr.push(value);
    }
  }

  return newArr;
};

console.log(flatten([1, [2, 3], [4, 5], 6]));
console.log(flatten([1, [2, 3, [4, 5]], 6, [7, 8]]));
