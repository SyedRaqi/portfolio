export default function NewsBuild() {
  return (
    <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", display: "block" }}>
      <defs>
        <linearGradient id="nwb-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#060810" />
          <stop offset="100%" stopColor="#0a0c18" />
        </linearGradient>
      </defs>
      <rect width="800" height="450" fill="url(#nwb-bg)" />
      {/* API pipeline diagram */}
      {/* News API source */}
      <rect x="60" y="160" width="140" height="60" rx="6" fill="#0d1020" stroke="#4a90d9" strokeWidth="1.5" />
      <text x="130" y="185" fontFamily="monospace" fontSize="9" fill="#4a90d9" textAnchor="middle">NEWS API</text>
      <text x="130" y="200" fontFamily="monospace" fontSize="8" fill="#334" textAnchor="middle">REST FEED</text>
      {/* Arrow */}
      <line x1="200" y1="190" x2="280" y2="190" stroke="#4a90d9" strokeWidth="1.5" />
      <polygon points="280,185 292,190 280,195" fill="#4a90d9" />
      {/* JS Renderer */}
      <rect x="292" y="150" width="150" height="80" rx="6" fill="#0d1020" stroke="#e0b15c" strokeWidth="1.5" />
      <text x="367" y="177" fontFamily="monospace" fontSize="9" fill="#e0b15c" textAnchor="middle">JS RENDERER</text>
      <text x="367" y="192" fontFamily="monospace" fontSize="8" fill="#445" textAnchor="middle">fetch + render</text>
      <text x="367" y="207" fontFamily="monospace" fontSize="8" fill="#445" textAnchor="middle">transitions</text>
      {/* Arrow */}
      <line x1="442" y1="190" x2="520" y2="190" stroke="#7ed69e" strokeWidth="1.5" />
      <polygon points="520,185 532,190 520,195" fill="#7ed69e" />
      {/* Responsive UI */}
      <rect x="532" y="150" width="150" height="80" rx="6" fill="#0d1020" stroke="#7ed69e" strokeWidth="1.5" />
      <text x="607" y="185" fontFamily="monospace" fontSize="9" fill="#7ed69e" textAnchor="middle">RESPONSIVE</text>
      <text x="607" y="200" fontFamily="monospace" fontSize="9" fill="#7ed69e" textAnchor="middle">VIEWS</text>
      {/* Netlify deploy arrow down */}
      <line x1="607" y1="230" x2="607" y2="280" stroke="#4a90d9" strokeWidth="1.5" strokeDasharray="5,3" />
      <polygon points="602,280 607,292 612,280" fill="#4a90d9" />
      <rect x="527" y="292" width="160" height="40" rx="4" fill="#0d1020" stroke="#4a90d9" strokeWidth="1" />
      <text x="607" y="317" fontFamily="monospace" fontSize="9" fill="#4a90d9" textAnchor="middle">NETLIFY · LIVE CI/CD</text>
      {/* GitHub arrow left to netlify */}
      <line x1="367" y1="230" x2="367" y2="310" stroke="#555" strokeWidth="1" strokeDasharray="4,4" />
      <rect x="292" y="310" width="150" height="34" rx="4" fill="#0d1020" stroke="#333" strokeWidth="1" />
      <text x="367" y="331" fontFamily="monospace" fontSize="9" fill="#555" textAnchor="middle">GITHUB REPO</text>
      <line x1="442" y1="327" x2="527" y2="313" stroke="#555" strokeWidth="1" strokeDasharray="4,4" />
      {/* Smooth transition label */}
      <text x="400" y="100" fontFamily="monospace" fontSize="9" fill="#334" textAnchor="middle" letterSpacing="2">FETCH → RENDER → DEPLOY</text>
      {/* Label bar */}
      <rect x="0" y="390" width="800" height="60" fill="#060810" opacity="0.95" />
      <text x="40" y="427" fontFamily="monospace" fontSize="11" fill="#7ed69e" letterSpacing="3">THE BUILD</text>
      <text x="175" y="427" fontFamily="monospace" fontSize="11" fill="#555" letterSpacing="1">LIVE API · SMOOTH TRANSITIONS · NETLIFY</text>
    </svg>
  );
}
