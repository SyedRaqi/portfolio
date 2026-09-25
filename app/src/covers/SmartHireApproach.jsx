export default function SmartHireApproach() {
  return (
    <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", display: "block" }}>
      <defs>
        <linearGradient id="sha-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#080c10" />
          <stop offset="100%" stopColor="#0d1520" />
        </linearGradient>
        <linearGradient id="sha-gold" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#e0b15c" />
          <stop offset="100%" stopColor="#f0d080" />
        </linearGradient>
      </defs>
      <rect width="800" height="450" fill="url(#sha-bg)" />
      {/* Central architecture diagram */}
      {/* Flask backend box */}
      <rect x="320" y="160" width="160" height="50" rx="6" fill="#1a2030" stroke="#e0b15c" strokeWidth="1.5" />
      <text x="400" y="191" fontFamily="monospace" fontSize="12" fill="#e0b15c" textAnchor="middle" letterSpacing="1">FLASK BACKEND</text>
      {/* MySQL box */}
      <rect x="560" y="200" width="140" height="46" rx="6" fill="#1a2030" stroke="#4a90d9" strokeWidth="1.5" />
      <text x="630" y="228" fontFamily="monospace" fontSize="11" fill="#4a90d9" textAnchor="middle">MYSQL</text>
      {/* UI box */}
      <rect x="100" y="200" width="150" height="46" rx="6" fill="#1a2030" stroke="#7ed69e" strokeWidth="1.5" />
      <text x="175" y="228" fontFamily="monospace" fontSize="11" fill="#7ed69e" textAnchor="middle">TAILWIND UI</text>
      {/* Connecting lines */}
      <line x1="320" y1="185" x2="250" y2="223" stroke="#7ed69e" strokeWidth="1.5" strokeDasharray="5,3" opacity="0.7" />
      <line x1="480" y1="185" x2="560" y2="223" stroke="#4a90d9" strokeWidth="1.5" strokeDasharray="5,3" opacity="0.7" />
      {/* Workflow nodes top */}
      <circle cx="200" cy="100" r="30" fill="#1a2030" stroke="#e0b15c" strokeWidth="1" />
      <text x="200" y="95" fontFamily="monospace" fontSize="8" fill="#e0b15c" textAnchor="middle">SCREEN</text>
      <text x="200" y="107" fontFamily="monospace" fontSize="8" fill="#e0b15c" textAnchor="middle">CANDIDATE</text>
      <circle cx="400" cy="80" r="30" fill="#1a2030" stroke="#e0b15c" strokeWidth="1.5" />
      <text x="400" y="75" fontFamily="monospace" fontSize="8" fill="#e0b15c" textAnchor="middle">EVALUATE</text>
      <text x="400" y="87" fontFamily="monospace" fontSize="8" fill="#e0b15c" textAnchor="middle">&amp; SCORE</text>
      <circle cx="600" cy="100" r="30" fill="#1a2030" stroke="#e0b15c" strokeWidth="1" />
      <text x="600" y="95" fontFamily="monospace" fontSize="8" fill="#e0b15c" textAnchor="middle">DECIDE</text>
      <text x="600" y="107" fontFamily="monospace" fontSize="8" fill="#e0b15c" textAnchor="middle">&amp; HIRE</text>
      {/* Arrows between nodes */}
      <line x1="230" y1="100" x2="368" y2="86" stroke="#e0b15c" strokeWidth="1.5" markerEnd="url(#arrow)" opacity="0.6" />
      <line x1="430" y1="86" x2="568" y2="97" stroke="#e0b15c" strokeWidth="1.5" opacity="0.6" />
      {/* Vertical links to backend */}
      <line x1="200" y1="130" x2="340" y2="160" stroke="#e0b15c" strokeWidth="1" opacity="0.3" strokeDasharray="4,4" />
      <line x1="400" y1="110" x2="400" y2="160" stroke="#e0b15c" strokeWidth="1" opacity="0.3" strokeDasharray="4,4" />
      <line x1="600" y1="130" x2="460" y2="160" stroke="#e0b15c" strokeWidth="1" opacity="0.3" strokeDasharray="4,4" />
      {/* Bottom platform labels */}
      <text x="400" y="320" fontFamily="monospace" fontSize="10" fill="#444" textAnchor="middle" letterSpacing="2">ONE PLATFORM · ONE WORKFLOW</text>
      {/* Label bar */}
      <rect x="0" y="390" width="800" height="60" fill="#080c10" opacity="0.9" />
      <text x="40" y="427" fontFamily="monospace" fontSize="11" fill="#e0b15c" letterSpacing="3">THE APPROACH</text>
      <text x="210" y="427" fontFamily="monospace" fontSize="11" fill="#555" letterSpacing="1">UNIFIED PLATFORM ARCHITECTURE</text>
    </svg>
  );
}
