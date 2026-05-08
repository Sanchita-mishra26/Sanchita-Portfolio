'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

interface ProjectCardProps {
  title: string
  problem: string
  problemDetails: string
  solutionDetails: string
  tech: string[]
  link?: string
  demoLink?: string
  index: number
  isExpanded: boolean
  onToggle: () => void
}

export function ProjectCard({
  title,
  problem,
  problemDetails,
  solutionDetails,
  tech,
  link,
  demoLink,
  index,
  isExpanded,
  onToggle,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    setMousePosition({ x, y })
  }

  const handleMouseLeave = () => {
    setMousePosition({ x: 0.5, y: 0.5 })
    setIsHovered(false)
  }

  const rotateX = isHovered ? (mousePosition.y - 0.5) * 20 : 0
  const rotateY = isHovered ? (mousePosition.x - 0.5) * -20 : 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -30 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.7, delay: index * 0.15, type: 'spring', stiffness: 80 }}
      viewport={{ once: true, margin: '0px 0px -100px 0px' }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="h-fit"
      style={{
        perspective: '1200px',
        transformStyle: 'preserve-3d',
      }}
    >
      <motion.div
        animate={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
          z: isHovered ? 50 : 0,
          boxShadow: isHovered
            ? '0 20px 60px rgba(0, 217, 255, 0.4), 0 0 40px rgba(124, 58, 237, 0.3)'
            : '0 10px 30px rgba(0, 0, 0, 0.2)',
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="h-fit p-8 rounded-2xl border border-border bg-gradient-to-br from-card to-card/50 hover:border-accent/50 transition-all duration-300 relative overflow-hidden group"
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Animated gradient background on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-[#7c3aed]/10 rounded-2xl"
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          style={{
            transform: `translate(${(mousePosition.x - 0.5) * 20}px, ${(mousePosition.y - 0.5) * 20}px)`,
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col h-fit">
          <motion.div
            animate={{ y: isHovered ? -5 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-6">
              <motion.h3
                className="text-2xl font-bold text-gradient mb-2"
                animate={{ letterSpacing: isHovered ? '0.5px' : '0px' }}
              >
                {title}
              </motion.h3>
              <motion.p
                className="text-sm text-foreground/50 leading-relaxed"
                animate={{ color: isHovered ? 'rgba(0, 217, 255, 0.8)' : 'rgba(226, 232, 240, 0.5)' }}
              >
                {problem}
              </motion.p>
            </div>

            <AnimatePresence initial={false}>
              {isExpanded && (
                <motion.div
                  key="content"
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: { opacity: 1, height: 'auto', marginTop: 0, marginBottom: 24 },
                    collapsed: { opacity: 0, height: 0, marginTop: 0, marginBottom: 0 }
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="space-y-4 pt-2">
                    <div>
                      <h4 className="text-accent font-semibold text-sm mb-1">The Problem</h4>
                      <ul className="text-foreground/80 text-sm leading-relaxed list-disc list-inside">
                        <li>{problemDetails}</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-accent font-semibold text-sm mb-1">The Solution</h4>
                      <ul className="text-foreground/80 text-sm leading-relaxed list-disc list-inside">
                        <li>{solutionDetails}</li>
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {tech.map((t, i) => (
                        <span
                          key={t}
                          className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent border border-accent/30 cursor-default"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.div className="mt-auto flex flex-wrap items-center gap-4 pt-4 border-t border-border/50">
              <button
                onClick={onToggle}
                className="text-sm text-foreground/60 hover:text-accent transition-colors font-medium mr-auto"
              >
                {isExpanded ? 'Read Less' : 'Read More'}
              </button>
              
              {(link || demoLink) && (
                <div className="flex items-center gap-4">
                  {link && (
                    <Link
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors group/link"
                    >
                      <span className="font-semibold text-sm">View Project</span>
                      <motion.svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{ x: isHovered ? 5 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </motion.svg>
                    </Link>
                  )}
                  
                  {demoLink && (
                    <Link
                      href={demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-accent text-background font-semibold text-sm hover:bg-accent/80 transition-all glow-neon shadow-lg shadow-accent/20"
                    >
                      Demo
                    </Link>
                  )}
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>

        {/* 3D edge highlight */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            border: '1px solid',
            borderColor: isHovered ? 'rgba(0, 217, 255, 0.5)' : 'transparent',
            boxShadow: isHovered
              ? 'inset 0 0 30px rgba(0, 217, 255, 0.2)'
              : 'inset 0 0 0px transparent',
          }}
          animate={{
            boxShadow: isHovered
              ? 'inset 0 0 30px rgba(0, 217, 255, 0.2), 0 0 40px rgba(0, 217, 255, 0.3)'
              : 'inset 0 0 0px transparent',
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  )
}
