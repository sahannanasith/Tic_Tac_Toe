const board = document.getElementById("board");
const winnerText = document.getElementById("winner");
const currentPlayerDisplay = document.getElementById("currentPlayer");
const xWinsDisplay = document.getElementById("xWins");
const oWinsDisplay = document.getElementById("oWins");
let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let xWins = 0, oWins = 0;