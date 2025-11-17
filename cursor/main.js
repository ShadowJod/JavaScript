let main = document.querySelector("main");
let crsr = document.querySelector("#cursor");

main.addEventListener("mousemove",(e)=>{
    crsr.style.left = e.x + "px";
    crsr.style.top = e.y + "px";

})