//strict mode chapter32
// 'use strict';
// let hasDL=false;
// const passTest=true;
// if(passTest){haDL=true}
// if(hasDL){console.log("allow to drive vehicle");}

// chapter33 function
// "use strict";
// function family(number) {
//   //   console.log(number);
//   const member = `there are ${number} member in my family `;
//   return member;
// }
// console.log(family(9));

// function fruit(mango,apple){
//     console.log(mango, apple);
//     const salad=`it's fruit salad of ${mango} mango and ${apple} apples`;
//     return salad;
// }
// const fruitSalad=fruit(8,4);
// console.log(fruitSalad);
// console.log(fruit(8,4));

// chapter34 function declaration and expression
// declaration
// "use strict";

// function kajalAge(birthyear) {
//   const age = 2022 - birthyear;
//   return age;
// }
// const age1 = kajalAge(1996);
// console.log(age1);

// // expression
// const gap = function (currentyear, passingyear) {
//   const gapyear = currentyear - passingyear;
//   return gapyear;
// };
// const numberYears = gap(2022, 2017);
// console.log(`${numberYears} years of gap after graduation`);

// chapter35 arrow function
// "use strict";
// const kajalAge = (birthyear) => 2022 - birthyear;
// console.log(kajalAge(1996));

// const gap=(currentYear,passingYear)=>{
//   const gapyear=currentYear-passingYear;
//   console.log(`there are ${gapyear} years of gap`);
//   return gapyear;
// }

// console.log(gap(2022,2017));

// chapter36 function calling function
// "use strict";
// const cutFruit=(fruit)=>4*fruit;
// function fruitjuice(apple, banana) {
//   const cutApples=cutFruit(apple);
//   const cutBananas=cutFruit(banana);
//   const juice = `juice with ${cutApples} pieces of apples and ${cutBananas} pieces of bananas`;
//   return juice;
// }
// const juiceA = fruitjuice(5, 9);
// console.log(juiceA);

// chapter 39 Array
// const family=['naresh','kajal','yashvi'];
// console.log(family[1]);
// console.log(family);
// console.log(family.length);
// console.log(family[family.length-1]);

// family[0]='husband';
// console.log(family[0]);
 
// const age=(birthyear)=>2022-birthyear;
// const year=[1970,1972,1993,1996,1999,2001];
// const currentAge=age(year[3]);
// console.log(currentAge);

// // chapter 40 array operators(methods)
// // push& unshift 
// const newFamily=family.push('bhoomi');
// console.log(newFamily);
// console.log(family);
// console.log(family.length);

// family.unshift('yug');
// console.log(family);
// // pop& shift
// family.pop();
// console.log(family);
// family.shift();
// console.log(family);
// family[0]="naresh";
// console.log(family);

// console.log(family.indexOf('naresh'));
// console.log(family.includes('Naresh'));
// console.log(typeof []);
// console.log(typeof []);

//chapter 42 object
// 'use strict';
// const familyObject={
//     husband:'naresh',
//     wife:'kajal',
//     child:'yashvi',
//     birthyear:[1992,1996,2020]
// };
// console.log(familyObject);

// const kajal={
//     firstName:'kajal',
//     lastName:'bhati',
//     birthyear: 1996,
//     family:["Naresh","yashvi","kajal"]
// };
// console.log(kajal.family);
// console.log(kajal['firstName']);
// console.log(kajal['birthyear']);
// const newName='Name';
// console.log(kajal['first'+newName]);
// kajal.location='mumbai';
// console.log(kajal);
// kajal['location']='delhi';
// console.log(kajal);


// const toKnow=prompt('what do you wanna know about kajal?');
// console.log(toKnow);
// console.log(kajal.toKnow);
// console.log(kajal[toKnow]);

