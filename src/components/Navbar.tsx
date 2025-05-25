import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Projects', path: '/projects' },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/95 backdrop-blur-sm shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <NavLink to="/" className="text-2xl font-bold text-primary">
          Portfolio<span className="text-accent">.</span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <NavLink 
              key={link.path} 
              to={link.path} 
              className={({ isActive }) => 
                isActive ? "nav-link active" : "nav-link"
              }
            >
              {link.title}
            </NavLink>
          ))}
          <button 
            onClick={toggleTheme} 
            className="ml-4 p-2 rounded-full hover:bg-foreground/10 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        {/* Mobile Navigation Button */}
        <div className="flex items-center md:hidden">
          <button 
            onClick={toggleTheme} 
            className="p-2 mr-2 rounded-full hover:bg-foreground/10 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            onClick={toggleMenu}
            className="p-2 rounded-md hover:bg-foreground/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          className="md:hidden bg-background border-t border-foreground/10"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            {navLinks.map((link) => (
              <NavLink 
                key={link.path} 
                to={link.path} 
                className={({ isActive }) =>
                  `block py-2 px-4 rounded-md transition-colors ${
                    isActive ? 'bg-primary/10 text-primary font-medium' : 'hover:bg-foreground/5'
                  }`
                }
                onClick={closeMenu}
              >
                {link.title}
              </NavLink>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;