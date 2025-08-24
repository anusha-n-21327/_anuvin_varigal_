import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Feather } from "lucide-react";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Navigation</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-full max-w-xs bg-background/95 backdrop-blur-sm">
        <div className="flex flex-col h-full p-4">
          <div className="mb-8">
             <SheetClose asChild>
                <a href="#home" className="flex items-center space-x-3 text-primary">
                    <Feather className="w-8 h-8 text-foreground" />
                    <span className="text-2xl font-bold text-foreground font-serif">ANUVIN VARIGAL</span>
                </a>
             </SheetClose>
          </div>
          <nav className="flex flex-col space-y-4">
            <SheetClose asChild>
              <a href="#home" className="text-lg px-3 py-2 rounded-md hover:text-primary hover:bg-primary/10 transition-colors">Home</a>
            </SheetClose>
            <SheetClose asChild>
              <a href="#about" className="text-lg px-3 py-2 rounded-md hover:text-primary hover:bg-primary/10 transition-colors">About</a>
            </SheetClose>
            <SheetClose asChild>
              <a href="#poems-section" className="text-lg px-3 py-2 rounded-md hover:text-primary hover:bg-primary/10 transition-colors">Poems</a>
            </SheetClose>
            <SheetClose asChild>
              <a href="#contact-section" className="text-lg px-3 py-2 rounded-md hover:text-primary hover:bg-primary/10 transition-colors">Contact</a>
            </SheetClose>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;