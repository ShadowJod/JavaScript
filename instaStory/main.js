let arr = [
  {
    cover:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=687&auto=format&fit=crop",
    full: "https://images.unsplash.com/photo-1564485377539-4af72d1f6a2f?q=80&w=687&auto=format&fit=crop",
  },
  { 
    cover:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=687&auto=format&fit=crop",
    full: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=687&auto=format&fit=crop",
  },
  {
    cover:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=687&auto=format&fit=crop",
    full: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=687&auto=format&fit=crop",
  },
  {
    cover:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=687&auto=format&fit=crop",
    full: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=687&auto=format&fit=crop",
  },
  {
    cover:
      "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?q=80&w=687&auto=format&fit=crop",
    full: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=687&auto=format&fit=crop",
  },
];

let storiyan = document.querySelector("#storiyan");
let clutter = "";
let fullImage = document.querySelector("#full-screen");

arr.forEach((e,idx)=>{
    clutter+= `<div class="story">
                    <img id="${idx}" src="${e.cover}" alt="">
                </div>`               
})

storiyan.innerHTML= clutter

storiyan.addEventListener("click",(e)=>{
  fullImage.style.display = "block";
  fullImage.style.backgroundImage = `url(${arr[e.target.id].full})`;

  setTimeout(()=>{
    fullImage.style.display = "none";
  },3000)
})
