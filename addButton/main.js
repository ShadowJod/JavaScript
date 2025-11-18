let bttn = document.querySelector("button");
let h3 = document.querySelector("h3");

let count = 0;

bttn.addEventListener("click", ()=>{
    
    if(count===0){
        h3.textContent = "Friend";
        h3.style.color = "green";
        bttn.textContent = "Remove";
        bttn.style.backgroundColor = "red";
        count = 1;
    }
    else{
        h3.textContent = "Starnger";
        h3.style.color = "red";
        bttn.textContent = "Add Friend";
        bttn.style.backgroundColor = "green";
        
        count = 0
    }
})