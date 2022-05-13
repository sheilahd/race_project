let raceNumber = Math.floor(Math.random() * 1000);
var registEarly = true;
var runnerAge = 20;

if (runnerAge > 18 && registEarly) {
  console.log(raceNumber);
}

if (runnerAge > 18 && registEarly) {
  console.log(
    `You will run at 9:30 AM and your race number is: ${raceNumber + 1000}`
  );
} else if (runnerAge > 18 && registEarly == false) {
  console.log(
    `You will run at 11:00 AM and your race number is: ${raceNumber}`
  );
} else if (runnerAge <= 18) {
  console.log(
    `You will run at 12:30 PM and your race number is: ${raceNumber}`
  );
}
