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
            return 'It is a draw! Rock ties Rock!';
        }
        
        else if(computerSelection === 'Paper'){
            return 'You lose! Paper beats Rock!';
        }

        else if(computerSelection === 'Scissors'){
            return 'You win! Rock beats Scissors';
        }
    }

    // Paper
    else if(playerSelection === 'paper'){
        if(computerSelection === 'Paper'){
            return 'It is a draw! Paper ties Paper!';
        }
        
        else if(computerSelection === 'Scissors'){
            return 'You lose! Scissors beats Paper!';
        }

        else if(computerSelection === 'Rock'){
            return 'You win! Paper beats Rock!';
        }
    }

    // Scissors
    else if(playerSelection === 'scissors'){
        if(computerSelection === 'Scissors'){
            return 'It is a draw! Scissors ties Scissors!';
        }
        
        else if(computerSelection === 'Rock'){
            return 'You lose! Rock beats Scissors!';
        }

        else if(computerSelection === 'Paper'){
            return 'You win! Scissors beats Paper!';
        }
    }

}

// Testing the singleRound function
const playerSelection = "rock";
const computerSelection = computerPlay();

console.log(singleRound(playerSelection, computerSelection));