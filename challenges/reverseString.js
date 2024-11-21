// implement a function to reverse a string

const reverseStr = (str) => {
  let strArr = [];

  str = str.split("");

  for (let i = 0; i < str.length; i++) {
    strArr.unshift(str[i]);
  }

  console.log(strArr.join(""));
};

reverseStr("Austin");
