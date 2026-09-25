export default function MadeenaCover() {
  return (
    <svg viewBox="0 0 220 130" xmlns="http://www.w3.org/2000/svg" className="cover-svg" style={{height:'auto'}} aria-label="Madeena Welfare Society Organization Website">
      <defs>
        <linearGradient id="mw-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#080c0e"/>
          <stop offset="100%" stopColor="#090909"/>
        </linearGradient>
        <clipPath id="mw-clip"><rect width="220" height="130"/></clipPath>
      </defs>
      <rect width="220" height="130" fill="url(#mw-bg)"/>
      <g clipPath="url(#mw-clip)">
        <ellipse cx="110" cy="65" rx="160" ry="90" fill="#60a5fa08"/>

        {/* Navbar */}
        <rect x="0" y="0" width="220" height="20" fill="#09090aee"/>
        <text x="12" y="13" fontFamily="'Anton', sans-serif" fontSize="6" letterSpacing="2" fill="#f3efe7">MADEENA WELFARE</text>
        <rect x="178" y="5" width="34" height="10" rx="1" fill="#60a5fa30" stroke="#60a5fa60" strokeWidth="1"/>
        <text x="195" y="12" textAnchor="middle" fontFamily="monospace" fontSize="5" letterSpacing="1" fill="#60a5fa">DONATE</text>

        {/* Crescent moon symbol */}
        <path d="M 80 55 A 30 30 0 1 1 80 85 A 20 20 0 1 0 80 55" fill="none" stroke="#60a5fa40" strokeWidth="1.5"/>
        <circle cx="92" cy="58" r="2" fill="#60a5fa60"/>

        {/* Content area */}
        <rect x="50" y="28" width="160" height="90" rx="2" fill="#121211" stroke="#f3efe714" strokeWidth="1"/>
        <text x="130" y="46" textAnchor="middle" fontFamily="monospace" fontSize="5" letterSpacing="3" fill="#60a5fa80">COMMUNITY · CARE · CHANGE</text>
        <text x="130" y="60" textAnchor="middle" fontFamily="'Anton', sans-serif" fontSize="13" fill="#f3efe7">BUILDING</text>
        <text x="130" y="73" textAnchor="middle" fontFamily="'Anton', sans-serif" fontSize="13" fill="#60a5fa">STRONGER</text>
        <text x="130" y="86" textAnchor="middle" fontFamily="'Anton', sans-serif" fontSize="13" fill="#f3efe7">COMMUNITIES</text>
        <line x1="70" y1="92" x2="190" y2="92" stroke="#f3efe714" strokeWidth="1"/>

        {/* Stats */}
        {[
          ["200+", "VOLUNTEERS"],
          ["15+", "PROGRAMMES"],
          ["1K+", "FAMILIES"],
        ].map(([num, label], i) => (
          <g key={i} transform={`translate(${70 + i * 43}, 98)`}>
            <text x="0" y="10" fontFamily="'Anton', sans-serif" fontSize="10" fill="#60a5fa">{num}</text>
            <text x="0" y="18" fontFamily="monospace" fontSize="4" letterSpacing="1" fill="#6b6760">{label}</text>
          </g>
        ))}

        <text x="110" y="124" textAnchor="middle" fontFamily="monospace" fontSize="5" letterSpacing="3" fill="#f3efe720">HTML · CSS · JAVASCRIPT</text>
      </g>
    </svg>
  );
}
