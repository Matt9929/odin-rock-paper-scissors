//Initialize the scoreboard
let humanScore = 0;
let computerScore = 0;

// Get user choice
const humanSelection = function() {
    let choice = prompt ("Make your choice: Rock - Paper - Scissors");
    return choice;
};

// Get CPU choice
const computerSelection = function() {
    let rand = function() {
        return Math.floor(Math.random()*3)+1;
    }
    switch (rand()) {
           case 1:
            return "Rock";
            break;
        case 2:
            return "Paper";
            break;
        case 3:
            return "Scissors";
            break;
        default:
            return
    }

}
// Plays a round
function playRound(human, computer) {
    console.log("You chose: " + human);
    console.log("Computer chose: " + computer);
    
    // Compares the choices
    switch (human) {
        case "Rock":
            switch (computer) {
                case "Rock":
                    console.log("It's a Tie");
                    break;
                case "Paper":
                    console.log("You lose! Paper beats Rock");
                    computerScore ++;
                break;
                case "Scissors":
                    console.log("You Win! Rock beats Scissors");
                    humanScore ++;
                break;
                default:
            }
                break;

        case "Paper":
            switch (computer) {
                case "Paper":
                    console.log("It's a Tie");
                    break;
                case "Rock":
                    console.log("You Win! Paper beats Rock");
                    humanScore ++;
                break;
                case "Scissors":
                    console.log("You Lose! Scissors beat Paper");
                    computerScore ++;
                break;
                default:
            }
                break;
        
        case "Scissors":
            switch (computer) {
                case "Scissors":
                    console.log("It's a Tie");
                    break;
                case "Rock":
                    console.log("You Lose! Rock beats Scissors");
                    computerScore ++;
                break;
                case "Paper":
                    console.log("You Win! Scissors beat Paper");
                    humanScore ++;
                break;
                default:
            }
                break;  
    }
}

//Plays a game of 5 rounds and outputs the final results
for (let round=0; round<5; round++) {
playRound(humanSelection(), computerSelection());
}
if (humanScore>computerScore){
    console.log("Congratulations you win with" + humanScore + " point(s)");
}
    else if (humanScore === computerScore) {
        console.log("You tied with " + humanScore + " point(s)");
    }
    else {
        console.log("You lose! Computer scored " + computerScore + " point(s)")
    }

