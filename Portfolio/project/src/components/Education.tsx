import React from 'react';

export default function Education() {
  return (
    <section className="py-16" id="education">
      <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-pink-500 text-transparent bg-clip-text">
        Education
      </h2>
      <div className="max-w-3xl mx-auto">
        <div className="p-8 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700">
          <h3 className="text-2xl font-bold text-cyan-400 mb-2">
            Bachelor of Engineering in Computer Science
          </h3>
          <p className="text-xl text-gray-300 mb-4">PPG Institute of Technology</p>
          <div className="flex items-center gap-4 text-gray-400">
            <span>Coimbatore, Tamil Nadu</span>
            <span className="w-2 h-2 rounded-full bg-pink-500"></span>
            <span>Present</span>
          </div>
        </div>
      </div>
    </section>
  );
}