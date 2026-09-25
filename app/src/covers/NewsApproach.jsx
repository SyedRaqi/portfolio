export default function NewsApproach() {
  return (
    <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", display: "block" }}>
      <defs>
        <linearGradient id="nwa-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#080810" />
          <stop offset="100%" stopColor="#101018" />
        </linearGradient>
        <linearGradient id="nwa-hero" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1a1a2e" />
          <stop offset="100%" stopColor="#0a0a14" />
        </linearGradient>
      </defs>
      <rect width="800" height="450" fill="url(#nwa-bg)" />
      {/* Cinematic layout wireframe */}
      {/* Big hero card */}
      <rect x="80" y="60" width="400" height="260" rx="4" fill="url(#nwa-hero)" stroke="#2a2a3e" strokeWidth="1.5" />
      <rect x="80" y="60" width="400" height="160" rx="4" fill="#1a1a2e" opacity="0.8" />
      {/* Cinematic overlay text on hero */}
      <rect x="100" y="190" width="240" height="14" rx="2" fill="#e0b15c" opacity="0.9" />
      <rect x="100" y="212" width="340" height="10" rx="2" fill="#2a2a3e" />
      <rect x="100" y="228" width="280" height="10" rx="2" fill="#2a2a3e" />
      {/* Category pill */}
      <rect x="100" y="178" width="70" height="14" rx="7" fill="#e0b15c" opacity="0.3" />
      <text x="135" y="189" fontFamily="monospace" fontSize="7" fill="#e0b15c" textAnchor="middle">WORLD</text>
      {/* Vertical story stack right */}
      {[0,1,2].map(i => (
        <g key={i}>
          <rect x="500" y={60 + i * 90} width="220" height="80" rx="4" fill="#0d0d1a" stroke="#1e1e30" strokeWidth="1" />
          <rect x="510" y={75 + i * 90} width="60" height="50" rx="2" fill="#1a1a28" />
          <rect x="580" y={75 + i * 90} width="120" height="10" rx="2" fill="#2a2a3e" />
          <rect x="580" y={90 + i * 90} width="90" height="8" rx="2" fill="#1e1e2e" />
          <rect x="580" y={103 + i * 90} width="100" height="8" rx="2" fill="#1e1e2e" />
          <rect x="510" y={118 + i * 90} width="50" height="8" rx="4" fill="#e0b15c" opacity="0.25" />
        </g>
      ))}
      {/* Bottom ticker strip wireframe */}
      <rect x="80" y="330" width="640" height="24" rx="2" fill="#0d0d14" stroke="#1e1e2e" strokeWidth="1" />
      <rect x="90" y="337" width="500" height="10" rx="2" fill="#1a1a28" />
      {/* Motion arrows */}
      <text x="400" y="400" fontFamily="monospace" fontSize="9" fill="#e0b15c" textAnchor="middle" letterSpacing="2">VISUAL HIERARCHY · MOTION · STRONG IMAGERY</text>
      {/* Label bar */}
      <rect x="0" y="390" width="800" height="60" fill="#080810" opacity="0.95" />
      <text x="40" y="427" fontFamily="monospace" fontSize="11" fill="#e0b15c" letterSpacing="3">THE APPROACH</text>
      <text x="210" y="427" fontFamily="monospace" fontSize="11" fill="#555" letterSpacing="1">CINEMATIC LAYOUT + CLEAR HIERARCHY</text>
    </svg>
  );
}
