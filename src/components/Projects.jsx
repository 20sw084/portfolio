import { useRef } from 'react'
import { motion } from 'framer-motion'
import { FiArrowUpRight, FiLock } from 'react-icons/fi'
import { projects } from '../data/content'

function ProjectCard({ project, featured, index }) {
  const ref = useRef(null)

  const handleMove = (e) => {
    const card = ref.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const rotateX = ((y / rect.height) - 0.5) * -8
    const rotateY = ((x / rect.width) - 0.5) * 8
    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    card.style.setProperty('--mx', `${(x / rect.width) * 100}%`)
    card.style.setProperty('--my', `${(y / rect.height) * 100}%`)
  }

  const handleLeave = () => {
    const card = ref.current
    if (!card) return
    card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)'
  }

  const MotionTag = project.link ? motion.a : motion.div
  const wrapperProps = project.link
    ? { href: project.link, target: '_blank', rel: 'noreferrer' }
    : {}

  return (
    <MotionTag
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      className={`project-card${featured ? ' featured' : ''}`}
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      {...wrapperProps}
    >
      <div className="project-glow" />
      <div className="project-top">
        <span className="project-org">{project.org}</span>
        <span className="project-link-icon">
          {project.link ? <FiArrowUpRight size={18} /> : <FiLock size={15} />}
        </span>
      </div>
      <h3 className="project-title">{project.title}</h3>
      <p className="project-desc">{project.description}</p>
      <div className="project-impact">{project.impact}</div>
      <div className="project-stack">
        {project.stack.map((s) => (
          <span className="tag" key={s}>
            {s}
          </span>
        ))}
      </div>
    </MotionTag>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="eyebrow">03 / Projects</div>
        <h2 className="section-title">Selected work, from fintech to farms.</h2>
      </motion.div>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <ProjectCard project={p} featured={i === 0} index={i} key={p.title} />
        ))}
      </div>
    </section>
  )
}
