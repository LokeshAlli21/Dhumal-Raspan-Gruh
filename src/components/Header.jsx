import React, { useState, useEffect, useContext } from 'react';
import { Menu, X, Globe, Phone, Mail, Instagram, Clock, MapPin } from 'lucide-react';
import { LanguageContext } from '../context/LanguageContext';

const Header = () => {
  const {language, setLanguage} = useContext(LanguageContext)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleNavigate = (route) => {
    window.location.href = route;
  }

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 150;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const content = {
    en: {
      brandName: "Dhumal Raspan Gruh",
      tagline: "Since 1942",
      nav: {
        home: "Home",
        about: "About",
        legacy: "Our Legacy",
        benefits: "Benefits",
        contact: "Contact"
      },
      contactInfo: {
        phone: "+91-9158433382",
        email: "dhumalraspan@gmail.com",
        address: "Chatti Galli, Mangalwar Peth, Solapur",
        timings: "10 AM – 10 PM"
      }
    },
    mr: {
      brandName: "धुमाळ रसपान गृह",
      tagline: "१९४२ पासून",
      nav: {
        home: "मुख्य पृष्ठ",
        about: "आमच्याबद्दल",
        legacy: "आमचा वारसा",
        benefits: "फायदे",
        contact: "संपर्क"
      },
      contactInfo: {
        phone: "+91-9158433382",
        email: "dhumalraspan@gmail.com",
        address: "छत्ती गल्ली, मंगलवार पेठ, सोलापूर",
        timings: "सकाळ १० ते रात्री १०"
      }
    }
  };

  const currentContent = content[language];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { key: 'home', label: currentContent.nav.home, href: '#hero' },
    { key: 'about', label: currentContent.nav.about, href: '#about' },
    { key: 'legacy', label: currentContent.nav.legacy, href: '#legacy' },
    { key: 'benefits', label: currentContent.nav.benefits, href: '#benefits' },
    { key: 'contact', label: currentContent.nav.contact, href: '#contact' }
  ];

  return (
    <>


      {/* Main Header */}
      <header 
        className={` w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-green-100 fixed' 
            : 'bg-transparent absolute'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div onClick={() => { 
                    handleNavigate('/')
                }} className="w-12 h-12 rounded-full bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 flex items-center justify-center shadow-lg">
                    <img src="/logo.jpeg" alt="Logo" className=' rounded-full hover:scale-105' />
                  {/* <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                    <span className="text-green-600 font-bold text-lg">D</span>
                  </div> */}
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
              </div>
              <div>
                <h1 className={`text-xl font-bold ${scrolled ? 'text-green-800' : 'text-white'} transition-colors`}>
                  {currentContent.brandName}
                </h1>
                <p className={`text-sm ${scrolled ? 'text-green-600' : 'text-emerald-200'} transition-colors`}>
                  {currentContent.tagline}
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.href.substring(1))}
                  className={`relative font-medium transition-all duration-300 hover:scale-105 ${
                    scrolled 
                      ? 'text-gray-700 hover:text-green-600' 
                      : 'text-white hover:text-green-300'
                  }`}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-300 hover:w-full"></span>
                </button>
              ))}
            </nav>

            {/* Language Toggle & Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* Language Toggle */}
              <button
                onClick={() => setLanguage && setLanguage(language === 'en' ? 'mr' : 'en')}
                className={`group p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                  scrolled 
                    ? 'bg-green-50 hover:bg-green-100 text-green-600' 
                    : 'bg-white/20 backdrop-blur-md hover:bg-white/30 text-white'
                }`}
              >
                <Globe size={20} className="group-hover:rotate-12 transition-transform" />
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`lg:hidden p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                  scrolled 
                    ? 'bg-green-50 hover:bg-green-100 text-green-600' 
                    : 'bg-white/20 backdrop-blur-md hover:bg-white/30 text-white'
                }`}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen 
              ? 'max-h-96 opacity-100 pb-6' 
              : 'max-h-0 opacity-0'
          }`}>
            <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-green-100 p-6 mt-4">
              <nav className="space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.key}
                    onClick={() => scrollToSection(item.href.substring(1))}
                    className="block w-full text-left px-4 py-3 rounded-xl text-gray-700 hover:bg-green-50 hover:text-green-600 transition-all duration-300 font-medium"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
              
              {/* Mobile Contact Info */}
              <div className="mt-6 pt-6 border-t border-green-100">
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-center space-x-3">
                    <Phone size={16} className="text-green-600" />
                    <span>{currentContent.contactInfo.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock size={16} className="text-green-600" />
                    <span>{currentContent.contactInfo.timings}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin size={16} className="text-green-600" />
                    <span>{currentContent.contactInfo.address}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Header Border Effect */}
        <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 transition-opacity duration-300 ${
          scrolled ? 'opacity-100' : 'opacity-0'
        }`}></div>
      </header>


    </>
  );
};

export default Header;