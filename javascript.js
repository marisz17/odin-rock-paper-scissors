

//function that randomly returns “rock”, “paper” or “scissors”.

let getComputerChoice = () => {
    /* Declare a variable and assign it a random number between 3 choices*/
    let randomNumber = Math.floor(Math.random() * 3);

    /* Link three choices 0, 1 and 2 to rock, paper and scissors respectively and return
    the corresponding words i.e. switch*/

    switch (randomNumber) {

        case 0: 
                return "rock";
                break;
        case 1: 
                return "paper";
                break;
        case 2: 
                return "scissors";
                break;
    }
}

//function that takes the user choice and returns it.

let getHumanChoice = () => {
    //prompt user choice
    let userChoice = prompt("'rock', 'paper' or 'scissors'?")

    //return user choice
    return userChoice;
}

//write variables to keep track of the players score.
let humanScore = 0;
let computerScore = 0;