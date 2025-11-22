let ele = document.querySelectorAll(".ele");

ele.forEach((val) => {

  val.addEventListener("mousemove",(e)=>{
    val.children[1].style.left = e.offsetX + "px";
    val.children[1].style.opacity = 1;
  })
    val.addEventListener("mouseleave", () => {
    val.style.backgroundColor = "transparent";
    val.children[1].style.opacity = 0;
  });
});
