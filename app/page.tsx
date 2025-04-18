import { MessageSquare, DiamondPlus } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AiIcon from "@/components/ai-icon"

export default function Home() {
  return (
    <main className="min-h-screen text-white overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <Navbar />

        {/* Hero Section */}
        
        <HeroSection />
        {/* Features Section */}
        <div className="py-24 flex flex-col items-center text-center">
          <AiIcon />

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mt-12 mb-6 max-w-5xl mx-auto">
            <span className="text-green-500">AI-Powered</span>
            <br />
            <span className="bg-gradient-to-r from-green-500 via-teal-400 to-cyan-400 text-transparent bg-clip-text">
            Market Intelligence
            </span>
          </h2>

          <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-3xl">
          Our AI bot analyze real-time data across sectors to deliver crypto signals, trend forecasts, and personalized research—helping 
          you invest with precision.
          </p>

          <Button
            size="lg"
            variant="outline"
            className="rounded-full border-gray-700 hover:bg-gray-800 px-8 py-6 text-lg gap-3"
          >
            <DiamondPlus size={20} />
            Be the First to try it
          </Button>
        </div>
      </div>

      {/* Floating action buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-20">
        <Button className="bg-green-500 hover:bg-green-600 text-white rounded-full px-6">Know More</Button>
        <div className="bg-white text-black rounded-full p-3 shadow-lg flex items-center gap-2">
          <span>Chat with us</span>
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
            <MessageSquare size={16} />
          </div>
        </div>
      </div>
    </main>
  )
}
