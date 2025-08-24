import { Feather, Pen, Book, Droplet, FileText } from "lucide-react";

const iconClasses = "absolute text-primary/20 animate-float opacity-50 transition-transform duration-500 ease-in-out hover:scale-125 hover:opacity-70 hover:-translate-y-4 hover:rotate-12";

export const FloatingIcons = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      {/* Increased density of icons */}
      <Feather className={`${iconClasses} top-[15%] right-[10%] w-16 h-16`} />
      <Pen className={`${iconClasses} top-[50%] left-[15%] w-12 h-12 [animation-delay:-1s]`} />
      <Book className={`${iconClasses} bottom-[20%] right-[20%] w-14 h-14 [animation-delay:-2s]`} />
      <Droplet className={`${iconClasses} bottom-[30%] left-[30%] w-10 h-10 [animation-delay:-3s]`} />
      <Feather className={`${iconClasses} top-[30%] right-[50%] w-12 h-12 [animation-delay:-1.5s]`} />
      <Pen className={`${iconClasses} bottom-[55%] left-[5%] w-10 h-10 [animation-delay:-2.5s]`} />
      <FileText className={`${iconClasses} top-[10%] left-[10%] w-12 h-12 [animation-delay:-0.5s]`} />
      <Book className={`${iconClasses} top-[70%] left-[45%] w-10 h-10 [animation-delay:-3.5s]`} />
      <Feather className={`${iconClasses} bottom-[10%] left-[20%] w-14 h-14 [animation-delay:-4s]`} />
      <Droplet className={`${iconClasses} top-[60%] right-[15%] w-12 h-12 [animation-delay:-4.5s]`} />
      <Pen className={`${iconClasses} top-[85%] right-[40%] w-10 h-10 [animation-delay:-5s]`} />
      
      {/* Even more icons for a richer effect */}
      <FileText className={`${iconClasses} top-[5%] right-[30%] w-10 h-10 [animation-delay:-5.5s]`} />
      <Book className={`${iconClasses} bottom-[5%] left-[40%] w-12 h-12 [animation-delay:-6s]`} />
      <Feather className={`${iconClasses} top-[40%] left-[40%] w-10 h-10 [animation-delay:-6.5s]`} />
      <Droplet className={`${iconClasses} bottom-[40%] right-[5%] w-14 h-14 [animation-delay:-7s]`} />
      <Pen className={`${iconClasses} top-[75%] right-[25%] w-12 h-12 [animation-delay:-7.5s]`} />
    </div>
  );
};