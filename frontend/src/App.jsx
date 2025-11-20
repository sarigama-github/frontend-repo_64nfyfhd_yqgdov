import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import './index.css';

export default function App() {
  return (
    <div className="font-[Inter] bg-[#0b0e14]">
      <Navbar />
      <main className="">
        <Hero />
        <About />
        <Projects />
        <Services />
        <Contact />
      </main>
    </div>
  );
}
