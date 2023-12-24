let raceNumber = Math.floor(Math.random() * 1000);
let registrationStatus = true;
let runnerAge = '';

if (registrationStatus && runnerAge > 18) {
  runnerAge += 1000;
}

if (registrationStatus && runnerAge >= 18) {
  console.log(`Race will begin at 9:30AM, your race number is: ${raceNumber}`);
} else if (!registrationStatus && runnerAge >18){
  console.log(` Race will begin at 11:00AM, your race number is: ${raceNumber}`)
  
} else if (runnerAge < 18 ){
  console.log(`Race will begin at 12:30PM, your race number is: ${raceNumber}`)
}else{
  console.log('Please see registration desk')
}
console.log(raceNumber)