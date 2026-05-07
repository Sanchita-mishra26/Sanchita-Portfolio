'use client'

import { motion } from 'framer-motion'

export function Achievements() {
  const achievements = [
    {
      title: 'All India Rank 39',
      description: 'IPU LEET 2025 - Ranked among top candidates',
      icon: '🏆',
    },
    {
      title: 'Hackathon Finalist',
      description: 'Top 10 among 400+ teams in national-level hackathon',
      icon: '🚀',
    },
    {
      title: 'HackWithMAIT Organizer',
      description: 'Successfully organized large-scale collegiate hackathon',
      icon: '⚡',
    },
    {
      title: 'JPMorgan Chase Fellow',
      description: 'Completed Software Engineering Job Simulation (Spring Boot)',
      icon: '💼',
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-background/80">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gradient">
            Achievements
          </h2>
          <p className="text-xl text-foreground/60">
            Recognition and milestones in my tech journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl border border-border bg-card/30 hover:border-accent/50 hover:bg-card/50 transition-all text-center"
            >
              <div className="text-4xl mb-4">{achievement.icon}</div>
              <h3 className="text-lg font-bold text-accent mb-2">
                {achievement.title}
              </h3>
              <p className="text-sm text-foreground/70">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
