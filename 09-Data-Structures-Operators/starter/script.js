'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
//     console.log(`order received! at ${time} to ${address} of ${this.mainMenu[mainIndex]} and ${this.starterMenu[starterIndex]}
//     `);
//   },
//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`delicious pasta with ${ing1} ${ing2} ${ing3}`);
//   },

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };
// restaurant.orderDelivery({
//   time: 22.3,
//   mainIndex: 2,
//   starterIndex: 2,
//   address: '60 feet road',
// });
// destructuring of an array

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// // const [first, second] = restaurant.categories;
// // console.log(first, second);
// // can skip an element of array by using a hole or space
// let [first, , second] = restaurant.categories;
// console.log(first, second);

// // switching of variable value
// // const temp = first;
// // first = second;
// // second = temp;
// // console.log(first, second);

// [first, second] = [second, first];
// console.log(first, second);

// console.log(restaurant.order(2, 0));
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// // nested array
// const nested = [2, 3, [4, 5]];
// const [i, j] = nested;
// console.log(i, j);
// const [p, , q] = nested;
// console.log(p, q);
// const [r, , [s, t]] = nested;
// console.log(r, s, t);

// // default values ,here value of 'o' has been set 1 as default value
// const [m = 1, n = 1, o = 1] = [7, 8];
// console.log(m, n, o);

// // destructuring of an object ,order of properties are not mandantory
// const { name, openingHours, categories } = restaurant;
// console.log(name, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(hours, tags);

// // default falues to property
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // switchins or mutating values
// let e = 111;
// let f = 222;
// const obj = { e: 21, f: 23, g: 25 };
// ({ e, f } = obj);
// console.log(e, f);

// // nested object
// const {
//   fri: { open: O, close: C },
// } = openingHours;
// // console.log(open, close);
// console.log(O, C);

// // spread operator

// const arry = [1, 2, 3];
// const newArry = [1, 2, ...arry];
// console.log(newArry);
// console.log(...newArry);

// const newmainMenu = [...restaurant.mainMenu, 'pavbhaji'];
// console.log(newmainMenu);

// const newMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(newMenu);

// const str = 'kajal';
// const newcorner = [...str, '', 'B'];
// console.log(newcorner);
// console.log(...str);

// // console.log(`${...str} Borana`);   not allowed

// // const ingredients = [
// //   prompt("let's make pasta! ingredient 1"),
// //   prompt('ingredient2'),
// //   prompt('ingredient3'),
// // ];
// // restaurant.orderPasta(...ingredients);

// const newRestaurant = { ...restaurant, city: 'mumbai' };
// console.log(newRestaurant);
// console.log(restaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'the mumbai cafe';
// console.log(restaurantCopy);

// rest operator opposite of spread operator

// const [a, b, ...c] = [1, 2, 3, 4, 5, 6];
// console.log(a, b, c);

// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(sat, weekdays);
// const [Pizza, , Risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(otherFood);

// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];

//   console.log(sum);
// };

// add(2, 3);
// add(5, 3, 7, 9);

// const k = [4, 8, 6, 9, 2, 3, 1, 7];
// add(...k);

// SHORT CIRCUITING || AND && OPERATOR

// console.log('' || 'jonas');
// console.log(5 || 'jonas');
// console.log(0 || 8);
// console.log('' || 0);
// console.log(undefined || 0 || '' || false || 'hiee' || 45 || true);
// // restaurant.numGuest = 0;
// const guest1 = restaurant.numGuest ? restaurant.numGuest : 10;
// console.log(guest1);
// // const guest2 = restaurant.numGuest || 50;
// // console.log(guest2);

// console.log('kajal' && 0);
// console.log('1' && 'yashu');

// if (restaurant.orderPasta) {
//   restaurant.orderPasta('capsicum', 'spinach');
// }

// restaurant.orderPasta && restaurant.orderPasta('capsicum', 'spinach');

// // nullish coalescing operator(in this 0 or undefined is also considered as truthy value)
// // restaurant.numGuest = 0;
// const guest2 = restaurant.numGuest ?? 50;
// console.log(guest2);

// // logical operator
// const data1 = {
//   name: 'kajal',
//   value: 21,
// };
// const data2 = {
//   name: 'yashvi',
//   DOB: 21,
// };
// // data1.value = data1.value || 10;
// // data2.value ||= 19;
// // console.log(data1, data2);

// data2.value = data2.value ?? 10;
// data2.value ??= 10;
// // console.log(data1, data2);

// // data1.DOB = data1.DOB && 15;
// data2.DOB = data2.DOB && 17;
// console.log(data1, data2);

// data1.DOB &&= 15;
// console.log(data1, data2);

// for-of loop
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);
// for (const item of menu) console.log(item);
// // for (const item of menu.entries()) console.log(item);
// // console.log(...menu.entries());
// for (const [i, el] of menu.entries()) console.log(`${i + 1}:${el}`);

//Enhanced object literals
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  // function enhancement
  orderDelivery({ starterIndex, mainIndex, time, address }) {
    console.log(`order received! at ${time} to ${address} of ${this.mainMenu[mainIndex]} and ${this.starterMenu[starterIndex]}
    `);
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`delicious pasta with ${ing1} ${ing2} ${ing3}`);
  },

  // openingHours:openingHours,
  openingHours,
};
restaurant.orderDelivery({
  time: 22.3,
  mainIndex: 2,
  starterIndex: 2,
  address: '60 feet road',
});

// optional chaining

// console.log(restaurant.openingHours?.mon);
// console.log(restaurant.openingHours?.mon?.open);
// console.log(restaurant?.name);

// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of weekdays) {
//   console.log(day);
//   const open = restaurant.openingHours[day]?.open || 'closed';
//   // const open = restaurant.openingHours[day]?.open ?? 'closed';

