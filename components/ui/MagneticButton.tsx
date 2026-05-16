'use client'

import { useRef, ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  onClick?: () => void
  href?: string
  strength?: number
}

export default function MagneticButton({ children, className = '', onClick, href, strength = 0.35 }: Props) {
  const btnRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLSpanElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const btn = btnRef.current
    const inner = innerRef.current
    if (!btn || !inner) return
    const rect = btn.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    btn.style.transform = `translate(${x * strength}px, ${y * strength}px)`
    inner.style.transform = `translate(${x * strength * 0.4}px, ${y * strength * 0.4}px)`
  }

  const handleMouseLeave = () => {
    const btn = btnRef.current
    const inner = innerRef.current
    if (!btn || !inner) return
    btn.style.transform = 'translate(0, 0)'
    inner.style.transform = 'translate(0, 0)'
  }

  const content = (
    <div
      ref={btnRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`magnetic inline-block transition-transform duration-300 ease-out ${className}`}
      style={{ willChange: 'transform' }}
    >
      <span ref={innerRef} className="block transition-transform duration-300 ease-out">
        {children}
      </span>
    </div>
  )

  if (href) {
    return <a href={href}>{content}</a>
  }
  return content
}
