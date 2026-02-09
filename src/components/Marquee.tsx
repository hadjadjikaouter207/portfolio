export function Marquee() {
  const items = [
    'BRAND IDENTITY',
    '✦',
    'LOGO DESIGN',
    '✦',
    'ADOBE PHOTOSHOP',
    '✦',
    'ADOBE ILLUSTRATOR',
    '✦',
    'PRINT DESIGN',
    '✦',
    'DIGITAL DESIGN',
    '✦',
    'PACKAGING',
    '✦',
    'STATIONERY',
    '✦',
  ];

  return (
    <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 py-4 overflow-hidden">
      <div className="animate-marquee flex whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className={`mx-4 text-sm font-heading font-medium tracking-widest ${
              item === '✦' ? 'text-white/50' : 'text-white'
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
