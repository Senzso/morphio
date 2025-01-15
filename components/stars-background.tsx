import { useEffect, useState, useRef } from 'react'
import type { ComponentType } from 'react'

interface ThreeStarsProps {
  containerRef: React.RefObject<HTMLDivElement>
}

export default function StarsBackground() {
  const [ThreeStars, setThreeStars] = useState<ComponentType<ThreeStarsProps> | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    import('./three-stars').then((module) => {
      setThreeStars(() => module.default as ComponentType<ThreeStarsProps>)
    })
  }, [])

  return (
    <div ref={containerRef} className="fixed inset-0 z-[-1]">
      {ThreeStars && <ThreeStars containerRef={containerRef} />}
    </div>
  )
}

