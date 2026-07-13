'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ProjectCard } from './project-card'

const projects = [
  {
    title: 'Parent-Connect',
    problem: 'Deterministic triage framework for caregiver support',
    problemDetails: 'Complex lab reports trigger acute health anxiety in elderly patients, while distant caregivers lack real-time visibility into critical emergencies.',
    solutionDetails: 'Developed a deterministic Python triage gate that scans OCR data for critical biometric thresholds, bypassing AI to send instant WebSocket emergency alerts. Integrated a Gemini-powered RAG engine to translate complex medical jargon into calm, non-diagnostic summaries. Built a dual-persona interface featuring a highly accessible "Green UI" for seniors and a data-rich "Red UI" analytical dashboard for caregivers.',
    tech: ['MERN', 'Socket.io', 'Python', 'LangChain', 'Tailwind CSS'],
    link: 'https://github.com/Sanchita-mishra26/Parent-Connect-app',
    featured: true,
  },
  {
    title: 'Sentinel-Vault',
    problem: 'Decentralized zero-trust vault with adaptive security',
    problemDetails: 'Traditional storage solutions lack decentralized zero-trust architecture, leaving sensitive data vulnerable to breaches without adaptive real-time defense mechanisms.',
    solutionDetails: 'Engineered a decentralized zero-trust vault utilizing AES-256 encryption. Integrated AI-driven threat detection to monitor access patterns and implemented adaptive security responses via WebSockets to instantly lock down compromised nodes.',
    tech: ['React', 'Node.js', 'LangChain', 'Twilio', 'WebSockets'],
    link: 'https://github.com/Sanchita-mishra26/sentinel-vault-hack',
  },
  {
    title: 'Career Partner',
    problem: 'AI-powered career guidance & resume analysis',
    problemDetails: 'Students often struggle to find structured career paths and lack personalized guidance for navigating the tech industry effectively.',
    solutionDetails: 'Developed an AI-powered career guidance platform providing comprehensive resume analysis, personalized learning roadmaps, and interview prep recommendations.',
    tech: ['Flask', 'SQL', 'OpenRouter API', 'HTML/CSS', 'Render'],
    link: 'https://github.com/Sanchita-mishra26/Career-Partner',
    demoLink: 'https://career-partner.onrender.com/login',
  },
]

export function Projects() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  return (
    <section id="projects" className="py-24 sm:py-32 px-4 relative overflow-hidden">
      <motion.div
        aria-hidden
        className="absolute top-0 right-0 w-120 h-120 bg-accent/6 rounded-full blur-[120px] -z-10"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mb-16 max-w-xl"
        >
          <p className="mono-label text-xs text-accent mb-3">Selected Work</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Full-stack products built to solve real problems — with real-time systems and applied AI at the core.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 items-start">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              index={index}
              isExpanded={expandedId === project.title}
              onToggle={() => setExpandedId(expandedId === project.title ? null : project.title)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
