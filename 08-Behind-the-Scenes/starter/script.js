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
// console.log(this);

// const agefunc = function (birthYear) {
//   const age = 2022 - birthYear;
//   console.log(this);
//   // this keyword shows undefined in strict mode and global window in regular mode
//   return age;
// };
// agefunc();
// // arrow function doesn't get its own this keyword ,it always points to parent scope
// const kajalAge = birthYear => {
//   console.log(2022 - birthYear);
//   console.log(this);
// };
// kajalAge(1996);

// const kajal = {
//   firstName: 'kajal',
//   year: 1996,
//   calcAge: function () {
//     const age = 2022 - this.year;
//     console.log(this);
//     console.log(age);
//     return age;
//   },
// };
// kajal.calcAge();

// const naresh = {
//   year: 1992,
// };
// // method borrowing
// naresh.calcAge = kajal.calcAge;
// // this always points to object for which function is calling
// naresh.calcAge();

// const newFunc = kajal.calcAge;
// // here 'newFunc' behave like just a regular function so in strict mode this keyword points to undefine
// newFunc();

// regular v/s arrow function

// var firstName = 'Bhati';

// const kajalDetails = {
//   firstName: 'kajal',
//   birthYear: 1996,
//   calcAge: function () {
//     const age = 2023 - this.birthYear;
//     console.log(age, this);
//     // return age;
//     const inner = () => {
//       // console.log(`hey i did it ${this.firstName}`);
//       console.log(this);
//     };
//     inner();
//     // instead of using arrow func if we use regular function then this pointer shows undefine
//     // solution2
//     const x = this;
//     const secondInner = function () {
//       console.log(`hey i am ${x.birthYear} born`);
//     };
//     secondInner();
//   },
//   intro: () =>
//     console.log(`hello i am ${this.firstName} and ${this.calcAge} years old`),
// };
// kajalDetails.calcAge();
// kajalDetails.intro();

// // arguement parameter
// const kajal = function (a, b) {
//   return a + b;
// };
// kajal(2, 5);
// kajal(2, 5, 6, 9);

// primitive and reference type
// primitives
let lastName = 'borana';
let oldLastName = lastName;
lastName = 'bhati';
console.log(oldLastName, lastName);

const me = {
  firstName: 'kajal',
  lastName: 'borana',
};
// const marriedKajal = me;
// marriedKajal.lastName = 'bhati';
// console.log(me);
// console.log(marriedKajal);

// copyobject object.assign() creat a complete new object with all properties copying(only works at firstlevel and only creat shallow copy)
const meCopy = Object.assign({}, me);
meCopy.lastName = 'bhati';
console.log(me);
console.log(meCopy);

// deep copy
const kajal = {
  firstName: 'kajal',
  lastName: 'borana',
  family: ['naresh', 'kajal'],
};
const kajalCopy = Object.assign({}, kajal);
kajalCopy.lastName = 'bhati';
kajalCopy.family.push('yashvi');
console.log(kajal);
console.log(kajalCopy);
