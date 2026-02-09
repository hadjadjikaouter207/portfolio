import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      {/* Top marquee text */}
      <div className="py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="font-display text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-100 to-pink-100 bg-clip-text text-transparent tracking-tight select-none">
            KAWTHER HADJADJI • GRAPHIC DESIGNER
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-heading font-bold text-sm">
              K
            </div>
            <span className="font-heading text-gray-400 text-sm">
              Kawther<span className="gradient-text">.design</span>
            </span>
          </div>

          {/* Nav */}
          <div className="flex flex-wrap justify-center gap-6">
            {['Home', 'About', 'Portfolio', 'Services', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-gray-400 text-sm hover:text-purple-500 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-gray-400 text-sm flex items-center gap-1">
            Made with <Heart size={12} className="text-pink-500" fill="currentColor" /> © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
