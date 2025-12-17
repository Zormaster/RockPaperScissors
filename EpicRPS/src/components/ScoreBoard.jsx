import React from 'react';

const ScoreBoard = ({ playerScore, aiScore, round }) => {
  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto mb-12">
      <div className="text-slate-400 text-sm font-semibold tracking-widest uppercase mb-2">
        Best of 5 • Round {round}
      </div>
      
      <div className="flex items-center justify-between w-full bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 shadow-xl">
        {/* Player Score */}
        <div className="flex flex-col items-center flex-1">
          <span className="text-blue-400 font-bold text-lg mb-1">PLAYER</span>
          <span className="text-5xl font-black text-white drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]">
            {playerScore}
          </span>
        </div>

        {/* VS Divider */}
        <div className="px-8 flex flex-col items-center">
          <div className="w-px h-12 bg-slate-600"></div>
        </div>

        {/* AI Score */}
        <div className="flex flex-col items-center flex-1">
          <span className="text-red-400 font-bold text-lg mb-1">AI OPPONENT</span>
          <span className="text-5xl font-black text-white drop-shadow-[0_0_10px_rgba(239,68,68,0.3)]">
            {aiScore}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ScoreBoard;
