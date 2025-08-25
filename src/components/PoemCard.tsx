import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Heart } from 'lucide-react'; // Changed from Flower2 to Heart

interface PoemCardProps {
  poem: string;
}

const PoemCard = ({ poem }: PoemCardProps) => {
  const [isBloomed, setIsBloomed] = useState(false);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleClick = () => {
    if (isBloomed) {
      // If already bloomed, hide it immediately and clear any pending hide timer
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
        hideTimeoutRef.current = null;
      }
      setIsBloomed(false);
    } else {
      // If not bloomed, reveal it immediately
      setIsBloomed(true);
      // Start a timer to hide it after 4 seconds
      hideTimeoutRef.current = setTimeout(() => {
        setIsBloomed(false);
        hideTimeoutRef.current = null;
      }, 4000); // Hide after 4 seconds
    }
  };

  // Clean up timeouts on component unmount to prevent memory leaks
  useEffect(() => {
    return () => {
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className="group w-full h-64 cursor-pointer"
      onClick={handleClick} // Changed from onMouseEnter/onMouseLeave to onClick
    >
      <div
        className={cn(
          'relative w-full h-full transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]',
          'flex items-center justify-center p-6 bg-card border-2 border-border rounded-lg shadow-lg',
          'hover:shadow-primary/30 hover:shadow-2xl hover:border-primary/40', // Keep hover styles for visual feedback
          isBloomed ? 'scale-105 shadow-primary/30 shadow-2xl' : 'hover:scale-105'
        )}
      >
        {/* Front Content (Icon and Prompt) */}
        <div className={cn(
          "absolute transition-opacity duration-500 flex flex-col items-center text-center",
          isBloomed ? "opacity-0" : "opacity-100"
        )}>
          <Heart className="w-12 h-12 text-primary/50 mb-4 transition-transform group-hover:scale-110" /> {/* Changed icon */}
          <p className="text-lg font-semibold text-muted-foreground">Reveal the Card</p> {/* Changed prompt */}
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