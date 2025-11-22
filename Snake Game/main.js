const board = document.querySelector(".board");
const startButton = document.querySelector(".startbttn");
const modal = document.querySelector(".modal");
const startGame = document.querySelector(".start-game");
const gameOver = document.querySelector(".game-over");
const restartbttn = document.querySelector(".restartbttn");

const blockHeight = 50;
const blockWidth = 50;
let intervalId = null; 
let score = 0;
let highScore = localStorage.getItem("highScore") || 0;
let time = "00-00";
const rows = Math.floor(board.clientHeight / blockHeight);
const cols = Math.floor(board.clientWidth / blockWidth);
let food = {
  x: Math.floor(Math.random() * rows),
  y: Math.floor(Math.random() * cols),
};

const blocks = [];
let snake = [
  {
    x: 1,
    y: 4,
  },
  // {
  //   x: 1,
  //   y: 5,
  // },
  // {
  //   x: 1,
  //   y: 6,
  // },
];

for (let row = 0; row < rows; row++) {
  for (let col = 0; col < cols; col++) {
    const block = document.createElement("div");
    block.classList.add("block");
    board.appendChild(block);
    blocks[`${row}-${col}`] = block;
  }
}

blocks[`${food.x}-${food.y}`].classList.add("food");

let direction = "down";

// intervalId = setInterval(() => {
//   render();
// }, 400);

function render() {
  let head = null;

  document.querySelector("#high-score").textContent = highScore;
  blocks[`${food.x}-${food.y}`].classList.add("food");

  if (direction === "left") {
    head = { x: snake[0].x, y: snake[0].y - 1 };
  } else if (direction === "right") {
    head = { x: snake[0].x, y: snake[0].y + 1 };
  } else if (direction === "down") {
    head = { x: snake[0].x + 1, y: snake[0].y };
  } else if (direction === "up") {
    head = { x: snake[0].x - 1, y: snake[0].y };
  }

  if (head.x < 0 || head.x >= rows || head.y < 0 || head.y >= cols) {
    clearInterval(intervalId);
    gameOver.style.display = "flex";
    
    return
  }

  snake.forEach((e) => {
    blocks[`${e.x}-${e.y}`].classList.remove("fill");
  });
  snake.unshift(head);
  snake.pop();

  if (head.x === food.x && head.y === food.y) {
    score+=10;
    if(score>highScore){
      highScore = score;
      localStorage.setItem("highScore", highScore);
    }
    document.querySelector("#score").textContent = score;
    blocks[`${food.x}-${food.y}`].classList.remove("food");
    food = {
      x: Math.floor(Math.random() * rows),
      y: Math.floor(Math.random() * cols),
    };
    blocks[`${food.x}-${food.y}`].classList.add("food");
    snake.unshift(head);
  }

  snake.forEach((e) => {
    blocks[`${e.x}-${e.y}`].classList.add("fill");
  });
}

startButton.addEventListener("click", () => {
  startGame.style.display = "none";
  intervalId = setInterval(() => {
    render();
  }, 300);  
});



addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") {
    direction = "up";
  } else if (e.key === "ArrowDown") {
    direction = "down";
  } else if (e.key === "ArrowLeft") {
    direction = "left";
  } else if (e.key === "ArrowRight") {
    direction = "right";
  }
});



restartbttn.addEventListener("click", rerender);


function rerender() {
  gameOver.style.display = "none";

  // Purani snake clear kar
  snake.forEach((e) => {
    blocks[`${e.x}-${e.y}`].classList.remove("fill");
  });

  time = "00-00";
  // Score reset kar
  score = 0;
  document.querySelector("#score").textContent = score;

  // Snake aur food reset
  snake = [{ x: 1, y: 4 }];
  food = {
    x: Math.floor(Math.random() * rows),
    y: Math.floor(Math.random() * cols),
  };

  // Purani food remove kar aur nayi add kar
  document.querySelectorAll(".food").forEach(f => f.classList.remove("food"));
  blocks[`${food.x}-${food.y}`].classList.add("food");

  // Direction reset
  direction = "down";

  clearInterval(intervalId); // purana interval stop
  intervalId = setInterval(() => {
    render();
  }, 300);
}
