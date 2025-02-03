// const yes = document.querySelector(".yes-btn");
// const no = document.querySelector(".no-btn");
// const gif = document.querySelector(".gif-wrapper img");
// const text = document.querySelector(".wrapper span");
// const wrapper = document.querySelector(".wrapper");

// let yesCats = ["yes cat.gif", "yes cat2.gif", "yes cat3.gif"];
// let noCats = ["no cat.gif", "no cat2.gif", "no cat3.gif"];

// function getRandomInt(max) {
//   return Math.floor(Math.random() * max);
// }

// yes.addEventListener("click", function () {
//   text.textContent = "Knew you would say yes!";
//   gif.src = `${yesCats[getRandomInt(yesCats.length)]}`;
//   this.style.display = "none";
//   no.style.display = "none";
// });

// let yesHeight = 15;
// let yesWidth = 15;

// no.addEventListener("click", function () {
//   gif.src = `${noCats[getRandomInt(yesCats.length)]}`;

//   if (!this.value) {
//     this.value = 1;
//   } else {
//     this.value++;
//   }

//   switch (this.value) {
//     case "1":
//       no.innerHTML = "Are you sure?";
//       break;

//     case "2":
//       no.innerHTML = "Really sure?";
//       break;

//     case "3":
//       no.innerHTML = "Are you positive?";
//       break;

//     case "4":
//       no.innerHTML = "Pookie please...";
//       break;
//     case "5":
//       no.innerHTML = "Just think about it!";
//       break;
//     case "6":
//       no.innerHTML = "If you say no, I will be really sad...";
//       break;
//     case "7":
//       no.innerHTML = "I will be very sad...";
//       break;
//     case "8":
//       no.innerHTML = "I will be very very sad...";
//       break;
//     default:
//       no.innerHTML = "No";
//       no.style.display = "none";
//       this.value = 1;
//       break;
//   }

//   yesHeight += 3;
//   yesWidth += 5;

//   yes.style.height = `${yesHeight}rem`;
//   yes.style.width = `${yesWidth}rem`;
//   wrapper.style.height = "100%";
//   wrapper.style.width = "100%";
// });
const yes = document.querySelector(".yes-btn");
const no = document.querySelector(".no-btn");
const gif = document.querySelector(".gif-wrapper img");
const text = document.querySelector(".wrapper span");
const wrapper = document.querySelector(".wrapper");

let yesCats = ["yes cat.gif", "yes cat2.gif", "yes cat3.gif"];
let noCats = ["no cat.gif", "no cat2.gif", "no cat3.gif"];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

yes.addEventListener("click", function () {
  text.textContent = "Knew you would say yes! ❤️";
  gif.src = `${yesCats[getRandomInt(yesCats.length)]}`;
  this.style.display = "none";
  no.style.display = "none";
});

let yesHeight = 2; // Starting in rem units
let yesWidth = 4;

no.addEventListener("click", function () {
  gif.src = `${noCats[getRandomInt(noCats.length)]}`;

  if (!this.dataset.clicks) {
    this.dataset.clicks = 1;
  } else {
    this.dataset.clicks++;
  }

  switch (parseInt(this.dataset.clicks)) {
    case 1:
      no.innerHTML = "Are you sure?";
      break;
    case 2:
      no.innerHTML = "Really sure?";
      break;
    case 3:
      no.innerHTML = "Are you positive?";
      break;
    case 4:
      no.innerHTML = "Pookie please...";
      break;
    case 5:
      no.innerHTML = "Just think about it!";
      break;
    case 6:
      no.innerHTML = "If you say no, I will be really sad...";
      break;
    case 7:
      no.innerHTML = "I will be very sad...";
      break;
    case 8:
      no.innerHTML = "I will be very very sad...";
      break;
    default:
      no.innerHTML = "No";
      no.style.display = "none";
      this.dataset.clicks = 1;
      break;
  }

  // Increase button size but limit max size
  if (yesWidth < 20) yesWidth += 2;
  if (yesHeight < 10) yesHeight += 1;

  yes.style.height = `${yesHeight}rem`;
  yes.style.width = `${yesWidth}rem`;
});
