'use strict';

const bookingArray = [];
const bookingDetails = function (
  flightNum,
  passengerNum = 1,
  price = 20 * passengerNum
) {
  //   passengerNum = passengerNum || 1;
  //   price = price || 200;
  const booking = {
    flightNum,
    passengerNum,
    price,
  };
  //   console.log(bookingArray);
  bookingArray.push(booking);
  console.log(booking);
};
bookingDetails('AI2340');
bookingDetails('AI2340', 56);
bookingDetails('AI2340', 4, 198);
bookingDetails('AI2340', undefined, 500);

// primitive and reference value
const flight = 'AI1234';
const passengerDetails = {
  name: 'kajal',
  passport: 273547637,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH4567';
  passenger.name = 'Mrs ' + passenger.name;
  if (passenger.passport === 273547637) alert('checkedIn');
  else alert('wrong passenger');
};

// checkIn(flight, passengerDetails);
// checkIn(undefined, passengerDetails);
// console.log(flight, passengerDetails);

// in this when we pass an object to a function it always copy the object
// if we manupulate the passenger then passengerDetails object also manupulate
// const passenger=passengerDetails

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000);
};
// newPassport(passengerDetails);
// checkIn(flight, passengerDetails);
// console.log(passengerDetails);

// callback function(function as an arguement)
const lowerCase = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...other] = str.split(' ');
  return [first.toUpperCase(), ...other].join(' ');
};

console.log(upperFirstWord('honesty is best policy'));

const callback = function (str, fn) {
  console.log(`original string: ${str}`);
  console.log(`new transformed string: ${fn(str)}`);
  console.log(`function calling name: ${fn.name}`);
};

callback('honesty is best policy', upperFirstWord);
callback('honesty IS BEST policy', lowerCase);

// callback function also consist of properties like .name etc
// addEventListener and forEach is a higher order function

//132 function Returning function
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greeter = greet('hello!');
greeter('kajal');
greeter('Naresh');
greeter('Yashvi');

// another method to call the function
greet('hello!')('mom');

// function returning function as an arrow function
const greet2 = greeting => name => console.log(`${greeting} ${name}`);

greet2('hello!')('mom');
greet2('hello!')('kajal');

// 133 call and apply method
const airIndia = {
  airline: 'airIndia',
  code: 'AI',
  booking: [],
  // book:function(){}
  book(flightNum, name) {
    console.log(
      `booked a seat on ${this.airline} flight ${this.code}${flightNum}`
    );

    this.booking.push({
      flight: `${this.code}${flightNum}`,
      name,
    });
  },
  console.log(booking);

};
airIndia.book(458, 'kajal');

const spiceJet = {
  airline: 'spiceJet',
  code: 'SJ',
  booking: [],
};

const flightBooking = airIndia.book;
// does not work
// flightBooking(589, 'kajal');

// call method points to the object for which function is called
flightBooking.call(spiceJet, 589, 'kAjal');

// apply method
const flightData = [785, 'naresh'];
flightBooking.apply(airIndia, flightData);

flightBooking.call(airIndia, ...flightData);
