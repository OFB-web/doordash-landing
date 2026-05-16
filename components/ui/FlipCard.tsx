'use client'

import { ReactNode } from 'react'

interface Props {
  front: ReactNode
  back: ReactNode
  height?: string
}

export default function FlipCard({ front, back, height = '300px' }: Props) {
  return (
    <div className="flip-card-wrap w-full relative" style={{ height }}>
      <div className="flip-card-inner w-full h-full relative">
        <div className="flip-card-front w-full h-full absolute inset-0">{front}</div>
        <div className="flip-card-back w-full h-full absolute inset-0">{back}</div>
      </div>
    </div>
  )
}
