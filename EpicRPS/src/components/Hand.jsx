import { Hand as HandIcon, Scissors, Zap } from 'lucide-react';

// Using Zap as a placeholder for Rock if a better one isn't found, 
// or maybe a Circle/Octagon. 
// Actually, let's use a fist-like shape if possible, but for now 
// let's use these and maybe custom SVGs are better.
// Let's use simple SVG paths for better "Hand" representation.

const Rock = ({ className }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    stroke="currentColor" 
    strokeWidth="2"
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M7.8 4.6A2.5 2.5 0 0 1 10 3a2.5 2.5 0 0 1 2.5 2.5V8h1a2.5 2.5 0 0 1 2.5 2.5V19a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 4 19V8a2.5 2.5 0 0 1 2.5-2.5h1.3" />
    <path d="M12 8h-4" />
  </svg>
);
// Wait, that's just a boxy shape.

// Let's use Lucide icons with a mapping.
// Rock: Grab (Fist-like)
// Paper: Hand
// Scissors: Scissors

import { Grab, Hand, Scissors as ScissorsIcon } from 'lucide-react';

const icons = {
  rock: Grab,
  paper: Hand,
  scissors: ScissorsIcon
};

const colors = {
  rock: 'text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]',
  paper: 'text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]',
  scissors: 'text-yellow-500 drop-shadow-[0_0_15px_rgba(234,179,8,0.5)]'
};

const HandComponent = ({ type, size = 'md', className = '', animate = false }) => {
  const Icon = icons[type] || Hand; // Default to Hand if type is null/unknown
  
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-16 h-16',
    lg: 'w-32 h-32',
    xl: 'w-48 h-48'
  };

  const animationClass = animate ? 'animate-bounce-slow' : '';
  const colorClass = colors[type] || 'text-gray-400';

  return (
    <div className={`transition-all duration-300 transform ${animate ? 'scale-110' : 'scale-100'} ${className}`}>
      <Icon className={`${sizeClasses[size]} ${colorClass} ${animationClass}`} strokeWidth={1.5} />
    </div>
  );
};

export default HandComponent;
