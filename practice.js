// console.log("Hello World");
// console.log(typeof 2378473);

// console.log(typeof 12423n);

// let data = 2342;
// console.log((total = data + "3433546"));
// console.log(typeof total);

// console.log("hello" + " " + "world");
// console.log("hello world".length);
// console.log("hello world".length - 1);

// console.log("hello world"[4]);
// console.log("hello world"["hello world".length - 1]);
// console.log("hello world"[10]);

// console.log(`my Name is 'Bashir'`);

// console.log(4 - 9);

// let sum1 = 3;
// let sum2 = 4;
// console.log(sum1 ** sum2);

// let firstName = "Bashir";
// let lastName = "Ahamed";
// let profession = "Engineer";

// console.log(`${firstName} ${lastName} is a ${profession} `);

// // const profile = ["Bashir", "Ahamed", 30, "Developer"];
// // profile[2] = 34;
// // profile[4] = false;
// // profile[5] = "Tuntuni";
// // console.log(profile[profile.length - 1]);

// // const fName = profile[0];
// // const lName = profile[01];
// // const myName = `${profile[0]}  ${profile[1]}  `;
// // console.log(myName);
// // console.log(myName.length);
// // console.log(myName[myName.length - 1]);

// const profile = {
//     firstName: 'Bashir',
//     lastName: 'Ahamed',
//     age: 22,
//     profession: 'Engineer'
// }

// console.log(profile.age);
// console.log(profile);

// profile.age = 32
// console.log(profile.age);

// profile.learner = true
// console.log(profile);

// const profile1 = new Object()
// profile1.name1= 'bashir'
// console.log(profile1);

// function foo(num) {
//   console.log(num ** num);
// }

// foo(4);
// foo(2);
// foo(3);

// function toi(num1, num2, num3) {
//   return num1 * num2 * num3;
// }

// result = toi(3, 3, 2);
// console.log(result + 2);

// function profile(name, age, profession) {
//   const prof1 = `My name is ${name} . i am ${age} . i am a ${profession}`;
//   return prof1;
// }
// console.log(profile("bashir", 23, "engineer" + " i have a plan"));
// console.log(profile("korim", 34, "teacher" + " i have a plan"));

// const y = 23;

// console.log(y !== 23);

// console.log(2 + (3 / 2) * 2);

// const fun = () => {};
// const famsj = () => {};

// const sas = () => {};

// for (var i = 0; i < 4; i++) {
//   console.log('go ' + i + ' steps');}

// const studaLev = "not";

// // if (studaLev === "average") {
// //   console.log("you will make an average result");
// // } else if (studaLev === "hard") {
// //   console.log("you will make an best result");
// // } else {
// //   console.log("you will fail");
// // }

// switch (studaLev) {
//   case "hard":
//     console.log("you will make a good result");
//     break;
//   case "average":
//     console.log("you will make average result");
//     break;
//   case "not enough":
//     console.log("you will get a laddu result");
//     break;
//   case "not good":
//     console.log("you will fail");
//     break;
//   default:
//     console.log("fail fail fail");
// }

// let count = 0;

// while (count < 9) {
//   console.log(
//     `i love Bangladesh ${count + 1} ${count + 1 < 2 ? "time" : "times"}`
//   );
//   count++;
// }

// for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 2; j++) {
//     console.log(j);
//     console.log(i, j);
//   }
//   console.log(i);
// }

// const profile = {
//   firstName: "Bashir",
//   lastName: "Ahamed",
//   secondName: "tillu",
//   age: 324,
// };

// for (let prof in profile) {
//   console.log(prof);
//   console.log(profile[prof]);
// }

// const profile = ['Bashir', 'Ahamed', 324]

// for (let pro of profile){
//   console.log(pro);
// }
// const rrt = 'bashir'
// for (let trr of rrt ){
//   console.log(trr);
// }

// function age(){
//   for(let prof of profile){
//     console.log(prof);
//   }
// }
// function age()

// const names = ["bashir", "hamim", "rakib", "hasan"];
// function printName(laddu) {
//   for (let name of laddu) {
//     console.log(name);
//   }
// }
// printName(names);

// const arr = [2, 3, 4, 5, 6, 7]

// console.log(arr.length);
// console.log(arr[0]);

// arr.push(4)
// console.log(arr);
// arr.pop()
// console.log(arr);

// arr.unshift(1)
// console.log(arr);
// arr.shift()
// console.log(arr);

// const num = 234.5433;
// const num1 = -234.5433;

// console.log(Math.trunc(num));
// console.log(Math.ceil(num));
// console.log(Math.floor(num));
// console.log(Math.round(num));
// console.log(Math.abs(num));
// console.log(Math.pow(3, 4));
// console.log(Math.random());
// console.log(Math.abs(num1));

//Math

// const num = 45.73464;

