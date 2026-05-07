'use client'

import { motion } from 'framer-motion'
import { ProjectCard } from './project-card'

const projects = [
  {
    title: 'Parent-Connect',
    description:
      'Smart healthcare monitoring system enabling caregivers to track patient vitals with real-time alerts and AI-powered triage classification.',
    problem: 'Remote patient monitoring required intelligent health data analysis and real-time notifications',
    tech: ['MERN', 'Socket.io', 'Python', 'LangChain', 'Tailwind CSS'],
    link: '#',
  },
  {
    title: 'Sentinel-Vault',
    description:
      'Decentralized zero-trust vault with AES-256 encryption, AI-driven threat detection, and adaptive security responses via WebSockets.',
    problem: 'Needed secure decentralized storage with intelligent breach detection and real-time defense mechanisms',
    tech: ['React', 'Node.js', 'LangChain', 'Twilio', 'WebSockets'],
    link: '#',
  },
  {
    title: 'Career Partner',
    description:
      'AI-powered career guidance platform providing resume analysis, personalized roadmaps, and interview prep recommendations.',
    problem: 'Students needed structured career guidance with AI-personalized recommendations based on resume analysis',
    tech: ['Flask', 'SQL', 'OpenRouter API', 'HTML/CSS', 'Render'],
    link: '#',
  },
]

export function Projects() {
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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
