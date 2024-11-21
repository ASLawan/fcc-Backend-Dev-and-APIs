function findMeetupDate(year, month, weekday, week) {
  // Helper to convert weekday names to numbers (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  const weekdays = {
    Sunday: 0,
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6,
  };

  // Convert month to zero-indexed (JavaScript Date object expects this)
  const monthIndex = month - 1;

  if (!(weekday in weekdays)) {
    throw new Error("Invalid weekday");
  }

  const targetDay = weekdays[weekday];

  if (week === "teenth") {
    // Teenth days range from 13th to 19th
    for (let day = 13; day <= 19; day++) {
      const date = new Date(year, monthIndex, day);
      if (date.getDay() === targetDay) {
        return date;
      }
    }
  } else if (week === "last") {
    // Get the last day of the month
    const lastDay = new Date(year, monthIndex + 1, 0).getDate();
    for (let day = lastDay; day >= 1; day--) {
      const date = new Date(year, monthIndex, day);
      if (date.getDay() === targetDay) {
        return date;
      }
    }
  } else {
    // For 'first', 'second', 'third', 'fourth'
    const weekMap = { first: 1, second: 2, third: 3, fourth: 4 };
    if (!(week in weekMap)) {
      throw new Error("Invalid week value");
    }

    let count = 0;
    for (let day = 1; day <= 31; day++) {
      const date = new Date(year, monthIndex, day);
      if (date.getMonth() !== monthIndex) break; // Stop if out of the current month
      if (date.getDay() === targetDay) {
        count++;
        if (count === weekMap[week]) {
          return date;
        }
      }
    }
  }

  throw new Error("Date not found");
}

// Example usage
console.log(findMeetupDate(2024, 11, "Thursday", "teenth").toDateString()); // "Thu Nov 14 2024"
console.log(findMeetupDate(2020, 6, "Saturday", "teenth").toDateString()); // "Sat Jun 13 2020"
console.log(findMeetupDate(2022, 11, "Thursday", "last").toDateString()); // "Thu Nov 24 2022"
