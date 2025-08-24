import { Feather, Pen, Book, Droplet } from "lucide-react";

const iconClasses = "absolute text-primary/20 animate-float opacity-50 transition-transform duration-500 ease-in-out hover:scale-125 hover:opacity-70 hover:-translate-y-4 hover:rotate-12";

export const FloatingIcons = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Feather className={`${iconClasses} top-1/4 right-1/4 w-16 h-16`} />
      <Pen className={`${iconClasses} top-1/2 left-1/4 w-12 h-12 [animation-delay:-1s]`} />
      <Book className={`${iconClasses} bottom-1/4 right-1/3 w-14 h-14 [animation-delay:-2s]`} />
      <Droplet className={`${iconClasses} bottom-1/3 left-1/3 w-10 h-10 [animation-delay:-3s]`} />
      <Feather className={`${iconClasses} top-1/3 right-1/2 w-12 h-12 [animation-delay:-1.5s]`} />
      <Pen className={`${iconClasses} bottom-1/2 left-1/5 w-10 h-10 [animation-delay:-2.5s]`} />
    </div>
  );
};