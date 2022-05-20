let deg = 6;

const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");

let today = new Date();
let userHour = today.getHours();

let minDeg = 0;
let hourDeg = userHour * 30;

console.log(hourDeg);

setInterval(() => {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg;

  // let getMin = 60 / 360;

  //   console.log(getMin);

  hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;

  sc.style.transform = `rotateZ(${ss}deg)`;
}, 1000);

setInterval(() => {
  minDeg = minDeg + 6;

  console.log(minDeg);

  if (minDeg > 360) {
    minDeg = 0;
  }
  mn.style.transform = `rotateZ(${minDeg}deg)`;
}, 60000);

setInterval(() => {
  hourDeg = hourDeg + 1;

  console.log(hourDeg);

  if (hourDeg > 360) {
    hourDeg = 0;
  }
  mn.style.transform = `rotateZ(${hourDeg}deg)`;
}, 60000);
// let outText = "Hello Welcome";
// let regex = /Hello/;
// let result = outText.match(regex);

// console.log(result);

// let weekDay = "friday";
// let display = weekDay.match(/day/);
// console.log(display);

// let word = "congratulation";
// let regex1 = /on/g;
// let display2 = word.match(regex1);
// console.log(display2);

// let sentence = "welcome to florintech";
// let regex2 = /tech/;
// let display3 = sentence.search(regex2);
// console.log(display3);
// let display4 = sentence.search(/come/g);
// console.log(display4);
