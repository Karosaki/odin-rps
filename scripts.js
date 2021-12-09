console.log("Hello World!");

/* computerPlay function
    randomly return either rock, paper, or scissors

    create var for a random int
    
    set int to be a random number from 1-3

    where 1 = rock, 2 = paper, 3 = scissors
*/

function computerPlay(){
    // create the random integer, and floor it to round down, add 1 to keep above 0
    let randInt = Math.floor((Math.random() * 3) + 1);

    if(randInt === 1){
        return 'Rock';
    }

    else if(randInt === 2){
        return 'Paper';
    }

    else if(randInt === 3){
        return 'Scissors';
    }
}

/* singleRound function
    function will play one round of rps

    the basic logic for a round of rps

    i.e. -> r beats s, p beat r,
    
*/

function singleRound(playerSelection, computerSelection){

    // Makes the function case insensitive
    playerSelection = playerSelection.toLowerCase();

    // Rock
    if(playerSelection === 'rock'){
        if(computerSelection === 'Rock'){
            return `The computer chose ${computerSelection}, so it is a draw! Rock ties Rock!`;
        }
        
        else if(computerSelection === 'Paper'){
            return `The computer chose ${computerSelection}, so you lose! Paper beats Rock!`;
        }

        else if(computerSelection === 'Scissors'){
            return `The computer chose ${computerSelection}, so you win! Rock beats Scissors!`;
        }
    }

    // Paper
    else if(playerSelection === 'paper'){
        if(computerSelection === 'Paper'){
            return `The computer chose ${computerSelection}, so it is a draw! Paper ties Paper!`;
        }
        
        else if(computerSelection === 'Scissors'){
            return `The computer chose ${computerSelection}, so you lose! Scissors beats Paper!`;
        }

        else if(computerSelection === 'Rock'){
            return `The computer chose ${computerSelection}, so you win! Paper beats Rock!`;
        }
    }

    // Scissors
    else if(playerSelection === 'scissors'){
        if(computerSelection === 'Scissors'){
            return `The computer chose ${computerSelection}, so it is a draw! Scissors ties Scissors!`;
        }
        
        else if(computerSelection === 'Rock'){
            return `The computer chose ${computerSelection}, so you lose! Rock beats Scissors!`;
        }

        else if(computerSelection === 'Paper'){
            return `The computer chose ${computerSelection}, so you win! Scissors beats Paper!`;
        }
    }

}

// Score variables, keeps track of computer and player scores

let playerScore = 0;
let computerScore = 0;

function scoreChecker(result){

    // reset final score if has happened
    finalResultDiv.textContent = '';
   
    // see who won this game by checking if win/draw/lose is in the results
    if(result.includes('draw') === true){
        //console.log('Draw!, no one gets a point');
        //console.log(`Current score: You: ${playerScore} Computer: ${computerScore}`);

        let text1 = `Current score: You: ${playerScore} Computer: ${computerScore}`;
        console.log(text1);
        scoreDiv.textContent = text1;
    }

    else if(result.includes('win') === true){
        console.log('Win!, you get one point');
        playerScore++;
        console.log(`Current score: You: ${playerScore} Computer: ${computerScore}`);

        let text1 = `Current score: You: ${playerScore} Computer: ${computerScore}`;
        scoreDiv.textContent = text1;
    }

    else if(result.includes('lose') === true){
        console.log('Lose!, the computer gets one point');
        computerScore++;
        console.log(`Current score: You: ${playerScore} Computer: ${computerScore}`);

        let text1 = `Current score: You: ${playerScore} Computer: ${computerScore}`;
        scoreDiv.textContent = text1;
    }


    // after someone gets to 5 they win
    if(playerScore === 5 || computerScore === 5 ){
        finalResultDiv.textContent = `The final scores are in! You scored ${playerScore} points!, the computer scored ${computerScore} points!`;

        if(playerScore > computerScore){
            console.log('You Win!');
        }
        else{
            console.log('You Lose!');
        }

        // Reset the scores to 0 as the game is over

        playerScore = 0;   
        computerScore = 0;
    }
}

// NEW FOR THE RPS UI -- Event listeners for each of the buttons

const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const sciBtn = document.querySelector('.scissors');

// targetting the div
let resultDiv = document.querySelector('.game-results');
// targetting inside the div
let scoreDiv = document.querySelector('.scores');
// targetting the final result
let finalResultDiv = document.querySelector('.final-score');

// testing event listeners
// rock button
rockBtn.addEventListener('click', function() {
    let playerSelection = 'rock';
    let computerSelection = computerPlay();

    let result = singleRound(playerSelection, computerSelection);

    resultDiv.textContent = result;
    scoreChecker(result);
});

//paper
paperBtn.addEventListener('click', function() {
    let playerSelection = 'paper';
    let computerSelection = computerPlay();

    let result = singleRound(playerSelection, computerSelection);
    // update the result into the div
    resultDiv.textContent = result;
    scoreChecker(result);

});

//scissors
sciBtn.addEventListener('click', function() {
    let playerSelection = 'scissors';
    let computerSelection = computerPlay();

    let result = singleRound(playerSelection, computerSelection);

    resultDiv.textContent = result;
    score = scoreChecker(result);
});