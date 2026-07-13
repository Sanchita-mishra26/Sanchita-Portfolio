'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useRef, type ReactNode, type MouseEvent, type AnchorHTMLAttributes, type ButtonHTMLAttributes } from 'react'

interface BaseProps {
  children: ReactNode
  className?: string
  strength?: number
}

// Framer Motion redefines these DOM event handlers with its own animation-oriented
// signatures, so they must be excluded from the native HTML attribute types below.
type ConflictingHandlers = 'onAnimationStart' | 'onAnimationEnd' | 'onAnimationIteration' | 'onDrag' | 'onDragStart' | 'onDragEnd'

type MagneticAnchorProps = BaseProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, ConflictingHandlers> & { as: 'a' }
type MagneticButtonAsButtonProps = BaseProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, ConflictingHandlers> & { as?: 'button' }

type MagneticButtonProps = MagneticAnchorProps | MagneticButtonAsButtonProps

export function MagneticButton({ children, className = '', strength = 0.35, as, ...props }: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.15 })
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.15 })

  const handleMouseMove = (e: MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength)
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  if (as === 'a') {
    return (
      <motion.a
        ref={ref as React.Ref<HTMLAnchorElement>}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ x: springX, y: springY }}
        className={className}
        {...(props as Omit<AnchorHTMLAttributes<HTMLAnchorElement>, ConflictingHandlers>)}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      ref={ref as React.Ref<HTMLButtonElement>}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={className}
      {...(props as Omit<ButtonHTMLAttributes<HTMLButtonElement>, ConflictingHandlers>)}
    >
      {children}
    </motion.button>
  )
}
