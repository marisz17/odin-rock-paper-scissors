

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

//function to play a single round

let playRound = (humanChoice,computerChoice) => {
    //function’s humanChoice parameter case-insensitive
    humanChoice = humanChoice.toLowerCase();

    //convert choices to numbers
    let humanNum =(humanChoice === "rock") ? 0 
    : (humanChoice === "paper") ? 1
    : 2;
    let computerNum =(computerChoice === "rock") ? 0 
    : (computerChoice === "paper") ? 1
    : 2;

    //BEGIN IN CONDITIONALS

    //Rock against Scissors
    if ((humanNum === 0 && computerNum === 2) || 
    (humanNum === 2 && computerNum === 0)) {
        switch (humanNum) {
            // when human drew rock and computer drew scissors
            // human wins
            case 0: 
                    ++humanScore;
                    console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
                    break;

            // when human drew scissors and computer drew rock
            // human loses
            case 2: 
                    ++computerScore;
                    console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
                    break;

        }
    //Rock against paper and paper against scissors

    //human wins has a greater number
    } else if (humanNum > computerNum) {
        ++humanScore;
        console.log(`You Win! ${humanChoice} beats ${computerChoice}`);

    //computer wins has greater number    
    } else if (humanNum < computerNum) {
        ++computerScore;
        console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);

    // draw equal numbers
    } else {
        console.log(`It's a Draw: You both drew ${humanChoice}`)
    }
}



for (i=0; i <=5; i++) {
playRound(getHumanChoice(),getComputerChoice());
}
