'use strict';
// SCOPE chain
// console.log(firstName);
// const firstName = 'kajal';
// const calcAge = function (birthYear) {
//   const age = 2022 - birthYear;
//   //   return age;

//   if (age > 18) {
//     var newAge = 27;
//     // console.log(newAge);
//   }
//   console.log(newAge);
//   return age;
// };
// // console.log(currentAge);
// const currentAge = calcAge(1996);
// console.log(currentAge);

// hoisting
// console.log(city);
// // console.log(myName);
// // console.log(age);

// const myName = 'kajal';
// let age = 26;
// var city = 'mumbai';

// // console.log(kajalAge(1996));
// // console.log(kajalAge2(26));
// // console.log(kajalAge3(2023));

// function kajalAge(birthyear) {
//   const age = 2022 - birthyear;
//   return age;
// }

// const kajalAge2 = function (year) {
//   return year;
// };

// var kajalAge3 = currentYear => 2022 - currentYear;

// var
// if (!currentAge) kajal();

// var currentAge = 26;
// function kajal() {
//   console.log('kajal is 26 years old');
// }

// // variable with var create a property on GLOBAL WINDOW OBJECT

// var x = 28;
// console.log(window.x === x);

// const y = 28;
// console.log(window.y === y);

// this keyword
console.log(this);

const agefunc = function (birthYear) {
  const age = 2022 - birthYear;
  console.log(this);
  // this keyword shows undefined in strict mode and global window in regular mode
  return age;
};
agefunc();

const kajalAge = birthYear => {
  console.log(2022 - birthYear);
  console.log(this);
};
kajalAge(1996);

const kajal = {
  firstName: 'kajal',
  year: 1996,
  calcAge: function () {
    const age = 2022 - this.year;
    console.log(this);
    console.log(age);
    return age;
  },
};
kajal.calcAge();

const naresh = {
  year: 1992,
};
// method borrowing
naresh.calcAge = kajal.calcAge;
// this always points to object for which function is calling
naresh.calcAge();

const newFunc = kajal.calcAge;
// here 'newFunc' behave like just a regular function so in strict mode this keyword points to undefine
newFunc();
