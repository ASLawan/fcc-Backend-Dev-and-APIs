const getDateObj = (dateInput) => {
  let date;

  if (!isNaN(dateInput)) {
    // Check if the input is a UNIX timestamp
    if (dateInput.length === 13) {
      // Milliseconds (standard UNIX timestamp format)
      date = new Date(parseInt(dateInput));
    } else if (dateInput.length === 10) {
      // Seconds (likely input without milliseconds)
      date = new Date(parseInt(dateInput) * 1000);
    }
  } else {
    // Parse natural date strings
    date = new Date(dateInput);
  }

  return isNaN(date.getTime()) ? null : date;
};

export default getDateObj;
