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

// PROJECT BANKIST

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  // textcontent=0

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
  <div class="movements__row">
  <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
  <div class="movements__value">${mov}</div>
        </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);

// 151 computing username

const user = 'Steven Thomas Williams';
const userName = user
  .toLowerCase()
  .split(' ')
  .map(name => name[0])
  .join('');
console.log(userName);

const createUserName = function (acc) {
  acc.forEach(function (accsnt) {
    // here we want to modify the accounts array so we use forEach loop

    accsnt.userName = accsnt.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUserName(accounts);
console.log(accounts);

// label balance
const calcPrintBalance = function (movements) {
  const balances = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balances} EUR`;
};
calcPrintBalance(account1.movements);

// display summaery
const calcDisplaySummary = function (movements) {
  const income = movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${income} EUR`;

  const outcome = movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${outcome} EUR`;

  const interest = movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * 1.2) / 100)
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest} EUR`;
};
calcDisplaySummary(account1.movements);

////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

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

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

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

// map method
// it is same as forEach looping,in this we have to return the value from
// call back function and in this original array doesnot mutated

const eurToUsd = 1.1;

const movementsUsd = movements.map(function (mov) {
  return mov * eurToUsd;
});
console.log(movements);
console.log(movementsUsd);

// conversion using for-of loop
const movementsUsdFor = [];
for (const mov of movements) movementsUsdFor.push(mov * eurToUsd);
console.log(movementsUsdFor);

const movementsDescription = movements.map(
  (mov, i) =>
    `movement ${i + 1} : you ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);
console.log(movementsDescription);

// 152 filter method
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(deposits);

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);

// 153 reduce method(in this first arguement we pass is 'accumulator')
const balance = movements.reduce(function (acc, mov, i, arr) {
  return acc + mov;
}, 0);
console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

// another example
// debugger;
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);

// 155 chaining of array methods
const tatalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(tatalDepositsUSD);
