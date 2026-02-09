import { Mail, MapPin, Send, Instagram, Linkedin, Globe } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="relative py-28 bg-gray-50/50 overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-purple-50 border border-purple-100 text-purple-600 text-sm font-semibold rounded-full mb-4 tracking-wide uppercase">
            Contact
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Let's Work
            <span className="gradient-text"> Together</span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's create something amazing.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left: Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact details */}
            <div className="space-y-5">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center shrink-0 group-hover:bg-purple-100 group-hover:border-purple-200 transition-colors">
                  <Mail size={20} className="text-purple-500" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-0.5">Email</p>
                  <p className="text-gray-900 font-medium">kawther.hadjadji@email.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-pink-50 border border-pink-100 flex items-center justify-center shrink-0 group-hover:bg-pink-100 group-hover:border-pink-200 transition-colors">
                  <MapPin size={20} className="text-pink-500" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-0.5">Location</p>
                  <p className="text-gray-900 font-medium">Available Worldwide</p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div>
              <p className="text-gray-400 text-sm mb-4 uppercase tracking-wider font-medium">Follow Me</p>
              <div className="flex gap-3">
                {[
                  { icon: Instagram, label: 'Instagram' },
                  { icon: Linkedin, label: 'LinkedIn' },
                  { icon: Globe, label: 'Behance' },
                ].map((social) => (
                  <button
                    key={social.label}
                    className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-purple-500 hover:bg-purple-50 hover:border-purple-200 transition-all duration-300 shadow-sm"
                    title={social.label}
                  >
                    <social.icon size={20} />
                  </button>
                ))}
              </div>
            </div>

            {/* Quick info card */}
            <div className="bg-white border border-purple-100 rounded-2xl p-6 shadow-sm">
              <h4 className="font-heading font-bold text-gray-900 mb-3">Project Inquiry</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  Brand Identity packages available
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-pink-400" />
                  Typically respond within 24 hours
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  Remote collaboration worldwide
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-pink-400" />
                  All industries welcome
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-white border border-gray-100 rounded-3xl p-8 shadow-lg shadow-purple-500/5"
            >
              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-gray-500 text-sm mb-2 font-medium">Your Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-gray-500 text-sm mb-2 font-medium">Your Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all"
                  />
                </div>
              </div>

              <div className="mb-5">
                <label className="block text-gray-500 text-sm mb-2 font-medium">Subject</label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all appearance-none"
                >
                  <option value="">Select a service...</option>
                  <option value="brand-identity">Brand Identity</option>
                  <option value="logo-design">Logo Design</option>
                  <option value="print-design">Print Design</option>
                  <option value="digital-design">Digital Design</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-gray-500 text-sm mb-2 font-medium">Your Message</label>
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:-translate-y-0.5"
              >
                {submitted ? (
                  <>Message Sent! ✓</>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
