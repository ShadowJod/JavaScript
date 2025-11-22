let inner = document.querySelector("#inner");
let h5 = document.querySelector("h5");
let bttn = document.querySelector("button");
let h3 = document.querySelector("h3")


bttn.addEventListener("click", ()=>{
    let sec = Math.floor((Math.random()*10));
    console.log(sec);
    
    let count = 0;
    let si = setInterval(()=>{
        if(count<=100){
            inner.style.width = `${count}%`
            h5.textContent = `${count}%`
            count++;
        }
        else {
            bttn.textContent = "Downloaded";
            bttn.style.opacity = 0.5;
            clearInterval(si);
            h3.innerHTML = `<h3>your song downloaded in ${sec}s </h3>`
        }
        
    },(1000*sec)/100)
})