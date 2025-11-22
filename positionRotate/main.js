let main = document.querySelector("main");
let bttn = document.querySelector("button");

bttn.addEventListener("click", ()=>{
    let child = document.createElement("div")
    child.classList.add("box");
    main.appendChild(child);

    let x = Math.random()*100;
    let y = Math.random()*100;
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    let rot = Math.floor(Math.random()*360);

    child.style.left = x+"%";
    child.style.top = y+"%";
    child.style.backgroundColor = `rgb(${r},${g},${b})`
    child.style.transform = `rotate(${rot}deg)`
    
})