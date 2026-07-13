'use client'

import { motion, useScroll, useTransform, Variants } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Briefcase, Award, Rocket, Trophy, Sparkles, type LucideIcon } from 'lucide-react'

interface JourneyItem {
  period: string
  tag: string
  icon: LucideIcon
  title: string
  description: string
}

const journeyItems: JourneyItem[] = [
  {
    period: '2022',
    tag: 'Education',
    icon: GraduationCap,
    title: 'Foundations in Electronics',
    description:
      'Began a diploma in Electronics & Communication Engineering at Ambedkar Institute of Technology, graduating with an 8.45 GPA while building a habit of root-cause debugging over rote memorization.',
  },
  {
    period: 'May – Jun 2024',
    tag: 'Internship',
    icon: Briefcase,
    title: 'Web Developer Intern, Kushal: Aide',
    description:
      'Converted Figma mockups into responsive, cross-browser interfaces and helped standardize a reusable component library that shipped to production.',
  },
  {
    period: 'Jun – Aug 2024',
    tag: 'Internship',
    icon: Briefcase,
    title: 'Scientist Intern, Bureau of Indian Standards',
    description:
      'Validated electrical products against Indian Standards, analyzed reliability test data, and authored technical compliance documentation.',
  },
  {
    period: '2025',
    tag: 'Milestone',
    icon: Award,
    title: 'AIR 39, IPU-CET Lateral Entry',
    description:
      'Secured All India Rank 39 and transferred directly into the B.Tech Computer Science program at MAIT, GGSIPU, carrying an 8.56 GPA to date.',
  },
  {
    period: '2025 – 26',
    tag: 'Building',
    icon: Rocket,
    title: 'Shipping Real Products',
    description:
      'Built Sentinel-Vault, a zero-trust encrypted vault with AI-driven threat detection; Parent-Connect, a real-time patient monitoring system with sub-200ms latency; and Career Partner, a deployed AI career-guidance platform used by real students.',
  },
  {
    period: '2026',
    tag: 'Competition',
    icon: Trophy,
    title: 'Top 10 of 400+ Teams',
    description:
      'Placed in the top 10 among 400+ teams at a national hackathon, and organized HackWithMAIT — coordinating sponsors, teams, and execution across 20+ events.',
  },
  {
    period: 'Jun – Aug 2026',
    tag: 'Internship',
    icon: Briefcase,
    title: 'AI Engineer Intern, Castler',
    description:
      'Building AI agents to automate internal office workflows — combining FastAPI, RAG pipelines backed by ChromaDB, Anthropic\'s Claude models, and Pydantic-validated schemas to ship reliable, production-grade agent tooling.',
  },
  {
    period: '2026 → Now',
    tag: 'Current',
    icon: Sparkles,
    title: 'Full-Stack, Full-Send',
    description:
      'Continuing to build across the MERN stack and applied AI — LangChain, WebSockets, Spring Boot — while completing my degree and shipping something new every month.',
  },
]

export function Journey() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
  })
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <section id="journey" className="py-24 sm:py-32 px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mb-16 sm:mb-24 max-w-xl"
        >
          <p className="mono-label text-xs text-accent mb-3">The Journey</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">
            From circuits to code
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A timeline of the milestones, internships, and projects that shaped how I build software.
          </p>
        </motion.div>

        <div ref={containerRef} className="relative" style={{ position: 'relative' }}>
          {/* Base line */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />
          {/* Scroll-filled progress line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-5 md:left-1/2 top-0 w-px bg-accent md:-translate-x-1/2 origin-top"
          />

          <div className="space-y-10 md:space-y-16">
            {journeyItems.map((item, index) => {
              const isEven = index % 2 === 0
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '0px 0px -80px 0px' }}
                  className={`relative flex flex-col md:flex-row items-start gap-6 ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Node */}
                  <div className="absolute left-5 md:left-1/2 top-0 w-10 h-10 rounded-full bg-background border-2 border-accent md:-translate-x-1/2 -translate-x-1/2 flex items-center justify-center z-10">
                    <Icon size={16} className="text-accent" />
                  </div>

                  <div className="hidden md:block w-1/2" />

                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pr-14' : 'md:pl-14'}`}>
                    <div className="card-hover p-6 rounded-xl bg-card border border-border">
                      <div className="flex items-center gap-3 mb-3 flex-wrap">
                        <span className="mono-label text-[10px] text-accent px-2.5 py-1 rounded-full bg-accent/10 border border-accent/20">
                          {item.tag}
                        </span>
                        <span className="text-xs text-muted-foreground">{item.period}</span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold mb-2 text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
