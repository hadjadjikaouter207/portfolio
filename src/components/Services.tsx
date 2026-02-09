import { Palette, PenTool, BookOpen, Printer, Monitor, Camera } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Brand Identity',
    desc: 'Complete visual identity systems including logo, color palette, typography, and brand guidelines that define who you are.',
    features: ['Logo Design', 'Color System', 'Typography', 'Brand Guidelines'],
  },
  {
    icon: PenTool,
    title: 'Logo Design',
    desc: 'Distinctive, memorable logos crafted in Adobe Illustrator — from concept sketches to final vector artwork.',
    features: ['Concept Development', 'Vector Artwork', 'Variations', 'File Formats'],
  },
  {
    icon: BookOpen,
    title: 'Stationery Design',
    desc: 'Professional business cards, letterheads, envelopes, and corporate stationery that reinforces your brand.',
    features: ['Business Cards', 'Letterheads', 'Envelopes', 'Folders'],
  },
  {
    icon: Printer,
    title: 'Print Design',
    desc: 'Eye-catching brochures, flyers, posters, banners, and marketing collateral ready for production.',
    features: ['Brochures', 'Flyers', 'Posters', 'Banners'],
  },
  {
    icon: Monitor,
    title: 'Digital Design',
    desc: 'Social media kits, digital ads, email templates, and web graphics optimized for every platform.',
    features: ['Social Media', 'Digital Ads', 'Web Graphics', 'Presentations'],
  },
  {
    icon: Camera,
    title: 'Photo Editing',
    desc: 'Professional photo retouching, compositing, and manipulation using Adobe Photoshop for stunning visuals.',
    features: ['Retouching', 'Compositing', 'Color Grading', 'Manipulation'],
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-28 bg-white overflow-hidden">
      {/* Accent blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-purple-50 to-pink-50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 bg-pink-50 text-pink-600 text-sm font-semibold rounded-full mb-4 tracking-wide uppercase border border-pink-100">
            Services
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            What I
            <span className="gradient-text"> Offer</span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            From initial concept to final deliverables — comprehensive design solutions for your brand
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="group relative bg-white rounded-3xl p-8 border border-gray-100 hover:border-purple-200 shadow-sm hover:shadow-2xl hover:shadow-purple-500/8 transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/20 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <service.icon size={26} className="text-white" />
              </div>

              {/* Content */}
              <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">
                {service.desc}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1.5 bg-gray-50 text-gray-500 text-xs font-medium rounded-lg group-hover:bg-purple-50 group-hover:text-purple-600 transition-colors"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Hover corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-purple-300 rounded-tr-xl" />
              </div>
            </div>
          ))}
        </div>

        {/* Process */}
        <div className="mt-24">
          <h3 className="text-center font-heading text-2xl font-bold text-gray-900 mb-12">
            My Design Process
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Discover', desc: 'Understanding your brand, goals, audience, and vision through in-depth research.' },
              { step: '02', title: 'Concept', desc: 'Exploring creative directions with mood boards, sketches, and initial concepts.' },
              { step: '03', title: 'Design', desc: 'Crafting polished designs in Photoshop & Illustrator with attention to every detail.' },
              { step: '04', title: 'Deliver', desc: 'Finalizing files in all formats with comprehensive brand guidelines.' },
            ].map((item) => (
              <div key={item.step} className="relative group text-center p-6 rounded-2xl hover:bg-purple-50/50 transition-colors">
                <span className="block font-display text-6xl font-bold gradient-text opacity-30 group-hover:opacity-50 transition-opacity mb-4">
                  {item.step}
                </span>
                <h4 className="font-heading text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
