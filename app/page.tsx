'use client'

import { useState } from 'react'
import Background from '../components/background'
import Terminal from '../components/terminal'
import EnterButton from '../components/enter-button'
import IconRefresher from '../components/IconRefresher'
import StarsBackground from '../components/stars-background'



export default function Home() {
  const [showTerminal, setShowTerminal] = useState(false)

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 relative">
        <div className="fixed top-4 right-4 z-50 flex items-center gap-4">
        <a 
          href="https://x.com/Morpholution" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white hover:text-[#e8f9ff] transition-colors"
        >
          [twitter]
        </a>
        <a 
          href="https://pump.fun" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white hover:text-[#e8f9ff] transition-colors"
        >
          [buy here]
        </a>
      </div>
      <IconRefresher />
      <div 
        onClick={() => !showTerminal && window.open('https://x.com/Morpholution', '_blank')}
        className={`relative w-[80vw] h-[80vh] ${!showTerminal ? 'cursor-pointer' : ''}`}
      >
        <Background fadeOut={showTerminal} />
      </div>
      <div className="fixed inset-0 z-10">
        <StarsBackground />
      </div>
      <div className="flex flex-col items-center space-y-8 z-20">
        {!showTerminal && (
          <div className="flex space-x-4">
            <EnterButton onClick={() => setShowTerminal(true)} />
          </div>
        )}
      </div>
      {showTerminal && <Terminal onClose={() => setShowTerminal(false)} />}
    </main>
  )
}

