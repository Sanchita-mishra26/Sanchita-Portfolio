'use client'

import { motion, Variants } from 'framer-motion'

interface Experience {
  company: string
  role: string
  period: string
  location: string
  current?: boolean
  points: string[]
}

const experiences: Experience[] = [
  {
    company: 'Castler',
    role: 'AI Engineer Intern',
    period: 'June 2026 - August 2026',
    location: 'Gurugram, India',
    current: true,
    points: [
      'Building AI agents to automate internal office workflows, reducing manual operational overhead',
      'Developed Retrieval-Augmented Generation (RAG) pipelines using ChromaDB for vector storage and Anthropic’s Claude models for reasoning',
      'Built FastAPI backend services to expose agent capabilities as internal tools and APIs',
      'Used Pydantic for structured data validation and schema enforcement across agent inputs and outputs',
    ],
  },
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
    role: 'Web Developer Intern',
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

const education = [
  {
    degree: 'Bachelor of Technology in CSE',
    school: 'Maharaja Agrasen Institute of Technology (MAIT)',
    org: 'GGSIPU',
    period: '2025 - 2028',
    location: 'New Delhi',
    gpa: '8.7',
  },
  {
    degree: 'Diploma in Electronics and Communication',
    school: 'Ambedkar Institute of Technology (AIT), DSEU',
    org: '',
    period: '2022 - 2025',
    location: 'New Delhi',
    gpa: '8.45',
  },
]

export function Experience() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
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
    <section id="experience" className="py-24 sm:py-32 px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mb-16 max-w-xl"
        >
          <p className="mono-label text-xs text-accent mb-3">Background</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">
            Experience &amp; Education
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Professional and academic milestones through tech and innovation.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '0px 0px -80px 0px' }}
          className="space-y-5 mb-20"
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.company}
              variants={itemVariants}
              className="card-hover relative pl-6 p-6 rounded-2xl border border-border bg-card overflow-hidden"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent" />
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                <div>
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <h3 className="text-lg font-bold text-foreground">{exp.role}</h3>
                    {exp.current && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-emerald-500/30 bg-emerald-500/10">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        </span>
                        <span className="mono-label text-[9px] text-emerald-500">Current</span>
                      </span>
                    )}
                  </div>
                  <p className="text-accent font-medium">{exp.company}</p>
                </div>
                <div className="text-sm text-muted-foreground sm:text-right whitespace-nowrap">
                  <p>{exp.period}</p>
                  <p>{exp.location}</p>
                </div>
              </div>
              <ul className="space-y-2.5">
                {exp.points.map((point, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex gap-3 leading-relaxed">
                    <span className="text-accent mt-0.5 shrink-0">▸</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold mb-6 text-foreground">Education</h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-5"
          >
            {education.map((edu) => (
              <motion.div
                key={edu.degree}
                variants={itemVariants}
                className="card-hover p-6 rounded-2xl border border-border bg-card"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div>
                    <h4 className="text-base font-bold text-foreground">{edu.degree}</h4>
                    <p className="text-accent font-medium">{edu.school}</p>
                    {edu.org && <p className="text-sm text-muted-foreground">{edu.org}</p>}
                  </div>
                  <div className="text-sm text-muted-foreground sm:text-right whitespace-nowrap">
                    <p>{edu.period}</p>
                    <p>{edu.location}</p>
                    <p className="text-accent font-medium mt-1">GPA: {edu.gpa}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
