export default function NewsProblem() {
  return (
    <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", display: "block" }}>
      <defs>
        <linearGradient id="nwp-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0d0d0d" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </linearGradient>
      </defs>
      <rect width="800" height="450" fill="url(#nwp-bg)" />
      {/* Generic boring news layout — the problem */}
      <rect x="80" y="60" width="640" height="300" rx="4" fill="#111" stroke="#222" strokeWidth="1" />
      {/* Boring list of headlines — all look the same */}
      {[0,1,2,3,4,5,6,7].map(i => (
        <g key={i}>
          <rect x="100" y={80 + i * 34} width="600" height="26" rx="2" fill="#141414" />
          <rect x="110" y={88 + i * 34} width={280 + (i * 37) % 200} height="10" rx="2" fill="#2a2a2a" />
          <rect x="110" y={100 + i * 34} width={180 + (i * 29) % 120} height="7" rx="2" fill="#1e1e1e" />
        </g>
      ))}
      {/* ZZZ — boring */}
      {["Z","Z","Z"].map((z, i) => (
        <text key={i} x={600 + i * 30} y={120 + i * 40} fontFamily="serif" fontSize={28 - i * 6}
          fill="#333" opacity={0.8 - i * 0.2}>{z}</text>
      ))}
      {/* Equaliser bars — everything the same height */}
      <g transform="translate(130, 370)">
        {[0,1,2,3,4,5,6,7,8,9,10,11].map(i => (
          <rect key={i} x={i * 22} y="0" width="16" height="20" rx="2" fill="#2a2a2a" />
        ))}
        <text x="130" y="34" fontFamily="monospace" fontSize="8" fill="#444" letterSpacing="2">NO HIERARCHY · NO ATMOSPHERE</text>
      </g>
      {/* Label bar */}
      <rect x="0" y="390" width="800" height="60" fill="#0d0d0d" opacity="0.95" />
      <text x="40" y="427" fontFamily="monospace" fontSize="11" fill="#c0392b" letterSpacing="3">THE PROBLEM</text>
      <text x="200" y="427" fontFamily="monospace" fontSize="11" fill="#555" letterSpacing="1">NEWS SITES ALL LOOK THE SAME</text>
    </svg>
  );
}
