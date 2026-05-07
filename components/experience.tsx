'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export function Experience() {
  const [expandedExp, setExpandedExp] = useState<number | null>(null)

  const experiences = [
    {
      company: 'Bureau of Indian Standards (BIS)',
      role: 'Scientist Intern',
      period: 'June 2024 - August 2024',
      location: 'Uttar Pradesh',
      points: [
        'Conducted technical validation and compliance analysis of electrical products against Indian Standards',
        'Analyzed test data and specifications for reliability evaluation',
        'Worked with structured technical documentation and validation workflows',
        'Gained exposure to standardization processes and quality assurance frameworks',
      ],
    },
    {
      company: 'Kushal: Aide',
      role: 'Intern',
      period: 'May 2024 - June 2024',
      location: 'Delhi NCR',
      points: [
        'Collaborated on frontend feature development and UI enhancements',
        'Contributed to design optimization improving user interaction flow',
        'Worked in agile environment with iterative development cycles',
        'Assisted in feature implementation and responsive design improvements',
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50, rotateY: 20 },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: { duration: 0.7, ease: 'easeOut', type: 'spring', stiffness: 60 },
    },
  }

  return (
    <section id="experience" className="py-20 px-4 relative overflow-hidden">
      {/* Background animated elements */}
      <motion.div
        className="absolute top-20 left-10 w-60 h-60 bg-accent/5 rounded-full blur-3xl"
        animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
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
            Experience & Education
          </motion.h2>
          <motion.p
            className="text-xl text-foreground/60"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            Professional journey through tech and innovation
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '0px 0px -100px 0px' }}
          className="space-y-6 mb-16"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              variants={itemVariants}
              onMouseEnter={() => setExpandedExp(index)}
              onMouseLeave={() => setExpandedExp(null)}
              className="relative"
              style={{ perspective: '1000px' }}
            >
              <motion.div
                animate={{
                  rotateX: expandedExp === index ? -8 : 0,
                  rotateY: expandedExp === index ? 3 : 0,
                  z: expandedExp === index ? 20 : 0,
                  boxShadow:
                    expandedExp === index
                      ? '0 20px 40px rgba(0, 217, 255, 0.3), 0 0 30px rgba(124, 58, 237, 0.2)'
                      : '0 5px 15px rgba(0, 0, 0, 0.1)',
                }}
                transition={{ duration: 0.3 }}
                className="p-6 rounded-2xl border border-border bg-gradient-to-br from-card/60 to-card/30 hover:border-accent/50 transition-all duration-300 group relative overflow-hidden"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Animated background glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-[#7c3aed]/10 rounded-2xl"
                  animate={{
                    opacity: expandedExp === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Content */}
                <div className="relative z-10">
                  <motion.div
                    className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4"
                    animate={{ y: expandedExp === index ? -5 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div>
                      <motion.h3
                        className="text-xl font-bold text-accent"
                        animate={{
                          letterSpacing: expandedExp === index ? '0.5px' : '0px',
                          color: expandedExp === index ? 'rgba(0, 217, 255, 1)' : 'rgba(0, 217, 255, 0.8)',
                        }}
                      >
                        {exp.role}
                      </motion.h3>
                      <motion.p
                        className="text-lg text-foreground"
                        animate={{ color: expandedExp === index ? 'rgba(226, 232, 240, 1)' : 'rgba(226, 232, 240, 0.9)' }}
                      >
                        {exp.company}
                      </motion.p>
                    </div>
                    <motion.div
                      className="text-sm text-foreground/60 whitespace-nowrap"
                      animate={{ opacity: expandedExp === index ? 1 : 0.7 }}
                    >
                      <p>{exp.period}</p>
                      <p>{exp.location}</p>
                    </motion.div>
                  </motion.div>
                  <motion.ul
                    className="space-y-3"
                    animate={{ y: expandedExp === index ? -5 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {exp.points.map((point, i) => (
                      <motion.li
                        key={i}
                        className="text-foreground/80 flex gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        viewport={{ once: true }}
                        animate={{
                          color: expandedExp === index ? 'rgba(226, 232, 240, 1)' : 'rgba(226, 232, 240, 0.8)',
                        }}
                      >
                        <motion.span
                          className="text-accent mt-1 flex-shrink-0"
                          animate={{
                            scale: expandedExp === index ? 1.2 : 1,
                            color: expandedExp === index ? 'rgba(0, 217, 255, 1)' : 'rgba(0, 217, 255, 0.8)',
                          }}
                        >
                          ▸
                        </motion.span>
                        <span>{point}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>

                {/* 3D edge effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{
                    border: '1px solid',
                    borderColor: expandedExp === index ? 'rgba(0, 217, 255, 0.5)' : 'transparent',
                  }}
                  animate={{
                    boxShadow: expandedExp === index
                      ? 'inset 0 0 20px rgba(0, 217, 255, 0.2)'
                      : 'inset 0 0 0px transparent',
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 80 }}
          viewport={{ once: true }}
          className="pt-16 border-t border-border/30"
        >
          <motion.h3
            className="text-3xl font-bold text-gradient mb-8"
            animate={{ backgroundPosition: ['0% center', '100% center', '0% center'] }}
            transition={{ duration: 8, repeat: Infinity }}
          >
            Education
          </motion.h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div
              variants={itemVariants}
              className="p-6 rounded-2xl border border-border bg-gradient-to-br from-card/60 to-card/30 hover:border-accent/50 transition-all group relative overflow-hidden"
              whileHover={{ boxShadow: '0 20px 40px rgba(0, 217, 255, 0.3)' }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-[#7c3aed]/10 rounded-2xl"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <div className="relative z-10 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <motion.div whileHover={{ x: 5 }}>
                  <h4 className="text-lg font-bold text-foreground">
                    Bachelor of Technology in CSE
                  </h4>
                  <p className="text-accent">Maharaja Agrasen Institute of Technology (MAIT)</p>
                  <p className="text-sm text-foreground/60">GGSIPU</p>
                </motion.div>
                <motion.div className="text-sm text-foreground/60 text-right whitespace-nowrap" whileHover={{ color: 'rgba(0, 217, 255, 1)' }}>
                  <p>2025 - 2028</p>
                  <p>New Delhi</p>
                  <motion.p className="text-accent">GPA: 8.56</motion.p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="p-6 rounded-2xl border border-border bg-gradient-to-br from-card/60 to-card/30 hover:border-accent/50 transition-all group relative overflow-hidden"
              whileHover={{ boxShadow: '0 20px 40px rgba(124, 58, 237, 0.3)' }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#7c3aed]/10 via-transparent to-accent/10 rounded-2xl"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <div className="relative z-10 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <motion.div whileHover={{ x: 5 }}>
                  <h4 className="text-lg font-bold text-foreground">
                    Diploma in Electronics and Communication
                  </h4>
                  <p className="text-accent">Ambedkar Institute of Technology (AIT), DSEU</p>
                </motion.div>
                <motion.div className="text-sm text-foreground/60 text-right whitespace-nowrap" whileHover={{ color: 'rgba(124, 58, 237, 1)' }}>
                  <p>2022 - 2025</p>
                  <p>New Delhi</p>
                  <motion.p className="text-accent">GPA: 8.45</motion.p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
