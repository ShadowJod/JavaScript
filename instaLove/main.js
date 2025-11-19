let img = document.querySelector("img");
let like = document.querySelector("i");


img.addEventListener("dblclick",()=>{
    like.style.transform = 'translate(-50%,-50%) scale(1)';
    like.style.opacity = 0.8;


    setTimeout(()=>{
        like.style.opacity = 0;
    },400)
    

    setTimeout(()=>{
        like.style.transform = 'translate(-50%,-50%) scale(0)';
    },400)
    
    
})