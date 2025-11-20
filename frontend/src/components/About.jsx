import { Code2, Database, Figma, GitBranch, Globe, Layers, Layout, Palette, PenTool, Smartphone, Wrench } from 'lucide-react';

const skills = [
  { name: 'HTML', level: 90 },
  { name: 'CSS', level: 88 },
  { name: 'JavaScript', level: 85 },
  { name: 'Python', level: 75 },
  { name: 'Databases (SQL)', level: 70 },
  { name: 'WordPress', level: 80 },
  { name: 'Figma', level: 82 },
  { name: 'Canva', level: 86 },
  { name: 'Git/GitHub', level: 78 },
  { name: 'APIs', level: 76 },
  { name: 'Responsive UI Design', level: 88 },
  { name: 'Three.js / 3D', level: 60 },
];

const highlights = [
  { icon: Globe, title: 'Web Development' },
  { icon: Layout, title: 'Front-End UI/UX' },
  { icon: Database, title: 'Database Design' },
  { icon: GitBranch, title: 'Version Control' },
  { icon: Figma, title: 'Product Design' },
  { icon: Smartphone, title: 'Responsive' },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-[#0b0e14]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_left,_rgba(56,189,248,0.08),transparent_40%),radial-gradient(ellipse_at_right,_rgba(139,92,246,0.08),transparent_40%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">About Me</h2>
        <p className="mt-3 text-gray-300 max-w-3xl">
          Passionate IT graduate with hands-on experience building modern, responsive interfaces and intelligent web solutions. I blend clean code, creative design, and performance to craft high-quality digital experiences.
        </p>

        <div className="mt-12 grid md:grid-cols-2 gap-10">
          <div className="space-y-6">
            {skills.map((s) => (
              <div key={s.name}>
                <div className="flex justify-between text-sm text-gray-300">
                  <span>{s.name}</span>
                  <span>{s.level}%</span>
                </div>
                <div className="mt-2 h-2 rounded bg-white/10 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cyan-500 to-violet-600" style={{ width: `${s.level}%` }} />
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {highlights.map(({ icon: Icon, title }) => (
              <div key={title} className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition hover:shadow-[0_0_40px_-10px] hover:shadow-cyan-500/30">
                <Icon className="text-cyan-400" />
                <p className="mt-3 text-gray-200 text-sm">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
