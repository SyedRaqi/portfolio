export default function LibraryResult() {
  return (
    <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", display: "block" }}>
      <defs>
        <linearGradient id="lbr-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#060a06" />
          <stop offset="100%" stopColor="#0a1410" />
        </linearGradient>
        <linearGradient id="lbr-shelf" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1a1208" />
          <stop offset="100%" stopColor="#100c04" />
        </linearGradient>
      </defs>
      <rect width="800" height="450" fill="url(#lbr-bg)" />
      {/* Bookshelf */}
      {[0,1,2].map(shelf => (
        <g key={shelf}>
          <rect x="80" y={80 + shelf * 90} width="640" height="6" rx="2" fill="#2a1e08" />
          {/* Books on shelf */}
          {[0,1,2,3,4,5,6,7,8,9,10].map(book => {
            const colors = ["#4a90d9","#e0b15c","#7ed69e","#c0392b","#9b59b6","#e67e22","#1abc9c","#e74c3c","#3498db","#f39c12","#2ecc71"];
            const widths = [28,22,34,24,30,20,26,32,28,24,30];
            const xPos = 90 + [0,28,50,84,108,138,158,184,216,244,268][book];
            return (
              <g key={book}>
                <rect x={xPos} y={90 + shelf * 90} width={widths[book]} height={60 + (book % 3) * 8} rx="2"
                  fill={colors[(book + shelf * 3) % 11]} opacity="0.75" />
                <line x1={xPos + widths[book] - 1} y1={90 + shelf * 90} x2={xPos + widths[book] - 1} y2={150 + shelf * 90 + (book % 3) * 8}
                  stroke="#000" strokeWidth="1" opacity="0.3" />
              </g>
            );
          })}
        </g>
      ))}
      {/* Speed stats overlay */}
      <rect x="440" y="100" width="310" height="220" rx="6" fill="#0a1410" stroke="#7ed69e" strokeWidth="1" opacity="0.95" />
      <text x="595" y="124" fontFamily="monospace" fontSize="9" fill="#7ed69e" textAnchor="middle" letterSpacing="2">OPERATIONS NOW TAKE</text>
      {[
        { action: "Find a book", before: "8 min", after: "3 sec", color: "#7ed69e" },
        { action: "Register member", before: "15 min", after: "20 sec", color: "#4a90d9" },
        { action: "Issue / Return", before: "10 min", after: "10 sec", color: "#e0b15c" },
        { action: "Run report", before: "1 day", after: "instant", color: "#7ed69e" },
      ].map(({ action, before, after, color }, i) => (
        <g key={action}>
          <text x="458" y={152 + i * 40} fontFamily="monospace" fontSize="8" fill="#444">{action}</text>
          <text x="570" y={152 + i * 40} fontFamily="monospace" fontSize="8" fill="#c0392b" textDecoration="line-through">{before}</text>
          <text x="636" y={152 + i * 40} fontFamily="monospace" fontSize="10" fill={color}>→ {after}</text>
        </g>
      ))}
      {/* Green checkmark */}
      <circle cx="595" cy="300" r="20" fill="#0a1410" stroke="#7ed69e" strokeWidth="2" />
      <polyline points="583,300 592,309 608,288" fill="none" stroke="#7ed69e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Label bar */}
      <rect x="0" y="390" width="800" height="60" fill="#060a06" opacity="0.95" />
      <text x="40" y="427" fontFamily="monospace" fontSize="11" fill="#7ed69e" letterSpacing="3">THE RESULT</text>
      <text x="190" y="427" fontFamily="monospace" fontSize="11" fill="#555" letterSpacing="1">FULLY DIGITISED LIBRARY OPS</text>
    </svg>
  );
}
