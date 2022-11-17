function getComputerChoice(){
    let choices = ["Rock","Paper" , "Scissors"]
    const randomChoice = Math.floor(Math.random()*choices.length)
    console.log(choices[randomChoice])

}
getComputerChoice()