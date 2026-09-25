export default function LibraryBuild() {
  return (
    <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", display: "block" }}>
      <defs>
        <linearGradient id="lbb-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#060810" />
          <stop offset="100%" stopColor="#0a0e1a" />
        </linearGradient>
      </defs>
      <rect width="800" height="450" fill="url(#lbb-bg)" />
      {/* Browser chrome mockup */}
      <rect x="60" y="60" width="680" height="310" rx="8" fill="#0d1020" stroke="#1e2540" strokeWidth="1.5" />
      <rect x="60" y="60" width="680" height="36" rx="8" fill="#111830" />
      <circle cx="90" cy="78" r="6" fill="#c0392b" opacity="0.7" />
      <circle cx="110" cy="78" r="6" fill="#e0b15c" opacity="0.7" />
      <circle cx="130" cy="78" r="6" fill="#7ed69e" opacity="0.7" />
      {/* URL bar */}
      <rect x="200" y="68" width="360" height="18" rx="9" fill="#0d1020" stroke="#1e2540" strokeWidth="1" />
      <text x="380" y="81" fontFamily="monospace" fontSize="8" fill="#4a90d9" textAnchor="middle">library-system.local</text>
      {/* Sidebar */}
      <rect x="60" y="96" width="150" height="274" fill="#0a0e18" />
      <text x="135" y="120" fontFamily="monospace" fontSize="8" fill="#e0b15c" textAnchor="middle" letterSpacing="2">MENU</text>
      {["Dashboard", "Books", "Members", "Issue", "Return", "Reports"].map((item, i) => (
        <g key={item}>
          <rect x="70" y={133 + i * 36} width="130" height="28" rx="3"
            fill={i === 2 ? "#1a2540" : "transparent"} />
          <text x="90" y={151 + i * 36} fontFamily="monospace" fontSize="9"
            fill={i === 2 ? "#e0b15c" : "#445"}>{item}</text>
        </g>
      ))}
      {/* Main content area */}
      <rect x="210" y="100" width="524" height="265" fill="#0d1220" />
      {/* Member registration form */}
      <text x="230" y="122" fontFamily="monospace" fontSize="10" fill="#7ed69e" letterSpacing="2">MEMBER REGISTRATION</text>
      {["Full Name", "Email Address", "Phone", "Member ID"].map((label, i) => (
        <g key={label}>
          <text x="230" y={148 + i * 42} fontFamily="monospace" fontSize="8" fill="#445">{label}</text>
          <rect x="230" y={154 + i * 42} width="220" height="22" rx="3" fill="#0a0e18" stroke={i === 0 ? "#e0b15c" : "#1e2540"} strokeWidth="1" />
          {i === 0 && <text x="240" y={169 + i * 42} fontFamily="monospace" fontSize="8" fill="#e0b15c">Ayesha Raza</text>}
        </g>
      ))}
      {/* Submit button */}
      <rect x="230" y="320" width="120" height="30" rx="4" fill="#e0b15c" />
      <text x="290" y="340" fontFamily="monospace" fontSize="9" fill="#0d0d0d" textAnchor="middle">REGISTER</text>
      {/* Auth lock icon */}
      <rect x="540" y="160" width="100" height="80" rx="6" fill="#0a0e18" stroke="#4a90d9" strokeWidth="1" />
      <rect x="562" y="150" width="56" height="36" rx="28" fill="none" stroke="#4a90d9" strokeWidth="1.5" />
      <rect x="555" y="175" width="70" height="50" rx="4" fill="#0d1220" stroke="#4a90d9" strokeWidth="1.5" />
      <circle cx="590" cy="198" r="6" fill="#4a90d9" opacity="0.8" />
      <line x1="590" y1="204" x2="590" y2="216" stroke="#4a90d9" strokeWidth="2" />
      <text x="590" y="255" fontFamily="monospace" fontSize="8" fill="#4a90d9" textAnchor="middle">AUTH</text>
      {/* Label bar */}
      <rect x="0" y="390" width="800" height="60" fill="#060810" opacity="0.95" />
      <text x="40" y="427" fontFamily="monospace" fontSize="11" fill="#7ed69e" letterSpacing="3">THE BUILD</text>
      <text x="175" y="427" fontFamily="monospace" fontSize="11" fill="#555" letterSpacing="1">AUTH · CIRCULATION · REPORTING</text>
    </svg>
  );
}
