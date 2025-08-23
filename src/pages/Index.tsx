import { Button } from "@/components/ui/button";
import { Instagram, Feather } from "lucide-react";
import { Link } from "react-router-dom";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <div className="w-full min-h-screen font-serif text-gray-800">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-transparent backdrop-blur-sm z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#home" className="flex items-center space-x-3">
            <img src="/anuvin-varigal-logo.jpeg" alt="Anuvin Varigal Logo" className="h-12 w-12 rounded-full object-cover border-2 border-gray-400" />
            <span className="text-2xl font-bold">ANUVIN VARIGAL</span>
          </a>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#about" className="hover:text-black transition-colors">About</a>
            <Link to="/poems" className="hover:text-black transition-colors">Poems</Link>
            <Button variant="outline">Sign In</Button>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            Welcome to ANUVIN VARIGAL
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            ...where words and emotions meet.
          </p>
          <Link to="/poems">
            <Button size="lg" className="text-lg px-8 py-6">
              Read my poems
            </Button>
          </Link>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-black/5">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-bold mb-6">About the Author</h2>
              <p className="text-2xl font-semibold mb-2">Anu</p>
              <p className="text-lg mb-4 text-gray-600">2nd Year, B.Tech Cyber Security</p>
              <div className="flex justify-center md:justify-start items-start space-x-3 my-6">
                  <Feather className="w-8 h-8 mt-1 flex-shrink-0" />
                  <p className="text-lg italic max-w-md">
                  "I write to heal, to connect, and to make a momento for the emotions..."
                  </p>
              </div>
            </div>
            <div className="flex justify-center">
              <img src="/anuvin-varigal-logo.jpeg" alt="Anu" className="h-64 w-64 rounded-full object-cover shadow-2xl border-4 border-white" />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="cta" className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Wanna have all my poems in your Inbox?</h2>
            <p className="text-lg text-gray-600 mb-8">
              (This feature is coming soon!)
            </p>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Follow me on Instagram for daily poetry!</h3>
            <a href="https://www.instagram.com/anuvin_varigal" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="text-lg px-8 py-6 bg-[#C13584] hover:bg-[#A1256B] text-white">
                <Instagram className="mr-2 h-5 w-5" /> Follow @anuvin_varigal
              </Button>
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-10 bg-black/5">
        <div className="container mx-auto px-6 text-center text-gray-600">
          <p className="text-lg italic mb-4">"Poetry is the language of the soul..."</p>
          <a href="https://www.instagram.com/anuvin_varigal" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2 hover:text-black">
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