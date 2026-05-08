'use client'

import { motion } from 'framer-motion'
import { useState, useRef } from 'react'

import emailjs from '@emailjs/browser'

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<null | 'success' | 'error'>(null)
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({})

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Basic validation
    const newErrors: { name?: string; email?: string; message?: string } = {}
    if (!formState.name || formState.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.'
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formState.email || !emailRegex.test(formState.email)) {
      newErrors.email = 'Please enter a valid email address.'
    }

    if (!formState.message || formState.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setErrors({})
    setLoading(true)
    setStatus(null)

    // EmailJS Configuration
    const SERVICE_ID = 'service_gypfjp7'
    const TEMPLATE_ID = 'template_55verfv'
    const PUBLIC_KEY = 'G5rcec9YJdiDKSN8Z'

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formState.name,
          from_email: formState.email,
          message: formState.message,
        },
        {
          publicKey: PUBLIC_KEY.trim() // <-- Forces it into an options object AND removes invisible spaces
        }
      )
      .then(
        (result) => {
          setStatus('success')
          setFormState({ name: '', email: '', message: '' })
          setTimeout(() => setStatus(null), 4000)
        },
        (error) => {
          console.error('EmailJS Error:', JSON.stringify(error))
          setStatus('error')
        }
      )
      .finally(() => {
        setLoading(false)
      })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gradient">
            Let&apos;s Connect
          </h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            Always open to discussing new projects, opportunities, or just saying hello
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  disabled={loading}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  placeholder="Your name"
                />
                {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  disabled={loading}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                />
                {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  disabled={loading}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                  placeholder="Your message here..."
                />
                {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 rounded-lg bg-accent text-background font-semibold hover:bg-accent/80 transition-all glow-neon disabled:opacity-70"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </motion.button>

              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center text-destructive text-sm"
                >
                  Something went wrong. Please try again.
                </motion.p>
              )}

              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center text-accent text-sm"
                >
                  Message sent! I&apos;ll get back to you within 24 hours.
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-lg font-bold text-accent mb-4">Direct Contact</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-foreground/60 mb-1">Email</p>
                  <a
                    href="mailto:sanchitamishra2607@gmail.com"
                    className="text-foreground hover:text-accent transition-colors"
                  >
                    sanchitamishra2607@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-sm text-foreground/60 mb-1">Phone</p>
                  <p className="text-foreground">+91 8377891315</p>
                </div>
                <div>
                  <p className="text-sm text-foreground/60 mb-1">Location</p>
                  <p className="text-foreground">Delhi NCR, India</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-accent mb-4">Connect</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Sanchita-mishra26"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg border border-accent text-accent hover:bg-accent/10 flex items-center justify-center transition-all hover:glow-neon"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/sanchita-mishra-a9817a308/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg border border-accent text-accent hover:bg-accent/10 flex items-center justify-center transition-all hover:glow-neon"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-accent/30 bg-accent/5">
              <p className="text-sm text-foreground/80">
                <span className="text-accent font-semibold">Looking for internships?</span>{' '}
                I&apos;m actively seeking opportunities in full-stack development and AI-powered applications.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
