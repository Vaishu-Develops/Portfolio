import React from 'react';
import { Code, Database, Terminal, Globe, Server, Layout } from 'lucide-react';

const skills = [
  { name: 'Python', icon: Terminal, category: 'Programming' },
  { name: 'Java', icon: Code, category: 'Programming' },
  { name: 'C', icon: Terminal, category: 'Programming' },
  { name: 'PHP', icon: Server, category: 'Backend' },
  { name: 'HTML', icon: Layout, category: 'Frontend' },
  { name: 'CSS', icon: Layout, category: 'Frontend' },
  { name: 'JavaScript', icon: Globe, category: 'Frontend' },
  { name: 'SQL', icon: Database, category: 'Database' },
];

export default function Skills() {
  return (
    <section className="py-16" id="skills">
      <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-pink-500 text-transparent bg-clip-text">
        Technical Skills
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="p-6 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-cyan-500 transition-all group"
          >
            <div className="flex flex-col items-center gap-4">
              <skill.icon className="w-8 h-8 text-cyan-400 group-hover:text-pink-500 transition-colors" />
              <div>
                <h3 className="font-semibold text-center">{skill.name}</h3>
                <p className="text-sm text-gray-400 text-center">{skill.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}