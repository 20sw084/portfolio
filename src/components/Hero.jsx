import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { profile } from '../data/content'

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % profile.roles.length)
    }, 2600)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="top" className="hero">
      <div className="hero-bg-text" aria-hidden="true">
        JUNAID
      </div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="hero-role-row">
          <span className="hero-role-dot" />
          <AnimatePresence mode="wait">
            <motion.span
              key={roleIndex}
              className="hero-role"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
            >
              {profile.roles[roleIndex]}
            </motion.span>
          </AnimatePresence>
        </div>

        <h1 className="hero-title">
          Junaid builds software that <em>ships</em>, not slideware.
        </h1>

        <p className="hero-sub">{profile.summary}</p>

        <div className="hero-actions">
          <a className="btn btn-solid" href="#projects">
            View the work
          </a>
          <a className="btn" href="/Junaid_Aslam_Resume.pdf" target="_blank" rel="noreferrer">
            Download résumé
          </a>
        </div>

        <div className="hero-meta">
          <span>{profile.location}</span>
          <span>{profile.githubHandle}</span>
          <span>{profile.linkedinHandle}</span>
        </div>
      </motion.div>

      <div className="hero-scroll">
        <span className="hero-scroll-line" />
        scroll
      </div>
    </section>
  )
}
