import { ScrollText, Feather, Pen, Droplets, Stamp, FileText } from "lucide-react";

const iconClasses = "absolute text-primary/20 animate-float opacity-50 transition-all duration-500 ease-in-out hover:scale-150 hover:opacity-80 hover:-translate-y-6 hover:rotate-[15deg]";

export const FloatingIcons = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <ScrollText className={`${iconClasses} top-[15%] right-[10%] w-16 h-16`} />
      <Feather className={`${iconClasses} top-[50%] left-[15%] w-12 h-12 [animation-delay:-1s]`} />
      <Stamp className={`${iconClasses} bottom-[20%] right-[20%] w-14 h-14 [animation-delay:-2s] text-accent/20`} />
      <Droplets className={`${iconClasses} bottom-[30%] left-[30%] w-10 h-10 [animation-delay:-3s] text-secondary/20`} />
      <Pen className={`${iconClasses} top-[30%] right-[50%] w-12 h-12 [animation-delay:-1.5s]`} />
      <FileText className={`${iconClasses} bottom-[55%] left-[5%] w-10 h-10 [animation-delay:-2.5s]`} />
      <Feather className={`${iconClasses} top-[10%] left-[10%] w-12 h-12 [animation-delay:-0.5s]`} />
      <ScrollText className={`${iconClasses} top-[70%] left-[45%] w-10 h-10 [animation-delay:-3.5s]`} />
      <Stamp className={`${iconClasses} bottom-[10%] left-[20%] w-14 h-14 [animation-delay:-4s] text-accent/20`} />
      <Pen className={`${iconClasses} top-[60%] right-[15%] w-12 h-12 [animation-delay:-4.5s]`} />
      <Droplets className={`${iconClasses} top-[85%] right-[40%] w-10 h-10 [animation-delay:-5s] text-secondary/20`} />
      <Feather className={`${iconClasses} top-[5%] right-[30%] w-10 h-10 [animation-delay:-5.5s]`} />
      <FileText className={`${iconClasses} bottom-[5%] left-[40%] w-12 h-12 [animation-delay:-6s]`} />
      <ScrollText className={`${iconClasses} top-[40%] left-[40%] w-10 h-10 [animation-delay:-6.5s]`} />
      <Stamp className={`${iconClasses} bottom-[40%] right-[5%] w-14 h-14 [animation-delay:-7s] text-accent/20`} />
      <Pen className={`${iconClasses} top-[75%] right-[25%] w-12 h-12 [animation-delay:-7.5s]`} />
    </div>
  );
};