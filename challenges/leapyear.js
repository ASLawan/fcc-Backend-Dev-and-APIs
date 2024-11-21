// implement a function that checks if a year is a leap year

const isLeapYear = (year) => {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      return true;
    }
    return false;
  }

  if (year % 4 === 0) {
    return true;
  }

  return false;
};

if (isLeapYear(2000)) {
  console.log(true);
} else {
  console.log(false);
}
if (isLeapYear(1900)) {
  console.log(true);
} else {
  console.log(false);
}
if (isLeapYear(1997)) {
  console.log(true);
} else {
  console.log(false);
}
