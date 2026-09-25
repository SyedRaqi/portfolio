export default function LibraryApproach() {
  return (
    <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%", display: "block" }}>
      <defs>
        <linearGradient id="lba-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06080d" />
          <stop offset="100%" stopColor="#0c1018" />
        </linearGradient>
      </defs>
      <rect width="800" height="450" fill="url(#lba-bg)" />
      {/* ER Diagram — normalized schema */}
      {/* Books table */}
      <rect x="60" y="100" width="160" height="160" rx="4" fill="#0d1520" stroke="#4a90d9" strokeWidth="1.5" />
      <rect x="60" y="100" width="160" height="30" rx="4" fill="#4a90d9" opacity="0.2" />
      <text x="140" y="120" fontFamily="monospace" fontSize="11" fill="#4a90d9" textAnchor="middle" letterSpacing="1">BOOKS</text>
      {["book_id (PK)", "isbn", "title", "author", "copies"].map((f, i) => (
        <text key={f} x="80" y={143 + i * 22} fontFamily="monospace" fontSize="9" fill={i === 0 ? "#e0b15c" : "#556"}>{f}</text>
      ))}
      {/* Members table */}
      <rect x="320" y="60" width="170" height="170" rx="4" fill="#0d1520" stroke="#7ed69e" strokeWidth="1.5" />
      <rect x="320" y="60" width="170" height="30" rx="4" fill="#7ed69e" opacity="0.2" />
      <text x="405" y="80" fontFamily="monospace" fontSize="11" fill="#7ed69e" textAnchor="middle" letterSpacing="1">MEMBERS</text>
      {["member_id (PK)", "name", "email", "phone", "status"].map((f, i) => (
        <text key={f} x="338" y={103 + i * 22} fontFamily="monospace" fontSize="9" fill={i === 0 ? "#e0b15c" : "#556"}>{f}</text>
      ))}
      {/* Transactions table */}
      <rect x="580" y="140" width="170" height="170" rx="4" fill="#0d1520" stroke="#e0b15c" strokeWidth="1.5" />
      <rect x="580" y="140" width="170" height="30" rx="4" fill="#e0b15c" opacity="0.2" />
      <text x="665" y="160" fontFamily="monospace" fontSize="11" fill="#e0b15c" textAnchor="middle" letterSpacing="1">TRANSACTIONS</text>
      {["txn_id (PK)", "book_id (FK)", "member_id (FK)", "issue_date", "return_date"].map((f, i) => (
        <text key={f} x="598" y={183 + i * 22} fontFamily="monospace" fontSize="9"
          fill={i === 0 ? "#e0b15c" : i <= 2 ? "#4a90d9" : "#556"}>{f}</text>
      ))}
      {/* Relationship lines */}
      <line x1="220" y1="175" x2="580" y2="225" stroke="#e0b15c" strokeWidth="1.2" strokeDasharray="6,4" opacity="0.6" />
      <line x1="490" y1="150" x2="580" y2="200" stroke="#e0b15c" strokeWidth="1.2" strokeDasharray="6,4" opacity="0.6" />
      {/* Crow's foot — many */}
      <line x1="576" y1="223" x2="562" y2="217" stroke="#e0b15c" strokeWidth="1.2" opacity="0.6" />
      <line x1="576" y1="223" x2="562" y2="229" stroke="#e0b15c" strokeWidth="1.2" opacity="0.6" />
      {/* Flask label */}
      <rect x="280" y="280" width="240" height="36" rx="4" fill="#101820" stroke="#4a90d9" strokeWidth="1" />
      <text x="400" y="303" fontFamily="monospace" fontSize="10" fill="#4a90d9" textAnchor="middle" letterSpacing="2">FLASK REST BACKEND</text>
      {/* Label bar */}
      <rect x="0" y="390" width="800" height="60" fill="#06080d" opacity="0.95" />
      <text x="40" y="427" fontFamily="monospace" fontSize="11" fill="#4a90d9" letterSpacing="3">THE APPROACH</text>
      <text x="205" y="427" fontFamily="monospace" fontSize="11" fill="#555" letterSpacing="1">NORMALISED RELATIONAL SCHEMA</text>
    </svg>
  );
}
