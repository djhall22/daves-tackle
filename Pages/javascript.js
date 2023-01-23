//Conditionals: ternary operator practice

let soup;
let isCustomerBanned = false;
let soupAccess = isCustomerBanned
  ? "NO SOUP FOR YOU!"
  : soup
  ? `Yes, we have ${soup} today`
  : "sorry, no soup today";
console.log(soupAccess);

let playerOne = "paper";
let computer = "scissors";
let result =
  playerOne === computer
    ? "Tie Game"
    : playerOne === "rock" && computer === "scissors"
    ? "playerOne wins!"
    : playerOne === "paper" && computer === "scissors"
    ? "computer wins!"
    : playerOne === "scissors" && computer === "paper"
    ? "playerOne Wins!"
    : "playerOne wins";
console.log(result);
