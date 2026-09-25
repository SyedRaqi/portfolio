export default function NewsCover() {
  return (
    <svg viewBox="0 0 840 440" xmlns="http://www.w3.org/2000/svg" className="cover-svg" aria-label="Cinematic News Web Application — Interactive Frontend">
      <defs>
        <linearGradient id="news-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#08080e"/>
          <stop offset="100%" stopColor="#0a090a"/>
        </linearGradient>
        <linearGradient id="news-hero" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a1a2e"/>
          <stop offset="100%" stopColor="#0e0e18"/>
        </linearGradient>
        <linearGradient id="news-overlay" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0000"/>
          <stop offset="100%" stopColor="#0a090aee"/>
        </linearGradient>
        <linearGradient id="news-accent" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#6b9acd"/>
          <stop offset="100%" stopColor="#9b72cf"/>
        </linearGradient>
        <clipPath id="news-clip"><rect width="840" height="440"/></clipPath>
        <filter id="news-glow">
          <feGaussianBlur stdDeviation="8" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      <rect width="840" height="440" fill="url(#news-bg)"/>
      <g clipPath="url(#news-clip)">
        {/* Background ambient */}
        <ellipse cx="420" cy="200" rx="400" ry="200" fill="#6b9acd06"/>
        <ellipse cx="700" cy="350" rx="200" ry="150" fill="#9b72cf08"/>

        {/* Navbar */}
        <rect x="0" y="0" width="840" height="38" fill="#08080eee"/>
        <line x1="0" y1="38" x2="840" y2="38" stroke="#f3efe714" strokeWidth="1"/>
        <text x="30" y="23" fontFamily="'Anton', sans-serif" fontSize="13" letterSpacing="4" fill="#f3efe7">CINEMAPRESS</text>
        {["WORLD","TECH","SCIENCE","CULTURE","MORE"].map((item,i) => (
          <text key={i} x={260 + i*80} y="23" fontFamily="monospace" fontSize="7" letterSpacing="3" fill={i===1?"#6b9acd":"#6b6760"}>{item}</text>
        ))}
        {/* Live indicator */}
        <circle cx="800" cy="19" r="4" fill="#d9553f" filter="url(#news-glow)"/>
        <text x="812" y="23" fontFamily="monospace" fontSize="7" letterSpacing="2" fill="#d9553f">LIVE</text>

        {/* Hero article */}
        <rect x="20" y="55" width="500" height="280" rx="2" fill="url(#news-hero)" stroke="#f3efe714" strokeWidth="1"/>
        {/* Abstract hero image art */}
        <ellipse cx="270" cy="160" rx="200" ry="120" fill="#1e2a3a"/>
        {[0,1,2,3,4].map(i => (
          <ellipse key={i} cx={270} cy={160} rx={180-i*30} ry={100-i*18} fill="none" stroke="#6b9acd" strokeWidth="0.5" opacity={0.3 - i*0.04}/>
        ))}
        <ellipse cx="270" cy="160" rx="40" ry="25" fill="#6b9acd20" stroke="#6b9acd" strokeWidth="1"/>
        <circle cx="270" cy="160" r="8" fill="url(#news-accent)" filter="url(#news-glow)"/>
        {/* Hero gradient overlay */}
        <rect x="20" y="55" width="500" height="280" rx="2" fill="url(#news-overlay)"/>
        {/* Category badge */}
        <rect x="34" y="274" width="60" height="18" rx="1" fill="url(#news-accent)"/>
        <text x="64" y="286" textAnchor="middle" fontFamily="monospace" fontSize="7" letterSpacing="2" fill="#fff">SCIENCE</text>
        {/* Headline */}
        <text x="34" y="314" fontFamily="'Anton', sans-serif" fontSize="22" fill="#f3efe7">THE AGE OF ARTIFICIAL</text>
        <text x="34" y="338" fontFamily="'Anton', sans-serif" fontSize="22" fill="#f3efe7">INTELLIGENCE ARRIVES</text>

        {/* Right column - article cards */}
        <g transform="translate(540, 55)">
          {[
            ["CLIMATE", "Scientists Report Record Ocean Temperatures in 2024", "#4ecdc4"],
            ["TECH", "New Quantum Chip Solves Decade-Old Problem", "#e0b15c"],
            ["WORLD", "Global Leaders Meet on AI Governance Treaty", "#d9553f"],
          ].map(([cat, headline, color], i) => (
            <g key={i} transform={`translate(0, ${i * 98})`}>
              <rect width="280" height="88" rx="2" fill="#121211" stroke="#f3efe71a" strokeWidth="1"/>
              {/* Thumbnail art */}
              <rect x="0" y="0" width="88" height="88" rx="2" fill={`${color}15`}/>
              <ellipse cx="44" cy="44" rx="28" ry="20" fill={`${color}20`} stroke={`${color}40`} strokeWidth="1"/>
              <circle cx="44" cy="44" r="6" fill={color} opacity="0.6"/>
              {/* Text */}
              <rect x="100" y="12" width="50" height="12" rx="1" fill={`${color}25`}/>
              <text x="125" y="22" textAnchor="middle" fontFamily="monospace" fontSize="6" letterSpacing="2" fill={color}>{cat}</text>
              <text x="100" y="44" fontFamily="'Anton', sans-serif" fontSize="10" fill="#f3efe7" style={{wordBreak:'break-word'}}>{headline.substring(0,22)}</text>
              <text x="100" y="57" fontFamily="'Anton', sans-serif" fontSize="10" fill="#f3efe7">{headline.substring(22, 44)}</text>
              <text x="100" y="76" fontFamily="monospace" fontSize="7" fill="#6b6760">2 hrs ago</text>
            </g>
          ))}
        </g>

        {/* Bottom bar */}
        <rect x="0" y="350" width="840" height="70" fill="#08080e"/>
        <line x1="0" y1="350" x2="840" y2="350" stroke="#f3efe714" strokeWidth="1"/>
        {/* Ticker strip */}
        <text x="20" y="370" fontFamily="monospace" fontSize="7" letterSpacing="2" fill="#6b9acd">BREAKING</text>
        <line x1="90" y1="366" x2="106" y2="366" stroke="#6b9acd" strokeWidth="1"/>
        <text x="110" y="370" fontFamily="monospace" fontSize="7" fill="#a49f95">OpenAI unveils GPT-5 · Markets reach all-time high · Climate summit begins · NASA reveals lunar base plans</text>

        {/* Deploy badge */}
        <rect x="700" y="390" width="120" height="22" rx="2" fill="url(#news-accent)" opacity="0.8"/>
        <text x="760" y="405" textAnchor="middle" fontFamily="monospace" fontSize="7" letterSpacing="3" fill="#fff">LIVE ON NETLIFY</text>

        {/* Label */}
        <text x="420" y="432" textAnchor="middle" fontFamily="'Anton', sans-serif" fontSize="11" letterSpacing="6" fill="#f3efe720">CINEMATIC NEWS APP — INTERACTIVE FRONTEND</text>
      </g>
    </svg>
  );
}
