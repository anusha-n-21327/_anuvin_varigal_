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
        <Button variant="outline" className="bg-transparent border-violet-400 text-violet-400 hover:bg-violet-400 hover:text-slate-900">
          Sign In
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-slate-900 border-slate-700 text-white">
        <DialogHeader>
          <DialogTitle>Sign In</DialogTitle>
          <DialogDescription>
            Enter your credentials to access the poems. (This is a demo)
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input id="email" defaultValue="poet@example.com" className="col-span-3 bg-slate-800 border-slate-600" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="password_fake" className="text-right">
              Password
            </Label>
            <Input id="password_fake" type="password" defaultValue="password" className="col-span-3 bg-slate-800 border-slate-600" />
          </div>
        </div>
        <Button onClick={handleLogin} className="bg-violet-600 hover:bg-violet-700">Sign In</Button>
      </DialogContent>
    </Dialog>
  );
}