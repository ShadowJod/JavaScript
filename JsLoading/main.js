let loader = document.querySelector("#loader");
let text = document.querySelector("#text");
let status = document.querySelector("#status");
let count = 0;
let container = document.querySelector(".container");
let main = document.querySelector("main");

let si = setInterval(() => {
  if (count <= 100) {
    loader.style.width = `${count}%`;
    status.textContent = `${count}%`;
    count++;
  } else {
    clearInterval(si);
    text.textContent = "Welcome!";

    setTimeout(() => {
      container.style.display = "none";
      main.style.display = "initial";
    },1000);
  }
}, (10 * 1000) / 100);
