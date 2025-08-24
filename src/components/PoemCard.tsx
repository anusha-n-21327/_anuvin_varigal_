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
        <div className="absolute w-full h-full [backface-visibility:hidden] bg-card/80 backdrop-blur-sm border-2 border-border rounded-lg shadow-lg flex items-center justify-center p-4 cursor-pointer transition-shadow group-hover:shadow-primary/40 group-hover:shadow-2xl"> {/* Updated colors */}
          <p className="text-lg font-semibold text-foreground">Reveal the Poem</p> {/* Updated text color */}
        </div>

        {/* Back of the card */}
        <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br from-card to-card/80 backdrop-blur-sm border-2 border-primary/30 rounded-lg shadow-lg flex items-center justify-center p-6 cursor-pointer"> {/* Updated colors */}
          <p className="text-center whitespace-pre-line text-base md:text-lg leading-relaxed text-foreground"> {/* Updated text color */}
            {poem}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PoemCard;