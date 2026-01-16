let humanScore = 0
let computerScore = 0
count = 5
function getComputerChoice() {
    const number = Math.floor(Math.random() * 3)
    switch(number) {
    case 0:
        console.log("rock")
        return  "rock"
    case 1:'Player: ${}'
        console.log("paper")
        return "paper"
    case 2:
        console.log("scissors")
        return "scissors"
    }
}

function getHumanChoice() {
    const choice = prompt("Welcome to Rock Paper Scissors! Please enter your choice")
    console.log(choice.toLowerCase())
    return(choice)
}

function playGame(count) {
    while (count > 0) {
        function playRound(humanChoice, computerChoice) {
        if (humanChoice == "scissors") {
            if (computerChoice == "paper") {
                humanScore += 1
                console.log("You win! Scissors beats Paper.")
            }
            if (computerChoice == "rock") {
                computerScore += 1
                console.log("You lose! Rock beats Scissors")
            }
        }
        if (humanChoice == "paper") {
            if (computerChoice == "rock") {
                humanScore += 1
                console.log("You win! Paper beats Rock.")
            }
            if (computerChoice == "scissors") {
                computerScore += 1
                console.log("You lose! Scissors beats Paper.")
            }

        }
        if (humanChoice === "rock") {
            if (computerChoice === "scissors") {
                humanScore += 1
                console.log("You win! Rock beats Scissors.")
            }
            if (computerChoice === "paper") {
                computerScore += 1
                console.log("You lose! Paper beats Rock.")
            }
        }
        if (humanChoice == computerChoice) {
            console.log("It's a draw.")
    

    }   count -= 1
        console.log(`Player: ${humanScore} \nComputer: ${computerScore}`)
    }
        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()
        console.log(`Player: ${humanScore} \nComputer: ${computerScore}`)
        playRound(humanSelection, computerSelection)
} }

playGame(5)