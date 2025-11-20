import { useState } from 'react';

const projects = [
  {
    title: 'Smart Wheelchair',
    tag: 'IOT + AI',
    desc: 'Voice recognition controlled wheelchair concept using microcontrollers and AI for accessibility.',
  },
  {
    title: 'DiabFit Application',
    tag: 'Health Tech',
    desc: 'A diabetes management prototype with tracking, insights, and reminders across devices.',
  },
  {
    title: 'Space Exploration Website',
    tag: 'Web Experience',
    desc: 'Visually rich, space-themed website with animations and educational content.',
  },
  {
    title: 'Mini Projects',
    tag: 'Collection',
    desc: 'Landing pages, UI components, and small JavaScript apps demonstrating craft.',
  },
];

function ProjectCard({ p, onOpen }) {
  return (
    <button onClick={onOpen} className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden text-left will-change-transform [transform-style:preserve-3d] transition-transform duration-300 hover:-translate-y-1">
      <div className="pointer-events-none absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-violet-600/20 opacity-0 group-hover:opacity-100 blur-2xl transition" />
      <div className="relative">
        <div className="text-xs uppercase tracking-widest text-cyan-300/80">{p.tag}</div>
        <h3 className="mt-2 text-xl font-semibold text-white">{p.title}</h3>
        <p className="mt-2 text-gray-300 text-sm">{p.desc}</p>
      </div>
    </button>
  );
}

export default function Projects() {
  const [open, setOpen] = useState(null);
  return (
    <section id="projects" className="relative py-24 bg-[#0b0e14]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_rgba(56,189,248,0.06),transparent_40%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">Projects</h2>
        <p className="mt-3 text-gray-300">A selection of work exploring intelligent interfaces, accessibility, and immersive design.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} p={p} onOpen={() => setOpen(p)} />
          ))}
          <div className="p-6 rounded-2xl border border-dashed border-white/10 text-gray-400 flex items-center justify-center">
            Future Project Slot
          </div>
        </div>

        {open && (
          <div className="fixed inset-0 z-50 grid place-items-center p-6 bg-black/70" onClick={() => setOpen(null)}>
            <div className="max-w-lg w-full rounded-2xl bg-[#0f1320] border border-white/10 p-6" onClick={(e) => e.stopPropagation()}>
              <div className="text-xs uppercase tracking-widest text-cyan-300/80">{open.tag}</div>
              <h3 className="mt-2 text-2xl font-semibold text-white">{open.title}</h3>
              <p className="mt-3 text-gray-300">{open.desc}</p>
              <div className="mt-6 flex justify-end">
                <button className="px-4 py-2 rounded-md bg-white/10 text-white hover:bg-white/20" onClick={() => setOpen(null)}>Close</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
