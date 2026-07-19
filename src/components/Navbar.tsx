import { NavLink } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { Menu, X, Globe, Instagram, Youtube, Send } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../lib/utils";

export const Navbar = () => {
  const { t, language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: t('home'), path: "/" },
    { name: t('music'), path: "/music" },
    { name: t('academy'), path: "/academy" },
    { name: t('booking'), path: "/booking" },
  ];

  const logoUrl = "https://res.cloudinary.com/ddntf1cdt/image/upload/v1784316613/Screenshot_from_2026-07-17_22-21-34_zc8ejq.png";

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center gap-2">
              <img src={logoUrl} alt="ABDK Logo" className="h-14 w-auto" />
              <span className="text-2xl font-black tracking-tighter text-gray-900">ABDK</span>
            </NavLink>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  cn(
                    "text-sm font-bold transition-all hover:text-amber-600 px-2 py-1",
                    isActive ? "text-amber-600 border-b-2 border-amber-600" : "text-gray-900"
                  )
                }
              >
                {link.name}
              </NavLink>
            ))}
            
            <div className="flex items-center gap-4 pl-4 border-l border-gray-200/20">
              <button
                onClick={() => setLanguage(language === 'en' ? 'am' : 'en')}
                className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-amber-600 transition-colors"
              >
                <Globe className="w-4 h-4" />
                {language === 'en' ? 'AM' : 'EN'}
              </button>
              
              <div className="flex items-center gap-3">
                <a href="https://www.instagram.com/abd.kmusic" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-amber-600">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.youtube.com/@abd.kmusic" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-amber-600">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="https://t.me/+251987428747" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-amber-600">
                  <Send className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setLanguage(language === 'en' ? 'am' : 'en')}
              className="p-2 text-gray-600"
            >
              <Globe className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-600"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "block px-3 py-3 rounded-md text-base font-medium",
                      isActive ? "bg-amber-50 text-amber-600" : "text-gray-700 hover:bg-gray-50"
                    )
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <div className="flex gap-6 px-3 pt-4 border-t border-gray-100">
                <a href="https://www.instagram.com/abd.kmusic" target="_blank" rel="noreferrer" className="text-gray-500">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="https://www.youtube.com/@abd.kmusic" target="_blank" rel="noreferrer" className="text-gray-500">
                  <Youtube className="w-6 h-6" />
                </a>
                <a href="https://t.me/+251987428747" target="_blank" rel="noreferrer" className="text-gray-500">
                  <Send className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
