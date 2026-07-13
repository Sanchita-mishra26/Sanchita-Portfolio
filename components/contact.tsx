'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Github, Linkedin, Mail, Phone, MapPin, Send } from 'lucide-react'
import { MagneticButton } from './magnetic-button'

export function Contact() {
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

    try {
      const recipient = 'sanchitamishra2607@gmail.com'
      const subject = encodeURIComponent(`Portfolio message from ${formState.name}`)
      const body = encodeURIComponent(
        `Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`
      )

      window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`
      setStatus('success')
      setFormState({ name: '', email: '', message: '' })
      setTimeout(() => setStatus(null), 4000)
    } catch {
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const inputClass =
    'w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all'

  return (
    <section id="contact" className="py-24 sm:py-32 px-4 relative overflow-hidden">
      <motion.div
        aria-hidden
        className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/6 rounded-full blur-[120px] -z-10"
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mb-16 max-w-xl"
        >
          <p className="mono-label text-xs text-accent mb-3">Get In Touch</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">
            Let&apos;s build something
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Always open to discussing new projects, opportunities, or just saying hello.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="md:col-span-3 p-6 sm:p-8 rounded-2xl border border-border bg-card"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
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
                  className={inputClass}
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
                  className={inputClass}
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
                  className={`${inputClass} resize-none`}
                  placeholder="Your message here..."
                />
                {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
              </div>

              <MagneticButton
                as="button"
                type="submit"
                disabled={loading}
                strength={0.15}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity glow-accent disabled:opacity-60 cursor-pointer"
              >
                {loading ? 'Sending...' : (
                  <>
                    Send Message
                    <Send size={15} />
                  </>
                )}
              </MagneticButton>

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
                  Your email app should open with the message prefilled.
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-5"
          >
            <div className="p-6 rounded-2xl border border-border bg-card space-y-5">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                  <Mail size={15} className="text-accent" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5">Email</p>
                  <a
                    href="mailto:sanchitamishra2607@gmail.com"
                    className="text-sm text-foreground hover:text-accent transition-colors break-all"
                  >
                    sanchitamishra2607@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                  <Phone size={15} className="text-accent" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5">Phone</p>
                  <p className="text-sm text-foreground">+91 8377891315</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                  <MapPin size={15} className="text-accent" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5">Location</p>
                  <p className="text-sm text-foreground">Delhi NCR, India</p>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <a
                  href="https://github.com/Sanchita-mishra26"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg border border-border text-foreground hover:border-accent/50 hover:text-accent flex items-center justify-center transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={17} />
                </a>
                <a
                  href="https://www.linkedin.com/in/sanchita-mishra-a9817a308/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg border border-border text-foreground hover:border-accent/50 hover:text-accent flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={17} />
                </a>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-accent/20 bg-accent/5">
              <p className="text-sm text-muted-foreground leading-relaxed">
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
