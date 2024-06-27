//My current age is 28 years old//
const myAge = 28;

/*
2 human years = 10.5 dog years
So in the first 2 years, a dog has lived 10.5 years
*/
let earlyYears = 2;

earlyYears *= 10.5;

//We need to subtract the first 2 years from the current age to correctly calculate our age in dog years//
let laterYears = myAge - 2;

//Following the first 2 years, every 1 human year = 4 dog years//
laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);

/*
To calculate my age in dog years
We need to add the earlyYears + laterYears
earlyYears = 2 human years = 10.5 dog years
laterYears = current age - 2 human years * 4 dog years
My age in dog years = earlyYears + laterYears
*/
let myAgeInDogYears = earlyYears + laterYears;

//My name in lowercase//
let myName = "Ruqaiya".toLowerCase();

//Printing name with age in human and dog years//
console.log(
  `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
);
