

//function to play 5 rounds

function playGame() {
    //write variables to keep track of the players score.
    let humanScore = 0;
    let computerScore = 0;
    let playCount = 0;
    let para = "";
    let scorePara = `SCORE! Human (${humanScore}) Computer (${computerScore})`

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

    //function to play a single round

    let playRound = (humanChoice, computerChoice) => {
        //function’s humanChoice parameter case-insensitive

        //convert choices to numbers
        let humanNum = (humanChoice === "rock") ? 0
            : (humanChoice === "paper") ? 1
                : 2;
        let computerNum = (computerChoice === "rock") ? 0
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
                    ++playCount;
                    para = `You Win! ${humanChoice} beats ${computerChoice}`;
                    break;

                // when human drew scissors and computer drew rock
                // human loses
                case 2:
                    ++computerScore;
                    ++playCount;
                    para = `You Lose! ${computerChoice} beats ${humanChoice}`;
                    break;

            }
            //Rock against paper and paper against scissors

            //human wins has a greater number
        } else if (humanNum > computerNum) {
            ++humanScore;
            ++playCount;
            para = `You Win! ${humanChoice} beats ${computerChoice}`;

            //computer wins has greater number    
        } else if (humanNum < computerNum) {
            ++computerScore;
            ++playCount;
            para = `You Lose! ${computerChoice} beats ${humanChoice}`;

            // draw equal numbers
        } else {
            ++playCount;
            para = `It's a Draw: You both drew ${humanChoice}`;
        }

    let scoreDiv = document.querySelector("#result")
    scoreDiv.textContent = para;
    
    let scoreResults = document.querySelector("#scores")

    if (playCount < 5) {
        scoreResults.textContent = `SCORE! Human (${humanScore}) Computer (${computerScore})`;
    } else if (playCount === 5) {
        if (humanScore > computerScore) {
            scoreResults.textContent = `You Win! Human(${humanScore}) Computer(${computerScore})`;
        } else if (humanScore < computerScore) {
            scoreResults.textContent = `You Lose! Human(${humanScore}) Computer(${computerScore})`;
        } else {scoreResults.textContent = `It's a draw! Decide Again`;}

        computerScore = 0;
        humanScore = 0;
        playCount = 0;
    }

    }
//
    let userChoice = document.querySelector("#buttons")

        userChoice.addEventListener("click", (event) => {
            let target = event.target

            switch (target.id) {
                case "btnRock": 
                        playRound("rock",getComputerChoice());
                        break;

                case "btnPaper":
                        playRound("paper",getComputerChoice());
                        break;
                
                case "btnScissors":
                        playRound("scissors",getComputerChoice());
                        break;
            }
        })

    

}

    

playGame();
