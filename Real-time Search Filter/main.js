let users = [
  {
    name: "Nikhil Mishra",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop",
    about: "Frontend Developer passionate about building modern web apps.",
  },
  {
    name: "Aarav Sharma",
    photo: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=600&auto=format&fit=crop",
    about: "UI/UX Designer who loves minimal and aesthetic interfaces.",
  },
  {
    name: "Riya Patel",
    photo: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&auto=format&fit=crop",
    about: "Backend Developer with a love for Node.js and databases.",
  },
  {
    name: "Aditya Singh",
    photo: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=600&auto=format&fit=crop",
    about: "Full Stack Engineer who enjoys solving real-world problems.",
  },
  {
    name: "Priya Verma",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop",
    about: "AI/ML Enthusiast exploring deep learning and computer vision.",
  },
  {
    name: "Karan Mehta",
    photo: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&auto=format&fit=crop",
    about: "Mobile App Developer focusing on Flutter and React Native.",
  },
  {
    name: "Sneha Gupta",
    photo: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=600&auto=format&fit=crop",
    about: "Software Engineer and open-source contributor.",
  },
];

function showUser(arr) {
  let container = document.querySelector("#container"); 

  arr.forEach((user) => {
    let box = document.createElement("div");
    box.classList.add("box");

    let heading = document.createElement("h1");
    heading.textContent = user.name;

    let para = document.createElement("p");
    para.textContent = user.about;

    box.appendChild(heading);
    box.appendChild(para);

    // style
    box.style.backgroundImage = `url(${user.photo})`;


    container.appendChild(box);
  });
}

showUser(users);

let input = document.querySelector("input");
input.addEventListener("input", ()=>{
    let newUser = users.filter((user)=>{
        return user.name.toLowerCase().startsWith(input.value.toLowerCase())
    })

    document.querySelector("#container").innerHTML = "";
    showUser(newUser);


    
})