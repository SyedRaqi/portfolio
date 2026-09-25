export default function LibraryProblem() {
  return (
    <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", display: "block" }}>
      <defs>
        <linearGradient id="lbp-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0d0a06" />
          <stop offset="100%" stopColor="#1a130a" />
        </linearGradient>
      </defs>
      <rect width="800" height="450" fill="url(#lbp-bg)" />
      {/* Stack of paper ledgers — chaos */}
      {[0,1,2,3,4].map(i => (
        <g key={i} transform={`rotate(${-10 + i * 5}, 400, 225)`}>
          <rect x={160 + i * 8} y={100 + i * 12} width="480" height="180" rx="2"
            fill={i % 2 === 0 ? "#1a1208" : "#141008"} stroke="#2a2010" strokeWidth="1" opacity={0.7 + i * 0.06} />
          {/* Lines on paper */}
          {[0,1,2,3,4,5,6].map(j => (
            <line key={j} x1={180 + i * 8} y1={130 + i * 12 + j * 20} x2={620 + i * 8} y2={130 + i * 12 + j * 20}
              stroke="#2a2010" strokeWidth="0.8" />
          ))}
        </g>
      ))}
      {/* Pencil */}
      <g transform="rotate(-35, 640, 120)">
        <rect x="610" y="60" width="16" height="100" rx="2" fill="#e0b15c" opacity="0.8" />
        <polygon points="610,160 626,160 618,178" fill="#f5dca0" opacity="0.8" />
        <rect x="610" y="60" width="16" height="16" rx="2" fill="#555" />
      </g>
      {/* Question mark — confusion */}
      <text x="390" y="260" fontFamily="serif" fontSize="120" fill="#c0392b" opacity="0.12" textAnchor="middle">?</text>
      {/* Label bar */}
      <rect x="0" y="390" width="800" height="60" fill="#0d0a06" opacity="0.95" />
      <text x="40" y="427" fontFamily="monospace" fontSize="11" fill="#c0392b" letterSpacing="3">THE PROBLEM</text>
      <text x="200" y="427" fontFamily="monospace" fontSize="11" fill="#555" letterSpacing="1">LIBRARIES STILL RUN ON PAPER</text>
    </svg>
  );
}
