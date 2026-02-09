import { useState } from 'react';
import { ExternalLink, Eye } from 'lucide-react';
import { projects, categories, type Category } from '../data/projects';

export function Portfolio() {
  const [active, setActive] = useState<Category>('all');
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filtered = active === 'all' ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="relative py-28 bg-gray-50/50 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-pink-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-purple-50 border border-purple-100 text-purple-600 text-sm font-semibold rounded-full mb-4 tracking-wide uppercase">
            Portfolio
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Selected
            <span className="gradient-text"> Works</span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            A curated collection of brand identities across diverse industries
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                active === cat.key
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25'
                  : 'bg-white text-gray-500 hover:text-purple-600 hover:bg-purple-50 border border-gray-200 hover:border-purple-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="project-card group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/10 bg-white border border-gray-100"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Card background */}
              <div className={`project-image aspect-[3/4] bg-gradient-to-br ${project.color} transition-transform duration-700`}>
                {/* Pattern overlay */}
                <div className="absolute inset-0 opacity-10">
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.05) 20px, rgba(255,255,255,0.05) 40px)`,
                    }}
                  />
                </div>

                {/* Project icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-7xl opacity-30 group-hover:opacity-40 group-hover:scale-125 transition-all duration-500 select-none">
                    {project.icon}
                  </span>
                </div>

                {/* Category pill */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-medium rounded-full shadow-sm">
                    {project.categoryLabel}
                  </span>
                </div>
              </div>

              {/* Hover overlay */}
              <div
                className={`project-overlay absolute inset-0 bg-gradient-to-t from-purple-900/95 via-purple-800/60 to-transparent flex flex-col justify-end p-6 transition-opacity duration-500 ${
                  hoveredId === project.id ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="transform transition-transform duration-500 translate-y-0">
                  <h3 className="text-xl font-heading font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-white/15 text-white/80 text-xs rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <button className="flex items-center gap-1.5 px-4 py-2 bg-white text-purple-700 text-sm font-medium rounded-xl hover:bg-purple-50 transition-colors">
                      <Eye size={14} />
                      View
                    </button>
                    <button className="flex items-center gap-1.5 px-4 py-2 bg-white/15 text-white text-sm font-medium rounded-xl hover:bg-white/25 transition-colors">
                      <ExternalLink size={14} />
                      Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 text-sm mb-6">Want to see more? Let's discuss your project.</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-purple-200 text-purple-700 font-semibold rounded-2xl hover:bg-purple-50 hover:border-purple-400 transition-all duration-300 hover:-translate-y-1"
          >
            Start a Project
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
