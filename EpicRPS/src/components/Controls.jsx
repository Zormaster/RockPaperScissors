import React from 'react';
import { MOVES } from '../utils/gameUtils';
import Hand from './Hand';

const Controls = ({ onMove, disabled }) => {
  return (
    <div className="flex gap-4 md:gap-8 justify-center items-center mt-12">
      {Object.values(MOVES).map((move) => (
        <button
          key={move}
          onClick={() => onMove(move)}
          disabled={disabled}
          className={`
            group relative flex flex-col items-center justify-center
            w-24 h-24 md:w-32 md:h-32 rounded-2xl
            bg-slate-800 border-2 border-slate-700
            transition-all duration-200
            hover:scale-105 hover:bg-slate-700 hover:border-slate-500 hover:shadow-lg hover:shadow-blue-500/20
            disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:border-slate-700
            focus:outline-none focus:ring-4 focus:ring-blue-500/30
          `}
        >
          <Hand type={move} size="md" className="group-hover:scale-110 transition-transform duration-200" />
          <span className="absolute bottom-2 text-xs font-bold text-slate-400 uppercase tracking-wider group-hover:text-white transition-colors">
            {move}
          </span>
        </button>
      ))}
    </div>
  );
};

export default Controls;
