export const MOVES = {
  ROCK: 'rock',
  PAPER: 'paper',
  SCISSORS: 'scissors',
};

export const RESULTS = {
  WIN: 'win',
  LOSE: 'lose',
  DRAW: 'draw',
};

export const WINNING_MOVES = {
  [MOVES.ROCK]: MOVES.SCISSORS,
  [MOVES.PAPER]: MOVES.ROCK,
  [MOVES.SCISSORS]: MOVES.PAPER,
};

export const determineWinner = (playerMove, aiMove) => {
  if (playerMove === aiMove) return RESULTS.DRAW;
  if (WINNING_MOVES[playerMove] === aiMove) return RESULTS.WIN;
  return RESULTS.LOSE;
};

export const getRandomMove = (difficulty = 'medium', history = []) => {
  const moves = Object.values(MOVES);
  
  // Helper to get a random move
  const random = () => moves[Math.floor(Math.random() * moves.length)];

  // Helper to get the move that beats a specific move
  const getCounter = (move) => WINNING_MOVES[move]; // e.g. input Rock -> returns Scissors (wait, winning moves key beats value).
  // No, WINNING_MOVES[ROCK] = SCISSORS means Rock beats Scissors.
  // We want the move that beats the player's move.
  // If player plays Rock, we want Paper.
  // WINNING_MOVES: Rock->Scissors, Paper->Rock, Scissors->Paper.
  // We need inverse: Scissors->Rock (Rock beats Scissors), Rock->Paper (Paper beats Rock), Paper->Scissors (Scissors beats Paper).
  
  const getWinningMove = (targetMove) => {
    return Object.keys(WINNING_MOVES).find(key => WINNING_MOVES[key] === targetMove);
  };

  // EASY: Pure Random
  if (difficulty === 'easy') {
    return random();
  }

  // MEDIUM: Mixed Strategy
  // 40% chance to counter the player's last move (assuming they repeat)
  // 60% random
  if (difficulty === 'medium') {
    if (history.length > 0 && Math.random() < 0.4) {
      const lastPlayerMove = history[history.length - 1].player;
      return getWinningMove(lastPlayerMove);
    }
    return random();
  }

  // HARD: Frequency Analysis
  // Counter the player's most frequent move
  if (difficulty === 'hard') {
    if (history.length > 0) {
      // 80% chance to use strategy
      if (Math.random() < 0.8) {
        const counts = history.reduce((acc, round) => {
          acc[round.player] = (acc[round.player] || 0) + 1;
          return acc;
        }, {});
        
        const mostFrequentMove = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
        return getWinningMove(mostFrequentMove);
      }
    }
    return random();
  }

  return random();
};
