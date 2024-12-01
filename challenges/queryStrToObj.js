//  takes a query string: '?foo=Hello&bar=World'
// returns an object

const querytoObj = (str) => {
  str = str.trim().split("&");
  let newObj = {};

  for (let item of str) {
    item = item.split("=");
    if (!item[1]) {
      item[1] = "true";
    }
    if (newObj[item[0]]) {
      if (!Array.isArray(newObj[item[0]])) {
        newObj[item[0]] = new Array(newObj[item[0]]);
      }
      newObj[item[0]].push(item[1]);
    } else {
      newObj[item[0].replace("?", "")] = item[1];
    }
  }
  console.log(newObj);
};

querytoObj("?foo=Hello&bar=World&lawan=Austin&foo=Sewoyebaa");

// Object to query

const objToQuery = (obj) => {
  let queryArr = [];
  for (let [key, val] of Object.entries(obj)) {
    // console.log(`${key} : ${typeof val}`);
    if (typeof val !== "string") {
      for (let v of val) {
        let queryStr = `${key}=${v}`;
        queryArr.push(queryStr);
      }
    } else {
      let queryStr = `${key}=${val}`;
      queryArr.push(queryStr);
    }
  }
  console.log(`?${queryArr.join("&")}`);
};

// objToQuery({ foo: "Hello", bar: "World", lawan: "Austin" });
objToQuery({ foo: ["Hello", "Sewoyebaa"], bar: "World", lawan: "Austin" });
