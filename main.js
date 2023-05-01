function guessNumber(){
    let playerGuess;
    const numberGuess = Math.ceil(Math.random() * 10);

    prompt('Devinez le nombre entre 1 et 10 inclus.');

    while(playerGuess != numberGuess) {
        playerGuess = prompt('Echec! Essayez à nouveau de deviner le nombre.')
    }

    alert(`Féliciation! Le nombre était ${numberGuess}!`);
}

guessNumber();