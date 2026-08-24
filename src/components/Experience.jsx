import { motion } from 'framer-motion'
import { experience } from '../data/content'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="eyebrow">02 / Experience</div>
        <h2 className="section-title">Four years, real production stakes.</h2>
      </motion.div>

      <div className="timeline">
        {experience.map((job, i) => (
          <motion.div
            className="timeline-item"
            key={job.company}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
          >
            <span className="timeline-dot" />
            <div className="timeline-head">
              <h3 className="timeline-role">{job.role}</h3>
              <span className="timeline-company mono">{job.company}</span>
            </div>
            <div className="timeline-meta mono">
              {job.period} · {job.duration} · {job.place}
            </div>
            <ul className="timeline-bullets">
              {job.bullets.map((b, idx) => (
                <li key={idx}>{b}</li>
              ))}
            </ul>
            <div className="timeline-tags">
              {job.tags.map((t) => (
                <span className="tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
