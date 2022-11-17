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
getComputerChoice()
getPlayerChoice()