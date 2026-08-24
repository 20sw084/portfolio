import { motion } from 'framer-motion'
import { skills } from '../data/content'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="eyebrow">04 / Stack</div>
        <h2 className="section-title">Tools that actually ship.</h2>
      </motion.div>

      <div className="skills-grid">
        {skills.map((group, i) => (
          <motion.div
            className="skill-card"
            key={group.group}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
          >
            <div className="skill-group-title">{group.group}</div>
            <div className="skill-chips">
              {group.items.map((item) => (
                <span className="skill-chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
