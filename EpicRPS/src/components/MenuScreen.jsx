import React from 'react';
import { Play, Shield, Zap, Skull } from 'lucide-react';

const MenuScreen = ({ onStart, onDifficultyChange, difficulty }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center animate-fade-in">
      <div className="mb-12 relative">
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse-fast"></div>
        <h1 className="relative text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 tracking-tighter filter drop-shadow-2xl">
          EPIC<br/>RPS
        </h1>
      </div>

      <div className="space-y-8 w-full max-w-md z-10">
        <div className="flex flex-col gap-4">
          <label className="text-slate-400 text-sm uppercase tracking-widest font-bold">Select Difficulty</label>
          <div className="grid grid-cols-3 gap-2 bg-slate-800 p-2 rounded-xl border border-slate-700">
            {['easy', 'medium', 'hard'].map((level) => (
              <button
                key={level}
                onClick={() => onDifficultyChange(level)}
                className={`
                  py-2 px-4 rounded-lg text-sm font-bold uppercase transition-all duration-200
                  ${difficulty === level 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                    : 'text-slate-400 hover:text-white hover:bg-slate-700'}
                `}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={onStart}
          className="
            w-full py-4 rounded-xl
            bg-white text-slate-900
            font-black text-xl uppercase tracking-widest
            hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]
            active:scale-95
            transition-all duration-200
            flex items-center justify-center gap-3
          "
        >
          <Play className="w-6 h-6 fill-current" />
          Start Game
        </button>
      </div>

      <div className="mt-16 text-slate-500 text-xs tracking-widest uppercase">
        Best of 5 Rounds • Win the Glory
      </div>
    </div>
  );
};

export default MenuScreen;
