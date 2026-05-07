'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const navItems = [
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
]

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 backdrop-blur-md bg-background/80 border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold text-gradient cursor-pointer"
        >
          Sanchita Mishra
        </motion.div>
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <motion.div key={item.name} whileHover={{ y: -2 }}>
              <Link
                href={item.href}
                className="text-sm text-foreground/70 hover:text-accent transition-colors"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="flex gap-3 items-center">
          <motion.a
            href="/resume.pdf"
            download="Sanchita_Mishra_Resume.pdf"
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 217, 255, 0.5)' }}
            className="px-4 py-2 text-sm rounded-lg border border-accent text-accent hover:bg-accent/10 transition-all"
          >
            Download Resume
          </motion.a>
          <motion.a
            href="https://github.com/Sanchita-mishra26"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 217, 255, 0.5)' }}
            className="px-4 py-2 text-sm rounded-lg border border-accent text-accent hover:bg-accent/10 transition-all"
          >
            GitHub
          </motion.a>
        </div>
      </div>
    </motion.nav>
  )
}
