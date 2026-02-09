import { ArrowDown, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-purple-200/40 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-pink-200/40 blur-3xl" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-purple-100/30 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-pink-100/40 blur-3xl" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(168,85,247,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.3) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />

        {/* Floating shapes */}
        <div className="absolute top-[15%] left-[10%] w-20 h-20 border-2 border-purple-200 rounded-2xl rotate-12 animate-float" />
        <div className="absolute top-[25%] right-[15%] w-14 h-14 border-2 border-pink-200 rounded-full animate-float delay-300" />
        <div className="absolute bottom-[20%] left-[20%] w-16 h-16 border-2 border-purple-200/60 rounded-xl -rotate-6 animate-float delay-500" />
        <div className="absolute bottom-[30%] right-[10%] w-10 h-10 bg-pink-200/40 rounded-lg rotate-45 animate-float delay-200" />
        <div className="absolute top-[60%] left-[8%] w-6 h-6 bg-purple-300/30 rounded-full animate-float delay-400" />
        <div className="absolute top-[10%] right-[30%] w-8 h-8 bg-pink-300/20 rounded-lg rotate-12 animate-float delay-600" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="animate-fade-in-up inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-purple-50 border border-purple-200 mb-8">
          <Sparkles size={16} className="text-purple-500" />
          <span className="text-sm font-medium text-purple-700">Graphic Designer & Brand Identity Creator</span>
        </div>

        {/* Name */}
        <h1 className="animate-fade-in-up delay-100 opacity-0 font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-gray-900 leading-[0.9] tracking-tight mb-6">
          Kawther
          <br />
          <span className="gradient-text">HADJADJI</span>
        </h1>

        {/* Subtitle */}
        <p className="animate-fade-in-up delay-200 opacity-0 max-w-2xl mx-auto text-lg sm:text-xl text-gray-400 leading-relaxed mb-10 font-light">
          Crafting powerful visual identities that tell your brand's story.
          <br className="hidden sm:block" />
          From concept to complete brand systems — designed with passion.
        </p>

        {/* CTA buttons */}
        <div className="animate-fade-in-up delay-300 opacity-0 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#portfolio"
            className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-2xl transition-all duration-300 shadow-xl shadow-purple-500/25 hover:shadow-purple-500/40 hover:-translate-y-1 flex items-center gap-2"
          >
            View My Work
            <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border-2 border-purple-200 hover:border-purple-400 text-gray-700 font-semibold rounded-2xl transition-all duration-300 hover:bg-purple-50 hover:-translate-y-1"
          >
            Get in Touch
          </a>
        </div>

        {/* Stats */}
        <div className="animate-fade-in-up delay-500 opacity-0 mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[
            { number: '50+', label: 'Projects' },
            { number: '7+', label: 'Industries' },
            { number: '100%', label: 'Passion' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold gradient-text font-heading">{stat.number}</div>
              <div className="text-xs sm:text-sm text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in delay-700 opacity-0">
        <div className="w-6 h-10 rounded-full border-2 border-purple-300 flex justify-center pt-2">
          <div className="w-1 h-2.5 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
