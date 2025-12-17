import { useState, useCallback, useEffect } from 'react';
import { MOVES, RESULTS, determineWinner, getRandomMove } from '../utils/gameUtils';
import { sounds } from '../utils/soundUtils';

export const GAME_STATES = {
  MENU: 'menu',
  COUNTDOWN: 'countdown',
  PLAYING: 'playing', // Waiting for user input or showing hands
  RESULT: 'result',   // Round result
  GAME_OVER: 'game_over', // Match result
};

export const useGameLogic = () => {
  const [gameState, setGameState] = useState(GAME_STATES.MENU);
  const [scores, setScores] = useState({ player: 0, ai: 0 });
  const [currentRound, setCurrentRound] = useState(1);
  const [history, setHistory] = useState([]);
  const [playerMove, setPlayerMove] = useState(null);
  const [aiMove, setAiMove] = useState(null);
  const [roundResult, setRoundResult] = useState(null);
  const [difficulty, setDifficulty] = useState('medium');

  const startGame = () => {
    sounds.playClick();
    setScores({ player: 0, ai: 0 });
    setCurrentRound(1);
    setHistory([]);
    setGameState(GAME_STATES.PLAYING);
  };

  const playRound = useCallback((move) => {
    sounds.playClick();
    setPlayerMove(move);
    setGameState(GAME_STATES.COUNTDOWN);
    
    // Simulate countdown delay/suspense
    // Play countdown ticks
    sounds.playCountdown();
    setTimeout(() => sounds.playCountdown(), 700);
    setTimeout(() => sounds.playCountdown(), 1400);

    setTimeout(() => {
      const aiChosenMove = getRandomMove(difficulty, history);
      setAiMove(aiChosenMove);
      
      const result = determineWinner(move, aiChosenMove);
      setRoundResult(result);
      
      if (result === RESULTS.WIN) sounds.playWin();
      else if (result === RESULTS.LOSE) sounds.playLose();
      else sounds.playDraw();

      setScores(prev => {
        const newScores = { ...prev };
        if (result === RESULTS.WIN) newScores.player += 1;
        if (result === RESULTS.LOSE) newScores.ai += 1;
        return newScores;
      });

      setHistory(prev => [...prev, { round: currentRound, player: move, ai: aiChosenMove, result }]);
      setGameState(GAME_STATES.RESULT);
    }, 2000); // 2 seconds countdown
  }, [difficulty, history, currentRound]);

  const nextRound = () => {
    sounds.playClick();
    if (scores.player >= 3 || scores.ai >= 3) {
      if (scores.player > scores.ai) sounds.playWin(); // Match win
      else sounds.playLose(); // Match lose
      setGameState(GAME_STATES.GAME_OVER);
    } else {
      setCurrentRound(prev => prev + 1);
      setPlayerMove(null);
      setAiMove(null);
      setRoundResult(null);
      setGameState(GAME_STATES.PLAYING);
    }
  };

  const resetGame = () => {
    sounds.playClick();
    setGameState(GAME_STATES.MENU);
    setScores({ player: 0, ai: 0 });
    setCurrentRound(1);
    setHistory([]);
    setPlayerMove(null);
    setAiMove(null);
    setRoundResult(null);
  };

  return {
    gameState,
    scores,
    currentRound,
    playerMove,
    aiMove,
    roundResult,
    difficulty,
    setDifficulty,
    startGame,
    playRound,
    nextRound,
    resetGame,
    history,
  };
};
