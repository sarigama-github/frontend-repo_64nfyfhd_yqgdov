import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0b0e14]">
      <div className="absolute inset-0 opacity-60">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(56,189,248,0.12),transparent_60%),radial-gradient(ellipse_at_top_right,_rgba(139,92,246,0.10),transparent_40%)]"></div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <p className="text-cyan-400/90 tracking-widest text-xs sm:text-sm uppercase">IT Specialist & Front-End Developer</p>
        <h1 className="mt-4 text-3xl sm:text-5xl md:text-6xl font-bold leading-tight text-white">
          Hi, I’m Abdullah Talib — <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">IT Graduate</span> & Creative Developer.
        </h1>
        <p className="mt-5 text-base sm:text-lg text-gray-300">
          Specializing in web development, modern UI/UX, 3D interfaces, and intelligent solutions.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="#projects" className="px-5 py-3 rounded-md bg-gradient-to-r from-cyan-500 to-violet-600 text-white text-sm shadow-lg shadow-cyan-500/20 hover:shadow-violet-600/20 transition">
            View Projects
          </a>
          <a href="#contact" className="px-5 py-3 rounded-md bg-white/10 text-white text-sm hover:bg-white/20 transition">
            Contact Me
          </a>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-400 text-xs animate-bounce">
        Scroll
      </div>
    </section>
  );
}
