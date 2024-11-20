//implement program that counts number of pairs of minutes
//that sum up to a whole week or multiple of a week

const countPairs = (arr) => {
  let pairCount = 0;
  let len = arr.length;
  let parrArr = [];

  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (i === j) {
        continue;
      }
      console.log(`${arr[i]} : ${arr[j]} = ${arr[i] + arr[j]}`);

      if ((arr[i] + arr[j]) % 10080 === 0) {
        parrArr.push("pair");
        pairCount += 1;
      }
    }
  }

  console.log(parrArr);
  console.log(pairCount);
};

let testArr = [5040, 5040, 6000, 10080, 10080];
let testArr2 = [30240, 20160, 10080, 5];

countPairs(testArr2);
