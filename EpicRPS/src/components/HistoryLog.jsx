import React from 'react';
import { Clock, Check, X, Minus } from 'lucide-react';
import { MOVES, RESULTS } from '../utils/gameUtils';

const HistoryLog = ({ history }) => {
  if (!history || history.length === 0) return null;

  const reversedHistory = [...history].reverse();

  const getResultIcon = (result) => {
    switch (result) {
      case RESULTS.WIN: return <Check className="w-4 h-4 text-green-400" />;
      case RESULTS.LOSE: return <X className="w-4 h-4 text-red-400" />;
      case RESULTS.DRAW: return <Minus className="w-4 h-4 text-yellow-400" />;
      default: return null;
    }
  };

  const getMoveEmoji = (move) => {
    switch(move) {
      case MOVES.ROCK: return '✊';
      case MOVES.PAPER: return '✋';
      case MOVES.SCISSORS: return '✌️';
      default: return '?';
    }
  };

  return (
    <div className="absolute top-4 left-4 md:top-8 md:left-8 z-20">
      <div className="group relative">
        <button className="p-3 bg-slate-800/80 backdrop-blur-md rounded-full border border-slate-700 text-slate-400 hover:text-white hover:bg-slate-700 transition-all">
          <Clock className="w-6 h-6" />
        </button>
        
        <div className="absolute top-14 left-0 w-64 bg-slate-900/90 backdrop-blur-xl border border-slate-700 rounded-xl shadow-2xl p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left">
          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Match History</h3>
          <div className="space-y-2 max-h-60 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
            {reversedHistory.map((round, index) => (
              <div key={index} className="flex items-center justify-between text-sm p-2 rounded bg-slate-800/50">
                <span className="text-slate-500 font-mono text-xs">R{round.round}</span>
                <div className="flex items-center gap-2">
                  <span className="text-xl" title={`You: ${round.player}`}>{getMoveEmoji(round.player)}</span>
                  <span className="text-slate-600 text-xs">vs</span>
                  <span className="text-xl" title={`AI: ${round.ai}`}>{getMoveEmoji(round.ai)}</span>
                </div>
                <div title={round.result.toUpperCase()}>
                  {getResultIcon(round.result)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryLog;
