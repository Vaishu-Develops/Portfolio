import React from 'react';
import { Code } from 'lucide-react';

export default function Header() {
  return (
    <header className="relative overflow-hidden bg-gray-900 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#ff00ff33,transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#00ffff33,transparent_50%)]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-center mb-8">
          <Code className="w-12 h-12 text-cyan-400" />
        </div>
        <h1 className="text-6xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-pink-500 text-transparent bg-clip-text">
          Vaishnavi
        </h1>
        <p className="text-2xl text-center text-gray-300 mb-8">
          Computer Science Engineer & Full Stack Developer
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-full text-white font-semibold transition-all">
            View Projects
          </button>
          <button className="px-6 py-3 border-2 border-pink-500 hover:bg-pink-500/10 rounded-full text-white font-semibold transition-all">
            Contact Me
          </button>
        </div>
      </div>
    </header>
  );
}