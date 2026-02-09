import { Palette, PenTool, Layers, Monitor, Zap, Award } from 'lucide-react';

const skills = [
  { icon: Palette, label: 'Adobe Photoshop', desc: 'Photo editing & compositing' },
  { icon: PenTool, label: 'Adobe Illustrator', desc: 'Vector design & illustration' },
  { icon: Layers, label: 'Brand Identity', desc: 'Full branding systems' },
  { icon: Monitor, label: 'Print & Digital', desc: 'Multi-platform design' },
  { icon: Zap, label: 'Creative Direction', desc: 'Visual strategy & concepts' },
  { icon: Award, label: 'Logo Design', desc: 'Memorable brand marks' },
];

export function About() {
  return (
    <section id="about" className="relative py-28 bg-white overflow-hidden">
      {/* Subtle bg pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(168,85,247,0.06) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Soft blobs */}
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-purple-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-[300px] h-[300px] bg-pink-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 bg-purple-50 text-purple-600 text-sm font-semibold rounded-full mb-4 tracking-wide uppercase border border-purple-100">
            About Me
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Design is my
            <span className="gradient-text"> language</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Bio */}
          <div className="space-y-6">
            <div className="relative">
              {/* Abstract portrait placeholder */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100 shadow-2xl shadow-purple-500/10">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-pink-400/10" />
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `linear-gradient(45deg, rgba(168,85,247,0.08) 25%, transparent 25%, transparent 50%, rgba(168,85,247,0.08) 50%, rgba(168,85,247,0.08) 75%, transparent 75%, transparent)`,
                    backgroundSize: '60px 60px',
                  }}
                />
                {/* Large K monogram */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-[200px] font-bold bg-gradient-to-br from-purple-300/30 to-pink-300/30 bg-clip-text text-transparent select-none">K</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-white/90 via-white/60 to-transparent">
                  <p className="text-gray-800 font-heading text-lg font-medium">Kawther HADJADJI</p>
                  <p className="gradient-text text-sm font-semibold">Graphic Designer</p>
                </div>

                {/* Corner accent */}
                <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-purple-400/50 rounded-tr-xl" />
                <div className="absolute bottom-20 left-6 w-12 h-12 border-b-2 border-l-2 border-pink-400/50 rounded-bl-xl" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-white rounded-2xl shadow-xl shadow-purple-500/10 p-4 flex items-center gap-3 border border-purple-100">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <Zap size={22} className="text-white" />
                </div>
                <div>
                  <p className="font-heading font-bold text-gray-900 text-sm">Full Branding</p>
                  <p className="text-xs text-gray-500">Identity Systems</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">
                Creating brands that leave a lasting impression
              </h3>
              <p className="text-gray-500 leading-relaxed text-lg">
                I'm <strong className="text-gray-900">Kawther HADJADJI</strong>, a passionate graphic designer
                specializing in <strong className="text-gray-900">full brand identity creation</strong>. With expertise
                in Adobe Photoshop and Illustrator, I transform ideas into powerful visual stories.
              </p>
              <p className="text-gray-500 leading-relaxed text-lg mt-4">
                My portfolio spans across diverse industries — from car dealerships to food brands, from environmental
                initiatives to sports organizations. Each project receives the same level of dedication, creativity,
                and strategic thinking.
              </p>
            </div>

            {/* Tools */}
            <div className="flex flex-wrap gap-3">
              {['Adobe Photoshop', 'Adobe Illustrator', 'Brand Strategy', 'Print Design', 'Digital Design', 'Typography'].map(
                (tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 bg-white rounded-xl text-sm font-medium text-gray-700 border border-gray-200 shadow-sm hover:border-purple-300 hover:text-purple-600 hover:bg-purple-50 transition-colors cursor-default"
                  >
                    {tool}
                  </span>
                )
              )}
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {skills.map((skill) => (
                <div
                  key={skill.label}
                  className="group p-4 bg-white rounded-2xl border border-gray-100 hover:border-purple-200 hover:shadow-lg hover:shadow-purple-500/5 transition-all duration-300 cursor-default"
                >
                  <skill.icon
                    size={24}
                    className="text-purple-500 mb-2 group-hover:scale-110 transition-transform"
                  />
                  <p className="text-sm font-semibold text-gray-900">{skill.label}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{skill.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
