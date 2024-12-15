import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-16" id="contact">
      <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-pink-500 text-transparent bg-clip-text">
        Contact Me
      </h2>
      <div className="max-w-3xl mx-auto grid md:grid-cols-3 gap-8">
        <a
          href="mailto:vaishnavisudarsanam11@gmail.com"
          className="p-6 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-cyan-500 transition-all group"
        >
          <div className="flex flex-col items-center gap-4">
            <Mail className="w-8 h-8 text-cyan-400 group-hover:text-pink-500 transition-colors" />
            <div className="text-center">
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-sm text-gray-400">vaishnavisudarsanam11@gmail.com</p>
            </div>
          </div>
        </a>

        <a
          href="tel:+919150219313"
          className="p-6 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-cyan-500 transition-all group"
        >
          <div className="flex flex-col items-center gap-4">
            <Phone className="w-8 h-8 text-cyan-400 group-hover:text-pink-500 transition-colors" />
            <div className="text-center">
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-sm text-gray-400">+91 91502 19313</p>
            </div>
          </div>
        </a>

        <div className="p-6 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-cyan-500 transition-all group">
          <div className="flex flex-col items-center gap-4">
            <MapPin className="w-8 h-8 text-cyan-400 group-hover:text-pink-500 transition-colors" />
            <div className="text-center">
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-sm text-gray-400">Coimbatore, Tamil Nadu</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}