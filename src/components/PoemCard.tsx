import { useState } from 'react';
import { cn } from '@/lib/utils';

interface PoemCardProps {
  poem: string;
}

const PoemCard = ({ poem }: PoemCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className="group w-full h-64 [perspective:1000px] cursor-pointer"
      onClick={handleCardClick}
    >
      <div
        className={cn(
          'relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d]',
          'ease-[cubic-bezier(0.25,1,0.5,1)]', // Subtle bounce-out effect
          isFlipped ? '[transform:rotateY(180deg)]' : ''
        )}
      >
        {/* Front of the card */}
        <div className="absolute w-full h-full [backface-visibility:hidden] bg-card border-2 border-border rounded-lg shadow-lg flex items-center justify-center p-4 transition-shadow group-hover:shadow-primary/40 group-hover:shadow-2xl">
          <p className="text-lg font-semibold text-foreground">Click to Reveal Poem</p>
        </div>

        {/* Back of the card */}
        <div className={cn(
          "absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-card border-2 border-primary/30 rounded-lg shadow-lg flex items-center justify-center p-6",
          "transition-opacity duration-500 delay-300",
          isFlipped ? "opacity-100" : "opacity-0" // Fade-in effect for text
        )}>
          <p className="text-center whitespace-pre-line text-base md:text-lg leading-relaxed text-foreground">
            {poem}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PoemCard;