console.log("Hello World!");

/* computerPLay function
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