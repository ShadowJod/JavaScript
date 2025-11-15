let bttn = document.querySelector("button");
let main = document.querySelector("main");


bttn.addEventListener("click",()=>{
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    main.style.backgroundColor = `rgb(${r},${g},${b})`
})