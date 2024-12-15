import React from 'react';
import type { Skill } from '../types';

interface SkillCardProps {
  skill: Skill;
}

export function SkillCard({ skill }: SkillCardProps) {
  return (
    <div className="group relative">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
      <div className="relative p-6 bg-black rounded-lg">
        <div className="flex flex-col items-center gap-4">
          <skill.icon className="w-8 h-8 text-purple-500 group-hover:text-pink-500 transition-colors" />
          <div>
            <h3 className="font-semibold text-center">{skill.name}</h3>
            <p className="text-sm text-gray-400 text-center">{skill.category}</p>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-1.5">
            <div
              className="bg-gradient-to-r from-purple-500 to-pink-500 h-1.5 rounded-full transition-all duration-500 ease-out group-hover:scale-x-110"
              style={{ width: `${skill.level}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}