import { Button } from "@/components/ui/button";
import { Instagram, Feather, LogOut, BookText } from "lucide-react"; // Added BookText for the header icon
import { Link, useNavigate } from "react-router-dom";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { useAuth } from "@/context/AuthContext";
import { LoginDialog } from "@/components/LoginDialog";
import { showSuccess, showError } from "@/utils/toast";

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
    <div className="w-full min-h-screen font-serif text-foreground"> {/* Changed text-gray-200 to text-foreground and removed glow-container */}
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm z-50 border-b border-border"> {/* Updated background and added border */}
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#home" className="flex items-center space-x-3 text-primary"> {/* Changed text color */}
            <BookText className="w-6 h-6" /> {/* Added BookText icon */}
            <span className="text-2xl font-bold text-foreground">ANUVIN VARIGAL</span> {/* Changed text-white to text-foreground */}
          </a>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#about" className="hover:text-primary transition-colors">About</a> {/* Updated hover color */}
            <Link to="/poems" className="hover:text-primary transition-colors">Poems</Link> {/* Updated hover color */}
            {isAuthenticated ? (
              <Button onClick={handleLogout} variant="outline" className="bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground"> {/* Updated button colors */}
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
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight text-foreground"> {/* Changed text-white to text-foreground */}
            Welcome to ANUVIN VARIGAL
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl text-muted-foreground"> {/* Changed text-slate-300 to text-muted-foreground */}
            where words and emotions meet.
          </p>
          <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground" onClick={handleReadPoemsClick}> {/* Updated button colors */}
            Read my poems
          </Button>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-card/50 border-t border-b border-border"> {/* Updated background and added borders */}
          <div className="container mx-auto px-6 grid md:grid-cols-1 gap-12 items-center"> {/* Changed to md:grid-cols-1 as image is removed */}
            <div className="text-center"> {/* Removed md:text-left and flex justify-center */}
              <h2 className="text-4xl font-bold mb-6 text-foreground">About the Author</h2> {/* Changed text-white to text-foreground */}
              <p className="text-2xl font-semibold mb-2 text-primary">Anu</p> {/* Updated text color */}
              <p className="text-lg mb-4 text-muted-foreground">2nd Year, B.Tech Cyber Security</p> {/* Updated text color */}
              <div className="flex justify-center items-start space-x-3 my-6"> {/* Centered content */}
                  <p className="text-lg italic max-w-md text-foreground"> {/* Changed text-slate-300 to text-foreground */}
                  "I write to heal, to connect, and to make a momento for the emotions..."
                  </p>
              </div>
            </div>
            {/* Removed the image div */}
          </div>
        </section>

        {/* CTA Section */}
        <section id="cta" className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Wanna have all my poems in your Inbox?</h2> {/* Changed text-white to text-foreground */}
            <p className="text-lg text-muted-foreground mb-8"> {/* Updated text color */}
              (This feature is coming soon!)
            </p>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Follow me on Instagram for daily poetry!</h3> {/* Changed text-white to text-foreground */}
            <a href="https://www.instagram.com/anuvin_varigal" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="text-lg px-8 py-6 bg-secondary hover:bg-secondary/90 text-secondary-foreground"> {/* Updated button colors to use secondary theme */}
                <Instagram className="mr-2 h-5 w-5" /> Follow @anuvin_varigal
              </Button>
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-10 bg-card/50 border-t border-border"> {/* Updated background and added border */}
        <div className="container mx-auto px-6 text-center text-muted-foreground"> {/* Updated text color */}
          <p className="text-lg italic mb-4">"Poetry is the language of the soul..."</p>
          <a href="https://www.instagram.com/anuvin_varigal" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2 hover:text-primary"> {/* Updated hover color */}
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