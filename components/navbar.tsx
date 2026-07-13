'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from "next-themes"
import { Sun, Moon, Menu, X, Github, ArrowUpRight } from "lucide-react"
import { useEffect, useState } from "react"
import { MagneticButton } from './magnetic-button'

const navItems = [
  { name: 'Journey', href: '#journey' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
]

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('')

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((el): el is HTMLElement => Boolean(el))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: 0 }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const scrollTo = (href: string) => {
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' })
    window.history.pushState(null, '', href)
    setMenuOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'backdrop-blur-xl bg-[var(--glass-bg)] border-b border-border shadow-[0_1px_0_0_var(--border)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-18">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="text-lg sm:text-xl font-bold tracking-tight cursor-pointer"
        >
          Sanchita<span className="text-accent">.</span>
        </a>

        <div className="hidden md:flex items-center gap-1 relative">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1)
            return (
              <button
                key={item.name}
                onClick={() => scrollTo(item.href)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors cursor-pointer ${
                  isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-0 rounded-full bg-accent/10 border border-accent/20"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </button>
            )
          })}
        </div>

        <div className="flex gap-2 sm:gap-3 items-center">
          {mounted && (
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg border border-border text-foreground hover:border-accent/50 hover:text-accent transition-colors flex items-center justify-center cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
            </motion.button>
          )}

          <MagneticButton
            as="a"
            href="/Sanchita_Mishra_Resume.pdf"
            download="Sanchita_Mishra_Resume.pdf"
            strength={0.25}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg border border-border text-foreground hover:border-accent/50 hover:text-accent transition-colors cursor-pointer"
          >
            Resume
          </MagneticButton>

          <MagneticButton
            as="a"
            href="https://github.com/Sanchita-mishra26"
            target="_blank"
            rel="noopener noreferrer"
            strength={0.25}
            className="hidden sm:inline-flex items-center justify-center w-9 h-9 rounded-lg bg-accent text-accent-foreground hover:opacity-90 transition-opacity cursor-pointer"
            aria-label="GitHub"
          >
            <Github size={16} />
          </MagneticButton>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden p-2 rounded-lg border border-border text-foreground cursor-pointer"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden border-t border-border bg-[var(--glass-bg)] backdrop-blur-xl"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollTo(item.href)}
                  className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                    activeSection === item.href.slice(1)
                      ? 'bg-accent/10 text-accent'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <a
                href="/Sanchita_Mishra_Resume.pdf"
                download="Sanchita_Mishra_Resume.pdf"
                className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-foreground border border-border mt-2"
              >
                Download Resume
                <ArrowUpRight size={15} className="text-accent" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
