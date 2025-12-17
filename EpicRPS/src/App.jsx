import React from 'react';
import { useGameLogic, GAME_STATES } from './hooks/useGameLogic';
import MenuScreen from './components/MenuScreen';
import GameScreen from './components/GameScreen';
import GameOverScreen from './components/GameOverScreen';
import HistoryLog from './components/HistoryLog';

function App() {
  const {
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
  } = useGameLogic();

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-black font-sans selection:bg-blue-500/30">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10">
        {gameState !== GAME_STATES.MENU && <HistoryLog history={history} />}

        {gameState === GAME_STATES.MENU && (
          <MenuScreen 
            onStart={startGame} 
            difficulty={difficulty}
            onDifficultyChange={setDifficulty}
          />
        )}

        {(gameState === GAME_STATES.PLAYING || 
          gameState === GAME_STATES.COUNTDOWN || 
          gameState === GAME_STATES.RESULT) && (
          <GameScreen
            gameState={gameState}
            scores={scores}
            currentRound={currentRound}
            playerMove={playerMove}
            aiMove={aiMove}
            roundResult={roundResult}
            onMove={playRound}
            onNextRound={nextRound}
          />
        )}

        {gameState === GAME_STATES.GAME_OVER && (
          <GameOverScreen
            scores={scores}
            onRestart={startGame}
            onHome={resetGame}
          />
        )}
      </div>
    </div>
  );
}

export default App;
