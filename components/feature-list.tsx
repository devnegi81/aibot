"use client";
import { 
    NotebookPenIcon, 
    AlarmCheckIcon,
    ChartCandlestickIcon,
    ComputerIcon,
    CircleDollarSignIcon,
    TrendingUpIcon
 } from "lucide-react"


export default function FeatureList() {
    return <div className="container px-[100px] mx-[100px] my-8 py-10">
    {/* Grid container */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Row 1, Column 1 */}
      <div className="p-6 rounded-lg shadow-md ">
        <CircleDollarSignIcon size={30} />
        <h3 className="pt-5 text-2xl font-bold  mb-3">Smart Crypto Trading Signals</h3>
        <p className="">
        Get real-time trends, crypto signals, and multi-sector research—all powered by cutting-edge AI.
        </p>
      </div>

      {/* Row 1, Column 2 */}
      <div className="p-6 rounded-lg shadow-md ">
        <TrendingUpIcon size={30} />
        <h3 className="pt-5 text-2xl font-bold mb-3">Track Trends, Beat the Market</h3>
        <p className="">
        Stay updated on the latest developments across finance, tech, and emerging sectors.
        </p>
      </div>
  
      {/* Row 2, Column 1 */}
      <div className="p-6 rounded-lg shadow-md ">
        <NotebookPenIcon size={30} />
        <h3 className="pt-5 text-2xl font-bold mb-3">Personalized Research Assistant</h3>
        <p className="">
        Your AI bot curates news, tracks your watchlist, and delivers actionable insights.
        </p>
      </div>
  
      {/* Row 2, Column 2 */}
      <div className="p-6 rounded-lg shadow-md ">
        <ComputerIcon size={30} />
        <h3 className="pt-5 text-2xl font-bold mb-3">Next-Gen Investment Research</h3>
        <p className="">
        From crypto to stocks, get AI-driven analysis to make informed decisions faster.
        </p>
      </div>
  
      {/* Row 3, Column 1 */}
      <div className=" p-6 rounded-lg shadow-md  ">
        <ChartCandlestickIcon size={30} />
        <h3 className="pt-5 text-2xl font-bold  mb-3">Automated Insights, Smarter Trades</h3>
        <p className="">
        Let AI scan markets, detect trends, and provide high-probability trading signals.
        </p>
      </div>
  
      {/* Row 3, Column 2 */}
      <div className="p-6 rounded-lg shadow-md  ">
        <AlarmCheckIcon size={30} />
        <h3 className="pt-5 text-2xl font-bold mb-3">Your 24/7 Market Analyst</h3>
        <p className="">
        Never miss an opportunity with AI tracking news, trends, and price movements.
        </p>
      </div>
    </div>
  </div>
}