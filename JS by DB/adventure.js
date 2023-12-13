function guessGame(){
    let randomNr = Math.floor(Math.random() *11);
    let guess;

    do {
        guess = prompt('Guess a number between 1 - 10');
        console.log(`${guess}, ${randomNr}`);
        
        if(guess > randomNr){
            console.log('You have guessed too high');

        }
        else if(guess < randomNr){
            console.log('You have guessed too low');

        }
        
    }
    while(guess != randomNr);
    console.log('YOU WON');
}

guessGame();