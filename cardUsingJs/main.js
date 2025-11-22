const users = [
  {
    fullName: "Aarav Sharma",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    profession: "Frontend Developer",
    description: "A passionate developer who loves building modern UI with React and Tailwind.",
    tags: ["JavaScript", "React", "Tailwind", "UI/UX"]
  },
  {
    fullName: "Sneha Kapoor",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    profession: "UI/UX Designer",
    description: "Creative designer focused on user-centered design and beautiful digital experiences.",
    tags: ["Figma", "Prototyping", "Design", "Branding"]
  },
  {
    fullName: "Rohan Verma",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36",
    profession: "Backend Engineer",
    description: "Backend specialist experienced in Node.js, APIs, and scalable server architectures.",
    tags: ["Node.js", "Express", "MongoDB", "APIs"]
  },
  {
    fullName: "Priya Mehta",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    profession: "Data Scientist",
    description: "Works with machine learning models and data visualization to build intelligent systems.",
    tags: ["Python", "Machine", "Pandas", "AI"]
  },
  {
    fullName: "Kabir Singh",
    image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6",
    profession: "Mobile App Developer",
    description: "Flutter developer who creates smooth and fast mobile experiences for Android and iOS.",
    tags: ["Flutter", "Dart", "Firebase", "Mobile UI"]
  }
];


let clutter = "";

users.forEach((e)=>{
    clutter+= ` <div class="card">
            <img src="${e.image}" alt="">
            <h1>${e.fullName}</h1>
            <h2>${e.profession}</h2>
            <p>${e.description}</p>
            <ul>
                <li>${e.tags[0]}</li>
                <li>${e.tags[1]}</li>
                <li>${e.tags[2]}</li>
                <li>${e.tags[3]}</li>
            </ul>
        </div>`
})

let main = document.querySelector("main");

main.innerHTML = clutter;


