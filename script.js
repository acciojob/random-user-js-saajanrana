//your code here
const api = "https://randomuser.me/api/";

const fullName = document.querySelector(".name");
const image = document.querySelector(".image");
const age = document.querySelector(".age");
const phone = document.querySelector(".phone");
const email = document.querySelector(".email");
const bigBtn = document.querySelector(".big-btn");
const output = document.querySelector(".additional-info");

let emailData, ageData, phoneData;

const fetchData = async () => {
  const response = await fetch(api);
  const data = await response.json();
  const result = data.results[0];
  image.innerHTML = `<img src=${result.picture.large} />`;
  fullName.innerHTML = `<h3>${result.name.first} ${result.name.last}</h3>`;
  emailData = result.email;
  ageData = result.dob.age;
  phoneData = result.cell;
};

window.onload = () => {
  fetchData();
};

age.addEventListener("click", () => {
  output.innerText = ageData;
});

phone.addEventListener("click", () => {
  output.innerText = phoneData;
});

email.addEventListener("click", () => {
  output.innerText = emailData;
});

bigBtn.addEventListener("click", () => {
  output.innerText = "";
  fetchData();
});