'use client'

import { motion, Variants } from 'framer-motion'
import { Palette, Cog, Database, Bot, type LucideIcon } from 'lucide-react'

type Level = 'Basic' | 'Intermediate' | 'Pro'

const levelWidth: Record<Level, string> = {
  Basic: '45%',
  Intermediate: '72%',
  Pro: '95%',
}

interface SkillCategory {
  name: string
  icon: LucideIcon
  skills: { name: string; level: Level }[]
}

const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    icon: Palette,
    skills: [
      { name: 'React.js', level: 'Intermediate' },
      { name: 'Next.js', level: 'Intermediate' },
      { name: 'Tailwind CSS', level: 'Pro' },
      { name: 'Framer Motion', level: 'Pro' },
    ],
  },
  {
    name: 'Backend',
    icon: Cog,
    skills: [
      { name: 'Node.js', level: 'Pro' },
      { name: 'Express.js', level: 'Pro' },
      { name: 'Spring Boot', level: 'Basic' },
      { name: 'Flask', level: 'Basic' },
    ],
  },
  {
    name: 'Database & APIs',
    icon: Database,
    skills: [
      { name: 'MongoDB', level: 'Pro' },
      { name: 'MySQL/SQL', level: 'Intermediate' },
      { name: 'REST APIs', level: 'Intermediate' },
      { name: 'Socket.io', level: 'Pro' },
    ],
  },
  {
    name: 'AI/ML & Tools',
    icon: Bot,
    skills: [
      { name: 'LangChain', level: 'Pro' },
      { name: 'Anthropic Claude', level: 'Intermediate' },
      { name: 'RAG Pipelines', level: 'Intermediate' },
      { name: 'ChromaDB', level: 'Intermediate' },
      { name: 'FastAPI', level: 'Intermediate' },
      { name: 'Pydantic', level: 'Intermediate' },
      { name: 'Python', level: 'Intermediate' },
      { name: 'Git & GitHub', level: 'Intermediate' },
      { name: 'Postman', level: 'Intermediate' },
    ],
  },
]

export function Skills() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <section id="skills" className="py-24 sm:py-32 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mb-16 max-w-xl"
        >
          <p className="mono-label text-xs text-accent mb-3">Capabilities</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">
            Skills &amp; Expertise
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Proficient across the full development stack, with a focus on scalable, real-time systems.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '0px 0px -80px 0px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {skillCategories.map((category) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.name}
                variants={itemVariants}
                className="card-hover p-6 rounded-2xl border border-border bg-card"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mb-5">
                  <Icon size={18} className="text-accent" />
                </div>

                <h3 className="text-base font-bold text-foreground mb-5">{category.name}</h3>

                <ul className="space-y-4">
                  {category.skills.map((skill) => (
                    <li key={skill.name}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm text-foreground">{skill.name}</span>
                        <span className="text-[10px] mono-label text-muted-foreground">{skill.level}</span>
                      </div>
                      <div className="h-1 rounded-full bg-secondary overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: levelWidth[skill.level] }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                          className="h-full rounded-full bg-accent"
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
