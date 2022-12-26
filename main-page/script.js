function getComputerChoice(){
    let choices = ["rock","paper" , "scissors"]
    const randomChoice = Math.floor(Math.random()*choices.length)
    return choices[randomChoice]
}


function getPlayerChoice(choice){
    return choice
}

function playRound(computerSelection , playerSelection){
    //draw

    if(computerSelection.toUpperCase() === "ROCK" && playerSelection.toString().toUpperCase() ==="ROCK"){
        return "draw"
    }
    else if(computerSelection.toUpperCase() === "PAPER" && playerSelection.toString().toUpperCase() ==="PAPER"){
        return "draw"
    }
    else if(computerSelection.toUpperCase() === "SCISSORS" && playerSelection.toString().toUpperCase() ==="SCISSORS"){
        return "draw"
    }

    // rock win computer

    else if(computerSelection.toUpperCase() === "ROCK" && playerSelection.toString().toUpperCase() ==="SCISSORS"){
        return "ComputerWin"
    }

    //rock win player 
    else if(computerSelection.toUpperCase() === "ROCK" && playerSelection.toString().toUpperCase() ==="SCISSSORS"){
        return "PlayerWin"
    }

    // paper win computer 
    else if (computerSelection.toUpperCase() === "PAPER" && playerSelection.toString().toUpperCase() === "ROCK"){
        return "ComputerWin"
    }
    // paper win player
    else if (computerSelection.toUpperCase() === "ROCK" && playerSelection.toString().toUpperCase() === "PAPER"){
        return "PlayerWin"
    }
    //scissors win computer 
    else if (computerSelection.toUpperCase() === "SCISSORS" && playerSelection.toString().toUpperCase() === "PAPER"){
        return "ComputerWin"
    }
    //scissors win player
    else if (computerSelection.toUpperCase() === "PAPER" && playerSelection.toString().toUpperCase() === "SCISSORS"){
        return "PlayerWin"
    }
}

// 
let computerPoint = 0;
let playerPoint = 0;


const computerChoiceImg = document.querySelector('img[Alt="computer-choice"]')
const middleText = document.querySelector('.middleText')
const picks = document.querySelectorAll('.pick')
const picksContainer = document.querySelector('.picks-container')


const toShowBtns = document.querySelectorAll('.toShow')
const toHideBtns = document.querySelectorAll('.toHide')

const result = document.querySelector('.result')
const playBtn = document.querySelector('.playAgain')

const humanChoice = document.querySelector('.humanChoice')


picks.forEach(pick =>{
    pick.addEventListener('click' , e =>{
        console.log(getPlayerChoice(pick.alt));
        let computerChoiceFunc = getComputerChoice();
        let computerChoice = computerChoiceFunc;

        let playRoundVar = playRound(computerChoice , getPlayerChoice(pick.alt))
        let roundResult = playRoundVar
        if(computerChoice === "paper") {
            console.log("paper");
            computerChoiceImg.src = "http://127.0.0.1:5500/imgs/paper.svg"
        }
        else if(computerChoice === "rock") {
            console.log("rock");
            computerChoiceImg.src = "http://127.0.0.1:5500/imgs/rock.svg"
        }
        else{
            console.log("scissors");
            computerChoiceImg.src = "http://127.0.0.1:5500/imgs/scissor.svg"

        }

        switch(roundResult){
            case "draw":
                result.textContent ="IT'S A DRAW"
                console.log("draw")
                break;

            case "ComputerWin":
                result.textContent ="COMPUTER WON"
                console.log("computerWin")
                break;

            case "PlayerWin":
                result.textContent ="YOU WON"
                console.log("YouWon")
                break;
            default:
                console.log(false)
                break
        }
        humanChoice.src = pick.src;
        picksContainer.style.display = "none"

        toShowBtns.forEach(button => button.style.display ="block")
        toHideBtns.forEach(button => button.style.display ="none")

    })
})
playBtn.addEventListener('click' , ()=>{
    location.reload(true)
})
















