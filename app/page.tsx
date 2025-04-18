import { MessageSquare, DiamondPlus } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Divider from "@/components/divider"
import HeroSection from "@/components/hero-section"
import MarketIntleignace from "@/components/market-intelligence"
import AutomatedInsights from "@/components/automated-insights"
import FeatureList from "@/components/feature-list"
import AcademySection from "@/components/academy-section"

export default function Home() {
  return (
    <main className="min-h-screen">
       <div className="px-20">
        <Navbar />
       </div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Section */}
        
        <HeroSection />
        <Divider />
        {/* Features Section */}
        <MarketIntleignace />
        <Divider />
        <AutomatedInsights />
        <Divider />
        <FeatureList />
        <Divider />
        <AcademySection />
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
