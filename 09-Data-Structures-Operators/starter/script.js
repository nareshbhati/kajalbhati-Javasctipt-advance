'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(`order received! at ${time} to ${address} of ${this.mainMenu[mainIndex]} and ${this.starterMenu[starterIndex]}
    `);
  },

  openingHours: {
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
  },
};
restaurant.orderDelivery({
  time: 22.3,
  mainIndex: 2,
  starterIndex: 2,
  address: '60 feet road',
});
// destructuring of an array

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

// const [first, second] = restaurant.categories;
// console.log(first, second);
// can skip an element of array by using a hole or space
let [first, , second] = restaurant.categories;
console.log(first, second);

// switching of variable value
// const temp = first;
// first = second;
// second = temp;
// console.log(first, second);

[first, second] = [second, first];
console.log(first, second);

console.log(restaurant.order(2, 0));
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// nested array
const nested = [2, 3, [4, 5]];
const [i, j] = nested;
console.log(i, j);
const [p, , q] = nested;
console.log(p, q);
const [r, , [s, t]] = nested;
console.log(r, s, t);

// default values ,here value of 'o' has been set 1 as default value
const [m = 1, n = 1, o = 1] = [7, 8];
console.log(m, n, o);

// destructuring of an object ,order of properties are not mandantory
const { name, openingHours, categories } = restaurant;
console.log(name, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(hours, tags);

// default falues to property
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// switchins or mutating values
let e = 111;
let f = 222;
const obj = { e: 21, f: 23, g: 25 };
({ e, f } = obj);
console.log(e, f);

// nested object
const {
  fri: { open: O, close: C },
} = openingHours;
// console.log(open, close);
console.log(O, C);
