'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// array methods(1.slice method)

let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.slice(1));
console.log(arr.slice(-2));
console.log(arr.slice(2));
console.log(arr.slice(1, 3));
console.log(arr.slice());
console.log([...arr]);
console.log(arr.slice(-1));

// splice method(this method mutate the original array,in this extracted part is deleted from the original array)
arr.splice(-2);
console.log(arr);

// REVERSE(also mutate the array)
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT(it doesn't mutate the array)
const newArray = arr.concat(arr2);
console.log(newArray);
console.log([...arr, ...arr2]);

// JOIN METHOD(It also doesnot mutate array)

console.log(newArray.join('-'));

// 143. 'AT' METHOD
console.log(arr.at(0));
console.log(arr[0]);
console.log(arr.at(-1));
console.log(arr.slice(arr.length - 1)[0]);

// 144. forEach loop

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, item] of movements.entries()) {
  if (item > 0) {
    console.log(`${i + 1} you deposited ${item}`);
  } else {
    console.log(`${i + 1} you withdraw ${Math.abs(item)}`);
  }
}

console.log('-------FOREACH------');
movements.forEach(function (item, i, movements) {
  if (item > 0) {
    console.log(`${i + 1} you deposited ${item}`);
  } else {
    console.log(`${i + 1} you withdraw ${Math.abs(item)}`);
  }
});
// in FOREACH for each element of array  callback function is called.
// continue and break satement donot work on FOREACH loop

// 145 foreach with MAPS and SETS
// map
const currency = new Map([
  ['USD', 'united states dollar'],
  ['EUR', 'euro'],
  ['GBR', 'pound sterling'],
]);

currency.forEach(function (value, key, map) {
  console.log(`${key}:${value}`);
});

// set
const currenciesunique = new Set(['USD', 'GBR', 'EUR', 'USD', 'EUR']);
console.log(currenciesunique);
// SET doesn't have any key value so we use _ in place of key arguement
currenciesunique.forEach(function (value, _, set) {
  console.log(`${value}:${value}`);
});
