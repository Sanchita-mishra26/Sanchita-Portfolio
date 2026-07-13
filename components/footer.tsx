'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'
import { MagneticButton } from './magnetic-button'

export function Footer() {
  return (
    <footer className="border-t border-border py-14 px-4 bg-background relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-3 gap-10 mb-10"
        >
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-3">
              Sanchita<span className="text-accent">.</span>
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Full-stack developer building AI-powered solutions with a focus on scalable systems and real user experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mono-label text-xs text-muted-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="#projects" className="text-muted-foreground hover:text-accent transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#skills" className="text-muted-foreground hover:text-accent transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#experience" className="text-muted-foreground hover:text-accent transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mono-label text-xs text-muted-foreground mb-4">Connect</h3>
            <div className="flex gap-3">
              <a
                href="https://github.com/Sanchita-mishra26"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-border text-muted-foreground hover:text-accent hover:border-accent/50 flex items-center justify-center transition-colors"
                title="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/sanchita-mishra-a9817a308/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-border text-muted-foreground hover:text-accent hover:border-accent/50 flex items-center justify-center transition-colors"
                title="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="mailto:sanchitamishra2607@gmail.com"
                className="w-9 h-9 rounded-lg border border-border text-muted-foreground hover:text-accent hover:border-accent/50 flex items-center justify-center transition-colors"
                title="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground"
        >
          <p>Copyright © 2026 Sanchita Mishra. All rights reserved.</p>

          <MagneticButton
            as="button"
            strength={0.3}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-9 h-9 rounded-lg border border-border hover:border-accent/50 hover:text-accent flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </MagneticButton>
        </motion.div>
      </div>
    </footer>
  )
}
