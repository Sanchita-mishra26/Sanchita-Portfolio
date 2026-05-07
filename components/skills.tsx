'use client'

import { motion, Variants } from 'framer-motion'
import { useState } from 'react'

const skillCategories = [
  {
    name: 'Frontend',
    skills: [
      { name: 'React.js', level: 'Intermediate' },
      { name: 'Next.js', level: 'Intermediate' },
      { name: 'Tailwind CSS', level: 'Pro' },
      { name: 'Framer Motion', level: 'Pro' }
    ],
    icon: '🎨',
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', level: 'Pro' },
      { name: 'Express.js', level: 'Pro' },
      { name: 'Spring Boot', level: 'Basic' },
      { name: 'Flask', level: 'Basic' }
    ],
    icon: '⚙️',
  },
  {
    name: 'Database & APIs',
    skills: [
      { name: 'MongoDB', level: 'Pro' },
      { name: 'MySQL/SQL', level: 'Intermediate' },
      { name: 'REST APIs', level: 'Intermediate' },
      { name: 'Socket.io', level: 'Pro' }
    ],
    icon: '💾',
  },
  {
    name: 'AI/ML & Tools',
    skills: [
      { name: 'LangChain', level: 'Pro' },
      { name: 'Python', level: 'Intermediate' },
      { name: 'Git & GitHub', level: 'Intermediate' },
      { name: 'Postman', level: 'Intermediate' }
    ],
    icon: '🤖',
  },
]

export function Skills() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, rotateX: -20 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.6, ease: 'easeOut', type: 'spring', stiffness: 60 },
    },
  }

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-background via-background to-background relative overflow-hidden">
      {/* Background animated elements */}
      <motion.div
        className="absolute top-10 right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-40 h-40 bg-[#7c3aed]/5 rounded-full blur-3xl"
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, delay: 1 }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 80 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <motion.h2
            className="text-4xl sm:text-5xl font-bold mb-4 text-gradient"
            animate={{ backgroundPosition: ['0% center', '100% center', '0% center'] }}
            transition={{ duration: 8, repeat: Infinity }}
          >
            Skills & Expertise
          </motion.h2>
          <motion.p
            className="text-xl text-foreground/60"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            Proficient across the full development stack with focus on scalable systems
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '0px 0px -100px 0px' }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              variants={itemVariants}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative"
              style={{ perspective: '1000px' }}
            >
              <motion.div
                animate={{
                  rotateX: hoveredIndex === index ? -10 : 0,
                  rotateY: hoveredIndex === index ? 5 : 0,
                  z: hoveredIndex === index ? 30 : 0,
                  boxShadow:
                    hoveredIndex === index
                      ? '0 20px 40px rgba(0, 217, 255, 0.3), 0 0 30px rgba(124, 58, 237, 0.2)'
                      : '0 5px 15px rgba(0, 0, 0, 0.1)',
                }}
                transition={{ duration: 0.3 }}
                className="p-6 rounded-2xl border border-border bg-gradient-to-br from-card/80 to-card/40 hover:border-accent/50 transition-all duration-300 h-full relative overflow-hidden group"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Animated background glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-[#7c3aed]/10 rounded-2xl"
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Content */}
                <div className="relative z-10">
                  <motion.div
                    className="text-3xl mb-3"
                    animate={{
                      scale: hoveredIndex === index ? 1.2 : 1,
                      rotate: hoveredIndex === index ? 12 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {category.icon}
                  </motion.div>

                  <motion.h3
                    className="text-lg font-bold text-accent mb-4"
                    animate={{
                      letterSpacing: hoveredIndex === index ? '0.5px' : '0px',
                    }}
                  >
                    {category.name}
                  </motion.h3>

                  <ul className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.li
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="relative text-sm text-foreground/70 flex items-center gap-2 group/skill cursor-default"
                      >
                        <motion.span
                          className="w-2 h-2 rounded-full bg-accent"
                          animate={{
                            scale: hoveredIndex === index ? 1.5 : 1,
                            boxShadow: hoveredIndex === index ? '0 0 10px rgba(0, 217, 255, 0.8)' : 'none',
                          }}
                          transition={{ duration: 0.3 }}
                        />
                        <motion.span
                          animate={{
                            color: hoveredIndex === index ? 'rgba(0, 217, 255, 0.9)' : 'rgba(226, 232, 240, 0.7)',
                          }}
                        >
                          {skill.name}
                        </motion.span>

                        {/* Tooltip */}
                        <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 opacity-0 group-hover/skill:opacity-100 transition-opacity pointer-events-none z-50">
                          <div className="bg-background border border-accent/30 text-accent text-xs px-2 py-1 rounded whitespace-nowrap shadow-[0_0_10px_rgba(0,217,255,0.2)]">
                            {skill.level}
                          </div>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* 3D edge effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{
                    border: '1px solid',
                    borderColor: hoveredIndex === index ? 'rgba(0, 217, 255, 0.5)' : 'transparent',
                  }}
                  animate={{
                    boxShadow: hoveredIndex === index
                      ? 'inset 0 0 20px rgba(0, 217, 255, 0.2)'
                      : 'inset 0 0 0px transparent',
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
