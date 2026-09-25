export default function LibraryCover() {
  return (
    <svg viewBox="0 0 840 440" xmlns="http://www.w3.org/2000/svg" className="cover-svg" aria-label="Library Management System — Full-Stack Web App">
      <defs>
        <linearGradient id="lib-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#080e0e"/>
          <stop offset="100%" stopColor="#09090a"/>
        </linearGradient>
        <linearGradient id="lib-teal" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4ecdc4"/>
          <stop offset="100%" stopColor="#2a9d8f"/>
        </linearGradient>
        <filter id="lib-glow">
          <feGaussianBlur stdDeviation="6" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <clipPath id="lib-clip"><rect width="840" height="440"/></clipPath>
      </defs>
      <rect width="840" height="440" fill="url(#lib-bg)"/>
      <g clipPath="url(#lib-clip)">
        {/* Background glow */}
        <ellipse cx="200" cy="220" rx="250" ry="200" fill="#4ecdc408"/>
        <ellipse cx="700" cy="150" rx="180" ry="150" fill="#2a9d8f10"/>

        {/* Bookshelves */}
        {[0,1,2,3,4,5,6].map(i => (
          <g key={i}>
            {/* shelf */}
            <rect x={80 + i*90} y="360" width="80" height="4" rx="1" fill="#4ecdc430"/>
            {/* books */}
            {[0,1,2,3,4,5].map(j => {
              const colors = ["#4ecdc4","#e0b15c","#d9553f","#6b9acd","#9b72cf","#4ecdc490"];
              const h = 50 + Math.sin(i*3+j)*20;
              return (
                <rect
                  key={j}
                  x={82 + i*90 + j*12}
                  y={360 - h}
                  width="10"
                  height={h}
                  rx="1"
                  fill={colors[(i+j)%colors.length]}
                  opacity={0.6 + (i+j)%3 * 0.15}
                />
              );
            })}
          </g>
        ))}

        {/* Database schema in center */}
        <g transform="translate(310, 100)">
          {/* Books table */}
          <rect x="0" y="0" width="220" height="130" rx="4" fill="#121211" stroke="#4ecdc440" strokeWidth="1"/>
          <rect x="0" y="0" width="220" height="28" rx="4" fill="#4ecdc420"/>
          <text x="110" y="18" textAnchor="middle" fontFamily="monospace" fontSize="9" letterSpacing="3" fill="#4ecdc4">BOOKS</text>
          {[
            ["book_id", "INT PK"],
            ["title", "VARCHAR"],
            ["author", "VARCHAR"],
            ["isbn", "VARCHAR"],
            ["available", "BOOLEAN"],
          ].map(([col, type], i) => (
            <g key={i}>
              <text x="14" y={44 + i*18} fontFamily="monospace" fontSize="8" fill="#a49f95">{col}</text>
              <text x="206" y={44 + i*18} textAnchor="end" fontFamily="monospace" fontSize="8" fill="#4ecdc480">{type}</text>
              <line x1="10" y1={49 + i*18} x2="210" y2={49 + i*18} stroke="#f3efe708" strokeWidth="1"/>
            </g>
          ))}

          {/* Members table below */}
          <rect x="0" y="150" width="220" height="110" rx="4" fill="#121211" stroke="#e0b15c40" strokeWidth="1"/>
          <rect x="0" y="150" width="220" height="28" rx="4" fill="#e0b15c20"/>
          <text x="110" y="168" textAnchor="middle" fontFamily="monospace" fontSize="9" letterSpacing="3" fill="#e0b15c">MEMBERS</text>
          {[
            ["member_id", "INT PK"],
            ["name", "VARCHAR"],
            ["email", "VARCHAR"],
            ["joined", "DATE"],
          ].map(([col, type], i) => (
            <g key={i}>
              <text x="14" y={194 + i*18} fontFamily="monospace" fontSize="8" fill="#a49f95">{col}</text>
              <text x="206" y={194 + i*18} textAnchor="end" fontFamily="monospace" fontSize="8" fill="#e0b15c80">{type}</text>
            </g>
          ))}

          {/* FK line */}
          <line x1="220" y1="60" x2="240" y2="60" stroke="#4ecdc450" strokeWidth="1"/>
          <line x1="240" y1="60" x2="240" y2="200" stroke="#4ecdc450" strokeWidth="1"/>
          <line x1="240" y1="200" x2="220" y2="200" stroke="#4ecdc450" strokeWidth="1"/>
          <circle cx="220" cy="60" r="3" fill="#4ecdc4" filter="url(#lib-glow)"/>
          <circle cx="220" cy="200" r="3" fill="#e0b15c" filter="url(#lib-glow)"/>
        </g>

        {/* Stats cards on left */}
        {[
          ["BOOKS", "1,240", "#4ecdc4"],
          ["MEMBERS", "385", "#e0b15c"],
          ["ISSUED", "92", "#d9553f"],
        ].map(([label, val, color], i) => (
          <g key={i} transform={`translate(40, ${80 + i*90})`}>
            <rect width="200" height="70" rx="4" fill="#121211" stroke={`${color}30`} strokeWidth="1"/>
            <text x="16" y="26" fontFamily="monospace" fontSize="7" letterSpacing="3" fill="#6b6760">{label}</text>
            <text x="16" y="54" fontFamily="'Anton', sans-serif" fontSize="30" fill={color}>{val}</text>
          </g>
        ))}

        {/* Bottom label */}
        <text x="420" y="420" textAnchor="middle" fontFamily="'Anton', sans-serif" fontSize="11" letterSpacing="6" fill="#f3efe730">LIBRARY MANAGEMENT SYSTEM — FULL STACK</text>
      </g>
    </svg>
  );
}
