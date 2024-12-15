import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Section } from './components/ui/Section';
import { Container } from './components/ui/Container';
import { SkillCard } from './components/SkillCard';
import { SKILLS } from './config/constants';
import { Mail, Phone, MapPin } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />

      <Section id="about">
        <Container>
          <h2 className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            About Me
          </h2>
          <div className="max-w-3xl mx-auto prose prose-invert">
            <p className="text-lg text-gray-300">
              I'm a passionate Computer Science Engineering student at PPG Institute of Technology,
              with a strong foundation in both frontend and backend development. My journey in
              technology has equipped me with diverse programming skills and a keen eye for
              creating efficient, scalable solutions.
            </p>
          </div>
        </Container>
      </Section>

      <Section id="skills" className="bg-black/50">
        <Container>
          <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {SKILLS.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </Container>
      </Section>

      <Section id="education">
        <Container>
          <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            Education
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="relative p-8 bg-black border border-gray-800 rounded-lg hover:border-purple-500 transition-colors">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-25" />
              <div className="relative">
                <h3 className="text-2xl font-bold text-purple-500 mb-2">
                  Bachelor of Engineering in Computer Science
                </h3>
                <p className="text-xl text-gray-300 mb-4">PPG Institute of Technology</p>
                <div className="flex items-center gap-4 text-gray-400">
                  <span>Coimbatore, Tamil Nadu</span>
                  <span className="w-2 h-2 rounded-full bg-pink-500" />
                  <span>Present</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="contact" className="bg-black/50">
        <Container>
          <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            Get in Touch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              {
                icon: Mail,
                title: 'Email',
                value: 'vaishnavisudarsanam11@gmail.com',
                href: 'mailto:vaishnavisudarsanam11@gmail.com',
              },
              {
                icon: Phone,
                title: 'Phone',
                value: '+91 91502 19313',
                href: 'tel:+919150219313',
              },
              {
                icon: MapPin,
                title: 'Location',
                value: 'Coimbatore, Tamil Nadu',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                {item.href ? (
                  <a
                    href={item.href}
                    className="relative block p-6 bg-black rounded-lg"
                  >
                    <div className="flex flex-col items-center gap-4">
                      <item.icon className="w-8 h-8 text-purple-500 group-hover:text-pink-500 transition-colors" />
                      <div className="text-center">
                        <h3 className="font-semibold mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-400">{item.value}</p>
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className="relative p-6 bg-black rounded-lg">
                    <div className="flex flex-col items-center gap-4">
                      <item.icon className="w-8 h-8 text-purple-500 group-hover:text-pink-500 transition-colors" />
                      <div className="text-center">
                        <h3 className="font-semibold mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-400">{item.value}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}

export default App;