// implement the Luhn Algorithm

const isValid = (str) => {
  let strArr = [];

  if (str.length <= 1) {
    return false;
  }

  str = str.replace(/\s+/g, "").trim().split("").reverse();

  for (let i = 0; i < str.length; i++) {
    if (!Number.isInteger(Number(str[i]))) {
      return false;
    } else {
      if (!(i % 2 === 1)) {
        strArr.push(Number(str[i]));
      } else {
        if (Number(str[i]) * 2 > 9) {
          strArr.push(Number(str[i]) * 2 - 9);
        } else {
          strArr.push(Number(str[i]) * 2);
        }
      }
    }
  }

  let total = 0;

  for (let i = 0; i < strArr.length; i++) {
    total += strArr[i];
  }

  console.log(str);
  console.log(strArr);
  console.log(total);

  let status = total % 10 === 0 ? true : false;

  return status;
};

let teststr = "059";

console.log(isValid(teststr));
