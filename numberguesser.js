
let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
	let target = Math.floor(Math.random() * 10);
	return target;
	}; 
const absoluteValues = (a1, a2) => {
		return Math.abs(a1 - a2);
};

const compareGuesses = (humanGuess, computerGuess, secretTarget) => {
console.log({secretTarget,humanGuess,
	ifff1: Math.abs(humanGuess - secretTarget),
	ifff2: Math.abs(computerGuess - secretTarget),
		});		
if (humanGuess < 0 || humanGuess > 9) {
alert("Error please return number between 0 and 9");
} else if (absoluteValues(humanGuess, secretTarget) < (absoluteValues(computerGuess, secretTarget)
	) {
	return true;
	}
	else {
		return false; 
	}
};
	

const updateScore = (winner) => {
	if (winner === humanScore) {
	humanScore++;
	} else computerScore++;
};

const advanceRound = () => currentRoundNumber + 1;
