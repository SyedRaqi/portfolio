export default function SmartHireResult() {
  return (
    <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", display: "block" }}>
      <defs>
        <linearGradient id="shr-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#060a06" />
          <stop offset="100%" stopColor="#0a1410" />
        </linearGradient>
        <linearGradient id="shr-bar" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#e0b15c" />
          <stop offset="100%" stopColor="#f0d080" />
        </linearGradient>
      </defs>
      <rect width="800" height="450" fill="url(#shr-bg)" />
      {/* Dashboard panel */}
      <rect x="80" y="60" width="640" height="300" rx="8" fill="#0d1410" stroke="#1e2e1e" strokeWidth="1" />
      {/* Header bar */}
      <rect x="80" y="60" width="640" height="40" rx="8" fill="#111e11" />
      <circle cx="108" cy="80" r="6" fill="#c0392b" opacity="0.7" />
      <circle cx="126" cy="80" r="6" fill="#e0b15c" opacity="0.7" />
      <circle cx="144" cy="80" r="6" fill="#7ed69e" opacity="0.7" />
      <text x="400" y="85" fontFamily="monospace" fontSize="10" fill="#7ed69e" textAnchor="middle" letterSpacing="2">SMARTHIRE DASHBOARD</text>
      {/* Stat cards */}
      {[
        { x: 110, label: "SCREENED", val: "847", color: "#e0b15c" },
        { x: 280, label: "SHORTLISTED", val: "124", color: "#7ed69e" },
        { x: 450, label: "HIRED", val: "31", color: "#4a90d9" },
        { x: 610, label: "TIME SAVED", val: "68%", color: "#e0b15c" },
      ].map(({ x, label, val, color }) => (
        <g key={label}>
          <rect x={x} y="120" width="140" height="70" rx="4" fill="#0d1c0d" stroke="#1e3020" strokeWidth="1" />
          <text x={x + 70} y="145" fontFamily="monospace" fontSize="8" fill="#555" textAnchor="middle" letterSpacing="2">{label}</text>
          <text x={x + 70} y="175" fontFamily="monospace" fontSize="24" fill={color} textAnchor="middle">{val}</text>
        </g>
      ))}
      {/* Bar chart */}
      <text x="110" y="222" fontFamily="monospace" fontSize="8" fill="#444" letterSpacing="2">SCREENING SPEED — DAYS PER HIRE</text>
      {[
        { label: "MANUAL", w: 260, color: "#c0392b" },
        { label: "SMARTHIRE", w: 80, color: "#7ed69e" },
      ].map(({ label, w, color }, i) => (
        <g key={label}>
          <text x="110" y={248 + i * 34} fontFamily="monospace" fontSize="8" fill="#555">{label}</text>
          <rect x="220" y={236 + i * 34} width={w} height="16" rx="2" fill={color} opacity="0.8" />
          <text x={224 + w} y={248 + i * 34} fontFamily="monospace" fontSize="8" fill={color}>{i === 0 ? "14d" : "4d"}</text>
        </g>
      ))}
      {/* Checkmark badge */}
      <circle cx="670" cy="290" r="28" fill="#0d1c0d" stroke="#7ed69e" strokeWidth="2" />
      <polyline points="657,290 666,300 683,278" fill="none" stroke="#7ed69e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Label bar */}
      <rect x="0" y="390" width="800" height="60" fill="#060a06" opacity="0.95" />
      <text x="40" y="427" fontFamily="monospace" fontSize="11" fill="#7ed69e" letterSpacing="3">THE RESULT</text>
      <text x="195" y="427" fontFamily="monospace" fontSize="11" fill="#555" letterSpacing="1">FASTER · FAIRER · SMARTER HIRING</text>
    </svg>
  );
}
