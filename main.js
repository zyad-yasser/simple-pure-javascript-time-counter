// Start the login when window load
window.addEventListener("load", () => {

  // DOM Selectors
  const daysContainer = document.querySelector(".days");
  const hoursContainer = document.querySelector(".hours");
  const minutesContainer = document.querySelector(".minutes");
  const secondsContainer = document.querySelector(".seconds");

  // Initializer
  let timer;
  let timerStamp;

  // Get difference between two dates
  const getDifferenceDate = toDate => {
    const calcToDate = new Date(toDate).getTime();
    const fromDate = Date.now();
    const differenceDate = Math.abs(calcToDate - fromDate);
    return differenceDate;
  };

  // Check to make sure that time is two digits
  const checkDigits = (arg) => {
    if (String(arg).length > 1)
      return arg;
    return `0${arg}`;
  }

  // Convert from milliseconds to time format
  const timeFormatter = (timerStamp) => {
    // Get difference in seconds
    timerStamp = timerStamp/1000;
    const seconds = Math.floor(timerStamp % 60);

    // Get difference in minutes
    timerStamp = timerStamp/60;
    const minutes = Math.floor(timerStamp % 60); 

    // Get difference in hours
    timerStamp = timerStamp/60;
    const hours = Math.floor(timerStamp % 24);

    // Get difference in days
    const days = Math.floor(timerStamp/24);

    // Return the result as object
    const result = {
      days: checkDigits(days), 
      hours: checkDigits(hours), 
      minutes: checkDigits(minutes), 
      seconds: checkDigits(seconds)
    }

    return result;
  }

  // Enter your date here ("M/D/YYYY")
  timerStamp = getDifferenceDate("4/5/2019");

  // Make the reduce in time and print in the page
  const timeReducer = () => {
    timer = setInterval(() => {
      timerStamp -= 1000;
      daysContainer.innerHTML = timeFormatter(timerStamp).days;
      hoursContainer.innerHTML = timeFormatter(timerStamp).hours;
      minutesContainer.innerHTML = timeFormatter(timerStamp).minutes;
      secondsContainer.innerHTML = timeFormatter(timerStamp).seconds;
    }, 1000);
  };

  // Main function invoke
  timeReducer();
});
