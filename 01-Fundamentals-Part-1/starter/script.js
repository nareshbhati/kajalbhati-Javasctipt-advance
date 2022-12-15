// let a = "morning";
// if (a === "morning") alert("night");
// console.log(40 + 50 - 10);

//chapter10 value$variable
// let gender="male";
// console.log(gender);
//chapter12
// let firstPerson="kajal";
// console.log(firstPerson);
// let isMale=false;
// console.log(isMale);
// console.log(typeof false);
// console.log(typeof isMale);

//chapter13 let,const,var
// let num=21;
// console.log(typeof num);
// let age;
// console.log(typeof age);

// const birthYear=1996;
// console.log(birthYear);

//var
// if (true) {
//   let  a = 10;
//   console.log("inside function", a);
// }

// console.log("outside funvtion", a);

//chapter14$15 operators
// const firstName="kajal";
// const secondName="naresh";
// console.log(firstName+" "+secondName);

// let x=21;
// const y=4;
// console.log(x*y,x-y,x**y);

// console.log(x+=y);// x=x+y
// console.log(x--);

//chapter17 string$ template lateral backticks
// const first="yashvi";
// const second="playgroup";
// const age=2;
// const yashu=first+" is "+age+" years old in "+second;
// console.log(yashu);

// const yashuNew=`${first} is ${age} years old in ${second}`;
// console.log(yashuNew);

// console.log("yashvi\n\is\n\good \n\girl");
// console.log(`yashvi
// is
// good
// girl`);

//chapter18 if/else
// const age = 3;
// if (age >= 3) {
//   console.log(`admission will be taken`);
// } else {
//   console.log(`admission not taken`);
// }

//chapter20
//conversion
// const x=1996;
// console.log(x+"21");
// console.log(x+Number('21'));
// console.log(String(21)+"jonas");
// console.log(Number("kajal"));
// //coercion
// console.log('21'+19);//2119
// console.log("kajal"+"naresh");
// console.log("45"-"15"-10);//20//-always consider string as number
// console.log("I am "+26+" years old");
// console.log(19+1+"hie");//20hie
// console.log("hie"+19+1);//hie191
// console.log(null+21);
// console.log(typeof null);
// console.log(undefined+1);

// let k="21"+4;
// k=k+1;
// console.log(k);

//chapter21 truthy$falsy
// 5 falsy value- 0,"",undefined,null,NaN
// console.log(Boolean(null));
// console.log(Boolean(0));
// console.log(Boolean(""));

// if(0){
//     console.log("fail");
// }
// else{
//     console.log("pass");
// }

// let x;
// if(x){
//     console.log("variable is defined");
// }
// else{
//     console.log("variable is undefined");
// }
// chapter22 equality operator
// const yashu=21;
// if(yashu===21)
// {console.log(`today is yashu's birthday`);}

// if(yashu=="21")console.log("yashu is my daughter");

// const date=prompt("what's your birth date");
// // type of above number will be string
// console.log(`birthdate= ${date}`);
// if(date===21)
// {console.log('it is your birthday');}
// else{console.log('it is not your birthday');}

// // (!== means not equal    != means equal)
// if(date!==21)console.log("it is an another day");
// if(date!=21)console.log("it is an amazing day");
// console.log(typeof date);

//chapter 23$24 boolean logic
// const fresh = true;
// const healthy = false;
// console.log(fresh && healthy);
// const food = fresh && healthy;
// if (food) {
//   console.log("food is eatable");
// } else {
//   console.log("food not eatable");
// }

// const eatable = !fresh || healthy;
// if (eatable) {
//     console.log("food is eatable");
//   } else {
//     console.log("food not eatable");
//   }

//   const homemade=true;
//   console.log(fresh&&healthy&&homemade);
//   console.log(fresh||healthy||homemade);
//   console.log(fresh&&healthy||homemade);

//chapter26 switch

// const date = 1;
// switch (date) {
//   case 1:        //date===1
//     console.log("it is a day 1");
//     // break;
//   case 2:
//     console.log("it is day 2");
//     break;
//   case 3:
//     console.log("it's a day 3");
//     break;
//   case 4:
//     console.log("it's a day 4");
//     break;
//   case 5:
//     console.log("it's a day 5");
//     break;
//   default:
//     console.log("not a valid day");
// }

// chapter28 ternary operator
const age=prompt('what is your age');
(age>=18)?console.log("valid to get driving license"):console.log("have to wait till 18");

if(age>=18){
  console.log("valid to get driving license");
}
else{
  console.log("have to wait till 18");
}




