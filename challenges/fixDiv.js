// fix divs
// loop through a string
// identify second div
// add forward slash to fix it

const fixDivs = (htmlStr) => {
  let divCount = 0;
  let divStr = "";
  let fixedHtml = "";

  for (let i = 0; i < htmlStr.length; i++) {
    if (htmlStr[i] === "<") {
      for (let j = 1; j < 5; j++) {
        divStr += htmlStr[i + j];
      }
    }

    if (divStr === "div>") {
      divCount += 1;
      if (divCount % 2 === 0) {
        fixedHtml += htmlStr[i] + "/";
        divStr = "";
        continue;
      }
    }

    fixedHtml += htmlStr[i];
    divStr = "";
  }
  return fixedHtml;
};

console.log(fixDivs("<div><div><div>"));
console.log(fixDivs("<div><p>Hey Lawan</p><div>"));
