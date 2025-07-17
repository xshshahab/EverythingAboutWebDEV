function rockPaperScissor(userTurn, computerTurn) {
    if (userTurn === computerTurn) return "It's a Tie!";

    if (userTurn === "rock" && computerTurn === "scissor") return "User : Rock Wins!";
    if (userTurn === "scissor" && computerTurn === "rock") return "Computer : Rock Wins!";

    if (userTurn === "rock" && computerTurn === "paper") return "Computer : Paper Wins!";
    if (userTurn === "paper" && computerTurn === "rock") return "User : Paper Wins!";

    if (userTurn === "scissor" && computerTurn === "paper") return "User : Scissor Wins!";
    if (userTurn === "paper" && computerTurn === "scissor") return "Computer : Scissor Wins!";

    // Optional: handle invalid input
    return "Invalid input!";
}


const result = rockPaperScissor("paper", "rock")
console.log("Result => ", result)