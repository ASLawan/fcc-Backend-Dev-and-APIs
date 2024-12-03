// Implement a function that fixes p-tags in an html string

//loop through and identify the p-tags
//get the second p-tags and fix them  by inserting a forward slash
//return the fixed html string

const fixPtags = (htmlStr) => {
  let pcount = 0;
  let pStr = "";
  let fixedHtml = "";

  for (let i = 0; i < htmlStr.length; i++) {
    if (htmlStr[i] === "<") {
      for (let j = 1; j < 3; j++) {
        pStr += htmlStr[i + j];
      }
    }

    // check if pstr found correspond to a p-tag
    if (pStr === "p>") {
      pcount += 1;
      // check if the ptag is a closing tag
      if (pcount % 2 === 0) {
        fixedHtml += htmlStr[i] + "/";
        // reset the pstr to empty
        pStr = "";
        // move to the next tag
        continue;
      }
    }

    // if not p-tag or not closing p-tag add as is
    fixedHtml += htmlStr[i];
    // reset the pStr for the next loop
    pStr = "";
  }

  return fixedHtml;
};

console.log(fixPtags("<p><p><p>"));
console.log(fixPtags("<p>JavaScript is an awesome language<p>"));
console.log(
  fixPtags("<div><p>Hello Lawan<p><p>How are you doing today?<p></div>")
);
