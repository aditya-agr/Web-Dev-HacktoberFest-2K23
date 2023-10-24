let randomNumber = parseInt(Math.random()*100 + 1);
console.log(randomNumber);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let playGame = true;
let prevGuesses = [];
let guessNumber = 1;


if(playGame)
{
  submit.addEventListener('click', function(e)
  {
    e.preventDefault();

    const guess = parseInt(userInput.value);
    const rawGuess = parseFloat(userInput.value);
    validateInput(guess, rawGuess);
  })
}


function validateInput(guess, rawGuess)
{
  if(!Number.isInteger(rawGuess))
  {
    alert("Enter an Integer...");
  }
  else if(guess > 100)
  {
    alert("Enter a number less than 100");
  }
  else if(guess < 0)
  {
    alert("Enter a number greater than 0");
  }
  else
  {
    prevGuesses.push(guess);
    if(guessNumber === 10)
    {
      displayGuess(guess);
      displayMessage(`Game over, Random number was ${randomNumber}`);
      endGame();
    }
    else{
      displayGuess(guess);
      checkInput(guess);
    }
  }
}

function checkInput(guess)
{
  if(guess === randomNumber)
  {
    displayMessage(`Congrats! You guessed it right`);
    endGame();
  }
  else if(guess < randomNumber)
  {
    displayMessage(`Nope... Too low`);
  }
  else if(guess > randomNumber)
  {
    displayMessage(`Nope... Too high`);  
  }
}

function displayGuess(guess)
{
  userInput.value = '';
  guessSlot.innerHTML += `${guess}  `;
  guessNumber++;
  remaining.innerHTML = `${11 - guessNumber}`
}

function displayMessage(message)
{
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame()
{
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame()
{
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function(e)
  {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuesses = [];
    guessNumber = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - guessNumber} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  })
}