import { motion } from 'framer-motion'
import { profile, education } from '../data/content'

const reveal = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function About() {
  return (
    <section id="about" className="section">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={reveal}
      >
        <div className="eyebrow">01 / About</div>
        <h2 className="section-title">Ships product, not roadmaps.</h2>
      </motion.div>

      <div className="about-grid">
        <motion.div
          className="about-text"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={reveal}
        >
          <p>{profile.summary}</p>
          <div className="about-ai">
            <p>{profile.aiNote}</p>
          </div>
          <div className="about-open">
            {profile.openTo.map((item) => (
              <div className="about-open-item mono" key={item}>
                {item}
              </div>
            ))}
          </div>

          <div className="edu-list">
            {education.map((e) => (
              <div className="edu-item" key={e.school}>
                <div className="edu-school">{e.school}</div>
                <div className="edu-degree">{e.degree}</div>
                <div className="edu-period">{e.period}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="about-side"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={reveal}
          transition={{ delay: 0.15 }}
        >
          <div className="stats-grid">
            {profile.stats.map((s) => (
              <div className="stat-card" key={s.label}>
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