//   console.log(`on ${day},we are open at ${open}`);
// }

// console.log(restaurant.order?.(0, 1) ?? 'method does not exist');

// const user = [{ name: 'kajal', num: 123455 }];
// console.log(user[0]?.name ?? 'user array is empty');

// if (user.length > 0) console.log(user[0].name);
// else {
//   console.log('user aray is empty');
// }

// for-of (object)
// let properties = Object.keys(openingHours);
// for (const day of properties) {
//   console.log(day);
// }
// const values1 = Object.values(openingHours);
// for (const value of values1) {
//   console.log(value);
// }
// const entries = Object.entries(openingHours);
// for (const [key, { open, close }] of entries) {
//   console.log(`on ${key}, we open at ${open} and close at ${close}`);
// }

// set

// const orderSet = new Set(['kajal', 'naresh', 'yashvi']);
// console.log(orderSet);
// console.log(new Set('kajal'));
// console.log(new Set('kajal').size);
// console.log(orderSet.has('kajal'));
// console.log(orderSet.has('rajal'));
// orderSet.add('yug');
// orderSet.add('bhumi');
// orderSet.delete('yashvi');
// console.log(orderSet);
// // orderSet.clear();
// // in SET we cant retrived value through order
// // i.e.  orderSet[0]
// // set are also iterable so,looping is possible

// // array to set
// for (const order of orderSet) {
//   console.log(order);
// }
// const staff = ['waiter', 'manager', 'waiter', 'receptionist', 'waiter'];
// const uniqueStaff = new Set(staff);
// console.log(uniqueStaff);
// //set to array
// orderSet.add('yug');
// const newArray = [...new Set(staff)];
// console.log(newArray);
// console.log(...newArray);
// we can get the length of string through set
// console.log(new Set('kajalnareshyashvibhati').size);

// // map
// const getMap = new Map();
// getMap.set('name', 'newBombay');
// getMap.set('1', 'bhayandar');
// console.log(getMap.set('2', 'borivali'));

// getMap
//   .set('categories', ['chinese', 'italian', 'indian'])
//   .set('open', 10)
//   .set('close', 23)
//   .set(true, 'we are open')
//   .set(false, 'we are closed');

// console.log(getMap.get('name'));
// console.log(getMap.get(true));

// console.log(getMap.has('close'));

// const time = 20;
// console.log(
//   getMap.get(time > getMap.get('open') && time < getMap.get('close'))
// );
// getMap.delete('1');
// console.log(getMap);
// console.log(getMap.size);

// const arr = [1, 2];
// getMap.set(arr, 'test');
// // it shows undefined as result,so creat an another variable arr
// console.log(getMap.get(arr));
// getMap.set(document.querySelector('h1', 'Heading'));

// // Map Iteration
// const question = new Map([
//   ['question', 'what is your name'],
//   [1, 'kajal'],
//   [2, 'yashvi'],
//   ['correct', 1],
//   [true, 'correct'],
//   [false, 'you are wrong'],
// ]);
// console.log(question);

// // convert object to map
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// // maps are iterable so for loop is also available for map
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key} :${value}`);
// }
// // const answer = Number(prompt('your answer please'));
// console.log(answer);

// console.log(question.get(question.get('correct') === answer));

// // map to array
// console.log([...question]);
// console.log(question.entries());
// console.log(question.keys());
// console.log(question.values());

// string operation
const bank = 'today is bank holiday';
const day = 'sunday';
console.log(bank[0]);
console.log(bank[5]);
console.log(day.length);
console.log('kajal21'.length);

console.log(bank.indexOf('y'));
console.log(bank.lastIndexOf('y'));
console.log(bank.indexOf('H'));

// slice method
console.log(day.slice(0));
console.log(day.slice(2));
console.log(bank.slice(5));
// it doesn't include last index value i.e. [2-0]=2
console.log(bank.slice(0, 2));
console.log(bank.slice(0, bank.indexOf(' ')));
console.log(bank.slice(bank.lastIndexOf(' ')));
console.log(bank.slice(0, -1));

const check = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('you got middle seat');
  else console.log('you got another seat');
};
check('11B');
check('11A');
check('1E');

console.log(new String('kajal'));
console.log(typeof new String('kajal'));

// case sensitive
const airline = 'Indian Airline';
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

const passenger = 'kAjAl';
const passengerLower = passenger.toLowerCase();
const correctPassenger =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(correctPassenger);

const email = 'kajalborana@gmail.com';
const logIn = '       KaJalBorana@Gmail.com';

const newLogIn = logIn.toLowerCase();
console.log(newLogIn);
// trim
const newLogIn2 = newLogIn.trim();
console.log(newLogIn2);
console.log(email === newLogIn2);

// replace
const price = '251,70$';
const priceNew = price.replace(',', '.').replace('$', '&');
console.log(priceNew);

const announcement = 'all passengers go towards boarding door 21,door 21';
console.log(announcement.replace('door', 'gate'));
// replace only replace first occurance in the sentence
console.log(announcement.replaceAll('door', 'gate'));
// regular expression
console.log(announcement.replace(/door/g, 'gate'));

// boolean
const plane = 'A320neo';
console.log(plane.includes('320'));
console.log(plane.startsWith('air'));
console.log(plane.startsWith('A32'));
console.log(plane.endsWith('0neo'));

const Baggage = function (items) {
  const bagCarry = items.toLowerCase();
  if (bagCarry.includes('knife') || bagCarry.includes('gun')) {
    console.log('you are not allowed to board');
  } else console.log('you are allowed');
};
Baggage('knife', 'snacks', 'Dottle');
Baggage('gun', 'snacks', 'boDtle');
Baggage('rope', 'stick', 'bDttle');
Baggage('biscuits', 'mobile', 'bottle');
