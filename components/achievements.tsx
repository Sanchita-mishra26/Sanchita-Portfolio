'use client'

import { motion, useMotionValue, useTransform, useInView, animate } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Trophy, Rocket, Zap, Briefcase, type LucideIcon } from 'lucide-react'

interface Achievement {
  icon: LucideIcon
  value: number | null
  prefix?: string
  suffix?: string
  title: string
  description: string
}

const achievements: Achievement[] = [
  {
    icon: Trophy,
    value: 39,
    prefix: 'AIR ',
    title: 'All India Rank',
    description: 'IPU LEET 2025 — ranked among top candidates nationally',
  },
  {
    icon: Rocket,
    value: 10,
    prefix: 'Top ',
    title: 'Hackathon Finalist',
    description: 'Top 10 among 400+ teams in a national-level hackathon',
  },
  {
    icon: Zap,
    value: 20,
    suffix: '+',
    title: 'Events Organized',
    description: 'Led sponsor outreach and execution for HackWithMAIT',
  },
  {
    icon: Briefcase,
    value: null,
    title: 'JPMorgan Chase',
    description: 'Completed the Software Engineering Job Simulation (Spring Boot) via Forage',
  },
]

function AnimatedNumber({ value, prefix = '', suffix = '' }: { value: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const [text, setText] = useState('0')

  useEffect(() => {
    const unsubscribe = rounded.on('change', (latest) => setText(String(latest)))
    return unsubscribe
  }, [rounded])

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration: 1.4, ease: [0.16, 1, 0.3, 1] })
      return controls.stop
    }
  }, [isInView, count, value])

  return (
    <span ref={ref}>
      {prefix}
      {text}
      {suffix}
    </span>
  )
}

export function Achievements() {
  return (
    <section className="py-24 sm:py-32 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mb-16 max-w-xl"
        >
          <p className="mono-label text-xs text-accent mb-3">Recognition</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">
            Achievements
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Milestones earned along the way.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="card-hover p-6 rounded-2xl border border-border bg-card"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mb-5">
                  <Icon size={18} className="text-accent" />
                </div>

                {achievement.value !== null ? (
                  <p className="text-3xl font-bold text-foreground mb-2 tabular-nums">
                    <AnimatedNumber value={achievement.value} prefix={achievement.prefix} suffix={achievement.suffix} />
                  </p>
                ) : (
                  <p className="text-xl font-bold text-foreground mb-2">{achievement.title}</p>
                )}

                {achievement.value !== null && (
                  <p className="text-sm font-semibold text-accent mb-1.5">{achievement.title}</p>
                )}
                <p className="text-sm text-muted-foreground leading-relaxed">{achievement.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
