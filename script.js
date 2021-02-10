let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
  }
  //compares guessses of computer to humans using absolute value, gotten from Math.abs
  const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
    const humanDifference = Math.abs(targetGuess - humanGuess)
    const computerDifference = Math.abs(targetGuess - computerGuess)
    return humanDifference <= computerDifference;
  }
  // updates the scores, based on who is the winner. 
  const updateScore = winner => {
    if (winner === 'human') {
      humanScore++;
    } else if (winner === 'computer') {
      computerScore++;
    }
  }
  
  const advanceRound = () => currentRoundNumber++;
