export default function AnfalCover() {
  return (
    <svg viewBox="0 0 220 130" xmlns="http://www.w3.org/2000/svg" className="cover-svg" style={{height:'auto'}} aria-label="Anfal Enterprises Business Website">
      <defs>
        <linearGradient id="af-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0c0e0c"/>
          <stop offset="100%" stopColor="#090909"/>
        </linearGradient>
        <clipPath id="af-clip"><rect width="220" height="130"/></clipPath>
      </defs>
      <rect width="220" height="130" fill="url(#af-bg)"/>
      <g clipPath="url(#af-clip)">
        <ellipse cx="110" cy="65" rx="160" ry="90" fill="#4ade8008"/>
        {/* Navbar */}
        <rect x="0" y="0" width="220" height="20" fill="#09090aee"/>
        <text x="12" y="13" fontFamily="'Anton', sans-serif" fontSize="7" letterSpacing="2" fill="#f3efe7">ANFAL ENTERPRISES</text>
        <rect x="180" y="5" width="32" height="10" rx="1" fill="#4ade8030" stroke="#4ade8060" strokeWidth="1"/>
        <text x="196" y="12" textAnchor="middle" fontFamily="monospace" fontSize="5" letterSpacing="1" fill="#4ade80">CONTACT</text>

        {/* Hero */}
        <rect x="10" y="28" width="130" height="80" rx="2" fill="#121211" stroke="#f3efe714" strokeWidth="1"/>
        <text x="20" y="48" fontFamily="'Anton', sans-serif" fontSize="8" fill="#4ade8080">TRUSTED</text>
        <text x="20" y="58" fontFamily="'Anton', sans-serif" fontSize="11" fill="#f3efe7">ENTERPRISE</text>
        <text x="20" y="69" fontFamily="'Anton', sans-serif" fontSize="11" fill="#f3efe7">SOLUTIONS</text>
        <line x1="20" y1="75" x2="80" y2="75" stroke="#4ade8060" strokeWidth="1"/>
        <text x="20" y="86" fontFamily="monospace" fontSize="5" fill="#a49f95">Business · Trade · Services</text>
        <rect x="20" y="92" width="50" height="10" rx="1" fill="#4ade8020" stroke="#4ade8040" strokeWidth="1"/>
        <text x="45" y="99" textAnchor="middle" fontFamily="monospace" fontSize="5" letterSpacing="1" fill="#4ade80">LEARN MORE</text>

        {/* Side cards */}
        <rect x="152" y="28" width="58" height="36" rx="2" fill="#121211" stroke="#f3efe714" strokeWidth="1"/>
        <text x="181" y="44" textAnchor="middle" fontFamily="'Anton', sans-serif" fontSize="14" fill="#4ade80">12+</text>
        <text x="181" y="54" textAnchor="middle" fontFamily="monospace" fontSize="5" letterSpacing="1" fill="#6b6760">YEARS</text>
        <rect x="152" y="72" width="58" height="36" rx="2" fill="#121211" stroke="#f3efe714" strokeWidth="1"/>
        <text x="181" y="88" textAnchor="middle" fontFamily="'Anton', sans-serif" fontSize="14" fill="#e0b15c">500+</text>
        <text x="181" y="98" textAnchor="middle" fontFamily="monospace" fontSize="5" letterSpacing="1" fill="#6b6760">CLIENTS</text>
        <text x="110" y="124" textAnchor="middle" fontFamily="monospace" fontSize="5" letterSpacing="3" fill="#f3efe720">HTML · CSS · JAVASCRIPT</text>
      </g>
    </svg>
  );
}
