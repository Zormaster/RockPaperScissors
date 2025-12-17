import React, { useEffect } from 'react';
import Hand from './Hand';
import Controls from './Controls';
import ScoreBoard from './ScoreBoard';
import { GAME_STATES } from '../hooks/useGameLogic';

const GameScreen = ({ 
  gameState, 
  scores, 
  currentRound, 
  playerMove, 
  aiMove, 
  roundResult,
  onMove,
  onNextRound
}) => {
  const isCountdown = gameState === GAME_STATES.COUNTDOWN;
  const isResult = gameState === GAME_STATES.RESULT;
  const isPlaying = gameState === GAME_STATES.PLAYING;

  // Render the result message
  const getResultMessage = () => {
    switch (roundResult) {
      case 'win': return { text: 'YOU WIN!', color: 'text-blue-400' };
      case 'lose': return { text: 'AI WINS!', color: 'text-red-400' };
      case 'draw': return { text: 'DRAW!', color: 'text-yellow-400' };
      default: return { text: '', color: '' };
    }
  };

  const { text: resultText, color: resultColor } = getResultMessage();

  // AI Commentary Logic
  const getCommentary = () => {
    if (isCountdown) return "Calculating probability of your defeat...";
    if (!isResult) return "Make your move, if you dare.";
    
    const messages = {
      win: [
        "Pure luck.",
        "I let you win that one.",
        "Impossible! My algorithms were perfect.",
        "Enjoy it while it lasts.",
      ],
      lose: [
        "Too easy!",
        "Predictable human.",
        "Is that the best you can do?",
        "I can read your mind.",
      ],
      draw: [
        "Stop copying me!",
        "Great minds think alike... but I'm faster.",
        "Stalemate. Boring.",
        "Again!",
      ]
    };

    if (roundResult && messages[roundResult]) {
      // Pick a random message based on the result (using round number as seed for consistency during render if needed, or just random)
      const list = messages[roundResult];
      return list[currentRound % list.length];
    }
    return "";
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full max-w-4xl mx-auto p-4">
      <ScoreBoard playerScore={scores.player} aiScore={scores.ai} round={currentRound} />

      {/* AI Commentary Bubble */}
      <div className="mb-8 bg-slate-800/80 px-6 py-3 rounded-2xl rounded-bl-none border border-slate-700 max-w-md animate-fade-in">
        <p className="text-slate-300 italic text-center font-medium">
          "{getCommentary()}"
        </p>
      </div>

      {/* Battle Area */}
      <div className="relative flex items-center justify-between w-full h-64 md:h-80 mb-8 perspective-1000">
        
        {/* Player Hand */}
        <div className={`flex flex-col items-center transition-all duration-500 ${isResult && roundResult === 'win' ? 'scale-110 drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]' : ''}`}>
          <div className={`
            relative w-32 h-32 md:w-48 md:h-48 flex items-center justify-center
            ${isCountdown ? 'animate-bounce' : ''}
          `}>
             <Hand type={playerMove || 'rock'} size="xl" className={isCountdown ? 'rotate-90' : ''} />
          </div>
          <div className="mt-4 text-sm font-bold tracking-widest text-blue-400 uppercase">YOU</div>
        </div>

        {/* VS / Result Center */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center w-full">
          {isCountdown && (
            <div className="text-6xl font-black text-white animate-pulse">
              VS
            </div>
          )}
          
          {isResult && (
            <div className="animate-zoom-in">
              <div className={`text-5xl md:text-6xl font-black ${resultColor} mb-2 drop-shadow-lg`}>
                {resultText}
              </div>
              <button
                onClick={onNextRound}
                className="
                  mt-4 px-8 py-2 rounded-full
                  bg-white/10 hover:bg-white/20 border border-white/20
                  text-white font-bold uppercase tracking-widest text-sm
                  backdrop-blur-md transition-all
                  hover:scale-105 active:scale-95
                "
              >
                Next Round
              </button>
            </div>
          )}
        </div>

        {/* AI Hand */}
        <div className={`flex flex-col items-center transition-all duration-500 ${isResult && roundResult === 'lose' ? 'scale-110 drop-shadow-[0_0_20px_rgba(239,68,68,0.5)]' : ''}`}>
          <div className={`
            relative w-32 h-32 md:w-48 md:h-48 flex items-center justify-center
            ${isCountdown ? 'animate-bounce' : ''}
          `}>
            {/* AI hides move until result */}
            <Hand 
              type={(isResult ? aiMove : (isCountdown ? 'rock' : null)) || 'rock'} 
              size="xl" 
              className={`${isCountdown ? '-rotate-90' : ''} ${!isResult && !isCountdown ? 'opacity-50 blur-sm' : ''}`}
            />
          </div>
          <div className="mt-4 text-sm font-bold tracking-widest text-red-400 uppercase">AI OPPONENT</div>
        </div>
      </div>

      {/* Controls */}
      <div className={`transition-all duration-500 ${isPlaying ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
        <div className="text-center mb-4 text-slate-400 text-sm font-medium tracking-wide">
          CHOOSE YOUR WEAPON
        </div>
        <Controls onMove={onMove} disabled={!isPlaying} />
      </div>
    </div>
  );
};

export default GameScreen;
