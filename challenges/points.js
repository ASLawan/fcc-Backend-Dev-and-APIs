// function takes a word and tiles
// returns points that can be made from the word given the tiles

let points = {
  a: 1,
  b: 3,
  c: 3,
  d: 2,
  e: 1,
  f: 4,
  g: 2,
  h: 4,
  i: 1,
  j: 8,
  k: 5,
  l: 1,
  m: 3,
  n: 1,
  o: 1,
  p: 3,
  q: 10,
  r: 1,
  s: 1,
  t: 1,
  u: 1,
  v: 4,
  w: 4,
  x: 5,
  y: 4,
  z: 10,
  _: 0,
};

const getPoints = (word, tile) => {
  let possiblePoints = 0;
  word = word.split("");
  tile = tile.split("");

  for (let letter of tile) {
    if (word.includes(letter) || letter === "_") {
      possiblePoints += points[letter];
    }
  }
  return possiblePoints;
};

// implement a function to get max points from an array of words

const getMaxPoints = (arr, tile) => {
  let maxPoints = [];
  let maxPoint = 0;
  let maxPointWordIndex = 0;
  tile = tile.split("");

  arr.map((elem) => {
    let possiblePoints = 0;
    elem = elem.split("");
    for (let letter of tile) {
      if (elem.includes(letter) || letter === "_") {
        possiblePoints += points[letter];
        // console.log(letter);
      }
    }
    maxPoints.push(possiblePoints);
  });

  for (let point of maxPoints) {
    // console.log(point);
    if (point > maxPoint) {
      maxPoint = point;
      maxPointWordIndex = maxPoints.indexOf(point);
    }
  }

  console.log(maxPoints);
  return `Points: ${maxPoint}, Word: ${arr[maxPointWordIndex]}`;
};

// console.log(getPoints("cat", "tmoca"));
// console.log(getPoints("cat", "tmoa_"));

console.log(getMaxPoints(["cat", "dog", "mag"], "tmoca_"));
