import React, { useState, useEffect } from 'react';
import { Container } from './ui/Container';
import { Code } from 'lucide-react';
import { NAV_ITEMS } from '../config/constants';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/50 backdrop-blur-lg' : ''
    }`}>
      <Container>
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <Code className="w-8 h-8 text-purple-500" />
            <span className="font-bold text-xl">Vaishnavi</span>
          </a>
          <ul className="flex gap-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </nav>
  );
}