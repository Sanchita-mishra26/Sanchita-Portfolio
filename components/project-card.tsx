'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

interface ProjectCardProps {
  title: string
  description: string
  problem: string
  tech: string[]
  link?: string
  index: number
}

export function ProjectCard({
  title,
  description,
  problem,
  tech,
  link,
  index,
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
      className="h-full"
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
        className="h-full p-8 rounded-2xl border border-border bg-gradient-to-br from-card to-card/50 hover:border-accent/50 transition-all duration-300 relative overflow-hidden group"
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
        <div className="relative z-10">
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
                className="text-sm text-foreground/50 mb-4 leading-relaxed"
                animate={{ color: isHovered ? 'rgba(0, 217, 255, 0.8)' : 'rgba(226, 232, 240, 0.5)' }}
              >
                {problem}
              </motion.p>
            </div>

            <motion.p
              className="text-foreground/80 mb-6 line-clamp-3"
              animate={{ y: isHovered ? -2 : 0 }}
            >
              {description}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-2 mb-6"
              animate={{ y: isHovered ? -5 : 0 }}
              transition={{ duration: 0.3, staggerChildren: 0.05 }}
            >
              {tech.map((t, i) => (
                <motion.span
                  key={t}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.1, boxShadow: '0 0 15px rgba(0, 217, 255, 0.5)' }}
                  transition={{ delay: i * 0.05 }}
                  className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent border border-accent/30 cursor-default"
                >
                  {t}
                </motion.span>
              ))}
            </motion.div>

            {link && (
              <motion.div
                animate={{ y: isHovered ? -8 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors group/link"
                >
                  <span className="font-semibold">View Project</span>
                  <motion.svg
                    className="w-5 h-5"
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
              </motion.div>
            )}
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
