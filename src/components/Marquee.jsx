const WORDS = [
  'Node.js', 'React', 'Flutter', 'Nest.js', 'PostgreSQL', 'Docker', 'Kubernetes',
  'Playwright', 'AWS', 'Firebase', 'Python', 'Java', 'Claude Code',
]

export default function Marquee({ reverse }) {
  const items = [...WORDS, ...WORDS]
  return (
    <div className={`marquee${reverse ? ' reverse' : ''}`}>
      <div className="marquee-track">
        {items.map((w, i) => (
          <span className="marquee-item" key={i}>
            <b>{w}</b>
            <span className="dash">/</span>
          </span>
        ))}
      </div>
    </div>
  )
}
