// LECTURE: Values and Variables
const country = 'America';
const continent = 'North America';
let population = 350000000;
console.log(country, continent, population);


// LECTURE: Data Types
const isIsland = false;
const language = 'English';
console.log(typeof isIsland, typeof population, typeof country, typeof language);


// LECTURE: let, const and var
console.log(`If the country was spit in half, each half of the population would hold ${population / 2} people`);
console.log(population++);

let populationFinland = 6000000;
if(population > populationFinland){
  return 'My country has more people than Finland.'
}

let description = 'Portugal is in Europe and its 11 million people speak portuguese.'


// LECTURE: Taking Descisions: if / else Statemetns
if(population > 33000000000){
  console.log("Portugal's population is above average.")
}
else{
  console.log(`Portugals population is ${33000000000 - population} below average.`)
}


// CODING CHALLENGE #1
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)
const markData1 = {
  'Height': 1.19, //Meter
  'Weight': 78 // Kilograms
}

const markData2 = {
  'Height': 1.88, //Meter
  'Weight': 95 // Kilograms
}

const johnData1 = {
  'Height': 1.95, //Meter
  'Weight': 92 // Kilograms
}

const johnData2 = {
  'Height': 1.76, //Meter
  'Weight': 85 // Kilograms
}

function calculateBMI(object){
  return object.Mass / object.height ** 2;
}

console.log(calculateBMI(markData1), calculateBMI(markData2), calculateBMI(johnData1), calculateBMI(johnData2));