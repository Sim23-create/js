var userChoice = prompt("Choose rock, paper, or scissors:");
var computerChoice = Math.floor(Math.random() * 3);

if (computerChoice === 0) {
    computerChoice = "rock";
} else if (computerChoice === 1) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}

// Check for invalid user input
if (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
    alert("Please choose rock, paper, or scissors.");
}
// Check for a tie
else if (userChoice === computerChoice) {
    alert("It's a tie! You both chose " + userChoice + ".");
}
// Check for a user win
else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "rock")
) {
    alert("You win! You chose " + userChoice + " and the computer chose " + computerChoice + ".");
}
// Otherwise, computer wins
else {
    alert("The computer wins! You chose " + userChoice + " and the computer chose " + computerChoice + ".");
}
