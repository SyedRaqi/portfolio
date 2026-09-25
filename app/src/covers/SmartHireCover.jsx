export default function SmartHireCover() {
  return (
    <svg viewBox="0 0 840 440" xmlns="http://www.w3.org/2000/svg" className="cover-svg" aria-label="SmartHire AI — AI Recruitment Platform">
      <defs>
        <linearGradient id="sh-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0e0e0e"/>
          <stop offset="100%" stopColor="#0a0808"/>
        </linearGradient>
        <linearGradient id="sh-gold" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#e0b15c"/>
          <stop offset="100%" stopColor="#d9553f"/>
        </linearGradient>
        <filter id="sh-glow">
          <feGaussianBlur stdDeviation="8" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <clipPath id="sh-clip"><rect width="840" height="440"/></clipPath>
      </defs>
      <rect width="840" height="440" fill="url(#sh-bg)"/>
      <g clipPath="url(#sh-clip)">
        {/* Grid lines */}
        {[0,1,2,3,4,5,6].map(i => (
          <line key={i} x1={i*140} y1="0" x2={i*140} y2="440" stroke="#f3efe708" strokeWidth="1"/>
        ))}
        {[0,1,2,3,4].map(i => (
          <line key={i} x1="0" y1={i*110} x2="840" y2={i*110} stroke="#f3efe708" strokeWidth="1"/>
        ))}

        {/* Ambient glow */}
        <ellipse cx="420" cy="200" rx="320" ry="180" fill="#e0b15c08"/>
        <ellipse cx="600" cy="120" rx="200" ry="120" fill="#d9553f12"/>

        {/* Brain/AI network nodes */}
        {[
          [420,200], [300,140], [540,140], [260,240], [580,240],
          [340,300], [500,300], [420,320], [220,180], [620,180],
        ].map(([cx,cy],i) => (
          <circle key={i} cx={cx} cy={cy} r={i===0?10:5} fill={i===0?"#e0b15c":"#e0b15c60"} filter={i===0?"url(#sh-glow)":undefined}/>
        ))}

        {/* Network edges */}
        {[
          [420,200,300,140],[420,200,540,140],[420,200,260,240],
          [420,200,580,240],[300,140,260,240],[540,140,580,240],
          [260,240,340,300],[580,240,500,300],[340,300,420,320],
          [500,300,420,320],[300,140,220,180],[540,140,620,180],
        ].map(([x1,y1,x2,y2],i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#e0b15c30" strokeWidth="1"/>
        ))}

        {/* Candidate cards */}
        <rect x="40" y="80" width="160" height="90" rx="4" fill="#121211" stroke="#f3efe71f" strokeWidth="1"/>
        <circle cx="72" cy="115" r="16" fill="#e0b15c20" stroke="#e0b15c40" strokeWidth="1"/>
        <text x="72" y="120" textAnchor="middle" fontFamily="monospace" fontSize="12" fill="#e0b15c">SR</text>
        <rect x="98" y="103" width="80" height="6" rx="2" fill="#f3efe720"/>
        <rect x="98" y="116" width="55" height="4" rx="1" fill="#f3efe710"/>
        <rect x="42" y="145" width="30" height="14" rx="2" fill="#e0b15c20" stroke="#e0b15c50" strokeWidth="1"/>
        <text x="57" y="156" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="#e0b15c">94%</text>
        <rect x="80" y="145" width="40" height="14" rx="2" fill="#f3efe710" stroke="#f3efe720" strokeWidth="1"/>
        <text x="100" y="156" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="#a49f95">MATCH</text>

        <rect x="40" y="188" width="160" height="90" rx="4" fill="#121211" stroke="#f3efe71f" strokeWidth="1"/>
        <circle cx="72" cy="223" r="16" fill="#d9553f20" stroke="#d9553f40" strokeWidth="1"/>
        <text x="72" y="228" textAnchor="middle" fontFamily="monospace" fontSize="12" fill="#d9553f">AM</text>
        <rect x="98" y="211" width="80" height="6" rx="2" fill="#f3efe720"/>
        <rect x="98" y="224" width="65" height="4" rx="1" fill="#f3efe710"/>
        <rect x="42" y="253" width="30" height="14" rx="2" fill="#d9553f20" stroke="#d9553f50" strokeWidth="1"/>
        <text x="57" y="264" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="#d9553f">87%</text>

        {/* Right panel - evaluation */}
        <rect x="640" y="70" width="180" height="300" rx="4" fill="#121211" stroke="#f3efe71f" strokeWidth="1"/>
        <text x="730" y="100" textAnchor="middle" fontFamily="monospace" fontSize="8" letterSpacing="3" fill="#6b6760">EVALUATION</text>
        {[
          ["Python", 88], ["ML / AI", 92], ["SQL", 75], ["Flask", 80], ["React", 70],
        ].map(([label, val], i) => (
          <g key={i} transform={`translate(0, ${i * 44})`}>
            <text x="658" y="128" fontFamily="monospace" fontSize="8" fill="#a49f95">{label}</text>
            <rect x="658" y="134" width="144" height="4" rx="2" fill="#f3efe710"/>
            <rect x="658" y="134" width={144 * val / 100} height="4" rx="2" fill="url(#sh-gold)"/>
            <text x="810" y="138" textAnchor="end" fontFamily="monospace" fontSize="8" fill="#e0b15c">{val}</text>
          </g>
        ))}

        {/* Center label */}
        <text x="420" y="395" textAnchor="middle" fontFamily="'Anton', sans-serif" fontSize="11" letterSpacing="6" fill="#f3efe730">SMARTHIRE AI — RECRUITMENT PLATFORM</text>

        {/* Connecting dashed lines from cards to network */}
        <line x1="200" y1="125" x2="260" y2="200" stroke="#e0b15c20" strokeWidth="1" strokeDasharray="4 4"/>
        <line x1="640" y1="200" x2="600" y2="220" stroke="#e0b15c20" strokeWidth="1" strokeDasharray="4 4"/>
      </g>
    </svg>
  );
}
