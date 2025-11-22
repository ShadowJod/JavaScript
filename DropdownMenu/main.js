let container = document.querySelector(".faq");

container.addEventListener("click",(e)=>{

    
    if(e.target.textContent === "FAQ1"){
        if((document.querySelector(".clopsable1").style.display )==="initial"){
            document.querySelector(".clopsable1").style.display="none";
        }
        else{
            document.querySelector(".clopsable1").style.display="initial";
        }
        
    }
    else if(e.target.textContent === "FAQ2"){
        if((document.querySelector(".clopsable2").style.display )==="initial"){
            document.querySelector(".clopsable2").style.display="none";
        }
        else{
            document.querySelector(".clopsable2").style.display="initial";
        }
    }
    else if(e.target.textContent === "FAQ3"){
       if((document.querySelector(".clopsable3").style.display )==="initial"){
            document.querySelector(".clopsable3").style.display="none";
        }
        else{
            document.querySelector(".clopsable3").style.display="initial";
        }
    }
    else if(e.target.textContent === "FAQ4"){
       if((document.querySelector(".clopsable4").style.display )==="initial"){
            document.querySelector(".clopsable4").style.display="none";
        }
        else{
            document.querySelector(".clopsable4").style.display="initial";
        }
    }
        
})
