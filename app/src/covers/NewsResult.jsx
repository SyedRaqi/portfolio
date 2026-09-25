export default function NewsResult() {
  return (
    <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", display: "block" }}>
      <defs>
        <linearGradient id="nwr-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#080610" />
          <stop offset="100%" stopColor="#100c1a" />
        </linearGradient>
        <linearGradient id="nwr-hero-img" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1e1428" />
          <stop offset="100%" stopColor="#0a0810" />
        </linearGradient>
        <linearGradient id="nwr-fade" x1="0%" y1="60%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#080610" stopOpacity="0" />
          <stop offset="100%" stopColor="#080610" stopOpacity="1" />
        </linearGradient>
      </defs>
      <rect width="800" height="450" fill="url(#nwr-bg)" />
      {/* Cinematic news app final look */}
      <rect x="80" y="55" width="640" height="310" rx="6" fill="#0a0810" stroke="#1e182e" strokeWidth="1.5" />
      {/* Hero full-bleed image area */}
      <rect x="80" y="55" width="640" height="200" rx="6" fill="url(#nwr-hero-img)" />
      {/* Cinematic grain lines */}
      {[0,1,2,3,4,5,6,7,8,9].map(i => (
        <line key={i} x1="80" y1={75 + i * 18} x2="720" y2={75 + i * 18}
          stroke="#fff" strokeWidth="0.3" opacity="0.04" />
      ))}
      {/* Fade overlay at bottom of hero */}
      <rect x="80" y="55" width="640" height="200" fill="url(#nwr-fade)" />
      {/* Category badge */}
      <rect x="100" y="180" width="80" height="18" rx="9" fill="#e0b15c" opacity="0.9" />
      <text x="140" y="193" fontFamily="monospace" fontSize="8" fill="#0d0d0d" textAnchor="middle" letterSpacing="1">WORLD NEWS</text>
      {/* Hero headline */}
      <text x="100" y="222" fontFamily="serif" fontSize="18" fill="#f0f0f0" fontWeight="bold">Global Leaders Convene on Climate</text>
      <text x="100" y="240" fontFamily="serif" fontSize="14" fill="#aaa">Talks signal a turning point for policy reform</text>
      {/* Live ticker strip */}
      <rect x="80" y="255" width="640" height="22" fill="#e0b15c" opacity="0.12" />
      <text x="100" y="270" fontFamily="monospace" fontSize="8" fill="#e0b15c" letterSpacing="1">LIVE  •  Markets rally as inflation eases  •  Tech earnings beat forecasts  •  LIVE</text>
      {/* Thumbnail row */}
      {[0,1,2].map(i => (
        <g key={i}>
          <rect x={100 + i * 195} y="285" width="175" height="70" rx="3" fill="#12101a" stroke="#1e182e" strokeWidth="1" />
          <rect x={100 + i * 195} y="285" width="70" height="70" rx="3" fill={["#1a1428","#101828","#0e1a10"][i]} />
          <rect x={178 + i * 195} y="295" width="88" height="8" rx="2" fill="#2a2838" />
          <rect x={178 + i * 195} y="308" width="70" height="7" rx="2" fill="#201e2e" />
          <rect x={178 + i * 195} y="320" width="80" height="7" rx="2" fill="#201e2e" />
          <rect x={178 + i * 195} y="340" width="50" height="8" rx="4" fill="#e0b15c" opacity="0.2" />
        </g>
      ))}
      {/* Label bar */}
      <rect x="0" y="390" width="800" height="60" fill="#080610" opacity="0.95" />
      <text x="40" y="427" fontFamily="monospace" fontSize="11" fill="#e0b15c" letterSpacing="3">THE RESULT</text>
      <text x="195" y="427" fontFamily="monospace" fontSize="11" fill="#555" letterSpacing="1">NEWS WORTH SCROLLING THROUGH</text>
    </svg>
  );
}
