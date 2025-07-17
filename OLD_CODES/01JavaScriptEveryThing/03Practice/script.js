function rps(user, computerTurn) {
    if(user === computerTurn) return "Match Draw!";

    if(user === "rock" && computerTurn === "scissor") return "User win"
    if(user === "scissor" && computerTurn === "paper") return "User win"
    if(user === "paper" && computerTurn === "rock") return "User win"

    return "Compute Win!"
}

console.log(rps("paper", "rock"))