const board = document.getElementById("board");
const winnerText = document.getElementById("winner");
const currentPlayerDisplay = document.getElementById("currentPlayer");
const xWinsDisplay = document.getElementById("xWins");
const oWinsDisplay = document.getElementById("oWins");
let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let xWins = 0,
  oWins = 0;

function checkWinner() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let combination of winningCombinations) {
    const [a, b, c] = combination;
    if (
      gameBoard[a] &&
      gameBoard[a] === gameBoard[b] &&
      gameBoard[a] === gameBoard[c]
    ) {
      winnerText.textContent = `${gameBoard[a]} Wins! 🎉`;
      document.querySelectorAll(".cell")[a].classList.add("winning");
      document.querySelectorAll(".cell")[b].classList.add("winning");
      document.querySelectorAll(".cell")[c].classList.add("winning");
      gameBoard[a] === "X" ? xWins++ : oWins++;
      updateScoreboard();
      return true;
    }
  }
  if (!gameBoard.includes("")) {
    winnerText.textContent = "It's a Draw! 🤝";
    return true;
  }
  return false;
}

function handleClick(index) {
  if (gameBoard[index] || winnerText.textContent) return;
  gameBoard[index] = currentPlayer;
  renderBoard();
  if (!checkWinner()) {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    currentPlayerDisplay.textContent = currentPlayer;
  }
}

function renderBoard() {
    board.innerHTML = "";
    gameBoard.forEach((cell, index) => {
      const div = document.createElement("div");
      div.classList.add("cell");
      if (cell) div.classList.add("taken");
      div.textContent = cell;
      div.setAttribute("aria-label", `Cell ${index + 1}, ${cell || "empty"}`);
      div.addEventListener("click", () => handleClick(index));
      board.appendChild(div);
    });
  }