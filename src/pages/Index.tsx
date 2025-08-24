import { Button } from "@/components/ui/button";
import { Instagram, BookText } from "lucide-react"; // Removed LogOut
import { Link, useNavigate } from "react-router-dom";
import { MadeWithDyad } from "@/components/made-with-dyad";
// Removed useAuth and LoginDialog imports
// Removed showSuccess, showError as they were related to auth toasts

const Index = () => {
  const navigate = useNavigate();

  const handleReadPoemsClick = () => {
    navigate("/poems"); // Directly navigate to poems page
  };

  return (
    <div className="w-full min-h-screen font-serif text-foreground">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm z-50 border-b border-border">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#home" className="flex items-center space-x-3 text-primary">
            <BookText className="w-6 h-6" />
            <span className="text-2xl font-bold text-foreground">ANUVIN VARIGAL</span>
          </a>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <Link to="/poems" className="hover:text-primary transition-colors">Poems</Link>
            {/* Removed Sign In/Sign Out buttons */}
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight text-foreground">
            Welcome to ANUVIN VARIGAL
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl text-muted-foreground">
            where words and emotions meet.
          </p>
          <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground" onClick={handleReadPoemsClick}>
            Read my poems
          </Button>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-card/50 border-t border-b border-border">
          <div className="container mx-auto px-6 grid md:grid-cols-1 gap-12 items-center">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-6 text-foreground">About the Author</h2>
              <p className="text-2xl font-semibold mb-2 text-primary">Anu</p>
              <p className="text-lg mb-4 text-muted-foreground">2nd Year, B.Tech Cyber Security</p>
              <div className="flex justify-center items-start space-x-3 my-6">
                  <p className="text-lg italic max-w-md text-foreground">
                  "I write to heal, to connect, and to make a momento for the emotions..."
                  </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="cta" className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Wanna have all my poems in your Inbox?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              (This feature is coming soon!)
            </p>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Follow me on Instagram for daily poetry!</h3>
            <a href="https://www.instagram.com/anuvin_varigal" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="text-lg px-8 py-6 bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                <Instagram className="mr-2 h-5 w-5" /> Follow @anuvin_varigal
              </Button>
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-10 bg-card/50 border-t border-border">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <p className="text-lg italic mb-4">"Poetry is the language of the soul..."</p>
          <a href="https://www.instagram.com/anuvin_varigal" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2 hover:text-primary">
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