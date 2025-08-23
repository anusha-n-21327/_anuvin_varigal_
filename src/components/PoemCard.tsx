import { useState } from 'react';
import { cn } from '@/lib/utils';

interface PoemCardProps {
  poem: string;
}

const PoemCard = ({ poem }: PoemCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="group w-full h-64 [perspective:1000px]"
      onMouseEnter={() => setIsFlipped(true)}
    >
      <div
        className={cn(
          'relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d]',
          isFlipped ? '[transform:rotateY(180deg)]' : ''
        )}
      >
        {/* Front of the card */}
        <div className="absolute w-full h-full [backface-visibility:hidden] bg-slate-800/80 backdrop-blur-sm border-2 border-slate-700 rounded-lg shadow-lg flex items-center justify-center p-4 cursor-pointer transition-shadow group-hover:shadow-violet-500/40 group-hover:shadow-2xl">
          <p className="text-lg font-semibold text-slate-300">Reveal the Poem</p>
        </div>

        {/* Back of the card */}
        <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br from-slate-900 to-slate-800 backdrop-blur-sm border-2 border-violet-500/30 rounded-lg shadow-lg flex items-center justify-center p-6 cursor-pointer">
          <p className="text-center whitespace-pre-line text-base md:text-lg leading-relaxed text-slate-200">
            {poem}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PoemCard;