// console.log(Math.trunc(num));
// console.log(Math.ceil(num));
// console.log(Math.floor(num));
// console.log(Math.round((num1 = 58.48)));
// console.log(Math.round((num2 = 58.58)));
// console.log(Math.abs(num));
// console.log(Math.abs((num3 = -454.84)));
// console.log(Math.pow(3, 3)); // 3 * 3 * 3 = 27
// console.log(Math.pow(5, 3)); // 5 * 5 * 5 = 27
// console.log(Math.random()); // 0 - up to 1
// console.log(Math.max(3453, 345, 24325, 235346234));
// console.log(Math.min(6, 3453, 345, 24325, 235346234));

// const result = Math.floor(Math.random() * (5 + 1));
// console.log(result);

// //find a random number from 2 to 6

// function getRandNum(num4, num5) {
//   return Math.ceil(Math.random() * Math.abs(num4 - num5) + num4);
// }
// //0.99999 * 4 = 3.9999 + 2 = 5.9999
// console.log(getRandNum(2, 6));

// const date= new Date('2013 4')
// const date= new Date(year, month, day , hours, minutes, seconds, milliseconds)
// const date= new Date(milliseconds)
// const date= new Date(date string)
// ISO date "2015-08-12" (The International Standard)
// Short date "03/12/2022"
// long date "Mar 23 2014" or "23 Mar 2013"
// const date= new Date()
// const date = new Date(2014, 4, 23, 11, 23, 12, 234);
// const date= new Date("2014-04-21")
// const date = new Date ("Mar 23 1900")
// console.log(date);

// console.log(new Date(2022, 11, 2));

// const date = new Date();
// console.log(new Date().toString());
// console.log(date.toString());
// console.log(date.toISOString());
// console.log(date.toUTCString());
// console.log(date.toDateString());
// console.log(date.toTimeString());
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleString());
// console.log(date.toLocaleTimeString());

// console.log(date);
// console.log(new Date().getFullYear());
// console.log(date.getMonth());
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());
// console.log(date.getTime());

// //setting specific information
// console.log(date.setFullYear(2020));
// date.setMonth(7);
// date.setHours(22);
// console.log(date);

// function getCurrentTime() {
//   const date = new Date();
//   //hours - 24 hour format
//   let hours = date.getHours();
//   const minutes = date.getMinutes();
//   const seconds = date.getSeconds();
//   hours = hours > 12 ? hours - 12 : hours; //15 - 3
//   formattedHours = hours >= 10 ? hours : "0" + hours; // 3: 03
//   formattedMinutes = minutes >= 10 ? minutes : "0" + minutes; // 3: 03
//   formattedSeconds = seconds >= 10 ? seconds : "0" + seconds; // 3: 03

//   return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
// }
// console.log(getCurrentTime());

// //setTimeOut
// setTimeout(() => {
//   console.log(getCurrentTime());
// }, 1000);

// //setInterval
// const timer = setInterval(() => {
//   console.log(getCurrentTime());
// }, 1000);

// const profile = ['bashir', 234, true, 'web developer']

// const [firstName, ...restValues] = profile

// console.log(firstName);
// console.log(restValues);

// const obj = {name: 'Bashir',
// adress: {
//     city:{
//         road:{
//           street: '32, Dhanmondi'

//         }
// }
// }
// }

// // console.log(obj.adress.city.road);
// // const result = obj.adress && obj.adress.city && obj.adress.city.road

// //optional chaining
// const oodo = obj.adress?.city?.road?.street
// console.log(oodo);

// console.log(0 ?? false);
// console.log(null ?? true);
// console.log(undefined ?? false);

// const count = 0;
// let text = ''
// const result = count ?? 34;
// const textResult = text ?? 'dkuriaejrkujioa'
// console.log(result);
// console.log(textResult);

// const user = {
//   id: 343,
//   name: "resder",
//   age: 32,
//   education: {
//     degree: "honours",
//     college: {
//       name: "DU",
//     },
//   },
// };

// // const { education: { degree } = {} } = user;
// // console.log(degree);

// // const {education: {college: {name}={college:{name:'Du'}}}={}} = user
// // const {education: {college: {name}={name:'Du'}}={}} = user

// const { education: { college: { name } = {} } = {} } = user;
// console.log(name);

// const result = arr.map((elm) => elm * 2);
// // const result = arr.map(function(elm){
// // console.log(elm);
// // return elm * 2;
// // })
// console.log(result);
// console.log(arr);

// const result= arr.map((elm) => elm * 2
// )

// console.log(result);
// console.log(arr);

const arr = [1, 2, 3, 4];

// const result = arr.filter((elm)=> elm % 2 === 0)
// console.log(result);
// console.log(arr);

const result = arr.reduce((acc, num) => {
  console.log(acc, num);
  return acc + num;
}, 12);
console.log(result);
