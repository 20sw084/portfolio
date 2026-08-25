import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiCopy, FiCheck, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { SiUpwork } from 'react-icons/si'
import { profile } from '../data/content'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      // clipboard unavailable — no-op
    }
  }

  return (
    <section id="contact" className="section contact">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="eyebrow" style={{ justifyContent: 'center' }}>
          05 / Contact
        </div>
        <h2 className="contact-title">
          Got a role, or a rough <span>idea</span>?
        </h2>
        <p className="contact-sub">
          Available now for contract and freelance work, open to part-time roles in Italy & Portugal,
          and full-time remote Software Engineer roles across the EU, UK, US and Canada.
        </p>

        <div className="contact-email-row">
          <a className="contact-email" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <button className="contact-copy-btn" onClick={copyEmail} aria-label="Copy email">
            {copied ? <FiCheck size={16} /> : <FiCopy size={16} />}
          </button>
        </div>

        <div className="contact-socials">
          <a className="contact-social" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <FiGithub />
          </a>
          <a className="contact-social" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
          <a className="contact-social" href={profile.upwork} target="_blank" rel="noreferrer" aria-label="Upwork">
            <SiUpwork />
          </a>
          <a className="contact-social" href={`mailto:${profile.email}`} aria-label="Email">
            <FiMail />
          </a>
        </div>

        <div className="contact-location mono">{profile.location} · working EU hours, overlapping US</div>
      </motion.div>
    </section>
  )
}
