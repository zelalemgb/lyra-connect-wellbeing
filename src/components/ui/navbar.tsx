
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, User } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Will be replaced with auth state

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="lyra-container py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-lyra-teal flex items-center justify-center">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <span className="ml-2 text-xl font-bold text-lyra-dark">Lyra Health</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/providers" className="text-gray-600 hover:text-lyra-teal transition-colors">
              Find Providers
            </Link>
            <Link to="/how-it-works" className="text-gray-600 hover:text-lyra-teal transition-colors">
              How It Works
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-lyra-teal transition-colors">
              About
            </Link>
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <Link to="/dashboard">
                  <Button variant="ghost" className="flex items-center space-x-2">
                    <User size={18} />
                    <span>Dashboard</span>
                  </Button>
                </Link>
              </div>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="ghost">Log In</Button>
                </Link>
                <Link to="/register">
                  <Button className="bg-lyra-teal hover:bg-lyra-teal/90">Sign Up</Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link 
              to="/providers" 
              className="block text-gray-600 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Find Providers
            </Link>
            <Link 
              to="/how-it-works" 
              className="block text-gray-600 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link 
              to="/about" 
              className="block text-gray-600 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            
            <div className="pt-4 border-t border-gray-200">
              {isLoggedIn ? (
                <Link 
                  to="/dashboard" 
                  className="block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button className="w-full flex items-center justify-center space-x-2">
                    <User size={18} />
                    <span>Dashboard</span>
                  </Button>
                </Link>
              ) : (
                <div className="space-y-3">
                  <Link 
                    to="/login" 
                    className="block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Button variant="outline" className="w-full">Log In</Button>
                  </Link>
                  <Link 
                    to="/register" 
                    className="block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Button className="w-full bg-lyra-teal hover:bg-lyra-teal/90">Sign Up</Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
