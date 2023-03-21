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

checkIn(flight, passengerDetails);
// checkIn(passengerDetails);
console.log(flight, passengerDetails);

// in this when we pass an object to a function it always copy the object
// if we manupulate the passenger then passengerDetails object also manupulate
// const passenger=passengerDetails

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000);
};
newPassport(passengerDetails);
checkIn(flight, passengerDetails);
console.log(passengerDetails);
