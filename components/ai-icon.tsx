"use client"

import { useEffect, useState } from "react"

export default function AiIcon() {
  const [glowIntensity, setGlowIntensity] = useState(0.8)

  useEffect(() => {
    // Create a subtle pulsing effect for the glow
    const interval = setInterval(() => {
      setGlowIntensity((prev) => {
        const newValue = prev + (Math.random() * 0.1 - 0.05)
        return Math.max(0.7, Math.min(1, newValue))
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-32 h-32 flex items-center justify-center">
      {/* Glow effect */}
      <div
        className="absolute inset-0 rounded-[28px] bg-green-500 blur-xl opacity-70"
        style={{ opacity: glowIntensity * 0.7 }}
      />

      {/* App icon */}
      <div className="relative z-10 w-24 h-24 bg-black rounded-[20px] flex items-center justify-center border border-green-500/30 shadow-lg">
        <span className="text-green-500 font-bold text-4xl">AI</span>
      </div>
    </div>
  )
}
