'use strict';
/*
document.querySelector('.message').textContent = 'Correct Number!!';
document.querySelector('.number').textContent = '13';
document.queryselector('.score').textContent = '20';
document.querySelector('.guess').value = 23;
*/
let score = 20;
let highScore = 0;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
function displayMessage(abc) {
    document.querySelector('.message').textContent = abc;
};


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        document.querySelector('.message').textContent = 'No Number!!';
    }
    else if (guess === secretNumber) {

        document.querySelector('.message').textContent = 'Correct Number!!!';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '40rem';
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
    else if (guess !== secretNumber) {

        if (score > 1) {
            document.querySelector('.message').textContent = guess > secretNumber ? 'Too High' : 'Too low';
            score--;
            document.querySelector('.score').textContent = score;


        }
        else {
            displayMessage('You Lost! Better Luck Next Time!!');
            // document.querySelector('.message').textContent = 'You Lost! Better Luck Next Time!!';
            document.querySelector('.score').textContent = 0;

        }

    }

    /*
        else if (guess > secretNumber) {
            if (score > 1) {
                document.querySelector('.message').textContent = 'Too high!!';
                score--;
                document.querySelector('.score').textContent = score;
    
    
            }
            else {
                document.querySelector('.message').textContent = 'You Lost! Better Luck Next Time!!';
                document.querySelector('.score').textContent = 0;
    
            }
    
        }
        else if (guess < secretNumber) {
            if (score > 1) {
                document.querySelector('.message').textContent = 'Too low!!';
                score--;
                document.querySelector('.score').textContent = score;
    
    
            }
            else {
                document.querySelector('.message').textContent = 'You Lost! Better Luck Next Time!!';
                document.querySelector('.score').textContent = 0;
            }
        }
        */

});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';



});