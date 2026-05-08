'use client'

import { motion, Variants } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, rotateX: -20 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 1, ease: 'easeOut', type: 'spring', stiffness: 50 },
    },
  }

  const floatingVariants: Variants = {
    float: {
      y: [0, -20, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden">
      {/* Animated 3D background elements with parallax */}
      <div className="absolute inset-0 -z-10 perspective pointer-events-none">
        <motion.div
          animate={{ x: mousePosition.x * 2, y: mousePosition.y * 2 }}
          transition={{ type: 'spring', stiffness: 100, damping: 30 }}
          className="absolute top-20 left-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: mousePosition.x * -2, y: mousePosition.y * -2 }}
          transition={{ type: 'spring', stiffness: 100, damping: 30 }}
          className="absolute bottom-20 right-20 w-72 h-72 bg-[#7c3aed]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: mousePosition.x, y: mousePosition.y * 2 }}
          transition={{ type: 'spring', stiffness: 100, damping: 30 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-accent/5 to-[#7c3aed]/5 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-3xl mx-auto text-center relative z-10 perspective"
        style={{
          transformStyle: 'preserve-3d',
          transform: `perspective(1200px) rotateX(${mousePosition.y * 0.02}deg) rotateY(${-mousePosition.x * 0.02}deg)`,
        }}
      >
        <motion.div
          variants={itemVariants}
          className="mb-6"
          whileHover={{ scale: 1.05 }}
        >
          <motion.div
            className="inline-block px-4 py-2 rounded-full border border-accent bg-accent/5"
            animate={{ boxShadow: ['0 0 20px rgba(0, 217, 255, 0.3)', '0 0 40px rgba(0, 217, 255, 0.6)', '0 0 20px rgba(0, 217, 255, 0.3)'] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <span className="text-sm text-accent">Welcome to my interactive portfolio</span>
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-6 text-balance leading-tight">
            <motion.span
              className="text-gradient block"
              animate={{ backgroundPosition: ['0% center', '100% center', '0% center'] }}
              transition={{ duration: 8, repeat: Infinity }}
            >
              Sanchita Mishra
            </motion.span>
          </h1>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance">
            <span className="text-gradient">Full-Stack Developer</span> Building{' '}
            <span className="text-accent">AI-Powered</span> Solutions
          </h2>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-xl text-foreground/70 mb-8 text-balance max-w-2xl mx-auto"
        >
          Specializing in MERN stack, real-time systems, and intelligent automation. Currently pursuing BTech in CSE at MAIT.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-4 justify-center relative z-20"
        >
          <Link
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              // Optional: Update URL without jumping
              window.history.pushState(null, '', '#projects');
            }}
            passHref
            legacyBehavior={false}
          >
            <motion.div
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-lg bg-accent text-background font-semibold md:hover:bg-accent/80 md:hover:[transform:scale(1.1)_rotateY(-5deg)] transition-all duration-300 glow-neon block cursor-pointer"
              style={{ transformStyle: 'preserve-3d' }}
            >
              View Projects
            </motion.div>
          </Link>
          <Link
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              window.history.pushState(null, '', '#contact');
            }}
            passHref
            legacyBehavior={false}
          >
            <motion.div
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-lg border border-accent text-accent md:hover:bg-accent/10 md:hover:[transform:scale(1.1)_rotateY(5deg)] font-semibold transition-all duration-300 block cursor-pointer"
              style={{ transformStyle: 'preserve-3d' }}
            >
              Get in Touch
            </motion.div>
          </Link>
          <a
            href="/Sanchita_Mishra_Resume.pdf"
            download="Sanchita_Mishra_Resume.pdf"
            className="block"
          >
            <motion.div
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-lg border border-[#7c3aed] text-[#7c3aed] md:hover:bg-[#7c3aed]/10 md:hover:[transform:scale(1.1)_rotateY(10deg)] font-semibold transition-all duration-300 block glow-purple cursor-pointer"
              style={{ transformStyle: 'preserve-3d' }}
            >
              Download Resume
            </motion.div>
          </a>
        </motion.div>

        {/* Scroll indicator with 3D effect */}
        <motion.div
          variants={itemVariants}
          className="mt-20 flex justify-center"
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
        >
          <motion.div
            animate={{ rotateZ: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <svg
              className="w-8 h-8 text-accent"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
