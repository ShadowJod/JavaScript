let node = document.querySelector(".node");
let nodeAll = document.querySelectorAll(".node");
let h2 = document.querySelector("h2");

let aud1 = new Audio("28.mp3");
let aud2 = new Audio("29.mp3");
let aud3 = new Audio("30.mp3");
let aud4 = new Audio("31.mp3");
let aud5 = new Audio("32.mp3");
let aud6 = new Audio("33.mp3");
let aud7 = new Audio("34.mp3");
let aud8 = new Audio("35.mp3");
let aud9 = new Audio("36.mp3");

window.addEventListener("keydown", (e) => {
  if (e.code === "KeyA") {
    aud1.currentTime = 0;
    aud1.play();
    h2.textContent = e.code;
  } else if (e.code === "KeyB") {
    aud2.currentTime = 0;
    aud2.play();
    h2.textContent = e.code;
  } else if (e.code === "KeyC") {
    aud3.currentTime = 0;
    aud3.play();
    h2.textContent = e.code;
  } else if (e.code === "KeyD") {
    aud4.currentTime = 0;
    aud4.play();
    h2.textContent = e.code
  } else if (e.code === "KeyE") {
    aud5.currentTime = 0;
    aud5.play();
    h2.textContent = e.code
  } else if (e.code === "KeyF") {
    aud6.currentTime = 0;
    aud6.play();
    h2.textContent = e.code
  } else if (e.code === "KeyG") {
    aud7.currentTime = 0;
    aud7.play();
    h2.textContent = e.code
  } else if (e.code === "KeyH") {
    aud8.currentTime = 0;
    aud8.play();
    h2.textContent = e.code
  } else if (e.code === "KeyI") {
    aud9.currentTime = 0;
    aud9.play();
    h2.textContent = e.code
  } else {
    h2.style.display = "block";
    h2.textContent = "Inavlid Keys";

    setTimeout(() => {
      h2.textContent = "";
    }, 500);
  }
});

nodeAll.forEach((e) => {
  e.addEventListener("click", (dets) => {
    if (dets.target.textContent === "A") {
      aud1.currentTime = 0;
      aud1.play();
    } else if (dets.target.textContent === "B") {
      aud2.currentTime = 0;
      aud2.play();
    } else if (dets.target.textContent === "C") {
      aud3.currentTime = 0;
      aud3.play();
    } else if (dets.target.textContent === "D") {
      aud4.currentTime = 0;
      aud4.play();
    } else if (dets.target.textContent === "E") {
      aud5.currentTime = 0;
      aud5.play();
    } else if (dets.target.textContent === "F") {
      aud6.currentTime = 0;
      aud6.play();
    } else if (dets.target.textContent === "G") {
      aud7.currentTime = 0;
      aud7.play();
    } else if (dets.target.textContent === "H") {
      aud8.currentTime = 0;
      aud8.play();
    } else if (dets.target.textContent === "I") {
      aud9.currentTime = 0;
      aud9.play();
    }
  });
});
