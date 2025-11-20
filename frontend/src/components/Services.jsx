import { Code2, Database, Globe, Layout, Package, PanelsTopLeft, Sparkles } from 'lucide-react';

const services = [
  { icon: Globe, title: 'Web Development', desc: 'Fast, scalable, SEO-friendly websites.' },
  { icon: Layout, title: 'Front-End UI/UX', desc: 'Pixel-perfect, responsive interfaces.' },
  { icon: PanelsTopLeft, title: 'WordPress Development', desc: 'Themes, custom blocks, and optimization.' },
  { icon: Database, title: 'Database Design', desc: 'Clean schemas and performant queries.' },
  { icon: Code2, title: 'API Integration', desc: 'RESTful APIs and third-party services.' },
  { icon: Package, title: '3D & Interactive Web', desc: 'WebGL, Spline, and micro-interactions.' },
  { icon: Sparkles, title: 'Branding + Graphics', desc: 'Figma and Canva assets that stand out.' },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-[#0b0e14]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_rgba(139,92,246,0.06),transparent_40%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">Services</h2>
        <p className="mt-3 text-gray-300">Helping brands and teams ship beautiful, performant digital experiences.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition">
              <Icon className="text-cyan-400" />
              <h3 className="mt-4 text-white font-semibold">{title}</h3>
              <p className="mt-2 text-gray-300 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
