'use client'

import { motion, Variants, useMotionValue, useTransform, animate } from 'framer-motion'
import { Download, ArrowDown } from 'lucide-react'
import { useEffect, useState } from 'react'
import { MagneticButton } from './magnetic-button'

const techStack = [
  'React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'Python',
  'LangChain', 'Socket.io', 'TypeScript', 'Tailwind CSS',
]

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isTyping, setIsTyping] = useState(true)
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const displayText = useTransform(rounded, (latest) => "Sanchita Mishra".slice(0, latest))

  useEffect(() => {
    const controls = animate(count, "Sanchita Mishra".length, {
      type: "tween",
      duration: 1.2,
      ease: "easeInOut",
      delay: 0.4,
      onComplete: () => {
        setTimeout(() => setIsTyping(false), 1200)
      }
    })
    return controls.stop
  }, [count])

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

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    window.history.pushState(null, '', `#${id}`)
  }

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-24 px-4 relative overflow-hidden">
      {/* Backdrop: faint grid + two soft accent blobs with subtle parallax */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-grid bg-grid-fade" />
        <motion.div
          animate={{ x: mousePosition.x * 1.5, y: mousePosition.y * 1.5 }}
          transition={{ type: 'spring', stiffness: 60, damping: 25 }}
          className="absolute top-24 left-[10%] w-72 h-72 sm:w-96 sm:h-96 bg-accent/10 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ x: mousePosition.x * -1.5, y: mousePosition.y * -1.5 }}
          transition={{ type: 'spring', stiffness: 60, damping: 25 }}
          className="absolute bottom-10 right-[8%] w-72 h-72 sm:w-96 sm:h-96 bg-[var(--gradient-end)]/10 rounded-full blur-[100px]"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-3xl mx-auto text-center relative z-10"
      >
        <motion.div variants={itemVariants} className="mb-8 flex justify-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-card/50">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="mono-label text-[11px] text-muted-foreground">Open to internships &amp; new grad roles</span>
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h1 className="text-[13vw] sm:text-6xl md:text-7xl font-bold mb-5 leading-[1.05] tracking-tight flex items-center justify-center whitespace-nowrap">
            <motion.span className="text-gradient">{displayText}</motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={isTyping ? { opacity: [0, 1, 1, 0, 0] } : { opacity: 0 }}
              transition={isTyping ? { duration: 0.8, repeat: Infinity, times: [0, 0.1, 0.5, 0.6, 1] } : { duration: 0.4 }}
              className="inline-block w-[3px] sm:w-[5px] h-[0.75em] bg-accent ml-1.5 sm:ml-2 rounded-full"
            />
          </h1>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 text-balance text-foreground">
            Full-stack engineer building <span className="text-accent">AI-powered</span>, production-grade software
          </h2>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-lg text-muted-foreground mb-10 text-balance max-w-xl mx-auto leading-relaxed"
        >
          Specializing in the MERN stack, real-time systems, and applied AI integrations.
          Currently completing a B.Tech in Computer Science at MAIT.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-4 justify-center items-center relative z-20"
        >
          <MagneticButton
            as="a"
            href="#projects"
            onClick={(e) => { e.preventDefault(); scrollTo('projects') }}
            strength={0.3}
            className="px-7 py-3.5 rounded-lg bg-accent text-accent-foreground font-semibold transition-shadow duration-300 glow-accent hover:shadow-lg cursor-pointer inline-block"
          >
            View My Work
          </MagneticButton>
          <MagneticButton
            as="a"
            href="#contact"
            onClick={(e) => { e.preventDefault(); scrollTo('contact') }}
            strength={0.3}
            className="px-7 py-3.5 rounded-lg border border-border text-foreground font-semibold hover:border-accent/50 hover:text-accent transition-colors duration-300 cursor-pointer inline-block"
          >
            Get in Touch
          </MagneticButton>
          <a
            href="/Sanchita_Mishra_Resume.pdf"
            download="Sanchita_Mishra_Resume.pdf"
            className="inline-flex items-center gap-1.5 px-4 py-3.5 text-muted-foreground hover:text-foreground font-medium transition-colors cursor-pointer"
          >
            <Download size={16} />
            Resume
          </a>
        </motion.div>
      </motion.div>

      {/* Tech marquee */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="marquee-row relative z-10 mt-20 w-full max-w-4xl mx-auto overflow-hidden"
        style={{
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
          maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
        }}
      >
        <div className="flex w-max marquee-track">
          {[...techStack, ...techStack].map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="mono-label text-xs text-muted-foreground px-6 whitespace-nowrap"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="mt-10 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  )
}
