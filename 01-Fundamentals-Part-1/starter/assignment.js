// let population = "7000";
// let continent = "Asia";
// let country = "India";
// console.log(population);
// console.log(continent);
// console.log(country);
// console.log(population, continent, country);

// const markH = 1.95;
// //test1 //test2//challenge1
//  const markW = 92;
// const markBMI = markW / markH ** 2;
// const johnH = 1.69;
// const johnW = 78;
// const johnBMI = johnW / johnH ** 2;
// // const markHigherBMI = markBMI > johnBMI;
// // console.log("markHigherBMI",markHigherBMI);
// if (markBMI > johnBMI) {
//   console.log(`Mark's BMI ${markBMI} is higher than John's BMI ${johnBMI}`);
// } else {
//   console.log(`John's BMI ${johnBMI} is higher than Mark's ${markBMI}`);
// } //challenge2

// challenge3
// avgDolphinscore = 96 + 108 + 89 / 3;
// avgKoelascore = 96+ 108 + 89 / 3;
// if (avgDolphinscore > avgKoelascore && avgDolphinscore>= 100) {
//   console.log("Dolphins are winner");
// }else
// if((avgKoelascore>=100)&&(avgDolphinscore!==avgKoelascore)){
//   console.log("koelas are winner");
// }else if(avgDolphinscore === avgKoelascore && avgDolphinscore>= 100&&avgKoelascore>=100){
//   console.log("both are Winner");
// }
// else{
//   console.log("no one is winner");
// }
// // test2
// avgDolphinscore = 97+ 112 + 101/ 3;
// avgKoelascore = 109+95+123 / 3;
// if (avgDolphinscore > avgKoelascore && avgDolphinscore>= 100) {
//   console.log("Dolphins are winner");
// }else
// if((avgKoelascore>=100)&&(avgDolphinscore!==avgKoelascore)){
//   console.log("koelas are winner");
// }else if(avgDolphinscore === avgKoelascore && avgDolphinscore>= 100&&avgKoelascore>=100){
//   console.log("both are Winner");}
//  else {
//   console.log("no one is winner");
// }
// // test3
// avgDolphinscore = 97+112+101/ 3;
// avgKoelascore = 1109+95+106/ 3;
// if (avgDolphinscore > avgKoelascore && avgDolphinscore>= 100) {
//   console.log("Dolphins are winner");
// }else
// if((avgKoelascore>=100)&&(avgDolphinscore!==avgKoelascore)){
//   console.log("koelas are winner");
// }else if(avgDolphinscore === avgKoelascore && avgDolphinscore>= 100&&avgKoelascore>=100){
//   console.log("both are Winner");}
// else{
//   console.log("no one is winner");
// }

//challenge4
let bill =Number( prompt("what's a bill value?"));
let tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;

console.log(
  `the bill value= ${bill},the tip= ${tip} and the final value= (${bill + tip})`
);
