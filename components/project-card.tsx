'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { ArrowUpRight, ChevronDown } from 'lucide-react'

interface ProjectCardProps {
  title: string
  problem: string
  problemDetails: string
  solutionDetails: string
  tech: string[]
  link?: string
  demoLink?: string
  index: number
  featured?: boolean
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
  featured = false,
  isExpanded,
  onToggle,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    })
  }

  const rotateX = isHovered ? (mousePosition.y - 0.5) * -6 : 0
  const rotateY = isHovered ? (mousePosition.x - 0.5) * 6 : 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: '0px 0px -80px 0px' }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`h-full ${featured ? 'lg:col-span-2' : ''}`}
      style={{ perspective: '1200px' }}
    >
      <motion.div
        animate={{ rotateX, rotateY }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="h-full flex flex-col p-7 sm:p-8 rounded-2xl border border-border bg-card hover:border-accent/40 transition-colors duration-300 relative overflow-hidden"
        style={{
          transformStyle: 'preserve-3d',
          boxShadow: isHovered ? '0 20px 50px -20px var(--glow-accent)' : undefined,
        }}
      >
        <div className="relative z-10 flex flex-col h-full">
          <div className="flex items-start justify-between gap-4 mb-4">
            <h3 className={`font-bold text-foreground ${featured ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'}`}>
              {title}
            </h3>
            {(link || demoLink) && (
              <Link
                href={demoLink || link || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/50 transition-colors"
                aria-label={`Open ${title}`}
              >
                <ArrowUpRight size={16} />
              </Link>
            )}
          </div>

          <p className="text-sm text-accent font-medium mb-3">{problem}</p>

          <div className="flex flex-wrap gap-2 mb-5">
            {tech.map((t) => (
              <span
                key={t}
                className="mono-label px-2.5 py-1 text-[10px] rounded-full bg-secondary text-muted-foreground border border-border"
              >
                {t}
              </span>
            ))}
          </div>

          <AnimatePresence initial={false}>
            {isExpanded && (
              <motion.div
                key="content"
                initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                animate={{ opacity: 1, height: 'auto', marginBottom: 20 }}
                exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="space-y-4 pt-1 border-t border-border/60 mt-1">
                  <div className="pt-4">
                    <h4 className="mono-label text-[10px] text-muted-foreground mb-1.5">The Problem</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{problemDetails}</p>
                  </div>
                  <div>
                    <h4 className="mono-label text-[10px] text-muted-foreground mb-1.5">The Solution</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{solutionDetails}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-auto flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onToggle}
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-accent transition-colors font-medium mr-auto cursor-pointer"
            >
              {isExpanded ? 'Show less' : 'Read more'}
              <motion.span animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronDown size={14} />
              </motion.span>
            </button>

            {demoLink && (
              <Link
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-accent text-accent-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                Live Demo
              </Link>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
