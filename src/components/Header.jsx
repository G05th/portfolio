import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-900">HOUSIFY</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
              About Us
            </a>
            <a href="#properties" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
              Properties
            </a>
            <a href="#services" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
              Services
            </a>
            <div className="relative">
              <button
                onClick={() => setIsMoreDropdownOpen(!isMoreDropdownOpen)}
                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors flex items-center"
              >
                More
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isMoreDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  <a href="#contact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Contact
                  </a>
                  <a href="#blog" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Blog
                  </a>
                  <a href="#careers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Careers
                  </a>
                </div>
              )}
            </div>
          </nav>

          {/* Contact Button */}
          <div className="hidden md:block">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors">
              Contact Us
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900 p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#about" className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium">
                About Us
              </a>
              <a href="#properties" className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium">
                Properties
              </a>
              <a href="#services" className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium">
                Services
              </a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium">
                Contact
              </a>
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors mt-4">
                Contact Us
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

