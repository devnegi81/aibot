import { MessageSquare, DiamondPlus } from "lucide-react"
import { Button } from "@/components/ui/button"
import AiIcon from "@/components/ai-icon"
export default function MaketIntelligence() {

    return (
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
    );
}