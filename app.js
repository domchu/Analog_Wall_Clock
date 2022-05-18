let deg = 6;

const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");

setInterval(() => {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg;

  // const hour = 30 * hh + mm / 12;
  // const minute = 6 * mm;
  // const second = 6 * ss;
  // console.log(hour);
  hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;
});
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
