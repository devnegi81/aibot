"use client"

import { useState } from "react"
import Link from "next/link"
import { Download, Menu, X, DiamondPlus } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="py-6 relative z-20">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-xl font-semibold">
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
            <span className="text-black">H</span>
          </div>
          <span>HypeAI</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            <Link href="#features" className="text-gray-300 hover:text-white transition-colors">
              Features
            </Link>
            <Link href="#testimonials" className="text-gray-300 hover:text-white transition-colors">
              Raodmap
            </Link>
            <Link href="#pricing" className="text-gray-300 hover:text-white transition-colors">
              Team
            </Link>
          </div>

          <Button variant="outline" className="border-gray-700 text-white gap-2 rounded-full">
            <DiamondPlus size={16} />
            Join The Waitlist
          </Button>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-gray-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm p-4 rounded-lg mt-2 border border-gray-800">
          <div className="flex flex-col gap-4 py-2">
            <Link
              href="#about"
              className="text-gray-300 hover:text-white transition-colors p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#features"
              className="text-gray-300 hover:text-white transition-colors p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#testimonials"
              className="text-gray-300 hover:text-white transition-colors p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="#pricing"
              className="text-gray-300 hover:text-white transition-colors p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Button variant="outline" className="border-gray-700 text-white gap-2 w-full justify-center rounded-full">
              <Download size={16} />
              Get This Template Free
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
