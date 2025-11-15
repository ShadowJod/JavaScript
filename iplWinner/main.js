let teams2025 = [
  {
    name: "MI",
    img: "https://i.pinimg.com/1200x/04/f0/66/04f0666e310b25633417216db5fdfd46.jpg",
    captain: "Rohit Sharma",
    trophyWinner: true,
    trophySeasons: [2013, 2015, 2017, 2019, 2020],
    primaryColor: "Blue",
    secondaryColor: "Gold",
    teamOwner: "Mukesh & Nita Ambani", // Ambani family :contentReference[oaicite:0]{index=0}
    teamHomeGround: "Wankhede Stadium",
  },
  {
    name: "CSK",
    img: "https://i.pinimg.com/736x/05/52/40/055240865df92304dc2119c4bd000ba7.jpg",
    captain: "MS Dhoni",
    trophyWinner: true,
    trophySeasons: [2010, 2011, 2018, 2021, 2023],
    primaryColor: "Yellow",
    secondaryColor: "Blue",
    teamOwner: "N. Srinivasan", // :contentReference[oaicite:1]{index=1}
    teamHomeGround: "M. A. Chidambaram Stadium",
  },
  {
    name: "KKR",
    img: "https://i.pinimg.com/736x/0f/3b/9d/0f3b9d2cd0caa8fcedcd033c488e3f09.jpg", // agar chaho to image link dhoon sakti hoon
    captain: "Ajinkya Rahane", // 2025 mein KKR ka captain Rahane hai :contentReference[oaicite:2]{index=2}
    trophyWinner: true,
    trophySeasons: [2012, 2014, 2024], // 2024 mein KKR jeeti thi :contentReference[oaicite:3]{index=3}
    primaryColor: "Purple",
    secondaryColor: "Gold",
    teamOwner: "Shah Rukh Khan, Juhi Chawla & Jay Mehta", // :contentReference[oaicite:4]{index=4}
    teamHomeGround: "Eden Gardens",
  },
  {
    name: "SRH",
    img: "https://i.pinimg.com/736x/5d/3f/0e/5d3f0e94760c34125428d4908643ebbe.jpg",
    captain: "Pat Cummins",
    trophyWinner: true,
    trophySeasons: [2016],
    primaryColor: "Orange",
    secondaryColor: "Black",
    teamOwner: "Kalanithi Maran", // :contentReference[oaicite:5]{index=5}
    teamHomeGround: "Rajiv Gandhi International Stadium",
  },
  {
    name: "RR",
    img: "https://i.pinimg.com/1200x/8d/20/3b/8d203bad24dcab62b60db3a8f1c87ce6.jpg",
    captain: "Sanju Samson",
    trophyWinner: true,
    trophySeasons: [2008],
    primaryColor: "Pink",
    secondaryColor: "Blue",
    teamOwner: "Manoj Badale & Co.", // :contentReference[oaicite:6]{index=6}
    teamHomeGround: "Sawai Mansingh Stadium",
  },
  {
    name: "RCB",
    img: "https://i.pinimg.com/736x/29/68/d7/2968d7e39fd2cf3e47e008f49a3ca4e8.jpg",
    captain: "Rajat Patidar", // 2025 mein final mein captain tha :contentReference[oaicite:7]{index=7}
    trophyWinner: true,
    trophySeasons: [2025], // RCB ne pehli baar 2025 mein title jeeta :contentReference[oaicite:8]{index=8}
    primaryColor: "Red",
    secondaryColor: "Black",
    teamOwner: "United Spirits / Diageo", // :contentReference[oaicite:9]{index=9}
    teamHomeGround: "M. Chinnaswamy Stadium",
  },
  {
    name: "DC",
    img: "https://i.pinimg.com/736x/ea/71/db/ea71dba7c396eb39959843f9ddfc4055.jpg",
    captain: "Axar Patel",
    trophyWinner: false,
    trophySeasons: [],
    primaryColor: "Blue",
    secondaryColor: "Red",
    teamOwner: "GMR Group & JSW Group", // :contentReference[oaicite:10]{index=10}
    teamHomeGround: "Arun Jaitley Stadium",
  },
  {
    name: "PBKS",
    img: "https://i.pinimg.com/736x/8c/f4/9f/8cf49fe5a730d3de1450daa38a136e6a.jpg",
    captain: "Shreyas Iyer",
    trophyWinner: false,
    trophySeasons: [],
    primaryColor: "Red",
    secondaryColor: "Silver",
    teamOwner: "Mohit Burman, Ness Wadia, Preity Zinta, Karan Paul", // :contentReference[oaicite:11]{index=11}
    teamHomeGround: "PCA Stadium",
  },
  {
    name: "GT",
    img: "https://i.pinimg.com/736x/98/1d/60/981d60788c44e0b8d942d5092ef999b7.jpg",
    captain: "Shubman Gill",
    trophyWinner: true,
    trophySeasons: [2022],
    primaryColor: "Dark Blue",
    secondaryColor: "Gold",
    teamOwner: "Torrent Group & CVC Capital", // Torrent ne 2025 mein 67% stake kharidi, CVC paas kuch hissa hai. :contentReference[oaicite:12]{index=12}
    teamHomeGround: "Narendra Modi Stadium",
  },
  {
    name: "LSG",
    img: "https://i.pinimg.com/736x/ab/90/bd/ab90bd0385a76139a502fd3c58ff5ebc.jpg",
    captain: "Rishabh Pant",
    trophyWinner: false,
    trophySeasons: [],
    primaryColor: "Light Blue",
    secondaryColor: "Orange",
    teamOwner: "Sanjiv Goenka / RPSG Group", // :contentReference[oaicite:13]{index=13}
    teamHomeGround: "Ekana Cricket Stadium",
  },
];
let main = document.querySelector("main");
let bttn = document.querySelector("button");

bttn.addEventListener("click", () => {

  // Remove previous card
  let old = document.querySelector(".teamStats");
  if (old) old.remove();

  let number = Math.floor(Math.random() * teams2025.length);
  let team = teams2025[number];

  let h1 = document.querySelector("h1");
  h1.textContent = `Team Name : ${team.name}`;

  let teamstats = document.createElement("div");
  teamstats.classList.add("teamStats");

  let img = document.createElement("img");
  img.src = team.img;
  teamstats.appendChild(img);

  let texts = document.createElement("div");
  texts.classList.add("texts");

  texts.innerHTML = `
    <h2>Captain: ${team.captain}</h2>
    <h3>Team Owner: ${team.teamOwner}</h3>
    <h3>Home Ground: ${team.teamHomeGround}</h3>
    <h3>Trophy: ${team.trophyWinner ? "Winner" : "Not Winner"}</h3>
    <h3 class="seasons">${team.trophyWinner ? "Trophy Seasons: " + team.trophySeasons.join(", ") : ""}</h3>
  `;

  teamstats.style.border = `2px solid ${team.primaryColor}`;
  teamstats.style.boxShadow = `0 0 20px ${team.primaryColor}`;

  teamstats.appendChild(texts);
  main.append(teamstats);
});
