import React from 'react';
import { Container } from './ui/Container';
import { SOCIAL_LINKS } from '../config/constants';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-pulse" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
      </div>
      <Container className="relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-7xl font-bold mb-6">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              Hello, I'm Vaishnavi
            </span>
          </h1>
          <p className="text-2xl text-gray-300 mb-8">
            A Computer Science Engineer passionate about creating innovative solutions
          </p>
          <div className="flex gap-4">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-gray-700 hover:border-purple-500 transition-colors"
              >
                <link.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}