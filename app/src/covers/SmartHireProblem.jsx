export default function SmartHireProblem() {
  return (
    <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", display: "block" }}>
      <defs>
        <linearGradient id="shp-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0d0d0d" />
          <stop offset="100%" stopColor="#1a0a0a" />
        </linearGradient>
        <linearGradient id="shp-red" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#c0392b" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#e74c3c" stopOpacity="0.6" />
        </linearGradient>
      </defs>
      <rect width="800" height="450" fill="url(#shp-bg)" />
      {/* Grid of blurred resume cards — chaos */}
      {[0,1,2,3,4,5,6,7,8,9,10,11].map((i) => (
        <rect key={i}
          x={60 + (i % 4) * 175} y={60 + Math.floor(i / 4) * 110}
          width="140" height="90" rx="4"
          fill="#1c1c1c" stroke="#2a2a2a" strokeWidth="1"
          opacity={0.4 + (i % 3) * 0.2}
        />
      ))}
      {/* Overload lines on cards */}
      {[0,1,2,3,4,5,6,7,8,9,10,11].map((i) => (
        <g key={i}>
          <rect x={68 + (i % 4) * 175} y={75 + Math.floor(i / 4) * 110} width={80 + (i * 7) % 50} height="5" rx="2" fill="#333" />
          <rect x={68 + (i % 4) * 175} y={86 + Math.floor(i / 4) * 110} width={50 + (i * 11) % 60} height="4" rx="2" fill="#2a2a2a" />
          <rect x={68 + (i % 4) * 175} y={96 + Math.floor(i / 4) * 110} width={90 + (i * 5) % 30} height="4" rx="2" fill="#2a2a2a" />
          <rect x={68 + (i % 4) * 175} y={106 + Math.floor(i / 4) * 110} width={40 + (i * 13) % 55} height="4" rx="2" fill="#2a2a2a" />
        </g>
      ))}
      {/* Red X overlay — the problem */}
      <line x1="160" y1="80" x2="640" y2="370" stroke="url(#shp-red)" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
      <line x1="640" y1="80" x2="160" y2="370" stroke="url(#shp-red)" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
      {/* Hourglass icon top-right */}
      <g transform="translate(680,40)">
        <polygon points="0,0 60,0 30,35" fill="none" stroke="#c0392b" strokeWidth="2" opacity="0.6" />
        <polygon points="0,70 60,70 30,35" fill="none" stroke="#c0392b" strokeWidth="2" opacity="0.6" />
        <line x1="0" y1="0" x2="60" y2="0" stroke="#c0392b" strokeWidth="2" />
        <line x1="0" y1="70" x2="60" y2="70" stroke="#c0392b" strokeWidth="2" />
        <ellipse cx="30" cy="35" rx="4" ry="4" fill="#c0392b" opacity="0.8" />
      </g>
      {/* Label */}
      <rect x="0" y="390" width="800" height="60" fill="#0d0d0d" opacity="0.9" />
      <text x="40" y="427" fontFamily="monospace" fontSize="11" fill="#c0392b" letterSpacing="3">THE PROBLEM</text>
      <text x="200" y="427" fontFamily="monospace" fontSize="11" fill="#555" letterSpacing="1">MANUAL SCREENING DOES NOT SCALE</text>
    </svg>
  );
}
