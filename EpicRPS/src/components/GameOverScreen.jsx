import React, { useEffect } from 'react';
import { Trophy, RotateCcw, Home } from 'lucide-react';
import confetti from 'canvas-confetti';

const GameOverScreen = ({ scores, onRestart, onHome }) => {
  const playerWon = scores.player > scores.ai;

  useEffect(() => {
    if (playerWon) {
      const duration = 3000;
      const end = Date.now() + duration;

      const frame = () => {
        confetti({
          particleCount: 2,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ['#60A5FA', '#A78BFA', '#F472B6']
        });
        confetti({
          particleCount: 2,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ['#60A5FA', '#A78BFA', '#F472B6']
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      };
      frame();
    }
  }, [playerWon]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 animate-zoom-in">
      <div className="relative mb-8">
        <div className={`absolute -inset-8 bg-gradient-to-r ${playerWon ? 'from-yellow-400 to-orange-500' : 'from-slate-700 to-slate-600'} rounded-full blur-3xl opacity-20 animate-pulse`}></div>
        {playerWon ? (
          <Trophy className="w-32 h-32 text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)] animate-bounce-slow" />
        ) : (
          <div className="text-8xl">💀</div>
        )}
      </div>

      <h1 className="text-5xl md:text-7xl font-black text-white mb-2 text-center">
        {playerWon ? 'VICTORY!' : 'DEFEAT'}
      </h1>
      
      <p className="text-slate-400 text-xl font-medium tracking-wide mb-12 text-center max-w-md">
        {playerWon 
          ? "You crushed the AI opponent! A legendary performance." 
          : "The machine prevailed this time. Don't give up!"}
      </p>

      <div className="flex flex-col md:flex-row gap-4 w-full max-w-md">
        <button
          onClick={onRestart}
          className="
            flex-1 py-4 rounded-xl
            bg-blue-600 text-white
            font-bold text-lg uppercase tracking-widest
            hover:bg-blue-500 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25
            transition-all duration-200
            flex items-center justify-center gap-2
          "
        >
          <RotateCcw className="w-5 h-5" />
          Rematch
        </button>

        <button
          onClick={onHome}
          className="
            flex-1 py-4 rounded-xl
            bg-slate-800 text-slate-300 border border-slate-700
            font-bold text-lg uppercase tracking-widest
            hover:bg-slate-700 hover:text-white hover:border-slate-600
            transition-all duration-200
            flex items-center justify-center gap-2
          "
        >
          <Home className="w-5 h-5" />
          Main Menu
        </button>
      </div>

      <div className="mt-12 p-6 bg-slate-800/50 rounded-2xl border border-slate-700 flex gap-12 backdrop-blur-sm">
        <div className="text-center">
          <div className="text-sm text-slate-400 font-bold uppercase tracking-wider mb-1">Your Score</div>
          <div className="text-4xl font-black text-blue-400">{scores.player}</div>
        </div>
        <div className="w-px bg-slate-700"></div>
        <div className="text-center">
          <div className="text-sm text-slate-400 font-bold uppercase tracking-wider mb-1">AI Score</div>
          <div className="text-4xl font-black text-red-400">{scores.ai}</div>
        </div>
      </div>
    </div>
  );
};

export default GameOverScreen;
