'use client'

import React, { useEffect, useRef } from 'react'

export function CursorEffect() {
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`
      cursor.style.top = `${e.clientY}px`
    }

    window.addEventListener('mousemove', moveCursor)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className="fixed w-6 h-6 rounded-full border-2 border-white pointer-events-none z-50 transition-transform duration-100 ease-out"
      style={{ transform: 'translate(-50%, -50%)' }}
    />
  )
}

