// ChapterProject.js Distance Converter: Miles to Kilometers 
// and BMI calculator (enter height and weight)

let milestoKm = prompt("Enter miles to convert to kilometers:");
let heightFeet = prompt("Enter height in feet");
let weightPounds = prompt("Enter weight in pounds");


let kilometers = milestoKm * 1.60934;
let heightInches = heightFeet * 12;
let heightMeters = heightInches * 0.0254;
let weightKg = weightPounds * 0.453592;
let bmi = weightKg / (heightMeters * heightMeters);

console.log("With a height of " + heightFeet + " feet and a weight of " + weightPounds + " pounds, your BMI is: " + bmi.toFixed(2));
console.log(milestoKm + " miles is equal to " + kilometers + " kilometers.");
