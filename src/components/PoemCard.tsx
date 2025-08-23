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
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={cn(
          'relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d]',
          isFlipped ? '[transform:rotateY(180deg)]' : ''
        )}
      >
        {/* Front of the card */}
        <div className="absolute w-full h-full [backface-visibility:hidden] bg-white/80 backdrop-blur-sm border-2 border-gray-300 rounded-lg shadow-lg flex items-center justify-center p-4 cursor-pointer">
          <p className="text-lg font-semibold">Click to Read</p>
        </div>

        {/* Back of the card */}
        <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white/80 backdrop-blur-sm border-2 border-gray-300 rounded-lg shadow-lg flex items-center justify-center p-6 cursor-pointer">
          <p className="text-center whitespace-pre-line text-base md:text-lg leading-relaxed">
            {poem}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PoemCard;