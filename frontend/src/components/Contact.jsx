import { Github, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      await new Promise((r) => setTimeout(r, 900));
      setStatus('Thanks! I will get back to you soon.');
      e.target.reset();
    } catch (e) {
      setStatus('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-[#0b0e14]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom,_rgba(56,189,248,0.06),transparent_40%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">Get in Touch</h2>
        <p className="mt-3 text-gray-300">Have a project in mind or want to collaborate? Let’s talk.</p>

        <div className="mt-10 grid lg:grid-cols-2 gap-8">
          <form onSubmit={submit} className="p-6 rounded-2xl bg-white/5 border border-white/10 grid gap-4">
            <input required name="name" placeholder="Your Name" className="px-4 py-3 rounded-md bg-white/10 text-white placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-cyan-500" />
            <input required name="email" type="email" placeholder="Your Email" className="px-4 py-3 rounded-md bg-white/10 text-white placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-cyan-500" />
            <textarea required name="message" rows="5" placeholder="Message" className="px-4 py-3 rounded-md bg-white/10 text-white placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-cyan-500" />
            <button className="justify-self-start px-5 py-3 rounded-md bg-gradient-to-r from-cyan-500 to-violet-600 text-white text-sm shadow-lg shadow-cyan-500/20 hover:shadow-violet-600/20 transition">Send Message</button>
            <p className="text-sm text-gray-400 h-5">{status}</p>
          </form>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-white font-semibold">Connect</h3>
            <p className="mt-2 text-gray-300 text-sm">I’m available on these platforms.</p>
            <div className="mt-4 flex items-center gap-4">
              <a href="https://github.com" target="_blank" className="p-3 rounded-md bg-white/10 hover:bg-white/20 text-white"><Github /></a>
              <a href="https://linkedin.com" target="_blank" className="p-3 rounded-md bg-white/10 hover:bg-white/20 text-white"><Linkedin /></a>
              <a href="mailto:abdullahtalib@example.com" className="p-3 rounded-md bg-white/10 hover:bg-white/20 text-white"><Mail /></a>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Abdullah Talib. All rights reserved.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <a href="#home" className="hover:text-white">Home</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#services" className="hover:text-white">Services</a>
          </div>
        </div>
      </div>
    </section>
  );
}
