let mainSectionArea = document.querySelector(".main-section-area");
let homeSection = document.querySelector(".home-page");
let emiSection = document.querySelector(".emi-calculator-page");
let loanSection = document.querySelector(".apply-loan-page");
// let selectedTab = "home-page";

const renderSelectedSection = (tab) => {
  mainSectionArea.innerHTML = "";

  switch (tab) {
    case "home-page":
      mainSectionArea.innerHTML = homeSection.outerHTML;
      break;
    case "emi-calculator-page":
      mainSectionArea.innerHTML = emiSection.outerHTML;
      break;
    case "apply-loan-page":
      mainSectionArea.innerHTML = loanSection.outerHTML;
    default:
      break;
  }
};

renderSelectedSection("home-page");

//  APPLY BUTTON

let applyBtn = document.querySelector(".apply-now-button");

applyBtn.onclick = () => {
  alert("Thank you for applying");
};

applyBtn.onmouseover = () => {
  applyBtn.style.backgroundColor = "transparent";
  applyBtn.style.border = "2px solid #F39C12";
};

applyBtn.onmouseout = () => {
  applyBtn.style.backgroundColor = "#F39C12";
  applyBtn.style.border = "none";
};

// EVENT LISTENER
let header = document.querySelector("header");

header.addEventListener("mouseover", () => {
  header.style.color = "black";
});

header.addEventListener("mouseout", () => {
  header.style.color = "White";
});

// CALCULATE EMI

const calculateEMI = () => {
  let principal = document.getElementById("amount").value;
  let duration = document.getElementById("duration").value;
  let rate = document.getElementById("roi").value / 100 / 12;

  //calculate emi
  const emi = (
    (principal * rate * Math.pow(1 + rate, duration)) /
    (Math.pow(1 + rate, duration) - 1)
  ).toFixed(2);

  //Total payable amount
  const paybleAmount = (emi * duration).toFixed(2);

  //alert('EMI: ' + emi + '. Total payable amount: ' + paybleAmount);

  alert(`EMI: ${emi}, Total payable amount: ${paybleAmount}`);
};
