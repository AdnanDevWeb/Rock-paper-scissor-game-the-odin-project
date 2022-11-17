function getComputerChoice(){
    let choices = ["Rock","Paper" , "Scissors"]
    const randomChoice = Math.floor(Math.random()*choices.length)
    return choices[randomChoice]
}
function getPlayerChoice(){
    let choices = ["Rock","Paper" , "Scissors"]
    const randomChoice = Math.floor(Math.random()*choices.length)
    return choices[randomChoice]
}
console.log(getComputerChoice())
console.log(getPlayerChoice())


function playRound(computerSelection , playerSelection){
    //draw

    if(computerSelection.toUpperCase() === "ROCK" && playerSelection.toUpperCase() ==="ROCK"){
        return "it's a draw"
    }
    else if(computerSelection.toUpperCase() === "PAPER" && playerSelection.toUpperCase() ==="PAPER"){
        return "it's a draw"
    }
    else if(computerSelection.toUpperCase() === "SCISSORS" && playerSelection.toUpperCase() ==="SCISSORS"){
        return "it's a draw"
    }

    // rock win computer

    else if(computerSelection.toUpperCase() === "ROCK" && playerSelection.toUpperCase() ==="SCISSORS"){
        return "Computer win ! Rock beats scissors"
    }

    //rock win player 
    else if(computerSelection.toUpperCase() === "ROCK" && playerSelection.toUpperCase() ==="SCISSSORS"){
        return "Player win ! Rock beats scissors"
    }

    // paper win computer 
    else if (computerSelection.toUpperCase() === "PAPER" && playerSelection.toUpperCase() === "ROCK"){
        return "Computer win ! Paper beats rock"
    }
    // paper win player
    else if (computerSelection.toUpperCase() === "ROCK" && playerSelection.toUpperCase() === "PAPER"){
        return "Player win ! Paper beats rock"
    }
    //scissors win computer 
    else if (computerSelection.toUpperCase() === "SCISSORS" && playerSelection.toUpperCase() === "PAPER"){
        return "Computer win ! Scissors beats paper"
    }
    //scissors win player
    else if (computerSelection.toUpperCase() === "PAPER" && playerSelection.toUpperCase() === "SCISSORS"){
        return "Player win ! Scissors beats paper"
    }
}