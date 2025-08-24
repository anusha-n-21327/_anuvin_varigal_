import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";

export function LoginDialog() {
  const { login } = useAuth();
  const [open, setOpen] = useState(false);

  const handleLogin = () => {
    // This is a simulated login.
    // Later, we can add real authentication here.
    login();
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground"> {/* Updated button colors */}
          Sign In
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-card border-border text-foreground"> {/* Updated background, border, and text colors */}
        <DialogHeader>
          <DialogTitle>Sign In</DialogTitle>
          <DialogDescription className="text-muted-foreground"> {/* Updated text color */}
            Enter your credentials to access the poems. (This is a demo)
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input id="email" defaultValue="poet@example.com" className="col-span-3 bg-input border-border text-foreground" /> {/* Updated input colors */}
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="password_fake" className="text-right">
              Password
            </Label>
            <Input id="password_fake" type="password" defaultValue="password" className="col-span-3 bg-input border-border text-foreground" /> {/* Updated input colors */}
          </div>
        </div>
        <Button onClick={handleLogin} className="bg-primary hover:bg-primary/90 text-primary-foreground">Sign In</Button> {/* Updated button colors */}
      </DialogContent>
    </Dialog>
  );
}