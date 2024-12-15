import React from 'react';

export default function About() {
  return (
    <section className="py-16" id="about">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-pink-500 text-transparent bg-clip-text">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto text-gray-300 space-y-4">
          <p>
            I'm a passionate Computer Science Engineering student with a strong foundation in both frontend
            and backend development. Currently pursuing my Bachelor's degree at PPG Institute of Technology,
            I'm actively seeking opportunities to apply my skills in real-world projects through jobs and internships.
          </p>
          <p>
            My technical journey spans multiple programming languages and frameworks, allowing me to tackle
            diverse challenges in software development. I'm particularly interested in creating efficient,
            scalable solutions that make a positive impact.
          </p>
        </div>
      </div>
    </section>
  );
}