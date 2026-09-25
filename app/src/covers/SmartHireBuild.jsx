export default function SmartHireBuild() {
  return (
    <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", display: "block" }}>
      <defs>
        <linearGradient id="shb-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#050810" />
          <stop offset="100%" stopColor="#0c1020" />
        </linearGradient>
        <radialGradient id="shb-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#e0b15c" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#e0b15c" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="800" height="450" fill="url(#shb-bg)" />
      <rect x="200" y="100" width="400" height="250" rx="2" fill="url(#shb-glow)" />
      {/* Neural net nodes */}
      {/* Input layer */}
      {[0,1,2,3].map(i => (
        <circle key={`in-${i}`} cx="150" cy={130 + i * 55} r="14" fill="#1a2030" stroke="#4a90d9" strokeWidth="1.5" />
      ))}
      {/* Hidden layer 1 */}
      {[0,1,2,3,4].map(i => (
        <circle key={`h1-${i}`} cx="310" cy={107 + i * 55} r="14" fill="#1a2030" stroke="#e0b15c" strokeWidth="1.5" />
      ))}
      {/* Hidden layer 2 */}
      {[0,1,2,3,4].map(i => (
        <circle key={`h2-${i}`} cx="490" cy={107 + i * 55} r="14" fill="#1a2030" stroke="#e0b15c" strokeWidth="1.5" />
      ))}
      {/* Output layer */}
      {[0,1,2].map(i => (
        <circle key={`out-${i}`} cx="650" cy={148 + i * 62} r="16" fill={i === 1 ? "#e0b15c" : "#1a2030"}
          stroke="#e0b15c" strokeWidth={i === 1 ? 2.5 : 1.5} />
      ))}
      {/* Connections input→h1 */}
      {[0,1,2,3].map(i => [0,1,2,3,4].map(j => (
        <line key={`c-in-${i}-${j}`} x1="164" y1={130 + i * 55} x2="296" y2={107 + j * 55}
          stroke="#4a90d9" strokeWidth="0.5" opacity="0.2" />
      )))}
      {/* Connections h1→h2 */}
      {[0,1,2,3,4].map(i => [0,1,2,3,4].map(j => (
        <line key={`c-h-${i}-${j}`} x1="324" y1={107 + i * 55} x2="476" y2={107 + j * 55}
          stroke="#e0b15c" strokeWidth="0.5" opacity="0.15" />
      )))}
      {/* Connections h2→output */}
      {[0,1,2,3,4].map(i => [0,1,2].map(j => (
        <line key={`c-out-${i}-${j}`} x1="504" y1={107 + i * 55} x2="634" y2={148 + j * 62}
          stroke="#e0b15c" strokeWidth={j === 1 ? "1" : "0.5"} opacity={j === 1 ? 0.5 : 0.15} />
      )))}
      {/* Output labels */}
      <text x="675" y="155" fontFamily="monospace" fontSize="8" fill="#555">LOW</text>
      <text x="675" y="216" fontFamily="monospace" fontSize="8" fill="#e0b15c">HIGH FIT</text>
      <text x="675" y="276" fontFamily="monospace" fontSize="8" fill="#555">REVIEW</text>
      {/* AI score card */}
      <rect x="290" y="340" width="220" height="60" rx="4" fill="#111820" stroke="#e0b15c" strokeWidth="1" />
      <text x="400" y="360" fontFamily="monospace" fontSize="9" fill="#e0b15c" textAnchor="middle" letterSpacing="2">AI CANDIDATE SCORE</text>
      <rect x="306" y="368" width="130" height="8" rx="4" fill="#1a2030" />
      <rect x="306" y="368" width="112" height="8" rx="4" fill="#e0b15c" />
      <text x="445" y="377" fontFamily="monospace" fontSize="9" fill="#e0b15c">86%</text>
      {/* Label bar */}
      <rect x="0" y="390" width="800" height="60" fill="#050810" opacity="0.9" />
      <text x="40" y="427" fontFamily="monospace" fontSize="11" fill="#e0b15c" letterSpacing="3">THE BUILD</text>
      <text x="180" y="427" fontFamily="monospace" fontSize="11" fill="#555" letterSpacing="1">AI/ML EVALUATION ENGINE</text>
    </svg>
  );
}
