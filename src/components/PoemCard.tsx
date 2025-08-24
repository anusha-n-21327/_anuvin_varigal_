import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Flower2 } from 'lucide-react';

interface PoemCardProps {
  poem: string;
}

const PoemCard = ({ poem }: PoemCardProps) => {
  const [isBloomed, setIsBloomed] = useState(false);

  const handleCardClick = () => {
    setIsBloomed(!isBloomed);
  };

  return (
    <div
      className="group w-full h-64 cursor-pointer"
      onClick={handleCardClick}
    >
      <div
        className={cn(
          'relative w-full h-full transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]',
          'flex items-center justify-center p-6 bg-card border-2 border-border rounded-lg shadow-lg',
          'hover:shadow-primary/30 hover:shadow-2xl hover:border-primary/40',
          isBloomed ? 'scale-105 shadow-primary/30 shadow-2xl' : 'hover:scale-105'
        )}
      >
        {/* Front Content (Icon) */}
        <div className={cn(
          "absolute transition-opacity duration-500 flex flex-col items-center text-center",
          isBloomed ? "opacity-0" : "opacity-100"
        )}>
          <Flower2 className="w-12 h-12 text-primary/50 mb-4 transition-transform group-hover:scale-110" />
          <p className="text-lg font-semibold text-muted-foreground">Reveal Poem</p>
        </div>

        {/* Back Content (Poem) */}
        <div className={cn(
          "transition-opacity duration-700 delay-300",
          isBloomed ? "opacity-100 animate-bloom" : "opacity-0"
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