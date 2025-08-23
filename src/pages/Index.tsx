import { Button } from "@/components/ui/button";
import { Instagram, Feather, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { useAuth } from "@/context/AuthContext";
import { LoginDialog } from "@/components/LoginDialog";
import { showSuccess } from "@/utils/toast";

const Index = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    showSuccess("You have been signed out.");
  };

  const handleReadPoemsClick = () => {
    if (isAuthenticated) {
      navigate("/poems");
    } else {
      showError("Please sign in to read the poems.");
    }
  };

  return (
    <div className="w-full min-h-screen font-serif text-gray-200">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-slate-900/50 backdrop-blur-sm z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#home" className="flex items-center space-x-3">
            <img src="/anuvin-varigal-logo.jpeg" alt="Anuvin Varigal Logo" className="h-12 w-12 rounded-full object-cover border-2 border-slate-600" />
            <span className="text-2xl font-bold text-white">ANUVIN VARIGAL</span>
          </a>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#about" className="hover:text-violet-400 transition-colors">About</a>
            <Link to="/poems" className="hover:text-violet-400 transition-colors">Poems</Link>
            {isAuthenticated ? (
              <Button onClick={handleLogout} variant="outline" className="bg-transparent border-violet-400 text-violet-400 hover:bg-violet-400 hover:text-slate-900">
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            ) : (
              <LoginDialog />
            )}
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight text-white">
            Welcome to ANUVIN VARIGAL
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl text-slate-300">
            ...where words and emotions meet.
          </p>
          <Button size="lg" className="text-lg px-8 py-6 bg-violet-600 hover:bg-violet-700 text-white" onClick={handleReadPoemsClick}>
            Read my poems
          </Button>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-black/20">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-bold mb-6 text-white">About the Author</h2>
              <p className="text-2xl font-semibold mb-2 text-violet-400">Anu</p>
              <p className="text-lg mb-4 text-slate-400">2nd Year, B.Tech Cyber Security</p>
              <div className="flex justify-center md:justify-start items-start space-x-3 my-6">
                  <Feather className="w-8 h-8 mt-1 flex-shrink-0 text-violet-400" />
                  <p className="text-lg italic max-w-md text-slate-300">
                  "I write to heal, to connect, and to make a momento for the emotions..."
                  </p>
              </div>
            </div>
            <div className="flex justify-center">
              <img src="/anuvin-varigal-logo.jpeg" alt="Anu" className="h-64 w-64 rounded-full object-cover shadow-2xl border-4 border-slate-700" />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="cta" className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Wanna have all my poems in your Inbox?</h2>
            <p className="text-lg text-slate-400 mb-8">
              (This feature is coming soon!)
            </p>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">Follow me on Instagram for daily poetry!</h3>
            <a href="https://www.instagram.com/anuvin_varigal" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="text-lg px-8 py-6 bg-[#C13584] hover:bg-[#A1256B] text-white">
                <Instagram className="mr-2 h-5 w-5" /> Follow @anuvin_varigal
              </Button>
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-10 bg-black/20">
        <div className="container mx-auto px-6 text-center text-slate-400">
          <p className="text-lg italic mb-4">"Poetry is the language of the soul..."</p>
          <a href="https://www.instagram.com/anuvin_varigal" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2 hover:text-violet-400">
            <Instagram className="h-5 w-5" />
            <span>anuvin_varigal</span>
          </a>
           <MadeWithDyad />
        </div>
      </footer>
    </div>
  );
};

export default Index;