'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ProjectCard } from './project-card'

const projects = [
  {
    title: 'Parent-Connect',
    problem: 'Deterministic Triage Framework for Caregiver Support',
    problemDetails: 'Complex lab reports trigger acute health anxiety in elderly patients, while distant caregivers lack real-time visibility into critical emergencies.',
    solutionDetails: 'Developed a deterministic Python triage gate that scans OCR data for critical biometric thresholds, bypassing AI to send instant WebSocket emergency alerts. Integrated a Gemini-powered RAG engine to translate complex medical jargon into calm, non-diagnostic summaries. Built a dual-persona interface featuring a highly accessible "Green UI" for seniors and a data-rich "Red UI" analytical dashboard for caregivers.',
    tech: ['MERN', 'Socket.io', 'Python', 'LangChain', 'Tailwind CSS'],
    link: 'https://github.com/Sanchita-mishra26/Parent-Connect-app',
  },
  {
    title: 'Sentinel-Vault',
    problem: 'Decentralized Zero-Trust Vault with Adaptive Security',
    problemDetails: 'Traditional storage solutions lack decentralized zero-trust architecture, leaving sensitive data vulnerable to breaches without adaptive real-time defense mechanisms.',
    solutionDetails: 'Engineered a decentralized zero-trust vault utilizing AES-256 encryption. Integrated AI-driven threat detection to monitor access patterns and implemented adaptive security responses via WebSockets to instantly lock down compromised nodes.',
    tech: ['React', 'Node.js', 'LangChain', 'Twilio', 'WebSockets'],
    link: 'https://github.com/Sanchita-mishra26/sentinel-vault-hack',
  },
  {
    title: 'Career Partner',
    problem: 'AI-Powered Career Guidance & Resume Analysis',
    problemDetails: 'Students often struggle to find structured career paths and lack personalized guidance for navigating the tech industry effectively.',
    solutionDetails: 'Developed an AI-powered career guidance platform providing comprehensive resume analysis, personalized learning roadmaps, and interview prep recommendations.',
    tech: ['Flask', 'SQL', 'OpenRouter API', 'HTML/CSS', 'Render'],
    link: 'https://github.com/Sanchita-mishra26/Career-Partner',
    demoLink: 'https://career-partner.onrender.com/login',
  },
]

export function Projects() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 left-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl"
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#7c3aed]/5 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
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
            Featured Projects
          </motion.h2>
          <motion.p
            className="text-xl text-foreground/60 max-w-2xl mx-auto"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            Showcasing my best work in full-stack development, AI integration, and real-time systems
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '0px 0px -100px 0px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              index={index}
              isExpanded={expandedId === project.title}
              onToggle={() => setExpandedId(expandedId === project.title ? null : project.title)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
