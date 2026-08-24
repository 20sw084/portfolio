import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { profile } from '../data/content'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Work' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 40 })

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <nav className="nav">
      <div className="nav-bar-bg" />
      <motion.div className="nav-progress" style={{ scaleX, width: '100%' }} />
      <div className="nav-inner">
        <a href="#top" className="nav-logo mono">
          JA<span>_</span>
        </a>
        <ul className="nav-links">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a className="nav-link" href={l.href}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-right">
          <a className="btn" href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <button className="nav-burger" aria-label="Open menu" onClick={() => setOpen(true)}>
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {open && (
        <div className="nav-mobile">
          <button
            className="terminal-close"
            style={{ position: 'absolute', top: 24, right: 24, fontSize: 28 }}
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            ×
          </button>
          {LINKS.map((l) => (
            <a key={l.href} className="nav-mobile-link" href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
