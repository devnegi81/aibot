"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Search, ArrowRight } from "lucide-react"

export default function PhoneDisplay() {
  const [currentTime, setCurrentTime] = useState("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const hours = now.getHours().toString().padStart(2, "0")
      const minutes = now.getMinutes().toString().padStart(2, "0")
      setCurrentTime(`${hours}:${minutes}`)
    }

    updateTime()
    const interval = setInterval(updateTime, 60000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-[300px] h-[600px]">
      {/* Hand holding the phone */}
      <div className="absolute -left-20 -bottom-10 z-0">
        <Image
          src="/placeholder.svg?height=600&width=400"
          alt="Hand holding phone"
          width={400}
          height={600}
          className="object-contain opacity-90"
        />
      </div>

      {/* Phone frame */}
      <div className="absolute inset-0 z-10 bg-black rounded-[40px] border-4 border-gray-800 overflow-hidden shadow-2xl">
        {/* Phone screen */}
        <div className="h-full w-full bg-black p-5 flex flex-col">
          {/* Greeting */}
          <div className="mt-4 mb-6">
            <p className="text-gray-400">Hi, Human👋</p>
            <h2 className="text-2xl font-bold">
              How may I help
              <br />
              you today?
            </h2>
          </div>

          {/* Search bar */}
          <div className="bg-gray-800 rounded-full px-4 py-2 flex items-center mb-6">
            <Search size={16} className="text-gray-400 mr-2" />
            <span className="text-gray-400 text-sm">Search...</span>
          </div>

          {/* Action buttons */}
          <div className="flex gap-3 mb-6">
            <div className="bg-green-500 rounded-xl p-4 flex-1">
              <p className="text-sm font-medium mb-6">Engage in conversation with AI.</p>
              <div className="flex justify-end">
                <ArrowRight size={16} />
              </div>
            </div>
            <div className="bg-gray-800 rounded-xl p-4 flex-1">
              <p className="text-sm font-medium mb-6">Converse with Artificial Intelligence.</p>
              <div className="flex justify-end">
                <ArrowRight size={16} />
              </div>
            </div>
          </div>

          {/* Conversation history */}
          <p className="text-gray-400 mb-3">Conversation History</p>

          <div className="space-y-3">
            {/* Chat item 1 */}
            <div className="bg-gray-900 rounded-xl p-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-black">
                  <span className="text-xs">GPT</span>
                </div>
                <div>
                  <p className="text-xs font-medium">My GPT</p>
                  <p className="text-xs text-gray-400">Best 2023 mobile app suggestion...</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-xs text-gray-400">22:10</span>
                <ArrowRight size={12} className="text-gray-400" />
              </div>
            </div>

            {/* Chat item 2 */}
            <div className="bg-gray-900 rounded-xl p-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-black">
                  <span className="text-xs">TJ</span>
                </div>
                <div>
                  <p className="text-xs font-medium">Thisjourney</p>
                  <p className="text-xs text-gray-400">Looking for dark UI design ideas...</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-xs text-gray-400">11:23</span>
                <ArrowRight size={12} className="text-gray-400" />
              </div>
            </div>

            {/* Chat item 3 */}
            <div className="bg-gray-900 rounded-xl p-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-black">
                  <span className="text-xs">H</span>
                </div>
                <div>
                  <p className="text-xs font-medium">HelpAI</p>
                  <p className="text-xs text-gray-400">Show AI-inspired color palettes...</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-xs text-gray-400">06:15</span>
                <ArrowRight size={12} className="text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
